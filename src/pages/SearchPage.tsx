import { useSearchRestaurant } from "@/api/Restaurant";
import SearchPageInfo from "@/components/SearchPageInfo";
import SearchResultCard from "@/components/SearchResultCard";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  const { result, isLoading } = useSearchRestaurant(city);

  if (isLoading) {
    return <span>Loading...!</span>;
  }

  if (!result?.data || !city) {
    return <span>No results found!</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list">inset cuisines here :)</div>
      <div id="main-content" className="flex flex-col gap-5">
        <SearchPageInfo total={result.pagination.total} city={city} />
        {result.data.map((restaurant) => (
          <SearchResultCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
