import React, { Component } from 'react';

export default class Form extends Component {
    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSave({
            title: e.target.elements.newTodoName.value,
        });

        e.target.reset();
    };
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input name="newTodoName" />
                <button>Save</button>
            </form>
        );
    }
}
