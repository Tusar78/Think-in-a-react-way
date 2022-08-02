import withCounter from "../HOC/withCounter";

const HoverContainer = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <h2 onMouseOver={incrementCount}>Hover Count {count}</h2>
    </div>
  )
};

export default withCounter(HoverContainer);
