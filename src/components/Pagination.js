const Pagination = () => {
  return (
    <nav>
      <ul className="flex">
        <li>
          <a
            className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            href="/"
            aria-label="Previous"
          >
            <img
              alt=""
              src="https://th.bing.com/th/id/OIP.dX3K4QUJvby7vnIx-c7IqwHaHa?pid=ImgDet&rs=1"
              className="material-icons text-sm"
            />
          </a>
        </li>
        <li>
          <a
            className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 p-0 text-sm text-white shadow-md transition duration-150 ease-in-out"
            href="/"
          >
            1
          </a>
        </li>
        <li>
          <a
            className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            href="/"
          >
            2
          </a>
        </li>
        <li>
          <a
            className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            href="/"
            aria-label="Next"
          >
            <img
              alt=""
              src="https://th.bing.com/th/id/OIP.dX3K4QUJvby7vnIx-c7IqwHaHa?pid=ImgDet&rs=1"
              className="material-icons text-sm"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
