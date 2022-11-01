import React, { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";
import { categories } from "./CategoryList";

function Categories() {
  return (
    <div className="flex flex-col items-center justify-between text-xs max-w-5xl">
      <div className="transition-all flex flex-row items-baseline flex-wrap justify-center">
        {categories.map((item) => (
          <CategoryItem
            key={item.id}
            name={item.rus}
            icon={item.pic}
            activeIcon={item.activePic}
            types={item.types}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
