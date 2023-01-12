import api from '../../api';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    list: [],
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        deleteTodo: (state, { payload }) => {
            state.list = state.list.filter(({ id }) => id !== payload);
        },
        pushTodo: (state, { payload }) => {
            state.list.push(payload);
        },
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        setTodos: (state, { payload }) => {
            state.list = payload;
        },
        updateTodo: (state, { payload }) => {
            state.list = state.list.map((item) =>
                item.id === payload.id ? payload : item
            );
        },
    },
});

export const { pushTodo, setIsLoading, setTodos, updateTodo } =
    todosSlice.actions;

export default todosSlice.reducer;

export const deleteTodo = (id) => (dispatch) => {
    api.delete('todos/' + id).then(() =>
        dispatch(todosSlice.actions.deleteTodo(id))
    );
};

export const createTodo = (newTodo) => (dispatch) => {
    api.post('todos', {
        ...newTodo,
        isDone: false,
    }).then(({ data }) => dispatch(todosSlice.actions.pushTodo(data)));
};

export const getTodos = () => (dispatch) => {
    dispatch(setIsLoading(true));
    api.get('todos').then(({ data }) => {
        dispatch(setTodos(data));
        dispatch(setIsLoading(false));
    });
};

export const toggleTodo = (id) => (dispatch, getState) => {
    const todo = getState().todos.list.find((item) => id === item.id);

    api.put('todos/' + id, {
        ...todo,
        isDone: !todo.isDone,
    }).then(({ data }) => dispatch(updateTodo(data)));
};

export function selectList({ filters: { byStatus, query }, todos: { list } }) {
    let filteredList = list;
    switch (byStatus) {
        case 'done':
            filteredList = list.filter((item) => item.isDone);
            break;
        case 'todo':
            filteredList = list.filter((item) => !item.isDone);
            break;
    }

    return filteredList.filter(
        (item) => item.title.toLowerCase().indexOf(query.toLowerCase()) >= 0
    );
}
export function selectIsLoading({ todos: { isLoading } }) {
    return isLoading;
}
