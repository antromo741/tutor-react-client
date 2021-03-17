import React, { Component } from "react";

export default class GroupsIndexContainer extends Component {
    state = {
        groups: [],
        loading: true,
    };

    render() {
        return (
            <section className="max-w-6xl mx-auto mt-16">
                {this.state.loading ? (
                    "loading spinner"
                ) : (
                    '<GroupsList groups={this.state.groups} />'
                )}
            </section>
        );
    }
}