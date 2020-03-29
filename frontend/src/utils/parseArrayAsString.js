export default function parseArrayAsString(arrayAsString) {
  if (!arrayAsString) {
    return "";
  } else {
    let finalString = arrayAsString.replace("[", "");
    finalString = finalString.replace("]", "");
    finalString = finalString.replace(/"/g, "");
    finalString = finalString.replace(/,/g, ", ");
    return finalString;
  }
};
