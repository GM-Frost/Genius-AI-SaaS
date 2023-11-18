const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    // <div className="w-full h-10 flex z-10  md:flex-col fixed  bg-gray-900   flex-col bottom-0 text-center i text-white ">
    //   Developed by © Nayan Bastola - {currentYear}
    // </div>
    <footer className="w-full flex z-10 fixed  bottom-0 h-10 bg-gray-900 text-center items-center justify-center  text-white py-4">
      <div className="container mx-auto text-center">
        <p> Developed by © Nayan Bastola - {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
