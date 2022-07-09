import React from "react";
import Tr from "./Tr";

const Table = ({ onClick, tableData, dispath }) => {
  return (
    <tables>
      {Array(tableData.length).fill().map((tr, i) => (<Tr dispatch={dispath} rowIndex={i} rowData={tableData[i]}/>))}
    </tables>
  );
};

export default Table;