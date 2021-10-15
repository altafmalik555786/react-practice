import FormInvoiceSingle from "./FormInvoiceSingle";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useState } from "react";

function FormInvoice() {
  const [table, setTable] = useState(JSON.parse(localStorage.getItem("table")))
  const _exportPdf = () => {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      document.body.appendChild(canvas); // if you want see your screenshot in body.
      const imgData = canvas.toDataURL("image/png");
      var imgWidth = 210;
      var pageHeight = 300;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF("p", "mm");
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeights = doc.internal.pageSize.getHeight();
      var position = 10;
      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position += heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save("download.pdf");
    });
  };

  const updateRowInTable = (data, index) => {
    let tempArr = table;
    tempArr[index] = data;
    setTable([...tempArr]);
    localStorage.setItem('table',JSON.stringify(table));
  };
  return (
    <div id="capture">
      <div className="Download-PDF">
        <button className="Download-PDF-btn" onClick={_exportPdf}>
          <i className="fas fa-file-pdf"></i>Download PDF
        </button>
      </div>
      <h1>Product Details</h1>
      {table && table.length
        ? table.map((data, index) => (
            <FormInvoiceSingle key={index} data={data} updateRowInTable={updateRowInTable} index={index}/>
          ))
        : "No Data Found"}
    </div>
  );
}

export default FormInvoice;
