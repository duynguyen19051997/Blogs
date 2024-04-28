export const getNumberOfPage = (total, limit) => {
  if (total <= 0 || limit <= 0) {
    return 0;
  }

  return Math.ceil(total / limit);
};
