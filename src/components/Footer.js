import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-darker-blue text-white flex justify-between w-full pt-5 pb-7 px-12 flex-wrap gap-y-10 mobile:pb-12">
      <div className="flex flex-col mx-1 tablet:items-center tablet:w-full">
        <h3 className="font-bold text-xl mb-2">Join the Newsletter</h3>
        <p className="mb-2 text-center">
          Sign up for the latest news and special offers.
        </p>
        <div className="flex">
          <input
            type="text"
            className="border-2 border-gray-400 border-r-0 pl-1 sm-mobile:w-[150px]"
            placeholder="Your Email"
          />
          <button type="submit" className="uppercase bg-orange-500 py-1 px-2">
            Sign up
          </button>
        </div>
      </div>

      <div className="mx-1 tablet:ml-4">
        <h3 className="font-bold text-lg mb-2">Company</h3>
        <ul>
          <li className="mb-1">
            <button>About Us</button>
          </li>
          <li className="mb-1">
            <button>FAQ</button>
          </li>
        </ul>
      </div>

      <div className="mx-1 w-1/4 tablet:w-1/3 tablet:text-center tablet:mr-4">
        <h3 className="font-bold text-lg mb-2">Contact</h3>
        <ul className="flex justify-between">
         <li>
            <AiOutlineGithub className="text-xl cursor-pointer" />
          </li>
          <li>
            <AiOutlineTwitter className="text-xl cursor-pointer" />
          </li>
          <li>
            <AiOutlineInstagram className="text-xl cursor-pointer" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
