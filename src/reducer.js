const initialState = {
    likes: 42,
    text: "",
    darkMode: false,
    comments: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIKE":
            return { ...state, likes: state.likes + 1 };

        case "DISLIKE":
            return { ...state, likes: state.likes - 1 };

        case "TOGGLE":
            return { ...state, darkMode: !state.darkMode };

        case "SUBMIT":
            return {
                ...state,
                text: "",
                comments: [action.payload.text, ...state.comments],
            };

        case "FORM_CHANGE":
            console.log("from inside", action.payload);
            return { ...state, [action.payload.name]: action.payload.value };
        default:
            return { ...state };
    }
};
