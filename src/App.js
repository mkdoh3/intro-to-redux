import React from "react";
import "./App.css";
import { connect } from "react-redux";
function App(props) {
    return (
        <div className={"App" + (props.darkMode ? " dark" : "")}>
            <button onClick={props.toggle}>Dark mode</button>
            <h3>{props.text}</h3>
            <input
                name="text"
                value={props.text}
                onChange={props.handleOnChange}
            />
            <button onClick={() => props.submit(props.text)}>Add!</button>

            <h4>{props.likes} likes</h4>
            <button onClick={props.dislike}>
                Dislike{" "}
                <span role="img" aria-label="thumbs down">
                    👎
                </span>
            </button>
            <button onClick={props.like}>
                Like
                <span role="img" aria-label="thumbs up">
                    👍
                </span>
            </button>
            {props.comments.map((thing, index) => (
                <h1 key={index}>{thing}</h1>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        likes: state.likes,
        text: state.text,
        darkMode: state.darkMode,
        comments: state.comments,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        toggle: () => dispatch({ type: "TOGGLE" }),
        like: () => dispatch({ type: "LIKE" }),
        dislike: () => dispatch({ type: "DISLIKE" }),
        submit: (text) => dispatch({ type: "SUBMIT", payload: { text } }),
        handleOnChange: (event) =>
            dispatch({ type: "FORM_CHANGE", payload: event.target }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
