// Null object pattern
// https://en.wikipedia.org/wiki/Null_object_pattern

//scerio
/*
USE CASE
1. check has Image or not
2. check is user login 

*/

// CASE1 : check is user login

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  hasAccess() {
    return this.name === "admin";
  }
}

const users = [new User(1, "admin"), new User(2, "user")];

function getUser(id) {
  return users.find((user) => user.id === id);
}

function printUser(id) {
  const user = getUser(id);

  /*
    we need to explicitly check if user is not null by creating "Guest" if user is null
    This method might have bug when we forgot to set name of user or change "Guest"

  */
  let name = "Guest";
  if(user !== null && user.name !== null) name = user.name;
  console.log(name);  


  /*
    This method might be error when we forget to do null checki\
  */
  

  if(user !== null && user.hasAccess() && user.hasAccess !== null) {
    console.log("Welcome");
  }else{
    console.log("No access");
  }
}
