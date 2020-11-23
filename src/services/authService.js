import jwtDecode from "jwt-decode";

let tokenName = "usertoken";

export function getUserData() {
  let token = localStorage.getItem(tokenName);
  return jwtDecode(token).user.id;
}
