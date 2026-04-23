import React from "react";
import Logo from "../../../../components/Logo/Logo";
import searchIcon from "../../../../assets/mynaui_search.svg";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="flex justify-between items-center w-11/12 mx-auto sticky top-0 left-0 right-0">
        {/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow lg:hidden"
          >
            <li>Home</li>
            <li>Tours</li>
            <li>Hotels</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </div> */}
        <div>
          <Logo></Logo>
        </div>
        <div className="hidden lg:block">
          <nav>
            <ul className="flex gap-8 font-secondary text-white">
              <li className="hover:text-[#FAB326]">Home</li>
              <li className="hover:text-[#FAB326]">Tours</li>
              <li className="hover:text-[#FAB326]">Hotels</li>
              <li className="hover:text-[#FAB326]">Blog</li>
              <li className="hover:text-[#FAB326]">About</li>
              <li className="hover:text-[#FAB326]">Contact</li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-5.25 items-center font-primary text-white">
          <div className="flex gap-1.25 items-center hover:text-[#FAB326]">
            <img src={searchIcon} alt="search icon" />
            <p>Search</p>
          </div>
          <div className=" py-5">
            <button className="bg-[#fab326] text-[14px] py-3 px-6 rounded-[40px]">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
