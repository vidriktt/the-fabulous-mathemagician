import {Component} from 'react';
import PropTypes from 'prop-types';

import GameWindow from './GameWindow';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      operator: '',
      startTime: Date.now(),
      counter: 0
    };
    this.onEnd = this.onEnd.bind(this);
  }

  componentDidMount() {
    this.onGameMove();
  }

  handleChange(event) {
    if (event.target.value == this.state.sum) {
      this.onGameMove();
    }
  }

  async onGameMove() {
    if (this.state.counter <= this.props.rounds - 1) {
      event.target.value = '';
      await this.setState({
        num1: Math.floor(Math.random() * 10),
        num2: Math.floor(Math.random() * 10)
      });
      const oneZero = (Math.random() > 0.5) ? 1 : 0;
      if (oneZero === 1) {
        await this.setState({operator: '+'});
        await this.setState({sum: this.state.num1 + this.state.num2});
      } else {
        await this.setState({operator: '*'});
        await this.setState({sum: this.state.num1 * this.state.num2});
      }
      await this.setState({counter: this.state.counter + 1});
    } else {
      this.onEnd();
    }
  }

  onEnd() {
    const endTime = Date.now() - this.state.startTime;
    this.props.onEnd({time: endTime});
  }

  render() {
    return (
      <div className="game">
        <GameWindow num1={this.state.num1} operator={this.state.operator} num2={this.state.num2}/>
        <input id="sum" onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}

Game.propTypes = {
  rounds: PropTypes.number.isRequired,
  onEnd: PropTypes.func.isRequired
};

export default Game;
