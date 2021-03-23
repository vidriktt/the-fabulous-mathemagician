import {Component} from 'react';

import WelcomeScreen from './WelcomeScreen';
import Game from './Game';
import End from './End';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderWelcomeScreen: true,
      gameStart: false,
      gameEnd: false,
      rounds: 0,
      time: 0
    };
  }

  handleSubmit({rounds}) {
    this.setState({renderWelcomeScreen: false, gameStart: true, rounds: parseInt(rounds)});
  }

  handleEnd({time}) {
    this.setState({gameStart: false, gameEnd: true, time: time});
  }

  render() {
    if (this.state.renderWelcomeScreen) {
      return <WelcomeScreen onSubmit={this.handleSubmit.bind(this)}/>;
    } else if (this.state.gameStart) {
      return <Game rounds={this.state.rounds} onEnd={this.handleEnd.bind(this)}/>;
    } else if (this.state.gameEnd) {
      return <End time={this.state.time}/>;
    }
  }
}

export default App;
