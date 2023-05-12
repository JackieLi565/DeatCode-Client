import { Link } from "react-router-dom";
function Navbar() {
  const logout = () => {
    // make logout request to backend
  };
  return (
    <>
      <nav className="w-full bg-background fixed px-4 py-4 flex justify-between items-center">
        <h1 className="font-bold text-4xl text-headline">DeatCode</h1>
        <div className="space-x-6 text-headline">
          <Link
            className="bg-button px-4 py-2 rounded hover:bg-opacity-80 transition duration-300"
            to="/Explore"
          >
            Explore
          </Link>
          <Link
            className="bg-button px-4 py-2 rounded hover:bg-opacity-80 transition duration-300"
            to="/Leaderboard"
          >
            Leaderboard
          </Link>
          <Link
            className="bg-button px-4 py-2 rounded hover:bg-opacity-80 transition duration-300"
            to="/Profile"
          >
            MyCode
          </Link>

          <button
            className="border-2 text-headline px-4 py-2 rounded hover:underline"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
