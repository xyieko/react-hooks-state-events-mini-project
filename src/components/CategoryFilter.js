import React from "react";

function CategoryFilter({  categories, selectedCategory, onSelectCategory }) {
  const buttons = categories.map((category) => {
    const isSelected = category === selectedCategory;

  return (
    <button
    key={category}
    className={isSelected ? "selected" : ""}
    onClick={() => onSelectCategory(category)}
    >
      {category}
    </button>
  );
});

return <div className="categories"> {buttons}</div>;
}

export default CategoryFilter;
  

    