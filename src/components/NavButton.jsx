import React, { Component } from "react";
import Button from '@mui/material/Button';

class NavButton extends Component {
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
                <Button
                    onClick={this.onSelection}
                    className={this.state.selected === true ? 'bolded' : ''}>
                        {this.state.name}
                </Button>
            </div>
            );
    }
}

export default NavButton;