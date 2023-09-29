export const formatDate = (input) => {
  const dateString = String(input);
  if (!/^\d{8}$/.test(dateString)) {
    throw new Error("Input must be a string or number in the format YYYYMMDD");
  }
  const year = dateString.slice(0, 4);
  const month = dateString.slice(4, 6);
  const day = dateString.slice(6, 8);

  return `${year}/${month}/${day}`;
};
