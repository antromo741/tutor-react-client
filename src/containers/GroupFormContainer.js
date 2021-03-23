import React, { Component } from "react";
import { connect } from 'react-redux'
import { createGroup } from '../actions/groups'

class GroupFormContainer extends Component {
    state = {
        name: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatchCreateGroup(this.state).then((groupJson) => {
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6">
                <h1 className="text-center text-3xl font-semibold mb-2">New Group</h1>
                <fieldset>
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        placeholder="Name your group"
                        className="w-full border p-4 my-4"
                    />
                </fieldset>
                <button className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" type="submit">Add Group</button>
            </form>
        );
    }
}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCreateGroup: (formData) => dispatch(createGroup(formData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupFormContainer)