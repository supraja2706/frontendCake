function CakeCard(props) {
  return (
    <div className="card">

      <img
        src={props.image}
        alt={props.name}
      />

      <h3>{props.name}</h3>

      <p>₹ {props.price}</p>

      <button>
        Add To Cart
      </button>

    </div>
  );
}

export default CakeCard;