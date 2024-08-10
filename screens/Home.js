import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../config";

const Home = () => {
  const [predictedVoltage, setPredictedVoltage] = useState(null);
  const [predictedVoltageDate, setPredictedVoltageDate] = useState(null);

  useEffect(() => {
    const voltageRef = ref(db, "Data/PredictedFutureVoltage");

    const unsubscribe = onValue(voltageRef, (snapshot) => {
      const data = snapshot.val();
      setPredictedVoltage(data);
    });

    return () => unsubscribe();
  }, []);

  const getPredictedVotlageStatus = (voltage) => {
    if (voltage < 36) {
      return "Needs Maintenance";
    }
    return "Healthy";
  };

  useEffect(() => {
    const voltageRef = ref(db, "Data/Date");

    const unsubscribe = onValue(voltageRef, (snapshot) => {
      const data = snapshot.val();
      setPredictedVoltageDate(data);
    });

    return () => unsubscribe();
  }, []);

  const lowerBoxBackgroundColor =
    predictedVoltage !== null && predictedVoltage < 36 ? "#b11a21" : "#1F9753";

  return (
    <View style={styles.container}>
      <View style={styles.upperBox}>
        <Image
          source={require("../assets/Image.png")}
          resizeMode="contain"
          style={styles.HeaderImg}
        />
      </View>

      <View
        style={[styles.lowerBox, { backgroundColor: lowerBoxBackgroundColor }]}
      />

      <View style={styles.textContainer}>
        <Text style={styles.VoltagePredict}>
          {predictedVoltage !== null ? `${predictedVoltage}` : "Loading..."}V
        </Text>
        <Text style={styles.text1}>Predicted Future Voltage</Text>
        <Text style={styles.date}>
          {predictedVoltageDate !== null
            ? `${predictedVoltageDate}`
            : "Loading..."}
        </Text>
      </View>

      <View style={styles.Boxes}>
        <View style={styles.FirstBox}>
          <View style={styles.TextContainerforBoxes}>
            <Text style={styles.HeaderforBoxes}>Suggested future voltage</Text>
            <View style={styles.Line} />
            <Text style={styles.ResultforBoxes}>36 V Above</Text>
          </View>
        </View>

        <View style={styles.SecondBox}>
          <View style={styles.TextContainerforBoxes}>
            <Text style={styles.HeaderforBoxes}>Future Battery Health</Text>
            <View style={styles.Line} />
            <Text style={styles.ResultforBoxes}>
              {predictedVoltage !== null
                ? getPredictedVotlageStatus(predictedVoltage)
                : "Loading..."}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  upperBox: {
    backgroundColor: "#1F9753",
    flex: 1,
  },
  lowerBox: {
    backgroundColor: "#1F9753",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "65%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textContainer: {
    position: "absolute",
    paddingTop: 120,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  VoltagePredict: {
    color: "white",
    fontFamily: "asap",
    fontSize: 100,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 10,
  },
  text1: {
    color: "white",
    fontFamily: "asap",
    fontSize: 40,
    textDecorationLine: "underline",
  },
  date: {
    color: "white",
    fontFamily: "asap",
    fontSize: 20,
    fontWeight: "bold",
  },
  Boxes: {
    position: "absolute",
    top: "45%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  FirstBox: {
    backgroundColor: "white",
    padding: 15,
    width: 500,
    height: 200,
    borderRadius: 20,
    marginBottom: 40,
    borderColor: "#F2F2F2",
    borderWidth: 5,
    justifyContent: "center",
  },
  TextContainerforBoxes: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  HeaderforBoxes: {
    fontSize: 25,
    fontFamily: "asap",
    color: "#374353",
    paddingBottom: 5,
  },
  ResultforBoxes: {
    fontSize: 50,
    fontFamily: "asap",
    color: "#374353",
    alignSelf: "flex-end",
    paddingTop: 30,
  },
  SecondBox: {
    backgroundColor: "white",
    padding: 15,
    width: 500,
    height: 200,
    borderRadius: 20,
    borderColor: "#F2F2F2",
    borderWidth: 5,
  },
  Line: {
    alignSelf: "center",
    width: "98%",
    height: 3,
    backgroundColor: "#1F9753",
  },
  HeaderImg: {
    opacity: 0.6,
  },
});
