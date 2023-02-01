import { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import uuid from "react-native-uuid";
import { TabView, Tab } from "@rneui/themed-edge";
import { LinearGradient } from "expo-linear-gradient";

// Components import
import ExerciseGroup from "./components/exerciseGroups/ExerciseGroups";
import Exercises from "./components/exercises/Exercises";
import Workouts from "./components/workouts/Workouts";
import Analytics from "./components/analytics/Analytics";
import Settings from "./components/settings/Settings";

// Styles
import { GLOBAL_STYLES, useTheme } from "./styles/Style";

export default function App() {
  const [theme, setTheme] = useState("light");
  const themeProvider = useTheme(theme);
  const [tabIndex, setTabIndex] = useState(4);

  const [exerciseGroups, setExerciseGroups] = useState([]);
  const [exerciseList, setExerciseList] = useState([
    {
      name: "Pushup",
      color: "#2f9fb4",
      icon: "barbell-outline",
      id: uuid.v4(),
    },
    {
      name: "Pullup",
      color: "#a690be",
      icon: "barbell-outline",
      id: uuid.v4(),
    },
    {
      name: "Leg Raises",
      color: "#7a4d4a",
      icon: "barbell-outline",
      id: uuid.v4(),
    },
    {
      name: "Butterflies",
      color: "#32a3fa",
      icon: "barbell-outline",
      id: uuid.v4(),
    },
    {
      name: "Dips",
      color: "#756135",
      icon: "barbell-outline",
      id: uuid.v4(),
    },
  ]);

  const styles = StyleSheet.create({
    activeTab: {
      backgroundColor: themeProvider.background,
      width: "100%",
    },
    TabItemTitle: {
      paddingVertical: 12,
      fontSize: 12,
      color: themeProvider.text,
    },
    TabItemContainer: (active) => ({
      backgroundColor: active ? themeProvider.background2 : themeProvider.background,
    }),
  });

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
          <ExerciseGroup
            themeProvider={themeProvider}
            exerciseGroups={exerciseGroups}
            setExerciseGroups={setExerciseGroups}
            exerciseList={exerciseList}
            setExerciseList={setExerciseList}
          />
        </TabView.Item>
        <TabView.Item style={[styles.activeTab, GLOBAL_STYLES.pageContainer]}>
          <Exercises
            themeProvider={themeProvider}
            exerciseList={exerciseList}
            setExerciseList={setExerciseList}
            setExerciseGroup={setExerciseGroups}
          />
        </TabView.Item>
        <TabView.Item style={[styles.activeTab, GLOBAL_STYLES.pageContainer]}>
          <Workouts themeProvider={themeProvider} />
        </TabView.Item>
        <TabView.Item style={[styles.activeTab, GLOBAL_STYLES.pageContainer]}>
          <Analytics themeProvider={themeProvider} />
        </TabView.Item>
        <TabView.Item style={[styles.activeTab, GLOBAL_STYLES.pageContainer]}>
          <Settings themeProvider={themeProvider} setTheme={setTheme} />
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
          backgroundColor: themeProvider.accent,
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
            color: themeProvider.text,
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
            color: themeProvider.text,
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
            color: themeProvider.text,
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
            color: themeProvider.text,
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
            color: themeProvider.text,
          }}
        />
      </Tab>
    </>
  );
}
