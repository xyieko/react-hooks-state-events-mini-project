import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1]);

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === "") return; // Prevent submission if empty
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(categories[1]);
  }

  const categoryOptions = categories
    .filter((cat) => cat !== "All")
    .map((cat) => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ));

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-text">Details</label>
      <input
        type="text"
        id="task-text"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task details"
      />

      <label htmlFor="task-category">Category</label>
      <select
        id="task-category"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categoryOptions}
      </select>

      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
 
