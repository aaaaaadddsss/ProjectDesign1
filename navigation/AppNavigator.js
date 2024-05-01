import React, { useState, useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, StyleSheet, Animated } from "react-native";
import * as Font from "expo-font";
import Home from "../screens/Home";
import Battery from "../screens/Battery";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [splashVisible, setSplashVisible] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        asap: require("../assets/fonts/Asap-Regular.ttf"),
      });
      setFontLoaded(true);
    };

    loadFont();
  }, []);

  useEffect(() => {
    const fadeOutSplash = () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000, // Adjust the duration as needed
        useNativeDriver: true,
      }).start(() => {
        // Once fade out is complete, hide the splash screen
        setSplashVisible(false);
      });
    };

    // Fade in the splash screen
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start(() => {
      // After fading in, trigger the fade-out animation
      setTimeout(() => {
        fadeOutSplash();
      }, 1000); // Adjust the delay as needed
    });
  }, []);

  if (!fontLoaded || splashVisible) {
    return (
      <Animated.View
        style={[
          styles.splashContainer,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <Image
          source={require("../assets/Splash.png")}
          resizeMode="contain"
          style={styles.splashImage}
        />
      </Animated.View>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: [
          {
            position: "absolute",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 60,
            backgroundColor: "#FFFFFF",
          },
        ],
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#000000" : "#DDE1E1",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="BatteryScreen"
        component={Battery}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/battery.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#000000" : "#DDE1E1",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF", // Customize background color if needed
  },
  splashImage: {
    resizeMode: "contain",
  },
});

export default Tabs;
