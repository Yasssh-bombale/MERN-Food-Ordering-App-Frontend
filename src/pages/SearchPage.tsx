import { useSearchRestaurant } from "@/api/Restaurant";
import CuisineFilter from "@/components/CuisineFilter";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchPageInfo from "@/components/SearchPageInfo";
import SearchResultCard from "@/components/SearchResultCard";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type searchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[];
};

const SearchPage = () => {
  const { city } = useParams();

  // * Keeping all the states in top level because all the states will be consistent during all re-renders its good practice;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const [serachState, setSearchState] = useState<searchState>({
    searchQuery: "",
    selectedCuisines: [],
    page: 1,
  });

  const { result, isLoading } = useSearchRestaurant(serachState, city);

  const setSelectedCuisines = (selectedCuisines: string[]) => {
    setSearchState((prevState) => ({
      ...prevState,
      selectedCuisines,
      page: 1,
    }));
  };

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }));
  };

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
      <div id="cuisines-list">
        <CuisineFilter
          onChange={setSelectedCuisines}
          selectedCuisines={serachState.selectedCuisines}
          isExpanded={isExpanded}
          onExpandClick={() => setIsExpanded((prevState) => !prevState)}
        />
      </div>
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
        <PaginationSelector
          page={result.pagination.page}
          pages={result.pagination.pages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default SearchPage;
