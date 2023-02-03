import React from "react";
import { Dimensions, View } from "react-native";
import { Text } from "@rneui/themed";
import { GLOBAL_STYLES } from "../../styles/Style";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

export default function Analytics({ themeProvider }) {
  return (
    <View>
      <Text h1 style={[GLOBAL_STYLES.h1, { color: themeProvider.text }]}>
        Analytics
      </Text>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundGradientFrom: themeProvider.background3,
          backgroundGradientTo: themeProvider.background2,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "5",
            strokeWidth: "3",
            stroke: themeProvider.accent,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 4,
        }}
      />
    </View>
  );
}
