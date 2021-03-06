import React from "react";
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/actions";
import {Loader} from "./Loader";

export default () => {
    let dispatch = useDispatch();
    let posts = useSelector(state => state.postsReducer.fetchedPosts);
    let loading = useSelector(state => state.appReducer.loading);

    if (loading) {
        return <Loader />
    }

    if (!posts.length) {
        return <button
            className="btn btn-primary"
            onClick={() => dispatch(fetchPosts())}
        >Load</button>
    }
    return posts.map(post => <Post post={post} key={post.id} />)
}