import PropTypes from 'prop-types';

const End = (props) => {
  return (
    <div className="end">
      <p>Game Over. Time spent: {props.time} ms</p>
    </div>
  );
};

End.propTypes = {
  time: PropTypes.number.isRequired,
};

export default End;
