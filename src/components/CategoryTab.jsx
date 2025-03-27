import React from 'react';

const CategoryButton = ({ label, category, setCategory }) => {
    return (
      <button
        onClick={() => setCategory(label.toLowerCase())}
        className={`px-2 py-2 ${category === label.toLowerCase() ? 'border-b border-black font-semibold' : ''} transition`}
      >
        {label}
      </button>
    );
  };

const CategoryTabs = ({ category, setCategory }) => {
  return (
    <div className="flex justify-start space-x-1 md:space-x-5 px-3 md:pl-8 font-normal font-FiraSans text-white">
      <CategoryButton label="All" category={category} setCategory={setCategory} />
      <CategoryButton label="Panelists" category={category} setCategory={setCategory} />
      <CategoryButton label="Village Chiefs" category={category} setCategory={setCategory} />
      <CategoryButton label="Special Guests of Honour" category={category} setCategory={setCategory} />
    </div>
  );
};

export default CategoryTabs;
