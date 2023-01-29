import { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { TabView, Tab } from "@rneui/themed-edge";
import { LinearGradient } from "expo-linear-gradient";

// Components import
import ExercisesGroups from "./components/exerciseGroups/ExercisesGroups";
import Exercises from "./components/exercises/Exercises";
import Workouts from "./components/workouts/Workouts";
import Analytics from "./components/analytics/Analytics";
import Settings from "./components/settings/Settings";

// Styles
import { GLOBAL_STYLES } from "./styles/Style";

export default function App() {
  const [tabIndex, setTabIndex] = useState(2);
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <TabView
        value={tabIndex}
        onChange={setTabIndex}
        animationType="timing"
        disableSwipe={true}
        animationConfig={{ duration: 175 }}>
        <TabView.Item style={[styles.activeTab, GLOBAL_STYLES.pageContainer]}>
          <ExercisesGroups />
        </TabView.Item>
        <TabView.Item style={[styles.activeTab, GLOBAL_STYLES.pageContainer]}>
          <Exercises />
        </TabView.Item>
        <TabView.Item style={[styles.activeTab, GLOBAL_STYLES.pageContainer]}>
          <Workouts />
        </TabView.Item>
        <TabView.Item style={[styles.activeTab, GLOBAL_STYLES.pageContainer]}>
          <Analytics />
        </TabView.Item>
        <TabView.Item style={[styles.activeTab, GLOBAL_STYLES.pageContainer]}>
          <Settings />
        </TabView.Item>
      </TabView>

      <LinearGradient
        colors={["transparent", "#000000"]}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 75,
        }}
      />

      <Tab
        value={tabIndex}
        onChange={setTabIndex}
        containerStyle={{
          backgroundColor: "white",
        }}
        indicatorStyle={{
          backgroundColor: GLOBAL_STYLES.COLORS.accent,
          height: 3,
        }}
        variant="default">
        <Tab.Item
          // title="Exercise Groups"
          titleStyle={styles.TabItemTitle}
          containerStyle={styles.TabItemContainer}
          iconContainerStyle={styles.TabItemTitle}
          icon={{
            name: "folder-open-outline",
            type: "ionicon",
            color: GLOBAL_STYLES.COLORS.text,
          }}
        />
        <Tab.Item
          // title="Exercises"
          titleStyle={styles.TabItemTitle}
          containerStyle={styles.TabItemContainer}
          iconContainerStyle={styles.TabItemTitle}
          icon={{
            name: "list-outline",
            type: "ionicon",
            color: GLOBAL_STYLES.COLORS.text,
          }}
        />
        <Tab.Item
          // title="Workouts"
          titleStyle={styles.TabItemTitle}
          containerStyle={styles.TabItemContainer}
          iconContainerStyle={styles.TabItemTitle}
          icon={{
            name: "barbell-outline",
            type: "ionicon",
            color: GLOBAL_STYLES.COLORS.text,
          }}
        />
        <Tab.Item
          // title="Analytics"
          titleStyle={styles.TabItemTitle}
          containerStyle={styles.TabItemContainer}
          iconContainerStyle={styles.TabItemTitle}
          icon={{
            name: "bar-chart-outline",
            type: "ionicon",
            color: GLOBAL_STYLES.COLORS.text,
          }}
        />
        <Tab.Item
          // title="Settings"
          titleStyle={styles.TabItemTitle}
          containerStyle={styles.TabItemContainer}
          iconContainerStyle={styles.TabItemTitle}
          icon={{
            name: "cog-outline",
            type: "ionicon",
            color: GLOBAL_STYLES.COLORS.text,
          }}
        />
      </Tab>
    </>
  );
}

const styles = StyleSheet.create({
  activeTab: {
    backgroundColor: "#ececec",
    width: "100%",
  },
  TabItemTitle: {
    paddingVertical: 12,
    fontSize: 12,
    color: GLOBAL_STYLES.COLORS.text,
  },
  TabItemContainer: (active) => ({
    backgroundColor: active ? "#efefef" : "white",
    // elevation: 8,
    // borderRadius: 25,
  }),
});
