import { Link } from "react-router-dom";
import { SvgLogo } from "../constants/Svg";
import { footerNav } from "../constants/Constants";

const logoComponentRenderer = (url, text, component) => {
  return (
    <li key={text}>
      <Link
        to={url}
        rel="noreferrer"
        target="_blank"
        className="text-gray-700 transition hover:text-gray-700/75"
      >
        <span className="sr-only">{text}</span>
        {component}
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white w-screen">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <div className="flex items-center space-x-3">
            <SvgLogo />
            <h2 className="font-normal text-2xl leading-6 text-gray-800">
              AnimeFly
            </h2>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Made with ❤️ by Vaibhav Kumar Verma
        </p>

        <ul className="mt-8 flex justify-center gap-6 md:gap-8">
          {footerNav.map((footerLink) =>
            logoComponentRenderer(
              footerLink.link,
              footerLink.title,
              footerLink.component
            )
          )}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
