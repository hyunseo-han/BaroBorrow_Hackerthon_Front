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
      <Link to={"/enroll"}>
        <div>물품 빌려주기</div>
      </Link>
      <Link to={"/mypage/profile"}>
        <div>내 프로필</div>
      </Link>
    </div>
  );
}

export default ProductList;
