import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchGroup } from "../actions/groups";
import ReactPlayer from 'react-player'
class GroupShowContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = { count: 0 };

        
    }

    state = {
        count: 0,
        group: {},
        sessions: [],
        loading: true
    }


    componentDidMount() {
        const groupId = this.props.match.params.groupId;
        
        
        this.props.dispatchFetchGroup(groupId);
       
    }


    

    handleSubmit = () => {
        this.setState( state => ({
          count: this.state.count + 1
       
        }));
     
    }

    
    render() {
        if (this.props.loadingState !== "successful") {
            return <button class="bg-rose-600">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                </svg>
                    Processing
                </button>
        }
        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
                <h1 className="text-3xl font-bold text-center mb-8">
                    {this.props.group.name}
                </h1>
                <p className="my-2">
                    
                    <Link to={`/groups/${this.props.group.id}/sessions/new`}>
                        <button class="focus border-2 border-purple-500 hover:border-black shadow-xl
                                w-full text-2xl ease-in-out transition-all p-8 bg-blue-300 hover:bg-green-400
                                duration-200 transform hover:-translate-y-1 hover:scale-105 rounded-md mt-6">
                            Add a Lesson
                        </button>
                    </Link>
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                    {this.props.sessions.map((session) => (
                        <figure className="p-4 shadow">
                            <img
                                className="h-12"
                                alt={session.name}
                                src={session.poster_url}
                            />
                            
                            <h2>{session.name}</h2>
                            <p>{session.start_time}</p>
                            <p>{session.end_time}</p>
                            <p>{session.location}</p>
                            
                            <ReactPlayer 
                                url={'https://www.youtube.com/watch?v=fIFwzVF8GqY'}
                                //url={session.video_url}
                                //Cant seem to get the video file to work, shows up as a blank screen right now
                            height='400px'
                            width='350px'
                            />

                        <button onClick={this.handleSubmit}
                        type="submit"
                        value=""
                        >
                           {this.state.count}

                            
                        </button>

                          {/*   <button
                                type="delete"
                                className="p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200">
                                Delete Lesson
                            </button> */}
                        </figure>
                    ))}
                </div>
            </section>
        );
    }
}
const mapStateToProps = (state, { match }) => {
    const groupId = match.params.groupId
    let loadingState = state.sessions.groupsLoaded[groupId] || 'notStarted'
    return {
        group: state.groups.list.find((group) => group.id == groupId),
        sessions: state.sessions.list.filter((session) => session.group_id == groupId),
        loadingState,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchGroup: (groupId) => dispatch(fetchGroup(groupId)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(GroupShowContainer)