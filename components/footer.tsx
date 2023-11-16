const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full h-10 flex z-10  md:flex-col fixed  bg-gray-900   flex-col bottom-0 text-center items-center justify-center  text-white ">
      Developed by © Nayan Bastola - {currentYear}
    </div>
  );
};

export default Footer;
