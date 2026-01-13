import { createContext, useContext, useEffect, useState } from "react";
import API from "../services/api";
import { AuthContext } from "./AuthContext";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!token) {
      setBooks([]); 
      return;
    }

    const fetchBooks = async () => {
      const res = await API.get("/books");
      setBooks(res.data);
    };

    fetchBooks();
  }, [token]);

  const addBook = async (book) => {
    await API.post("/books", book);
    const res = await API.get("/books");
    setBooks(res.data);
  };

  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
};
