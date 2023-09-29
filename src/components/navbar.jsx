import React from "react";

const Navbar = ({ search, setSearch }) => {
  return (
    <header className="relative w-full border-b py-3">
      <nav className="container mx-auto flex justify-between ">
        <h1 className="text-4xl font-bold">Notes</h1>
        <input
          type="text"
          placeholder="Cari catatan..."
          className="w-80 rounded-md border px-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </nav>
    </header>
  );
};

export default Navbar;
