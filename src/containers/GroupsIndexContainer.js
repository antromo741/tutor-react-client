import React, { Component } from "react";
import GroupsList from "../components/GroupsList";
import { connect } from 'react-redux'
import { fetchGroups } from '../actions/groups'

class GroupsIndexContainer extends Component {
    componentDidMount() {
        this.props.dispatchFetchGroups()
    }

    render() {
        if (this.props.loadingState === 'notStarted') {
            return null
        }
        return (
           
            <section  className="max-w-6xl w-11/12 mx-auto mt-16"> 
                <h1 className="text-3xl text-center font-semibold mb-8">Pick a Class</h1>
                {this.props.loadingState === 'inProgress' ? (
                    'loading spinner'
                ) : (
                    
                    <GroupsList groups={this.props.groups} />
                    
                )}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        groups: state.groups.list,
        loadingState: state.groups.loadingState,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchGroups: () => dispatch(fetchGroups()),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( GroupsIndexContainer )