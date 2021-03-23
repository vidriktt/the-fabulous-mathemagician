import PropTypes from 'prop-types';

const GameWindow = (props) => {
  return (
    <div className="game-window">
      <p id="problem">{props.num1} {props.operator} {props.num2} = </p>
    </div>
  );
};

GameWindow.propTypes = {
  num1: PropTypes.number.isRequired,
  operator: PropTypes.string.isRequired,
  num2: PropTypes.number.isRequired
};

export default GameWindow;
