import React from "react";
import {connect} from "react-redux";
import {createPost, showAlert} from "../redux/actions";
import {Alert} from "./Alert";

 class PostForm extends React.Component {
    state = {
        title: ''
    }

    submitHandler = event => {
        event.preventDefault();

        let {title} = this.state;
        if (!title.trim()) {
            return this.props.showAlert('Post title cannot be empty');
        }

        let newPost = {
            title,
            id: Date.now().toString()
        }

        this.props.createPost(newPost);
        this.setState({title: ''});
    }

    changeInputHandler = event => {
        event.persist();
        this.setState(prev => ({...prev, ...{
                [event.target.name]: event.target.value
            }})
        )
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} className="mt-3 mb-4">

                {this.props.alert && <Alert text={this.props.alert} />}

                <div className="form-group">
                    <label htmlFor="title">Post title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler} />
                </div>
                <button className="btn btn-success" type="submit">Create</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
     createPost, showAlert
}

const mapStateToProps = state => ({
    alert: state.appReducer.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)