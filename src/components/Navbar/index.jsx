function Navbar() {
  return (
    <>
      <nav className="w-full bg-slate-900 fixed px-4 py-5 flex justify-between">
        <h1 className="font-bold text-white">DeatCode</h1>
        <div className="space-x-6">
          <button className="bg-slate-200 p-2 rounded">Explore</button>
          <button className="bg-slate-200 p-2 rounded">Leaderboard</button>
          <button className="bg-slate-200 p-2 rounded">MyCode</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
