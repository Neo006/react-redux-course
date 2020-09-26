import React from "react";

export default class PostForm extends React.Component {
    submitHandler = event => {
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} className="mt-3 mb-4">
                <div className="form-group">
                    <label htmlFor="title">Post title</label>
                    <input type="text" className="form-control" id="title" />
                </div>
                <button className="btn btn-success" type="submit">Create</button>
            </form>
        )
    }
}