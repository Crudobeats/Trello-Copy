import Column from "./Column";
import AddColumn from "./AddColumn";
import { useBoard } from "../hooks/useBoard";

const Board = () => {
  const { columns, addColumn, addCard, deleteCard, deleteColumn } = useBoard();

  return (
    <div className="d-flex gap-3 overflow-auto">
      {columns.map((col) => (
        <Column
          key={col.id}
          column={col}
          addCard={addCard}
          deleteCard={deleteCard}
          deleteColumn={deleteColumn}
        />
      ))}

      <AddColumn addColumn={addColumn} />
    </div>
  );
};

export default Board;
