export const Reducer = (state, action) => {

    switch (action.type) {

        case "INCREMENT":
            return { ...state, count: state.count++ };

        case "DECREMENT":
            return { ...state, count: state.count-- };

        case "INCREMENTBY5":
            return { ...state, count: state.count + action.payload };

        case "DECREMENTBY5":
            return { ...state, count: state.count - action.payload };

        default:
            return state;
    }
}

export default Reducer