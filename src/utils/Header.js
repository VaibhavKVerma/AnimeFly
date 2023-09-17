import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { searchValue } from "../redux/reducers/searchSlice";
import { SearchLogo, SvgLogo } from "../constants/Svg";
import { headerNav } from "../constants/Constants";

const HeaderNavRenderer = (link, text, active) => {
  return (
    <Link
      to={link}
      className={`${
        active
          ? "text-white bg-slate-700"
          : "text-gray-600 border border-white bg-gray-50"
      } cursor-pointer px-3 py-2.5 font-normal text-xs shadow-md rounded`}
    >
      {text}
    </Link>
  );
};

const Header = () => {
  const searchVal = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

  const location = useLocation();
  console.log("Vaibhav Debug location: ", location.pathname);

  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="bg-white py-5 px-7">
        <nav className="flex justify-between">
          <Link to="/" className="flex items-center space-x-3 lg:pr-16 pr-6">
            <SvgLogo />
            <h2 className="font-normal text-2xl leading-6 text-gray-800">
              AnimeFly
            </h2>
          </Link>

          <ul className="hidden md:flex flex-auto space-x-2">
            {headerNav.map((headerLink) =>
              HeaderNavRenderer(
                headerLink.link,
                headerLink.title,
                location.pathname === headerLink.link
              )
            )}
            <div className="relative flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                value={searchVal}
                onChange={(e) => {
                  dispatch(searchValue(e.target.value));
                }}
              />
              <button
                className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
              >
                <SearchLogo />
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;
