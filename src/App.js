import React, { Component } from 'react';
import Navigation from './components/navigation';

class App extends Component {
  state = {
    currentSection: 'About'
  }

  setSection = (childSelection) => {
    if (this.currentSection === childSelection) return;
    this.setState({currentSection: childSelection})
  }

  render () {
    const {currentSection} = this.state;
    return (
      <div className="root">
        <div className="heroImage">
          <img src="../public/download.jpeg" />
        </div>
        <p>{currentSection}</p>
        <Navigation
          parentCallback={this.setSection}
          currentDisplay={currentSection}
        />
      </div>
    );
  }
};

export default App;
