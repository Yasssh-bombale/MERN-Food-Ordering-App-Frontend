import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};
const SearchPageInfo = ({ total, city }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col  lg:flex-row items-center justify-between">
      <span>
        {total} Restaurants found in {city}
        <Link
          to={"/"}
          className="text-sm font-semibold underline cursor-pointer text-blue-500"
        >
          Change location
        </Link>
      </span>
      Inser dropdown here :)
    </div>
  );
};

export default SearchPageInfo;
