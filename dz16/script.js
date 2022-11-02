const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';
const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_BTN_CLASS = 'edit-btn';
const INVALID_INPUT_CLASS = 'invalid-input';
const CONTACT_ITEM_CLASS = '.contact-item';

const contactTemplate = document.querySelector('#contactTemplate').innerHTML;
const contactsListEl = document.querySelector('#contactsList');
const idEl = document.querySelector('#id');
const nameEl = document.querySelector('#name');
const surnameEl = document.querySelector('#surname');
const emailEl = document.querySelector('#email');
const addBtnEl = document.querySelector('#addContactBtn');
const tableFooter = document.querySelector('#footer');
const formRowEl = document.querySelector('#formTr');

addBtnEl.addEventListener('click', onAddContactBtnClick);
contactsListEl.addEventListener('click', onContactsListClick);

nameEl.addEventListener('input', onInputInput);
surnameEl.addEventListener('input', onInputInput);
emailEl.addEventListener('input', onInputInput);

const contactsApi = new RestApi(API_URL);
let list = [];

init();

function onInputInput(e) {
    validateInput(e.target);
}

function onContactsListClick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        const contactId = getContactId(e.target);
        deleteContact(contactId);
    }
    if (e.target.classList.contains(EDIT_BTN_CLASS)) {
        const contactId = getContactId(e.target);
        const tr = e.target.closest(CONTACT_ITEM_CLASS);
        tr.classList.add('hidden');
        tr.insertAdjacentElement('afterend', formRowEl);

        editContact(contactId);
    }
}

function onAddContactBtnClick() {
    if (!validateValues()) {
        return;
    }

    const newContact = getValues();

    saveContact(newContact);
    resetForm();
}

function init() {
    fetchContacts();
}

function fetchContacts() {
    contactsApi.getList().then((data) => {
        list = data;
        renderContacts(list);
    });
}

function renderContacts(list) {
    contactsListEl.innerHTML = '';
    list.forEach(renderContact);
}

function renderContact(contact) {
    const contactHtml = getContactHtml(contact);

    contactsListEl.insertAdjacentHTML('beforeend', contactHtml);
}

function getContactHtml({ id, name, surname, email }) {
    return contactTemplate
        .replaceAll('{{id}}', id)
        .replaceAll('{{name}}', name)
        .replaceAll('{{surname}}', surname)
        .replaceAll('{{email}}', email);
}

function getValues() {
    return {
        id: idEl.value,
        name: nameEl.value,
        surname: surnameEl.value,
        email: emailEl.value,
    };
}

function saveContact(contact) {
    if (!contact.id) {
        addContact(contact);
    } else {
        updateContact(contact);
    }
}

function addContact(contact) {
    delete contact.id;

    contactsApi.create(contact).then((data) => {
        list.push(data);

        renderContacts(list);
    });
}

function updateContact(contact) {
    contactsApi.update(contact).then((data) => {
        list = list.map((item) => (item.id !== data.id ? item : data));

        renderContacts(list);
    });
}

function resetForm() {
    idEl.value = '';
    nameEl.value = '';
    surnameEl.value = '';
    emailEl.value = '';

    tableFooter.append(formRowEl);
}

function fillForm({ id, name, surname, email }) {
    idEl.value = id;
    nameEl.value = name;
    surnameEl.value = surname;
    emailEl.value = email;
}

function validateValues() {
    const elements = [nameEl, surnameEl, emailEl];

    const validationResults = elements.map(validateInput);

    return validationResults.reduce(
        (isValid, isElemValid) => isValid && isElemValid
    );
}

function validateInput(input) {
    resetInputValidation(input);

    if (input.value === '') {
        input.classList.add(INVALID_INPUT_CLASS);
        return false;
    }

    return true;
}

function resetInputValidation(input) {
    input.classList.remove(INVALID_INPUT_CLASS);
}

function deleteContact(id) {
    contactsApi.delete(id).then(() => {
        list = list.filter((item) => item.id !== id);

        renderContacts(list);
    });
}

function getContactId(elem) {
    return elem.closest(CONTACT_ITEM_CLASS).dataset.contactId;
}

function editContact(id) {
    currentId = id;
    const contact = list.find((item) => item.id === id);

    fillForm(contact);
}
