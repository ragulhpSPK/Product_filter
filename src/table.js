import React from "react";
import { products } from "./Helper/products";
import { useEffect } from "react";

function TableImage({ message }) {
  const [Tableproduts, setTableProducts] = React.useState([]);

  useEffect(() => {
    let value = message.toString().toLowerCase();

    const filtervalue = products.filter((product) => {
      return product.name.toLowerCase().includes(value);
    });
    setTableProducts(filtervalue);
  }, [message]);

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="overflow-x-auto w-[50vw]">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="text-lg">image</th>
                <th className="text-lg">Name</th>
                <th className="text-lg">Price</th>
              </tr>
            </thead>
            {Tableproduts.map((data, index) => {
              return (
                <tbody key={index} className="border-b-2 border-slate-100">
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-14 h-14">
                          <img
                            src={data.imagesrc}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="font-bold text-base">{data.name}</div>
                  </td>
                  <td>
                    <div className="text-base opacity-50 ">{data.price}</div>
                  </td>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableImage;
