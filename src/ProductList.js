import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "./data.json";
import Search from "./Search";
function ProductList(props) {
  const [dt, setDt] = useState(data);
  console.log();
  return (
    <div>
      <Search />
      {dt.map((li) => (
        <div>
          <Link to={`/detail${li.id}`}>{li.product_name}</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
