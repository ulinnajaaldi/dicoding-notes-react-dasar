import React from "react";

const Navbar = ({ search, setSearch }) => {
  return (
    <header className="relative w-full border-b ">
      <nav className="container fixed left-0 right-0 top-0 flex justify-between gap-8 bg-gray-100/50 py-3 backdrop-blur-md md:gap-5 ">
        <h1 className="text-2xl font-bold lg:text-4xl">Notes</h1>
        <input
          type="text"
          placeholder="Cari catatan..."
          className="w-80 rounded-md border bg-gray-50 px-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </nav>
    </header>
  );
};

export default Navbar;
