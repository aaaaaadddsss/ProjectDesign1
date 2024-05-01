import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperBox}>
        <Image
          source={require("../assets/Image.png")}
          resizeMode="contain"
          style={styles.HeaderImg}
        />
      </View>
      <View style={styles.lowerBox} />
      <View style={styles.textContainer}>
        <Text style={styles.Header}>Data Log</Text>
      </View>
      <View style={styles.Boxes}>
        <View style={styles.FirstBox}>
          <View style={styles.TextContainerFirstBox}>
            <Text style={styles.FirstBoxText}>04/06/24 </Text>
            <Text style={styles.FirstBoxText2}> 1.9 Ah </Text>
          </View>
        </View>
        <View style={styles.SecondBox}>
          <View style={styles.TextContainerSecondBox}>
            <Text style={styles.SecondBoxText}> 04/07/24 </Text>
            <Text style={styles.SecondBoxText2}> 1.9 Ah </Text>
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
    backgroundColor: "#FACC43",
    flex: 1,
  },
  lowerBox: {
    backgroundColor: "#FACC43",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textContainer: {
    position: "absolute",
    paddingTop: 150,
    left: 0,
    right: 0,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5, // Set the opacity of the shadow
    shadowRadius: 5, // Set the radius of the shadow
    elevation: 5, // This is for Android shadow
  },
  Header: {
    color: "white",
    fontFamily: "asap",
    fontSize: 70,
  },
  RemainingUse: {
    color: "white",
    fontFamily: "asap",
    fontSize: 90,
  },
  Boxes: {
    position: "absolute",
    top: "53%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  FirstBox: {
    backgroundColor: "white",
    padding: 15,
    width: 300,
    height: 80,
    borderRadius: 20,
    marginBottom: 20,
    borderColor: "#F2F2F2",
    borderWidth: 5,
  },
  TextContainerFirstBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  FirstBoxText: {
    fontSize: 25,
    fontFamily: "asap",
  },
  FirstBoxText2: {
    fontSize: 25,
    fontFamily: "asap",
  },
  SecondBox: {
    backgroundColor: "white",
    padding: 15,
    width: 300,
    height: 80,
    borderRadius: 20,
    borderColor: "#F2F2F2",
    borderWidth: 5,
  },
  TextContainerSecondBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  SecondBoxText: {
    fontSize: 25,
    fontFamily: "asap",
  },
  SecondBoxText2: {
    fontSize: 25,
    fontFamily: "asap",
  },
  Line: {
    width: "95%",
    height: 3,
    backgroundColor: "#1F9753",
  },
  HeaderImg: {
    opacity: 0.8,
  },
});
