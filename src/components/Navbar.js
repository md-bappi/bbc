import { Link } from "react-router-dom";
import { IoReorderThreeOutline, IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className=" container mx-auto flex flex-col gap-2 pt-5">
      <div className="navbar flex justify-between items-center pb-2">
        <div className="flex justify-between items-center gap-5">
          <IoReorderThreeOutline className=" text-4xl" />
          <IoSearch className=" text-3xl" />
        </div>
        <h2 className="logo flex items-center gap-2">
          <span className=" w-8 h-8 bg-slate-700 text-white text-2xl flex justify-center items-center">
            B
          </span>
          <span className=" w-8 h-8 bg-slate-700 text-white text-2xl flex justify-center items-center">
            B
          </span>
          <span className=" w-8 h-8 bg-slate-700 text-white text-2xl flex justify-center items-center">
            C
          </span>
        </h2>
        <div className="flex gap-5">
          <button className=" px-4 py-1 bg-slate-700 text-white">
            Register
          </button>
          <button className=" font-medium">Sign In</button>
        </div>
      </div>

      <hr />

      <ul className="nav-links flex justify-center items-center gap-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/sport">Sport</Link>
        </li>
        <li>
          <Link to="/business">Business</Link>
        </li>
        <li>
          <Link to="/innovation">Innovation</Link>
        </li>
        <li>
          <Link to="/culture">Culture</Link>
        </li>
        <li>
          <Link to="/travel">Travel</Link>
        </li>
        <li>
          <Link to="/earth">Earth</Link>
        </li>
        <li>
          <Link to="/video">Video</Link>
        </li>
        <li>
          <Link to="/live">Live</Link>
        </li>
      </ul>

      <hr />
    </nav>
  );
};

export default Navbar;
