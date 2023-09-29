const AddNote = ({
  title,
  setTitle,
  body,
  setBody,
  maxLengthTitle,
  addNote,
}) => {
  return (
    <section className="flex flex-col items-center py-10">
      <h2 className="mb-5 text-xl font-bold lg:text-2xl">Tambah Catatan</h2>
      <form className="flex w-full flex-col gap-4 md:w-[80%] lg:w-[50%]">
        <div className="w-full">
          <input
            id="title"
            type="text"
            placeholder="Judul catatan..."
            value={title}
            maxLength={maxLengthTitle}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-md border px-3 py-2 font-semibold"
          />
          <p className="mt-1 w-full text-end text-sm text-gray-500">
            Sisa karakter: {maxLengthTitle - title.length}
          </p>
        </div>
        <textarea
          id="body"
          placeholder="Isi catatan..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={5}
          className="rounded-md border px-3 py-2"
        ></textarea>
        <button
          type="submit"
          className="rounded bg-blue-500 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          onClick={addNote}
        >
          Tambah
        </button>
      </form>
    </section>
  );
};

export default AddNote;
