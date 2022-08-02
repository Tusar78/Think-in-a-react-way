import withCounter from '../HOC/withCounter';
const ClickContainer = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <button onClick={incrementCount}>Increased {count} Count</button>
    </div>
  )
};

export default withCounter(ClickContainer)