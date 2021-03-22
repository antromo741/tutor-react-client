import React, { Component } from "react";
import GroupsList from "../components/GroupsList";
import { connect } from 'react-redux'
import { fetchGroups } from '../actions/groups'

class GroupsIndexContainer extends Component {
    state = {
        groups: [],
        loading: true,
    };

    componentDidMount() {
        fetch('http://localhost:3001/groups',{
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }

    })
    .then( res => res.json())
    .then(groupsJson => {
        console.log('groups', groupsJson)
        this.setState({
            groups: groupsJson,
            loading: false
        })
    })
    }


    render() {
        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
                {this.state.loading ? 'loading spinner' : <GroupsList groups={this.state.groups} />}
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect( mapStateToProps, mapDispatchToProps )( GroupsIndexContainer )