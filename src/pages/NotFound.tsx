import { Link } from "react-router-dom";

interface NotFoundProps {}

const NotFound = ({}: NotFoundProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-xs h-screen">
      <h1 className="text-center text-7xl">404</h1>
      <p className="text-lg text-center">Page Not Found</p>
      <p className="text-center mt-8 text-balance max-w-[62ch]">
        The page you requested could not be found
      </p>
      <Link to="/" className="text-heading underline">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
