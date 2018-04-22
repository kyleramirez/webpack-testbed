/* None of these exports are referenced, so even though
   they're re-exported here, they shouldn't be in the final build
 */
export Hello, { Goodbye } from "./sub-library-folder/functions"

/* Aloha isn't referenced anywhere, so it shouldn't be in the final build */
export default function Aloha(name) {
  return `Aloha, ${name}`;
}

/* Ohayo is referenced */
export function Ohayo(name) {
  return `Ohayo, ${name}`;
}
