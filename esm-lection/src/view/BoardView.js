class BoardView {
    #config = null;
    $el = null;

    static SELECTORS = {
        DELETE: '.delete-note',
        NOTE: '.note',
        TEXTAREA: '.edit-note-control',
    };

    static template = `
        <div class="field row u-full-height"></div>
    `;

    static noteTemplate = `
        <div class="note" data-note-index="{{id}}" style="left: {{left}}px; top: {{top}}px; ">
            <span class="drag-note">o</span>
            <span class="delete-note">x</span>
            <textarea class="edit-note-control" name="description">{{description}}</textarea>
        </div>
    `;

    static getNoteHtml(note) {
        return interpolate(BoardView.noteTemplate, note);
    }

    static getElementId($el) {
        return '' + $el.closest(BoardView.SELECTORS.NOTE).data('noteIndex');
    }

    constructor(config) {
        this.#config = config;

        this.#initView();
    }

    #initView() {
        this.$el = $(BoardView.template);

        console.log(BoardView.SELECTORS);

        this.$el.on('click', BoardView.SELECTORS.DELETE, (e) => {
            const id = BoardView.getElementId($(e.target));

            this.delete(id);
        });

        this.$el.on('change', BoardView.SELECTORS.TEXTAREA, (e) => {
            const id = BoardView.getElementId($(e.target));

            this.changeDescription(id, e.target.value);
        });
    }

    renderList(list) {
        const $items = $(list.map(BoardView.getNoteHtml).join(''));
        $items.filter(BoardView.SELECTORS.NOTE).draggable({
            handle: '.drag-note',
            stop: (e, ui) => {
                const id = BoardView.getElementId($(e.target));

                this.#config.onUpdate(id, ui.position);
            },
        });
        this.$el.append($items);
    }

    delete(id) {
        this.#config.onDelete(id);
    }

    changeDescription(id, newValue) {
        this.#config.onUpdate(id, { description: newValue });
    }
}
