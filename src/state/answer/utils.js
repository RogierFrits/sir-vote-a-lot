export const truncate = (string, maxLength) =>
  string.length <= maxLength ? string : `${string.substr(0, maxLength - 3)}...`;
