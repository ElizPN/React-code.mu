export function Main() {
  const isAdult = true;
  let user;
  if (isAdult) {
    user = "You are adult";
  } else {
    user = "You are not adult";
  }
  return user;
}
