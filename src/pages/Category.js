import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import timestampToDate from "timestamp-to-date";
import ColumnCard from "../components/Card/ColumnCard";
import Vacancies from "../components/Filters/Vacancies";

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
import CategoryListLoad from "../hooks/CategoryListLoad";
import handleFavourite from "../hooks/handleFavourite";

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
  const navigate = useNavigate();
  let params = useParams();
  const [data, deleteFavourite] = CategoryListLoad();
  const [addFavourite, removeFavourite] = handleFavourite(
    deleteFavourite,
    navigate
  );

  console.table(data);

  return (
    <div className="flex-1 xs:w-[95%] w-[80%] max-w-[1024px]">
      <div className="filters">
        {params.categoryType === "vacancies" && <Vacancies />}
      </div>
      <div className="premium_ads my-5">
        {data.map((ad) => (
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
        ))}
      </div>
    </div>
  );
};

export default Category;
