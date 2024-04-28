export const getOrderBy = (sortBy, orderBy) => {
  if (sortBy === "title" && orderBy === "asc") {
    return "Name (a-z)";
  }
  if (sortBy === "title" && orderBy === "desc") {
    return "Name (z-a)";
  }
  if (sortBy === "createdAt" && orderBy === "asc") {
    return "Create (lowest)";
  }
  if (sortBy === "createdAt" && orderBy === "desc") {
    return "Create (highest)";
  }
};
