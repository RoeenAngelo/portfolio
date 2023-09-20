import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="h-64 pt-5">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center items-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl">Roeen Angelo</p>
          <p className="font-playfair text-md ">
            ©{year} Angelo. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
