const compareIgnoreCase = (str1, str2) => {
  if (!str1 || !str2) return;

  return str1.toLocaleUpperCase('en') === str2.toLocaleUpperCase('en');
};
export { compareIgnoreCase };
