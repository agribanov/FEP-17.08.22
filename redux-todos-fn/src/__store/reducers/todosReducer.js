import {
    DELETE_TODO,
    PUSH_TODO,
    SET_IS_LOADING,
    SET_TODOS,
    UPDATE_TODO,
} from '../actions/todos';

const INITIAL_STATE = {
    isLoading: false,
    list: [],
};

//{ type: DELETE_TODO, payload }

export default function todosReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case SET_IS_LOADING:
            return { ...state, isLoading: payload };
        case DELETE_TODO:
            return {
                ...state,
                list: state.list.filter((item) => payload !== item.id),
            };
        case UPDATE_TODO:
            return {
                ...state,
                list: state.list.map((item) =>
                    item.id === payload.id ? payload : item
                ),
            };
        case PUSH_TODO:
            return {
                ...state,
                list: [...state.list, payload],
            };

        case SET_TODOS:
            return {
                ...state,
                list: payload,
            };
        default:
            return state;
    }
}
