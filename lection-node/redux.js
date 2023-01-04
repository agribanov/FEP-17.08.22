// state manager

const { createStore } = require('redux');

const INITIAL_STATE = {
    name: 'Alex',
    counts: 0,
};

// ======
const INCREMENT_ACTION = 'inc';
const DECREMENT_ACTION = 'dec';
const SET_ACTION = 'set';
const ADD_ACTION = 'add';

function inc() {
    return { type: INCREMENT_ACTION };
}

function dec() {
    return { type: DECREMENT_ACTION };
}

function set(payload) {
    return { type: SET_ACTION, payload };
}

function add(payload) {
    return { type: ADD_ACTION, payload };
}

// ====

function reducer(state, { type, payload }) {
    switch (type) {
        case INCREMENT_ACTION:
            return { ...state, counts: state.counts + 1 };
        case DECREMENT_ACTION:
            return { ...state, counts: state.counts - 1 };
        case SET_ACTION:
            return { ...state, counts: payload };
        case ADD_ACTION:
            return { ...state, counts: state.counts + payload };
        default:
            return state;
    }
}

// ======

const store = createStore(reducer, INITIAL_STATE);

store.subscribe(() => {
    console.log('subscribe fired', store.getState());
});

// =====
store.dispatch(inc());
store.dispatch(set(100));
store.dispatch(add(500));
store.dispatch(add(500));
store.dispatch(add(500));
// store.dispatch({ type: 'inc' });
