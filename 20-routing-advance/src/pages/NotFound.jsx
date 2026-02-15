import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-300 to-yellow-400 text-black text-center px-6">

            <img
                src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
                alt="404"
                className="w-72 mb-6"/>

            <h1 className="text-6xl font-black mb-6">404 PAGE</h1>

            <p className="text-lg mb-2">
                The page you were looking for could not be found.
            </p>

            <Link
                to="/"
                className="mt-8 bg-white text-black text-2xl font-bold px-10 py-4 rounded-full shadow-lg hover:-translate-y-2 transition-all duration-300">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
