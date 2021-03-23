import {Component} from 'react';
import PropTypes from 'prop-types';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {rounds: 3};
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.value >= 1 && event.target.value <= 20) {
      this.setState({rounds: event.target.value});
    }
  }

  onSubmit() {
    this.props.onSubmit({rounds: this.state.rounds});
  }

  render() {
    return (
      <div className="welcome-app">
        <p>Hi, this is <span id="name">Vidrik</span>&apos;s math game, choose your parameters and get to
          calculating!</p>
        <div className="input-container">
          <p id="input-text">Number of rounds:</p>
          <input
            type="number"
            id="rounds-input"
            name="rounds-input"
            min="1"
            max="20"
            value={this.state.rounds}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="button-container">
          <button className="submit-button" onClick={this.onSubmit}>START</button>
        </div>
      </div>
    );
  }
}

WelcomeScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default WelcomeScreen;
