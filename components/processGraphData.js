const processGraphData = (json) => {
  const threshold = parseFloat(json.threshold);

  const getColor = (value, threshold) => {
    if (value >= threshold) {
      return "#1DCE86";
    } else if (value >= threshold - 2) {
      return "#E6C93A";
    } else {
      return "#FF6257";
    }
  };

  const processedData = json.graph_struct.data.map((item) => ({
    ...item,
    frontColor: getColor(item.value, threshold),
  }));

  return {
    ...json,
    graph_struct: {
      ...json.graph_struct,
      data: processedData,
    },
  };
};

export default processGraphData;