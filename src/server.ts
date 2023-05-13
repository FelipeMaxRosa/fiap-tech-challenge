interface User {
  name: string;
  age: number;
}

function saveUser(user: User) {
  console.log(user);
}

saveUser({
  age: 36,
  name: "Felipe",
});
