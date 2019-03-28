export const truncate = (string, maxLength) =>
  string.lenth <= maxLength ? string : `${string.substr(0, maxLength - 3)}...`;
