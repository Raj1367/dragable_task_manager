
const Reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count += 1 };

        case "DECREMENT":
            return { ...state, count: state.count -= 1 };


        case "INCREMENTBY5":
            return { ...state, count: state.count + action.payload };

        default:
            return state;
    }
}

export default Reducer