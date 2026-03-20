let val_a = 10;

console.log(val_a);

// typy złozone
const t_arr: number[] = [];
t_arr.push(1);

const t_obj = {
  a: 1230,
  b: "aaa",
  c: true,
};

const t_arr_2: {
  a: number;
  b: string;
  c: boolean;
}[] = [];

t_arr_2.push(t_obj);

// interfejs
interface User {
  a: number;
  b: string;
  c: boolean;
  d?: number;
}

const t_user_2: User = {
  a: 12,
  b: "asd",
  c: true,
};

const t_arr_3: User[] = [];

const getUser = (name: string): User => {
  return {
    a: 10,
    b: name,
    c: true,
  };
};

const t_user_3 = getUser("Lorem");
console.log(t_user_3.d);

interface Address {
  city: string;
  country: string;
  postalCode?: string;
}

interface UserWithAddress {
  name: string;
  lastName: string;
  address: Address;
}

const userWithAdress: UserWithAddress = {
  name: "john",
  lastName: "doe",
  address: {
    country: "PL",
    city: "Warszawa",
    postalCode: "12-345",
  },
};

// aliasy typów
type AddressType = {
  city: string;
  country: string;
  postalCode?: string;
};

type UserWithAddressType = {
  name: string;
  lastName: string;
  address: AddressType;
};

type MyArray = number[];
const t_arr_4: MyArray = [];

// unie i intersekcje, typy uzytkowe
type BookEntity = {
  id: string;
  createdAt: Date;
  updateAt: Date;
  author: string;
  isbn: string;
  genre: string;
  pages: number;
  title: string;
};

type BookListElement = Pick<BookEntity, "id" | "title" | "createdAt">;

type BookMainData = Pick<BookEntity, "title">;

const getBookTitle = (book: BookListElement | BookMainData) => {
  return book.title;
};

const bookListElement: BookListElement = {
  id: "aaaaa",
  title: "Horus Rising",
  createdAt: new Date(),
};

const bookMainData: BookMainData = {
  title: "Horus Rising",
};

console.log(getBookTitle(bookListElement));
console.log(getBookTitle(bookMainData));

type UserMainData = {
  name: string;
  age: number;
};

type UserAddress = {
  city: string;
  country: string;
};

type FullUser = UserMainData & UserAddress;

const fullUser: FullUser = {
  name: "Marcin",
  age: 33,
  city: "Gliwice",
  country: "PL",
};

// any i unknown
let anyValue: any = "asdasd";
anyValue = 123123;
anyValue = [123123123, 234234, "sdfsdf"];
anyValue = { name: "Lorem ipsum", address: { city: "Test " } };

console.log(anyValue.address.city);

let systemResponse: unknown;
systemResponse = "asdads";
systemResponse = 22;
systemResponse = { name: "Lorem ipsum", address: { city: "Test " } };

if (
  typeof systemResponse === "object" &&
  systemResponse !== null &&
  "address" in systemResponse &&
  systemResponse.address &&
  typeof systemResponse.address === "object" &&
  systemResponse.address !== null &&
  "city" in systemResponse.address
) {
  console.log(systemResponse.address.city);
}

// stackowanie interfejsów
interface ExampleInterface {
  a: number;
}

interface ExampleInterface {
  b: number;
}

const exObj: ExampleInterface = {
  a: 12,
  b: 2,
};
