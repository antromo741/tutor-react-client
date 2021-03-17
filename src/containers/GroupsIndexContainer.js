import React, { Component } from "react";
import GroupsList from "../components/GroupsList";

export default class GroupsIndexContainer extends Component {
    state = {
        groups: [],
        loading: true,
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                groups: [
                    { name: "Calc 1" },
                    { name: "Physics 1" },
                ],
                loading: false,
            });
        }, 1000);
    }

    render() {
        return (
            <section className="max-w-6xl mx-auto mt-16">
                {this.state.loading ? (
                    "loading spinner"
                ) : (
                    <GroupsList groups={this.state.groups} />
                )}
            </section>
        );
    }
}