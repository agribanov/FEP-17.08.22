import api from '../../api';
function createAction(type) {
    return (payload) => ({ type, payload });
}

export const SET_IS_LOADING = 'SET_IS_LOADING';
export const setIsLoading = createAction(SET_IS_LOADING);

export const UPDATE_TODO = 'UPDATE_TODO';
const updateTodo = createAction(UPDATE_TODO);

export const toggleTodo = (id) => (dispatch, getState) => {
    const todo = getState().todos.list.find((item) => id === item.id);

    api.put('todos/' + id, {
        ...todo,
        isDone: !todo.isDone,
    }).then(({ data }) => dispatch(updateTodo(data)));
};

export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = (id) => (dispatch) => {
    api.delete('todos/' + id).then(() =>
        dispatch({ type: DELETE_TODO, payload: id })
    );
};

export const PUSH_TODO = 'PUSH_TODO';
export const createTodo = (newTodo) => (dispatch) => {
    api.post('todos', {
        ...newTodo,
        isDone: false,
    }).then(({ data }) => dispatch({ type: PUSH_TODO, payload: data }));
};

export const SET_TODOS = 'SET_TODOS';
export function setTodos(payload) {
    return { type: SET_TODOS, payload };
}

export const getTodos = () => (dispatch) => {
    dispatch(setIsLoading(true));
    api.get('todos').then(({ data }) => {
        dispatch(setTodos(data));
        dispatch(setIsLoading(false));
    });
};
