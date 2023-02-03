import React from "react";
import { Dimensions, View } from "react-native";
import { Text } from "@rneui/themed";
import { GLOBAL_STYLES } from "../../styles/Style";
import { LineChart } from "react-native-chart-kit";

export default function Analytics({ themeProvider }) {
  return (
    <View>
      <Text h1 style={[GLOBAL_STYLES.h1, { color: themeProvider.text }]}>
        Analytics
      </Text>
      <View
        style={{
          backgroundColor: themeProvider.background1,
          borderRadius: 4,
          marginVertical: 8,
          marginHorizontal: 8,
          paddingTop: 10,
          paddingBottom: 5,
          elevation: 4,
        }}>
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
          width={Dimensions.get("window").width - 24} // from react-native
          height={240}
          fromZero
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: themeProvider.background1,
            backgroundGradientTo: themeProvider.background1,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: () => themeProvider.textMuted,
            labelColor: () => themeProvider.text,
            propsForDots: {
              r: "5",
              strokeWidth: "3",
              stroke: themeProvider.accent,
            },
          }}
          bezier
          style={{}}
        />
      </View>
    </View>
  );
}
