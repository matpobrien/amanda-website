import React, { Component } from "react";

class NavButton extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        name: this.props.name,
        selected: this.props.selected
    }
    onSelection = (event) => {
        event.preventDefault();
        this.props.parentCallback(this.props.name);
     };
    render() {
        return (
            <div className="navButton">
                <button
                    onClick={this.onSelection}
                    className={this.state.selected === true ? 'bolded' : ''}>
                        {this.state.name}
                </button>
            </div>
            );
    }
}

export default NavButton;