import React, { useContext, useEffect } from "react";
import { CatogoryForProducts } from "../../Context";

const CategoryCard = ({ category }) => {
  const { selectedCategory, setSelectedCategory } =
    useContext(CatogoryForProducts);

  useEffect(() => {
    let ele = document.getElementById(`${selectedCategory.categoryName}`);
    if (ele) {
      ele.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        inline: "center",
      });
      // window.scrollTo({
      //   top: ele.offsetTop,
      //   behavior: "smooth",
      // });
    }
  }, [selectedCategory]);

  return (
    <div
      className={
        category.category_name === selectedCategory.categoryName
          ? "category-card-wrapper activeCatogory"
          : "category-card-wrapper"
      }
      style={{
        backgroundImage: `url(${category.category_image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      onClick={() =>
        setSelectedCategory({
          categoryId: category.category_id,
          categoryName: category.category_name,
        })
      }
      id={category.category_name}
    >
      <div className="categoryName">{category.category_name}</div>
    </div>
  );
};

export default CategoryCard;
