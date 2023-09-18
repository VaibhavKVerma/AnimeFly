import { ErrorLogo } from "../Constants/Svg";

const ErrorPage = () => {
  return (
    <div className="bg-gray-100 h-screen justify-center">
      <center className="mt-24 m-auto">
        <ErrorLogo />
        <div className=" tracking-widest mt-4">
          <span className="text-gray-500 text-6xl block">
            <span>4 0 4</span>
          </span>
          <span className="text-gray-500 text-xl">
            Sorry, We couldn't find what you are looking for!
          </span>
        </div>
      </center>
      <center className="mt-6">
        <a
          href="/"
          className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md"
        >
          Go Home{" "}
        </a>
      </center>
    </div>
  );
};

export default ErrorPage;