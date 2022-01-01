import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TBody from "./TBody";

function FormDataNew() {
  const [table, setTable] = useState([]);
  useEffect(() => {
    if(localStorage.getItem("table")){
      setTable(JSON.parse(localStorage.getItem("table")));
    }
  }, [])
  const updateRowInTable = (data, index) => {
      let tempArr = table;
      tempArr[index] = data;
      setTable([...tempArr]);
  };
  const deleteRowFromTable = ( index) => {
    if(table.length>1){
        var tempArr = table
        tempArr.splice(index, 1);
        setTable([...tempArr])
    }
  };
  const editTable=(operation, data, index)=>{
        switch(operation){
            case 'delete':
                deleteRowFromTable( index)
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
        <Link to="/invoice">
        <span>
          <i className="fas fa-eye"></i>
        </span>
        </Link>
        <span>
          <i className="fas fa-plus-circle" onClick={()=>{setTable([...table,{name:'',description:'',quantity:0,price:0}]);}}></i>
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
          <TBody table={table} editTable={editTable} />
        </table>
      </div>
    </div>
  );
}

export default FormDataNew;
