import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    clickMe() {
        alert(`I'm footer`);
    }
    render() {
        return (
            <header className="app-footer">
                <span>Footer <button onClick={() => this.clickMe()}>Click Me!</button></span>
            </header>
        );
    }
}

export default Footer;
