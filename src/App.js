import React, { Component } from 'react';
import './App.css';
import arepas from './img/arepas.jpg';
import arepas2 from './img/arepas2.jpg';
import arepas3 from './img/arepas3.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeSection = this.changeSection.bind(this);
    this.state = {
      section: 'tips'
    };
  }

  changeSection(section) {
    this.setState(() => {
      return {
        section
      }
    })
  }

  render() {
    return (
      <div>

        <div className="top-navbar">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12">
                <span>HOW TO EAT</span>
            </div>
          </div>
        </div>

        <div className="menu-navbar">
          <div className="row">
            <div className="buttons-3-container" onClick={() => this.changeSection('tips')}>
              <div className={`${this.state.section === 'tips' ? 'buttons-3-selected' : 'buttons-3'} text-center`}>
                <span>Tips</span>
              </div>
            </div>
            <div className="buttons-3-container" onClick={() => this.changeSection('recipes')}>
              <div className={`${this.state.section === 'recipes' ? 'buttons-3-selected' : 'buttons-3'} text-center`}>
                <span>Recipes</span>
              </div>
            </div>
            <div className="buttons-3-container" onClick={() => this.changeSection('coach')}>
              <div className={`${this.state.section === 'coach' ? 'buttons-3-selected' : 'buttons-3'} text-center`}>
                <span>Coach</span>
              </div>
            </div>
          </div>
        </div>

        {this.state.section === 'tips' && (
          <div className="container">
            <h2>Tips to improve your eating habits ✅</h2>

            <div className="tip-container">
              <h4 className="tip-title">1. First tip</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> Ut enim ad minim veniam, quis nostrud exercitation <b>ullamco laboris nisi ut aliquip ex ea commodo</b> consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            <div className="tip-container">
              <h4 className="tip-title">2. Second tip</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="tip-container">
              <h4 className="tip-title">3. Third tip</h4>
              Lorem ipsum dolor sit amet, <b>consectetur adipiscing elit</b>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

          </div>
        )}

        {this.state.section === 'recipes' && (
          <div className="container">
            <h2>Recipes 👩‍🍳 👨‍🍳</h2>
            <p>Updated at July 13, 2019</p>
            <div className="tip-container">
              <h4 className="tip-title">Crazy arepitas</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>
                <img src={arepas} className="img-container" />
              </p>
              Ut enim ad minim veniam, quis nostrud exercitation <b>ullamco laboris nisi ut aliquip ex ea commodo</b> consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            <div className="tip-container">
              <h4 className="tip-title">Super arepas</h4>
              <p>
                <img src={arepas2} className="img-container" />
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="tip-container">
              <h4 className="tip-title">The arepation</h4>
              <p>
              Lorem ipsum dolor sit amet, <b>consectetur adipiscing elit</b>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                <img src={arepas2} className="img-container" />
              </p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

          </div>
        )}

        {this.state.section === 'coach' && (
          <div className="container">
            <h2>Coach</h2>
            <p>Do you need some help to achieve your goals? Contact now with our experts and let us to help you 💪</p>
            <div className="tip-container">
              <h4 className="tip-title">Contact now</h4>
              <form>
                <div className="form-group">
                  <label for="exampleFormControlInput1">Type your email</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">What can we do for you?</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              </form>
              <div className="buttons-3 text-center">Sumit your questions</div>
            </div>

          </div>
        )}


      </div>
    );
  }
}

export default App;
