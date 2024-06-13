var user = {
    name: "John",
    age: 30,
    password: "1234",
    address: [
        {
            street: "123 Main St",
            city: "New York",
            state: "NY",
            zipcode: 10001,
        },
    ],
};
function addUser(newUser) {
    if (!newUser.name || !newUser.password) {
        console.log("User name and password are required");
        return;
    }
    console.log(newUser);
}
console.log(addUser(user));
