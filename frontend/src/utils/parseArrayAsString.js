export default function parseArrayAsString(arrayAsString) {
  if (!arrayAsString) {
    return "";
  } else {
    return JSON.parse(arrayAsString);
  }
};
