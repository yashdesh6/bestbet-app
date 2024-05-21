import React from "react";
import { Text } from "react-native";

const processGraphData = (json, type, isMain) => {
  const threshold = parseFloat(json.response.bet_number[0]);

  const getColor = (value, threshold, isMain) => {
    if (isMain) {
      if (value >= threshold + 1) {
        return "#1DCE86"; // green
      } else if (value >= threshold - 1.5) {
        return "#E6C93A"; // yellow
      } else {
        return "#FF6257"; // red
      }
    } else {
      return "#009AFA";
    }
  };

  const processedData = json.response.player_data.response.content[
    "10_games"
  ].map((item) => {
    let key = type.charAt(0).toUpperCase() + type.slice(1);
    if (key == "Rebounds") {
      key = "Total Rebounds";
    }
    const value = item[key];
    const color = getColor(value, threshold, isMain);
    return {
      value,
      frontColor: color,
      topLabelComponent: () => (
        <Text style={{ color: color, fontWeight: "bold" }}>{value}</Text>
      ),
    };
  });

  return {
    ...json,
    graph_struct: {
      ...json.graph_struct,
      data: processedData,
    },
  };
};

export default processGraphData;
