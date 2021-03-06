import React, { Component } from "react";
import { connect } from "react-redux";
import {createSession} from "../actions/sessions"

//When we click on a subject and then click add new lesson we will end up on this component

class NewSessionContainer extends Component {
    state = {
        errors: {}
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData();
        formData.append('session[name]', form.name.value);
        formData.append('session[description]', form.description.value);
        formData.append('session[start_time]', form.start_time.value);
        formData.append('session[end_time]', form.end_time.value);
        formData.append('session[location]', form.location.value);
        form.poster.files[0] && formData.append('session[poster]', form.poster.files[0], form.poster.value);
        form.video.files[0] && formData.append('session[video]', form.video.files[0], form.video.value);
        //Video unfortunatly does not render properly when its not hard coded
        formData.append("session[group_id]", this.props.match.params.groupId);

       
       
        
      this.props.dispatchCreateSession(formData)
            .then((sessionJson) => {
                this.props.history.push(`/groups/${this.props.match.params.groupId}`);
            })
            .catch(errors => {
                this.setState({errors})
            })
        }

    render() {
        return (
        <form className="max-w-4xl w-11/12 mx-auto mt-16 shadow-lg px-8 py-6" 
        onSubmit={this.handleSubmit}>
            <h1 className="text-3xl text-center font-semibold mb-8">New Lesson</h1>
            <fieldset className="">
                <label htmlFor="name" className="block uppercase">
                Title{" "}
                <span className="text-red-400">{this.state.errors.name}</span>
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className={`w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4 ${this.state.errors.name && 
                        "focus:ring-red-400 border-red-400"
                    }`}
                />
            </fieldset>

                <fieldset className="">
                    <label htmlFor="description" className="block uppercase">
                        Description{" "}
                        <span className="text-red-400">
                            {this.state.errors.description}
                        </span>
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        className={`w-full border-2 p-4 my-4 focus:outline-none focus:ring-2 ${this.state.errors.description &&
                            "focus:ring-red-400 border-red-400"
                            }`}
                ></textarea>
            </fieldset>
            
                <fieldset className="">
                    <label htmlFor="start_time" className="block uppercase">
                        Start Time{" "}
                        <span className="text-red-400">{this.state.errors.start_time}</span>
                    </label>
                    <input
                        type="datetime-local"
                        name="start_time"
                        id="start_time"
                        className={`w-full border-2 p-4 my-4 focus:outline-none focus:ring-2 ${this.state.errors.start_time &&
                            "focus:ring-red-400 border-red-400"
                            }`}
                    />
                </fieldset>
                
                <fieldset className="">
                    <label htmlFor="end_time" className="block uppercase">
                        End Time{" "}
                        <span className="text-red-400">{this.state.errors.end_time}</span>
                    </label>
                    <input
                        type="datetime-local"
                        name="end_time"
                        id="end_time"
                        className={`w-full border-2 p-4 my-4 focus:outline-none focus:ring-2 ${this.state.errors.end_time && "focus:ring-red-400 border-red-400"
                            }`}
                    />
                </fieldset>
            
                <fieldset className="">
                    <label htmlFor="location" className="block uppercase">
                        Location{" "}
                        <span className="text-red-400">{this.state.errors.location}</span>
                    </label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        className={`w-full border-2 p-4 my-4 focus:outline-none focus:ring-2 ${this.state.errors.location && "focus:ring-red-400 border-red-400"
                            }`}
                    />
                </fieldset>
            
                <fieldset className="">
                    <label htmlFor="poster" className="block uppercase">
                        Cover Photo{" "}
                        <span className="text-red-400">{this.state.errors.poster}</span>
                    </label>
                    <input
                        type="file"
                        className="w-full my-4"
                        name="poster"
                        id="poster"
                    />
                </fieldset>

                <fieldset className="">
                    <label htmlFor="video" className="block uppercase">
                        Lesson Video{" "}
                        <span className="text-red-400">{this.state.errors.video}</span>
                    </label>
                    <input
                        type="file"
                        className="w-full my-4 border-2 p-4  focus:outline-none focus:ring-2"
                        name="video"
                        id="video"
                    />
                </fieldset>
            
            <button
                type="submit"
                className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200">
                    Add Lesson 
            </button>
        </form>
    );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCreateSession: (formData) => dispatch(createSession(formData))
    };
};

export default connect(null, mapDispatchToProps)(NewSessionContainer);
