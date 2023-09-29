import { showFormattedDate } from "../utils/data";

const Card = ({ note, archiveNote, deleteNote }) => {
  return (
    <div
      key={note.id}
      className="flex h-full flex-col justify-between gap-4 rounded-lg border bg-white p-5 shadow"
    >
      <div>
        <h2 className="mb-3 text-xl font-bold">{note.title}</h2>
        <p className="text-gray-500">{note.body}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-500">{showFormattedDate(note.createdAt)}</p>
        <div className="flex gap-2">
          <button
            className="rounded bg-yellow-500 px-3 py-2 text-sm font-semibold text-white hover:bg-yellow-700"
            onClick={() => archiveNote(note.id)}
          >
            {note.archived ? "Unarchive" : "Archive"}
          </button>
          <button
            className="rounded bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700"
            onClick={() => deleteNote(note.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
