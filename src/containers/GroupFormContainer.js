import React, { Component } from "react";

export default class GroupFormContainer extends Component {
    state = {
        name: "",
    };

    render() {
        return (
            <form className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6">
                <h1 className="text-center text-3xl font-semibold mb-2">New Group</h1>
                <fieldset>
                    <input
                        type="text"
                        name="name"
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