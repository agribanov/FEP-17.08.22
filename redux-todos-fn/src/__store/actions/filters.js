export const FILTER_BY_STATUS = 'FILTER_BY_STATUS';
export function filterByStatus(payload) {
    return { type: FILTER_BY_STATUS, payload };
}

export const FILTER_QUERY = 'FILTER_QUERY';
export function filterByQuery(payload) {
    return { type: FILTER_QUERY, payload };
}
