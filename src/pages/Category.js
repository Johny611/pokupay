import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  let params = useParams();
  return <div className="flex-1">{params.categoryType}</div>;
};

export default Category;
