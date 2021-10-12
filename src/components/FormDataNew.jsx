import React, { useState, useEffect } from "react";
import SingleRow from "./SingleRow";

function FormDataNew() {
  const [fakeState,setFakeState] = useState(false);
  const [table, setTable] = useState(
    JSON.parse(localStorage.getItem("table")) || []
  );
  const updateRowInTable = (data, index) => {
    console.log("update data", data);
      let tempArr = table;
      tempArr[index] = data;
      setTable([...tempArr]);
      
  };
  const deleteRowFromTable = (index) => {
    if(table.length>1){
        let tempArr = table;
        tempArr.splice(index, 1);
        setTable([...tempArr]);
        setFakeState(!fakeState);
    }
  };
  const editTable=(operation, data = null, index)=>{
        switch(operation){
            case 'delete':
                deleteRowFromTable(index)
                break
            case 'update':
                updateRowInTable(data, index)
                break
            default:
                break
        
      }
  }

  useEffect(() => {
    localStorage.setItem("table", JSON.stringify(table));
  }, [table])

 
  return (
    <div>
      <div className="form-icons">
        <span>
          <i className="fas fa-eye"></i>
        </span>
        <span>
          <i className="fas fa-plus-circle" onClick={()=>{setTable([...table,{name:'',description:'',quantity:0,price:0}]);}}></i>
        </span>
      </div>
      <div className="form-container">
        <table className="form-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Sub Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {table && table.length
              ? table.map((row,index) => <SingleRow key={index}  index={index} row={row} editTable={editTable} />)
              : <tr><td colSpan="6"> "No Data Available</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FormDataNew;
