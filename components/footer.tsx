const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full h-10 flex  md:flex-col fixed  z-[80] bg-gray-900  ml-0 md:ml-72  flex-col bottom-0 text-center items-center justify-center  text-white ">
      Developed by © Nayan Bastola - {currentYear}
    </div>
  );
};

export default Footer;
