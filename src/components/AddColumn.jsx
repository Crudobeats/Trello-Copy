import { useState } from "react";

const AddColumn = ({ addColumn }) => {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return;
    addColumn(title);
    setTitle("");
  };

  return (
    <div style={{ minWidth: "250px" }}>
      <input
        className="form-control mb-2"
        placeholder="Nueva lista"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="btn btn-success w-100" onClick={handleAdd}>
        Crear lista
      </button>
    </div>
  );
};

export default AddColumn;
