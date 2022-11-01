import React from "react";
import { Link } from "react-router-dom";

const MobileCategoryItem = (props) => {
  return (
    <Link
      to={`/${props.path}`}
      className="xs:text-white min-w-[120px] flex flex-col items-center justify-center"
    >
      <div>
        <img className="w-20" src={props.img} alt={props?.name} />
      </div>
      <div>
        <h2 className="text-sm text-center font-semibold">{props.name}</h2>
      </div>
    </Link>
  );
};

export default MobileCategoryItem;
