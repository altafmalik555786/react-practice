import React, { useState, useEffect } from "react";

function FormData() {
  const [name, setName] = useState(
    localStorage.getItem("name").split(",") || []
  );
  const [description, setDescription] = useState(
    localStorage.getItem("description").split(",") || []
  );
  const [quality, setQuality] = useState(
    localStorage.getItem("quality").split(",") || []
  );
  const [price, setPrice] = useState(
    localStorage.getItem("price").split(",") || []
  );
  const [row, setRow] = useState(
    JSON.parse(localStorage.getItem("row") || [1])
  );
  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("description", description);
    localStorage.setItem("quality", quality);
    localStorage.setItem("price", price);
    localStorage.setItem("row", row);
  }, [name, description, quality, price, row]);
  return (
    <div>
      <div className="form-icons">
        <span>
          <i className="fas fa-eye"></i>
        </span>
        <span>
          <i className="fas fa-plus-circle" onClick={() => setRow(row + 1)}></i>
        </span>
      </div>
      <div className="form-container">
        <table className="form-table">
          <thead>
            <tr>
              <th>Sr#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Sub Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(row)].map((elementsInArray, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Name"
                      value={name[index]}
                      onChange={(e) =>
                        setName((name) => {
                          console.log("name =", name);
                          let newNames = [...name];
                          newNames[index] = e.target.value;
                          return newNames;
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Description"
                      value={description[index]}
                      onChange={(e) =>
                        setDescription((description) => {
                          let newdescription = [...description];
                          newdescription[index] = e.target.value;
                          return newdescription;
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Quantity"
                      value={quality[index]}
                      onChange={(e) =>
                        setQuality((quality) => {
                          let newquality = [...quality];
                          newquality[index] = e.target.value;
                          return newquality;
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Price"
                      value={price[index]}
                      onChange={(e) =>
                        setPrice((price) => {
                          let newprice = [...price];
                          newprice[index] = e.target.value;
                          return newprice;
                        })
                      }
                    />
                  </td>
                  <td>
                    <div>{price[index] * quality[index]}</div>
                  </td>
                  <td>
                    <i
                      className="fas fa-trash-alt"
                      onClick={() => row.splice(index, 1)}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FormData;
