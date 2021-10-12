import { useState,useEffect } from "react";
const SingleRow = ({row,editTable,index, myCom}) => {
  const [name, setName] = useState(row.name);
  const [description, setDescription] = useState(row.description);
  const [quantity, setQuantity] = useState(row.quantity);
  const [price, setPrice] = useState(row.price);
  useEffect(() => {
    editTable('update',{name:name,description:description,quantity:quantity,price:price},index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name,price,quantity,description])
  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </td>
      <td>
        <div>{price && quantity ? price * quantity : "Not Found"}</div>
      </td>
      <td>
        <i className="fas fa-trash-alt pointer" onClick={()=>{editTable('delete',[],index);}}></i>
      </td>
    </tr>
  );
};

export default SingleRow;
