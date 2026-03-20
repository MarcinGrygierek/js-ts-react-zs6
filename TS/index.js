var val_a = 10;
console.log(val_a);
// typy złozone
var t_arr = [];
t_arr.push(1);
var t_obj = {
    a: 1230,
    b: "aaa",
    c: true,
};
var t_arr_2 = [];
t_arr_2.push(t_obj);
var t_user_2 = {
    a: 12,
    b: "asd",
    c: true,
};
var t_arr_3 = [];
var getUser = function (name) {
    return {
        a: 10,
        b: name,
        c: true,
    };
};
var t_user_3 = getUser("Lorem");
console.log(t_user_3.d);
var userWithAdress = {
    name: "john",
    lastName: "doe",
    address: {
        country: "PL",
        city: "Warszawa",
        postalCode: "12-345",
    },
};
var t_arr_4 = [];
var getBookTitle = function (book) {
    return book.title;
};
var bookListElement = {
    id: "aaaaa",
    title: "Horus Rising",
    createdAt: new Date(),
};
var bookMainData = {
    title: "Horus Rising",
};
console.log(getBookTitle(bookListElement));
console.log(getBookTitle(bookMainData));
var fullUser = {
    name: "Marcin",
    age: 33,
    city: "Gliwice",
    country: "PL",
};
// any i unknown
var anyValue = "asdasd";
anyValue = 123123;
anyValue = [123123123, 234234, "sdfsdf"];
anyValue = { name: "Lorem ipsum", address: { city: "Test " } };
console.log(anyValue.address.city);
var systemResponse;
systemResponse = "asdads";
systemResponse = 22;
systemResponse = { name: "Lorem ipsum", address: { city: "Test " } };
console.log(systemResponse.address.city);
