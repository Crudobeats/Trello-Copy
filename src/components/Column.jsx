import AddCard from "./AddCard";
import CardItem from "./CardItem";

const Column = ({ column, addCard, deleteCard, deleteColumn }) => {
  return (
    <div className="card p-2" style={{ minWidth: "250px" }}>
      <div className="d-flex justify-content-between align-items-center">
        <h5>{column.title}</h5>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            const confirmDelete = window.confirm(
              `¿Eliminar la lista "${column.title}"?`,
            );

            if (confirmDelete) {
              deleteColumn(column.id);
            }
          }}
        >
          X
        </button>
      </div>

      {column.cards.map((card) => (
        <CardItem
          key={card.id}
          card={card}
          onDelete={() => deleteCard(column.id, card.id)}
        />
      ))}

      <AddCard addCard={(text) => addCard(column.id, text)} />
    </div>
  );
};

export default Column;
