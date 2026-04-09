export type BookEntity = {
  id: string;
  title: string;
  author: string;
};

export type BookDto = Omit<BookEntity, 'id'>