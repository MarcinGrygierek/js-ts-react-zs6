import { useEffect, useState } from "react";
import type { BookDto, BookEntity } from "./types";
import { useApi } from "./hooks/useApi";
import { useInput } from "./hooks/useInput";

export const JsonServer = () => {
  const { apiGet, apiDelete, apiPost, apiError } = useApi(
    "http://localhost:3000",
  );
  const [books, setBooks] = useState<BookEntity[]>([]);

  const authorInput = useInput("");
  const titleInput = useInput("");

  const getBooks = async () => {
    const books = await apiGet<BookEntity[]>("books");

    if (!books) return;

    setBooks(books);
  };

  const deleteBook = async (id: string) => {
    const deletedBook = await apiDelete<BookEntity>("books", id);
    if (!deletedBook) return;
    setBooks((prev) => prev.filter((book) => book.id !== deletedBook.id));
  };

  const addBook = async (bookToCreate: BookDto) => {
    const newBook = await apiPost<BookDto, BookEntity>("books", bookToCreate);
    if (!newBook) return;
    setBooks((prev) => [...prev, newBook]);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    addBook({
      title: titleInput.value,
      author: authorInput.value,
    });

    authorInput.clear();
    titleInput.clear();
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      {apiError ? <p>{apiError}</p> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Author"
          name="author"
          {...authorInput}
        />
        <input type="text" placeholder="Title" name="title" {...titleInput} />
        <button type="submit">Add book</button>
      </form>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - <i>{book.author}</i>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
