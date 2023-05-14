import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  const logout = async () => {
    const req = await axios.get("/api/auth/logout");
    navigate(req.data.redirectURL);
  };
  return (
    <>
      <nav className="w-full bg-background fixed px-4 py-4 flex justify-between items-center">
        <Link className="font-bold text-4xl text-headline" to="/Home">
          DeatCode
        </Link>
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
