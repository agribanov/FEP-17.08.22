class TodosController {
    #collection = null;
    #listView = null;

    constructor(container) {
        console.log(container);

        this.#listView = new TodosListView({
            onToggle: (id) => this.toggleTodo(id),
            onDelete: (id) => this.deleteTodo(id),
        });
        container.append(this.#listView.el);

        this.#collection = new TodosCollection();
        this.#collection.fetchList().then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }

    toggleTodo(id) {
        this.#collection.toggleTodo(id).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }

    deleteTodo(id) {
        this.#collection.deleteTodo(id).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }
}
