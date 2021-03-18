import React, { Component } from "react";

export default class NewSessionContainer extends Component {
    handleSubmit= (e) => {
        e.prsessionDefault();
        const form = e.target;
        const body = new FormData();
        body.append('session[name]', form.name.value);
        body.append('session[description]', form.description.value);
        body.append('session[start_time]', form.start_time.value);
        body.append('session[end_time]', form.end_time.value);
        body.append('session[location]', form.location.value);
        body.append('session[poster]', form.poster.files[0], form.poster.value);
        body.append("session[group_id]", this.props.match.params.groupId);
        
        fetch("http://localhost:3001/sessions", {
            method: "post",
            body,
        })
            .then((res) => res.json())
            .then((sssionJson) => {
                console.log(sessionJson);
            });
    };
    

    render() {
        return (
        <form className="max-w-4xl w-11/12 mx-auto mt-16 shadow-lg px-8 py-6">
            <h1 className="text-3xl text-center font-semibold mb-8">New Session</h1>
            <fieldset className="">
                <label for="name" className="block uppercase">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border-2 p-4 my-4"
                />
            </fieldset>

            <fieldset className="">
                <label for="description" className="block uppercase">Description</label>
                <textarea
                    className="w-full border-2 p-4 my-4"
                    name="description"
                    id="description"
                ></textarea>
            </fieldset>
            
            <fieldset className="">
                <label for="start_time" className="block uppercase">Start Time</label>
                <input
                    type="datetime-local"
                    name="start_time"
                    id="start_time"
                    className="w-full border-2 p-4 my-4"
                />
            </fieldset>
            
            <fieldset className="">
                <label for="end_time" className="block uppercase">End Time</label>
                <input
                    type="datetime-local"
                    name="end_time"
                    id="end_time"
                    className="w-full border-2 p-4 my-4"
                />
            </fieldset>
            
            <fieldset className="">
                <label className="block uppercase">Location</label>
                <input
                    type="text"
                    name="location"
                    id="location"
                    className="w-full border-2 p-4 my-4"
                />
            </fieldset>
            
            <fieldset className="">
                <label className="block uppercase">Poster</label>
                <input type="file" className="w-full my-4" />
            </fieldset>
            
            <button
                type="submit"
                className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200">
                    Add Session 
            </button>
        </form>
    );
    }
    }