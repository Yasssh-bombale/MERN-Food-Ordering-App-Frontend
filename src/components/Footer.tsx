const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container  mx-auto flex flex-col gap-5 md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          JevlisKa.com
        </span>
        <div className="flex gap-4 text-white font-bold tracking-tight">
          <span>Privacy Policy</span>
          <span>Terms &amp; service</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
