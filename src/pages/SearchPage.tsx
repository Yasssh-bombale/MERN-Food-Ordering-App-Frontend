import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();

  return <div>SearchPage search value is :{city} </div>;
};

export default SearchPage;
