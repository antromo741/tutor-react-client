import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchGroup } from "../actions/groups";

class GroupShowContainer extends Component {
    state = {
        group: {},
        sessions: [],
        loading: true
    }


    componentDidMount() {
        const groupId = this.props.match.params.groupId;
        this.props.dispatchFetchGroup(groupId);
    }

    
    render() {
        if (this.props.loadingState !== "successful") {
            return <div>Loading Spinner</div>;
        }
        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
                <h1 className="text-3xl font-bold text-center mb-8">
                    {this.props.group.name}
                </h1>
                <p className="my-2">
                    
                    <Link to={`/groups/${this.props.group.id}/sessions/new`}>Add a session</Link></p>
                
                <div className="grid grid-cols-3">
                    {this.props.sessions.map((session) => (
                        <figure className="p-4 shadow">
                            <img
                                className=""
                                alt={session.name}
                                src={session.poster_url}
                            />
                            
                            <h2>{session.name}</h2>
                            <p>{session.start_time}</p>
                            <p>{session.end_time}</p>
                            <p>{session.location}</p>
                            
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