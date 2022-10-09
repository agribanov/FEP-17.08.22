class Tabset {
    #el = null;
    #titlesEl = null;
    #bodiesEl = null;

    constructor(el) {
        this.#el = el;

        this.#buildLayout();
        this.#bindEventListeners();
        this.show(0);
    }

    #buildLayout() {
        this.#createContainers();
        this.#moveTitles();
        this.#moveBodies();
    }

    #createContainers() {
        this.#titlesEl = document.createElement('div');
        this.#titlesEl.classList.add('tabset-titles');

        this.#bodiesEl = document.createElement('div');
        this.#bodiesEl.classList.add('tabset-bodies');

        this.#el.append(this.#titlesEl);
        this.#el.append(this.#bodiesEl);
    }

    #moveTitles() {
        const titles = this.#el.querySelectorAll('.tab-title');

        titles.forEach((titleEl) => {
            this.#titlesEl.append(titleEl);
            titleEl.classList.add('tabset-title');
        });
    }

    #moveBodies() {
        const bodies = this.#el.querySelectorAll('.tab');

        bodies.forEach((bodyEl) => {
            this.#bodiesEl.append(bodyEl);
            bodyEl.classList.add('tabset-body');
        });
    }

    #bindEventListeners() {
        this.#titlesEl.addEventListener('click', (e) => {
            if (e.target.classList.contains('tabset-title')) {
                const index = this.#findTitleIndex(e.target);

                this.show(index);
            }
        });
    }

    #findTitleIndex(titleEl) {
        for (let i = 0; i < this.#titlesEl.children.length; i++) {
            if (this.#titlesEl.children[i] === titleEl) {
                return i;
            }
        }

        return null;
    }

    show(index) {
        if (!this.#titlesEl.children[index]) {
            return;
        }

        this.#hideAll();

        this.#titlesEl.children[index].classList.add('tabset-active');
        this.#bodiesEl.children[index].classList.add('tabset-active');
    }

    #hideAll() {
        const visible = this.#el.querySelectorAll('.tabset-active');

        visible.forEach((el) => el.classList.remove('tabset-active'));
    }
}
