import phoneImg from "../assets/landing.png";
import appDownloadImg from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData: SearchForm) => {
    navigate({
      pathname: `/search/${formData.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 -mt-16 text-center flex flex-col gap-5 md:px-32">
        <h1 className="text-5xl text-orange-500 tracking-tight font-bold">
          Tuck into takeway today
        </h1>
        <span className="text-xl ">Food is just a click away!</span>
        <SearchBar placeHolder="Search for city" onSubmit={handleSubmit} />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={phoneImg} alt="phoneImg" />
        <div className="flex flex-col gap-5 justify-center items-center text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download JevlisKa App for faster ordering and personalised
            recommendations
          </span>
          <img
            src={appDownloadImg}
            alt="appDownloadImg"
            className="hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
