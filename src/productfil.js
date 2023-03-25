import React, { useState } from "react";
import "./styles/productfil.css";
import { products } from "./Helper/products";
import { Categories } from "./Helper/categories";

function Productfilter({ message }) {
  const [search, setSearch] = useState(products);
  const [subCategory, setSubCategory] = useState([]);
  const [cat, setCat] = useState();

  let check = message && message.toString().toLowerCase();
  React.useEffect(() => {
    if (cat && message) {
      let result = products.filter((item) => {
        return (
          item.category.toLowerCase() === cat.toLowerCase() &&
          item.name.toLowerCase().includes(check)
        );
      });
      setSearch(result);
    } else if (cat) {
      let result = products.filter((item) => {
        return item.category.toLowerCase() === cat.toLowerCase();
      });
      setSearch(result);
    } else {
      let result = products.filter((item) => {
        return item.name.toLowerCase().includes(check);
      });
      setSearch(result);
    }
  }, [message, cat]);

  const handleFilter = (e) => {
    let value = e.target.value;
    const result = Categories.filter((res) => {
      return res.catName === value;
    });
    setCat(value);
    setSubCategory(result[0].subcat);
  };

  return (
    <div>
      <div className="w-screen flex items-center justify-around">
        <div className="flex  space-x-10">
          <select
            className="select w-[25vw] "
            onChange={(e) => handleFilter(e)}
          >
            <option disabled selected>
              Categories
            </option>
            {Categories.map((res) => {
              return (
                <option className="text-black" value={res.catName}>
                  {res.catName}
                </option>
              );
            })}
          </select>
          <select className="select w-[25vw]">
            <option disabled selected>
              Sub Categories
            </option>
            {subCategory.map((res) => {
              return <option value={res.name}>{res.name}</option>;
            })}
          </select>
          <div
            onClick={() => {
              setCat();
              setSubCategory([]);
            }}
            className="pt-2 text-2xl"
          >
            clear
          </div>
        </div>
      </div>
      <div className="product_filter">
        {search.length <= 0 ? (
          <img src="../assets/notfound.gif" alt="not found" width="700px" />
        ) : (
          search.map((product) => {
            return (
              <div className="card w-[350px] h-[350px] bg-base-100 shadow-xl text-center">
                <figure>
                  <img
                    src={product.imagesrc}
                    alt="Products"
                    className="pt-16 w-64"
                  />
                </figure>
                <div className="card-body ">
                  <h2 className="card-title text-2xl m-auto">{product.name}</h2>
                  <p className="text-xl text-slate-500">Price{product.price}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Productfilter;
