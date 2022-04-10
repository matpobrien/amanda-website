import React, { Component } from "react";
import NavButton from "./NavButton";

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    setDisplay =(childSection) => {
        this.props.parentCallback(childSection)
    };

    render() {
        return (
            <div className="navigation">
                <NavButton
                    parentCallback={this.setDisplay}
                    name='About'
                    selected={this.props.currentDisplay}
                />
                <NavButton
                    parentCallback={this.setDisplay}
                    name='Coaching'
                    selected={this.props.currentDisplay}
                />
                <NavButton
                    parentCallback={this.setDisplay}
                    name='FAQ'
                    selected={this.props.currentDisplay}
                />
                <NavButton
                    parentCallback={this.setDisplay}
                    name='Contact'
                    selected={this.props.currentDisplay}
                />
            </div>
            );
    }
}

export default Navigation