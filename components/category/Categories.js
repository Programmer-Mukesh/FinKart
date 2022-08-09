import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = ({ categoryData }) => {
  return (
    <div className="categoriesWrapper">
      <h2 className="h2Heading">Our Products</h2>
      <div className="flexBar">
        {categoryData.length > 0 &&
          categoryData.map((category) => (
            <CategoryCard category={category} key={category.category_id} />
          ))}
      </div>
    </div>
  );
};

export default Categories;
