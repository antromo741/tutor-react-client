import React, { Component } from "react";

export default class GroupShowContainer extends Component {
    state = {
        group: {},
        sessions: [],
        loading: true
    }


    componentDidMount() {
        const groupId = this.props.match.params.groupId
        fetch(`http://localhost:3001/groups/${groupId}`)
            .then(res => res.json())
            .then(({group, sessions}) => {
                this.setState({
                    group,
                    sessions,
                    loading: false
                })
            })
    }

    
    render() {
        if (this.state.loading) {
            return <div>Loading Spinner</div>;
        }
        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
                <h1 className="text-3xl font-bold text-center">
                {this.state.group.name}
                </h1>
                <div claaName="grid grid-cols-3">
                {this.state.sessions.map((event) => (
                    <figure>
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
        )
    }



}