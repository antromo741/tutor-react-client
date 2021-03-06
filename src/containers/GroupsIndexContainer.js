import React, { Component } from "react";
import GroupsList from "../components/GroupsList";
import { connect } from 'react-redux'
import { fetchGroups } from '../actions/groups'

//This is the first componet we render which also renders the groupList component which renders the group list item component
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
                    <button type="button" class="bg-rose-600" >
                    <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    </svg>
                    Processing
                    </button>
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