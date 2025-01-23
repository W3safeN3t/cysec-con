import React from 'react';

const CategoryButton = ({ label, category, setCategory }) => {
    return (
      <button
        onClick={() => setCategory(label.toLowerCase())}
        className={`px-2 py-2 ${category === label.toLowerCase() ? 'border-b border-black text-black font-semibold' : ''} transition`}
      >
        {label}
      </button>
    );
  };

const CategoryTabs = ({ category, setCategory }) => {
  return (
    <div className="flex justify-start space-x-5 mb-8">
      {/* Use CategoryButton for each category */}
      <CategoryButton label="All" category={category} setCategory={setCategory} />
      <CategoryButton label="Tech" category={category} setCategory={setCategory} />
      <CategoryButton label="Finance" category={category} setCategory={setCategory} />
    </div>
  );
};

export default CategoryTabs;
