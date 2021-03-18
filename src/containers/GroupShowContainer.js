import React, { Component } from "react";

export default class GroupShowContainer extends Component {

    componentDidMount() {
        const groupId = this.props.match.params.groupId
        fetch(`http://localhost:3001/groups/${groupId}`)
            .then(res => res.json())
            .then(groupJson => {
                console.log(groupJson);
            })
    }

    
    render() {
        return <section>GroupShowContainer</section>
    }
}