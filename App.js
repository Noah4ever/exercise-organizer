import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Analytics from "./components/analytics/Analytics";
import Exercises from "./components/exercises/Exercises";
import Settings from "./components/settings/Settings";
import Workouts from "./components/workouts/Workouts";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Exercises />
      <Workouts />
      <Analytics />
      <Settings />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
