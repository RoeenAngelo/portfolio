import React from "react";
import linkedInPic from "../assets/linkedin.png";
import githubPic from "../assets/github.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7 ">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https:/www.linkedin.com/in/roeen-acal"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={linkedInPic}
          alt="linkedin-link"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/RoeenAngelo"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={githubPic}
          alt="github-link"
        />
      </a>
      {/* <a
        className="hover:opacity-50 transition duration-500"
        href="https:/www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="../assets/instagram.png"
          alt="instagram-link"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https:/www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="../assets/twitter.png"
          alt="twitter-link"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https:/www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="../assets/facebook.png"
          alt="facebook-link"
        />
      </a> */}
    </div>
  );
};

export default SocialMediaIcons;
