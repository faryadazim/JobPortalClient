export function formatDate(dateString) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const formattedDate = `${day} ${months[monthIndex]} ${year}`;

  return formattedDate;
}

export const formatDateForInputJob = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export function truncateString(str) {
  var required = 42;
  if (str.length <= required) {
    return str;
  } else {
    return str.substring(0, required - 2) + "...";
  }
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const removeUnderscoreAndCapitalize = (str) => {
  // Split the string by underscores
  let words = str.split("_");

  // Capitalize the first letter of each word
  words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  // Join the words back together with spaces
  return words.join(" ");
};
 