import './App.css';

import react, { Component } from 'react';

class App extends Component {
    state = {
        counts: 0,
        name: 'Alex',
        showGreeting: false,
    };

    onClick = () => {
        this.setState({
            counts: this.state.counts + 1,
        });
    };

    onInputChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    onToggle = () => {
        this.setState({
            showGreeting: !this.state.showGreeting,
        });
    };

    render() {
        return (
            <div>
                {this.state.showGreeting ? 'Hello, ' + this.state.name : null}
                <br />
                {this.state.counts}
                <br />
                <button onClick={this.onClick}>Click me</button>
                <br />
                <input value={this.state.name} onChange={this.onInputChange} />
                <select> </select>
                <input value={this.state.name} onChange={this.onInputChange} />
                <button onClick={this.onToggle}>Toggle Greeting</button>
            </div>
        );
    }
}

export default App;
