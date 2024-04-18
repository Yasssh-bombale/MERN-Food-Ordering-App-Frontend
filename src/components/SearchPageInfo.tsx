import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};
const SearchPageInfo = ({ total, city }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col  lg:flex-row lg:items-center items-center justify-between">
      <span>
        {total} Restaurants found in {city}
        <Link
          to={"/"}
          className="text-sm font-semibold underline ml-2 cursor-pointer text-blue-500"
        >
          Change location
        </Link>
      </span>
    </div>
  );
};

export default SearchPageInfo;
