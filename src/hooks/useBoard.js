import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const useBoard = () => {
  const [columns, setColumns] = useState(() => {
    const saved = localStorage.getItem("trello-columns");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("trello-columns", JSON.stringify(columns));
  }, [columns]);

  const addColumn = (title) => {
    const newColumn = {
      id: uuidv4(),
      title,
      cards: [],
    };
    setColumns([...columns, newColumn]);
  };

  const addCard = (columnId, text) => {
    const updated = columns.map((col) => {
      if (col.id === columnId) {
        return {
          ...col,
          cards: [...col.cards, { id: uuidv4(), text }],
        };
      }
      return col;
    });
    setColumns(updated);
  };

  const deleteCard = (columnId, cardId) => {
    const updated = columns.map((col) => {
      if (col.id === columnId) {
        return {
          ...col,
          cards: col.cards.filter((c) => c.id !== cardId),
        };
      }
      return col;
    });
    setColumns(updated);
  };

  const deleteColumn = (columnId) => {
    const updated = columns.filter((col) => col.id !== columnId);
    setColumns(updated);
  };

  return {
    columns,
    addColumn,
    addCard,
    deleteCard,
    deleteColumn,
  };
};
