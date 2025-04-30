import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
// other imports...

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All"); // Add this line
  
  // rest of your component code
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      {/* rest of your JSX */}
    </div>
  );
}
