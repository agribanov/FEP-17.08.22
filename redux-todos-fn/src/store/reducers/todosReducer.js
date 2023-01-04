import { DELETE_TODO, TOGGLE_TODO } from '../actions/todos';

const INITIAL_STATE = {
    filter: {},
    name: 'Alex',
    list: [
        { id: 1, title: 'Item 1', isDone: false },
        { id: 2, title: 'Item 2', isDone: true },
        { id: 3, title: 'Item 3', isDone: true },
        { id: 4, title: 'Item 4', isDone: false },
    ],
};

//{ type: DELETE_TODO, payload }

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case DELETE_TODO:
            return {
                ...state,
                list: state.list.filter((item) => payload !== item.id),
            };
        case TOGGLE_TODO:
            return {
                ...state,
                list: state.list.map((item) =>
                    payload !== item.id
                        ? item
                        : { ...item, isDone: !item.isDone }
                ),
            };
        default:
            return state;
    }
}
