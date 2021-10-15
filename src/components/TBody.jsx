import SingleRow from "./SingleRow";
const TBody = ({ table,editTable }) => {
  return (
    <tbody>
      {table ? (
        table.map((row, index) => (
          <SingleRow
            key={index}
            index={index}
            row={row}
            editTable={editTable}
          />
        ))
      ) : (
        <tr>
          <td colSpan="6"> "No Data Available</td>
        </tr>
      )}
    </tbody>
  );
};

export default TBody;
