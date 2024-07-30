import processGraphData from "./functions/processGraphData";
import { BarChart } from "react-native-gifted-charts";
import { Text, View, Dimensions } from "react-native";

const GraphDisplay = (props) => {
  const width = Dimensions.get("window").width - 64;
  const newData = processGraphData(props.data, props.type, props.isMain);

  const title = props?.type || "Player Performance";

  return (
    <View
      style={{
        width: width,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 22,
          fontFamily: "Inter-Bold",
        }}
      >
        {title}
      </Text>
      {props.isMain ? (
        <BarChart
          spacing={8}
          barWidth={20}
          noOfSections={7}
          barBorderRadius={4}
          data={newData.graph_struct.data}
          yAxisThickness={0}
          xAxisThickness={0}
          hideRules
          showReferenceLine1
          referenceLine1Position={parseFloat(newData.threshold)}
          referenceLine1Config={{
            color: "#F7F7F7",
            dashWidth: 12,
            dashGap: 10,
            thickness: 1.5,
          }}
          yAxisTextStyle={{ color: "white" }}
          xAxisLabelsHeight={4}
        />
      ) : (
        <BarChart
          spacing={8}
          barWidth={20}
          noOfSections={7}
          barBorderRadius={4}
          data={newData.graph_struct.data}
          yAxisThickness={0}
          xAxisThickness={0}
          hideRules
          yAxisTextStyle={{ color: "white" }}
          xAxisLabelsHeight={4}
        />
      )}
    </View>
  );
};

export default GraphDisplay;
