import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title || !author) {
      alert("All fields are required");
      return;
    }

    addBook({ title, author });
    setTitle("");
    setAuthor("");
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title mb-3">Add New Book</h5>

        <form onSubmit={submit} className="row g-2">
          <div className="col-md-5">
            <input
              className="form-control"
              placeholder="Book Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="col-md-5">
            <input
              className="form-control"
              placeholder="Author Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="col-md-2 d-grid">
            <button className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
