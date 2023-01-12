import { FILTER_BY_STATUS, FILTER_QUERY } from '../actions/filters';

const INITIAL_VALUE = {
    query: '',
    byStatus: 'all',
};
export function filtersReducer(state = INITIAL_VALUE, { type, payload }) {
    switch (type) {
        case FILTER_BY_STATUS:
            return { ...state, byStatus: payload };
        case FILTER_QUERY:
            return { ...state, query: payload };
        default:
            return state;
    }
}
