import { useSearchRestaurant } from "@/api/Restaurant";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchPageInfo from "@/components/SearchPageInfo";
import SearchResultCard from "@/components/SearchResultCard";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type searchState = {
  searchQuery: string;
};

const SearchPage = () => {
  const { city } = useParams();
  const [serachState, setSearchState] = useState<searchState>({
    searchQuery: "",
  });

  const { result, isLoading } = useSearchRestaurant(serachState, city);

  const setSearchQuery = (serachFormData: SearchForm) => {
    // setting previous state as it is like cuisines and sortOptions just override serachQuery below
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: serachFormData.searchQuery,
    }));
  };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
    }));
  };

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
        <SearchBar
          searchQuery={serachState.searchQuery} // passing searchQuery because whenever searchQuery is updated whole serachBar component will be re-render its logic in SearchBar component
          onSubmit={setSearchQuery}
          placeHolder="Search by cuisine or Restaurant name"
          onReset={resetSearch}
        />
        <SearchPageInfo total={result.pagination.total} city={city} />
        {result.data.map((restaurant) => (
          <SearchResultCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
