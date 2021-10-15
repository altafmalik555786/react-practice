import { useEffect, useState } from "react";
function FormInvoiceSingle({ data, updateRowInTable, index }) {
  const [area, setArea] = useState(data.area || ' ');
  useEffect(() => {
    updateRowInTable({...data,area:area}, index);
  }, [area])
  return (
    <div className="main-invoice" >
      <div className="head-input">
        <div>
          <b>
            <label htmlFor="name">Product Name</label>
          </b>
          <input type="text" name="name" readOnly value={data.name} />
        </div>

        <div className="head-input-right">
          <label>Product Description</label>
          <input type="text" readOnly value={data.description} />
        </div>
      </div>

      <div className="footer-input">
        <div>
          <label>ProductQauntity</label>
          <input type="text" readOnly value={data.quantity} />
        </div>

        <div>
          <label>Product Price</label>
          <input type="text" readOnly value={data.price} />
        </div>

        <div>
          <label>Product Sub-Total</label>
          <input type="text" readOnly value={data.price * data.quantity} />
        </div>
      </div>
      <div className="remarks">
        <label>Product Remarks</label>
        <br />
        <textarea value={data.area}  onChange={(e) => setArea(e.target.value)} ></textarea>
      </div>
    </div>
  );
}

export default FormInvoiceSingle;
