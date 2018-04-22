/*
  None of these functions are referenced anywhere, so
  they shouldn't be in the final build
*/
export default function Hello(name) {
  return `Hello, ${name}`;
}

export function Goodbye(name) {
  return `Goodbye, ${name}`;
}
