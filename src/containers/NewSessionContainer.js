import React, { Component } from "react";

export default class NewSessionContainer extends Component {
    render() {
        return (
            <form className="max-w-6xl w-3/4 mx-auto shadow">
                <fieldset className="">
                    <label className="">Name</label>
                </fieldset>
                <fieldset className="">
                    <label className="">Description</label>
                </fieldset>
                <fieldset className="">
                    <label className="">Start Time</label>
                </fieldset>
                <fieldset className="">
                    <label className="">End Time</label>
                </fieldset>
                <fieldset className="">
                    <label className="">Location</label>
                </fieldset>
                <fieldset className="">
                    <label className="">Posters</label>
                </fieldset>


            </form>
        )
    }
}