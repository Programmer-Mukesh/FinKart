import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { CatogoryForProducts } from "../../Context";

const Products = ({ categoryData, cartProducts }) => {
  const [productData, setProductData] = useState([]);
  const { selectedCategory, setSelectedCategory } =
    useContext(CatogoryForProducts);
  const [totalProducts, setTotalProducts] = useState(3);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getProducts = async () => {
    try {
      const apiResponse = await axios.get(
        `https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${selectedCategory.categoryId}&pageSize=${totalProducts}`
      );
      setProductData(apiResponse.data.products);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [selectedCategory, totalProducts]);

  return (
    <div className="productCardMapped">
      {productData.length > 0 &&
        productData.map((prod) => <ProductCard product={prod} key={prod.id} cartProducts={cartProducts}/>)}

      <div className="Footer">
        <div className="dropDownClass">
          <div
            className="menuForChange"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <span>Showing for</span> <b>{selectedCategory.categoryName}</b>
            <span>change</span>
          </div>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            sx={{ height: "350px" }}
          >
            {categoryData.length > 0 &&
              categoryData.map((category) => (
                <MenuItem
                  onClick={() => {
                    setSelectedCategory({
                      categoryId: category.category_id,
                      categoryName: category.category_name,
                    });
                    setAnchorEl(null);
                  }}
                  key={category.category_id}
                >
                  {category.category_name}
                </MenuItem>
              ))}
          </Menu>
        </div>
        <div>
          <div className="marginViewAllBtn hideForMobile">
            {totalProducts === 0 ? (
              <button className="viewAll" onClick={() => setTotalProducts(3)}>
                [-] View Less
              </button>
            ) : (
              <button className="viewAll" onClick={() => setTotalProducts(0)}>
                [+] View More
              </button>
            )}
          </div>
          <div className="viewAllGrid">
            {totalProducts === 0 ? (
              <button
                className="viewAllMobile"
                onClick={() => setTotalProducts(3)}
              >
                [-] View Less
              </button>
            ) : (
              <button
                className="viewAllMobile"
                onClick={() => setTotalProducts(0)}
              >
                [+] View More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
