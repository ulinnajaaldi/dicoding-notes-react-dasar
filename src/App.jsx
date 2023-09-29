import { useState } from "react";
import { getInitialData } from "./utils/data";
import Card from "./components/card";
import AddNote from "./components/add-note";
import Navbar from "./components/navbar";
import { toastNotify } from "./utils";

const App = () => {
  const notesData = getInitialData();
  const [newNotes, setNewNotes] = useState(notesData);

  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [maxLengthTitle, _] = useState(50);

  const activeNotes = newNotes.filter((note) => !note.archived);
  const archivedNotes = newNotes.filter((note) => note.archived);

  const filterActiveNotes = activeNotes.filter((note) => {
    return note.title.toLowerCase().includes(search.toLowerCase());
  });

  const filterArchivedNotes = archivedNotes.filter((note) => {
    return note.title.toLowerCase().includes(search.toLowerCase());
  });

  const addNote = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!title || !body) {
      toastNotify({
        type: "error",
        message: "Data tidak boleh kosong",
      });
      return;
    }
    const newNote = {
      id: newNotes.length + 1,
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNewNotes([newNote, ...newNotes]);
    toastNotify({
      type: "success",
      message: "Catatan berhasil ditambahkan",
    });
    setTitle("");
    setBody("");
  };

  const archiveNote = (id) => {
    const updatedNotes = newNotes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        };
      }
      return note;
    });
    toastNotify({
      type: "info",
      message: "Catatan berhasil dipindahkan",
    });
    setNewNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = newNotes.filter((note) => note.id !== id);
    toastNotify({
      type: "error",
      message: "Catatan dihapus",
    });
    setNewNotes(updatedNotes);
  };

  return (
    <>
      <Navbar {...{ search, setSearch }} />
      <main className="container my-10">
        <AddNote
          {...{ title, setTitle, body, setBody, maxLengthTitle, addNote }}
        />

        <h1 className="mb-5 text-xl font-bold lg:text-2xl">Catatan Aktif</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filterActiveNotes.length > 0 ? (
            filterActiveNotes.map((note) => (
              <Card
                key={note.id}
                note={note}
                archiveNote={archiveNote}
                deleteNote={deleteNote}
              />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              Tidak ada catatan aktif
            </p>
          )}
        </div>

        <h1 className="mb-5 mt-10 text-xl font-bold lg:text-2xl">
          Catatan Arsip
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filterArchivedNotes.length > 0 ? (
            filterArchivedNotes.map((note) => (
              <Card
                key={note.id}
                note={note}
                archiveNote={archiveNote}
                deleteNote={deleteNote}
              />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              Tidak ada catatan arsip
            </p>
          )}
        </div>
      </main>
    </>
  );
};

export default App;
