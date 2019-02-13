import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    clickMe() {
        alert(`I'm header`);
    }
    render() {
        return (
            <header className="app-header">
                <span>Header <button onClick={() => this.clickMe()}>Click Me!</button></span>
            </header>
        );
    }
}

export default Header;
