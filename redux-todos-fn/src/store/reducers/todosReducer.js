import {
    DELETE_TODO,
    PUSH_TODO,
    SET_IS_LOADING,
    SET_TODOS,
    UPDATE_TODO,
} from '../actions/todos';

const INITIAL_STATE = {
    filter: {},
    name: 'Alex',
    isLoading: false,
    list: [
        { id: 1, title: 'Item 1', isDone: false },
        { id: 2, title: 'Item 2', isDone: true },
        { id: 3, title: 'Item 3', isDone: true },
        { id: 4, title: 'Item 4', isDone: false },
    ],
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
        // case TOGGLE_TODO:
        //     return {
        //         ...state,
        //         list: state.list.map((item) =>
        //             payload !== item.id
        //                 ? item
        //                 : { ...item, isDone: !item.isDone }
        //         ),
        //     };
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
