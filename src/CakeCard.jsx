function CakeCard(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <p>Price: ₹{props.price}</p>
    </>
  );
}

export default CakeCard;