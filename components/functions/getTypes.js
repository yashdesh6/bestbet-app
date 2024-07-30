const getTypes = (type) => {
  type = type.toLowerCase();

  if (type === "points") {
    const types = ["Points"];
    return types;
  } else if (type === "assists") {
    const types = ["Assists"];
    return types;
  } else if (type === "rebounds") {
    const types = ["Rebounds"];
    return types;
  } else if (type === "points + assists") {
    const types = ["Points", "Assists", "Points + Assists"];
    return types;
  } else if (type === "points + rebounds") {
    const types = ["Points", "Rebounds", "Points + Rebounds"];
    return types;
  } else if (type === "rebounds + assists") {
    const types = ["Assists", "Rebounds", "Assists + Rebounds"];
    return types;
  } else if (type === "points + rebounds + assists") {
    const types = ["Points", "Assists", "Rebounds", "Points + Assists + Rebounds"];
    return types;
  }
};

export default getTypes;
