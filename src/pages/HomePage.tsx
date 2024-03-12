import phoneImg from "../assets/landing.png";
import appDownloadImg from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 -mt-16 text-center flex flex-col gap-5">
        <h1 className="text-5xl text-orange-500 tracking-tight font-bold">
          Kay Jevlis ka vichartos direct awadtes bol!
        </h1>
        <span className="text-xl ">Food is just a click away!</span>
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
