const DEFAULT_CONFIG = {
    collapseOthers: false,
    option1: 'sadfaf',
    option2: 'sss',
};

class Accordion {
    static SELECTORS = {
        ITEM: '.accordion-item',
        TITLE: '.accordion-title',
        BODY: '.accordion-body',
    };
    static CLASSES = {
        CONTAINER: 'Super-Accordion-container',
        ITEM: 'Super-Accordion-item',
        TITLE: 'Super-Accordion-title',
        BODY: 'Super-Accordion-body',
        ACTIVE: 'Super-Accordion-active',
    };

    #el = null;
    #config = null;
    #itemsEl = null;
    #titlesEl = null;
    #activeIndex = null;

    constructor(el, config = {}) {
        this.#el = el;
        this.#config = {
            ...DEFAULT_CONFIG,
            ...config,
        };

        this.#bindClasses();
        this.#bindEventListeners();
    }

    #bindClasses() {
        this.#el.classList.add(Accordion.CLASSES.CONTAINER);

        this.#itemsEl = this.#el.querySelectorAll(Accordion.SELECTORS.ITEM);
        this.#titlesEl = this.#el.querySelectorAll(Accordion.SELECTORS.TITLE);

        this.#itemsEl.forEach((item) => {
            item.classList.add(Accordion.CLASSES.ITEM);
            item.querySelector(Accordion.SELECTORS.TITLE).classList.add(
                Accordion.CLASSES.TITLE
            );

            item.querySelector(Accordion.SELECTORS.BODY).classList.add(
                Accordion.CLASSES.BODY
            );
        });
    }

    #bindEventListeners() {
        this.#el.addEventListener('click', (e) => {
            if (e.target.classList.contains(Accordion.CLASSES.TITLE)) {
                const index = this.#findTitleIndex(e.target);
                this.toggle(index);
            }
        });
    }

    #findTitleIndex(titleEl) {
        for (let i = 0; i < this.#titlesEl.length; i++) {
            if (this.#titlesEl[i] === titleEl) {
                return i;
            }
        }

        return null;
    }

    show(index) {
        this.#activeIndex = index;
        this.#itemsEl[index].classList.add(Accordion.CLASSES.ACTIVE);
    }

    hide(index) {
        console.log('hide', index);
        this.#itemsEl[index].classList.remove(Accordion.CLASSES.ACTIVE);
        this.#activeIndex = null;
    }

    // toggle(index) {
    //     this.#itemsEl[index].classList.toggle(Accordion.CLASSES.ACTIVE);
    // }

    toggle(index) {
        const prevIndex = this.#activeIndex;

        this.#collapseOthers();

        if (prevIndex !== index) {
            this.show(index);
        } else {
            this.hide(index);
        }
    }

    #collapseOthers() {
        if (this.#config.collapseOthers && this.#activeIndex !== null) {
            this.hide(this.#activeIndex);
        }
    }
}
