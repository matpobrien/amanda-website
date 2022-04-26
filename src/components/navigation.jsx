import { ButtonGroup } from "@mui/material";
import React, { Component } from "react";
import NavButton from "./NavButton";

class Navigation extends Component {
  render() {
    const props = this.props;
    function setDisplay(childSection) {
      props.parentCallback(childSection);
    }
    return (
      <ButtonGroup className="navigation" variant="text">
        {
          (this.sectionMenu = this.props.sections.map(function(section, index) {
            return (
              <NavButton
                key={index}
                parentCallback={setDisplay}
                name={section.name}
                selected={props.currentDisplay}
              />
            );
          }))
        }
      </ButtonGroup>
    );
  }
}
export default Navigation;
