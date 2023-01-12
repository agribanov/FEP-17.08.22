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
