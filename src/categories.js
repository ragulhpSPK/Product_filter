import React from "react";
import "./styles/categories.css";
import { products } from "./Helper/products";

function Categories() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="category">
      <div className="category_list">
        <div className="category_names">
          {products.map((data) => {
            return (
              <div className="categories">
                <div className="main_category">
                  Electronic Devices
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      width="12px"
                      onClick={() => setOpen(!open)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>
                <div className={`${open ? "hidden" : "block"}`}>
                  <p>Mobile</p>
                  <p>Mobile</p>
                  <p>Mobile</p>
                  <p>Mobile</p>
                  <p>Mobile</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
