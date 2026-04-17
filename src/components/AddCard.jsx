import { useState } from "react";

const AddCard = ({ addCard }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    addCard(text);
    setText("");
  };

  return (
    <div>
      <input
        className="form-control my-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button className="btn btn-primary w-100" onClick={handleAdd}>
        Agregar
      </button>
    </div>
  );
};

export default AddCard;
