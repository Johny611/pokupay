import { useEffect, useState } from "react";

const filterCategoryData = () => {
  const [filterdData, setFilteredData] = useState([]);

  // useEffect(() => {
  //   const filtered = async () => {
  //     const colRef = collection(
  //       db,
  //       "ads",
  //       params.category,
  //       params.categoryType
  //     );
  //     if (queryList) {
  //       const queryConditions = queryList.map((condition) => {
  //         where(condition.property, condition.operator, condition.value);
  //       });
  //       const queryToPerform = query(colRef, ...queryConditions);
  //     }
  //   };
  //   filtered();
  // }, [offSet]);
};

export default filterCategoryData;
