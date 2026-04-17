const CardItem = ({ card, onDelete }) => {
  return (
    <div className="card p-2 my-2">
      <span>{card.text}</span>
      <button className="btn btn-sm btn-danger mt-2" onClick={onDelete}>
        Eliminar
      </button>
    </div>
  );
};

export default CardItem;
