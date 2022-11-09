import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import timestampToDate from "timestamp-to-date";
import ColumnCard from "../components/Card/ColumnCard";
import Vacancies from "../components/Filters/Vacancies";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import CategoryListLoad from "../hooks/useCategoryListLoad";
import useHandleFavourite from "../hooks/useHandleFavourite";
import useScroll from "../hooks/useScroll";
import { useSelector, useDispatch } from "react-redux";

import work from "../assets/work.png";
import transport from "../assets/transport.png";
import realEstate from "../assets/estate.png";
import electronics from "../assets/electrical-devices.png";
import dressesShoes from "../assets/dresses.png";
import building from "../assets/building.png";
import home from "../assets/home.png";
import gifts from "../assets/gifts.png";
import forChildren from "../assets/children.png";
import animals from "../assets/animals.png";
import agriculture from "../assets/agriculture.png";
import leisureHobbies from "../assets/holiday.png";
import services from "../assets/services.png";
import providers from "../assets/provider.png";

const icons = [
  { work },
  { transport },
  { realEstate },
  { electronics },
  { dressesShoes },
  { building },
  { home },
  { gifts },
  { forChildren },
  { animals },
  { agriculture },
  { leisureHobbies },
  { services },
  { providers },
];

const Category = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.categoryData.data);
  let params = useParams();
  const [offSet] = useScroll();
  const [deleteFavourite, loading] = CategoryListLoad();
  const [addFavourite, removeFavourite] = useHandleFavourite(
    deleteFavourite,
    navigate
  );

  console.log(data);
  console.log(offSet);
  console.table(data);
  console.log(loading);

  return (
    <div className="flex-1 xs:w-[95%] w-[80%] max-w-[1024px]">
      <div className="filters">
        {params.categoryType === "vacancies" && <Vacancies />}
      </div>
      <div className="premium_ads my-5">
        {data.map((ad) => {
          return (
            <ColumnCard
              key={ad.docID}
              category={ad.category}
              subCategory={ad.subCategory}
              productID={ad.docID}
              img={ad.photos[0]?.url || require("../assets/placeholder.png")}
              title={ad.title}
              address={ad.location}
              date={timestampToDate(
                ad.createdAt?.seconds * 1000,
                "yyyy-MM-dd HH:mm"
              )}
              price={`от${ad.fromPrice} до${ad.priceTo}` || ad.price}
              currency={ad.currency}
              // pic={}
              favourite={ad.favourite}
              addFavourite={addFavourite}
              removeFavourite={removeFavourite}
            />
          );
        })}
      </div>
      {loading && (
        <Stack
          sx={{
            color: "orange.500",
            margin: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
          spacing={2}
          direction="row">
          <CircularProgress color="inherit" />
        </Stack>
      )}
    </div>
  );
};

export default Category;
