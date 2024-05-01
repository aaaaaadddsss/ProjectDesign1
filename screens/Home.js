import { View, Text, StyleSheet, Image, Modal, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { firebase } from "../config";

const Home = () => {
  const [remainingCapacity, setRemainingCapacity] = useState(null);
  const [remainingUses1, setRemainingUses1] = useState(null);
  const [remainingUses2, setRemainingUses2] = useState(null);
  const [originalCapacity, setOriginalCapacity] = useState(null);
  const [modalOpenOrigCapacity, setModalOpenOrigCapacity] = useState(false);
  const [modalOpenRemUse, setModalOpenRemUse] = useState(false);
  const [modalOpenRemCap, setModalOpenRemCap] = useState(false);

  useEffect(() => {
    const docRef = firebase
      .firestore()
      .collection("Data")
      .doc("TTPMqXh87rtqMBFN2f5V");

    const unsubscribe = docRef.onSnapshot((doc) => {
      if (doc.exists) {
        const data = doc.data();
        setRemainingCapacity(data.remainingCapacity);
      } else {
        console.log("No such document!");
      }
    });
    // Cleanup function to unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const docRef = firebase
      .firestore()
      .collection("Data")
      .doc("TTPMqXh87rtqMBFN2f5V");

    const unsubscribe = docRef.onSnapshot((doc) => {
      if (doc.exists) {
        const data = doc.data();
        setRemainingUses1(data.remainingUses1);
      } else {
        console.log("No such document!");
      }
    });
    // Cleanup function to unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const docRef = firebase
      .firestore()
      .collection("Data")
      .doc("TTPMqXh87rtqMBFN2f5V");

    const unsubscribe = docRef.onSnapshot((doc) => {
      if (doc.exists) {
        const data = doc.data();
        setRemainingUses2(data.remainingUses2);
      } else {
        console.log("No such document!");
      }
    });
    // Cleanup function to unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const docRef = firebase
      .firestore()
      .collection("Data")
      .doc("TTPMqXh87rtqMBFN2f5V");

    const unsubscribe = docRef.onSnapshot((doc) => {
      if (doc.exists) {
        const data = doc.data();
        setOriginalCapacity(data.originalCapacity);
      } else {
        console.log("No such document!");
      }
    });
    // Cleanup function to unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

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
        <Text style={styles.NumberCycle}>Remaining Capacity</Text>
        <Text style={styles.RemainingUse}>
          {" "}
          {remainingCapacity !== null
            ? `${remainingCapacity} Ah`
            : "Loading..."}
        </Text>
        <Pressable onPress={() => setModalOpenRemCap(true)}>
          <Image
            source={require("../assets/lightbulb.png")}
            style={styles.modalOpen2}
          />
        </Pressable>
      </View>
      <Modal visible={modalOpenRemCap} animationType="fade">
        <View style={styles.modalContent}>
          <Image
            source={require("../assets/image2.png")}
            resizeMode="contain"
          />
          <Text style={styles.modalText}>
            The capacity with the battery keeping normal peak performance and
            measured relative to when the product was new.
          </Text>
        </View>
        <Pressable onPress={() => setModalOpenRemCap(false)}>
          <Image
            source={require("../assets/close.png")}
            style={styles.modalClose}
          />
        </Pressable>
      </Modal>
      <View style={styles.Boxes}>
        <View style={styles.SOHBox}>
          <View style={styles.TextContainerSOH}>
            <Text style={styles.SOHText}> Original Capacity </Text>
            <Modal visible={modalOpenOrigCapacity} animationType="fade">
              <View style={styles.modalContent}>
                <Image
                  source={require("../assets/image2.png")}
                  resizeMode="contain"
                />
                <Text style={styles.modalText}>
                  Battery capacity (AH) is defined as a product of the current
                  that is drawn from the battery while the battery is able to
                  supply the load until its voltage is dropped to lower than a
                  certain value for each cell.1
                </Text>
              </View>
              <Pressable onPress={() => setModalOpenOrigCapacity(false)}>
                <Image
                  source={require("../assets/close.png")}
                  style={styles.modalClose}
                />
              </Pressable>
            </Modal>
            <View style={styles.Line} />
            <View style={styles.BottomSection}>
              <Pressable onPress={() => setModalOpenOrigCapacity(true)}>
                <Image
                  source={require("../assets/tooltip.png")}
                  style={styles.modalOpen}
                />
              </Pressable>
              <Text style={styles.SOHPercentage}>
                {" "}
                {originalCapacity !== null
                  ? `${originalCapacity} Ah`
                  : "Loading..."}{" "}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.BattStatusBox}>
          <View style={styles.TextContainerBattStat}>
            <Text style={styles.BattStatText}> Remaining Uses </Text>
            <View style={styles.Line} />
            <Modal visible={modalOpenRemUse} animationType="fade">
              <View style={styles.modalContent}>
                <Image
                  source={require("../assets/image2.png")}
                  resizeMode="contain"
                />
                <Text style={styles.modalText}>
                  RUL is the required amount of time, which is commonly
                  calculated using the numerical subsequent charge-discharge
                  cycles, from the active profile point to the end of a
                  battery's life. A battery's lifespan ends when its remaining
                  capacity reaches 70-80% of its initial value, according to a
                  widely accepted generalization.
                </Text>
              </View>
              <Pressable onPress={() => setModalOpenRemUse(false)}>
                <Image
                  source={require("../assets/close.png")}
                  style={styles.modalClose}
                />
              </Pressable>
            </Modal>
            <View style={styles.BottomSection1}>
              <Text style={styles.BattStatResult}>
                <Pressable onPress={() => setModalOpenRemUse(true)}>
                  <Image
                    source={require("../assets/tooltip.png")}
                    style={styles.modalOpen1}
                  />
                </Pressable>{" "}
                {remainingUses1 !== null ? `${remainingUses1}` : "Loading..."}{" "}
                to{" "}
                {remainingUses2 !== null ? `${remainingUses2}` : "Loading..."}{" "}
              </Text>
            </View>
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
    height: "50%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textContainer: {
    position: "absolute",
    paddingTop: 80,
    left: 0,
    right: 0,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  NumberCycle: {
    color: "white",
    fontFamily: "asap",
    fontSize: 40,
  },
  RemainingUse: {
    color: "white",
    fontFamily: "asap",
    fontSize: 90,
  },
  Boxes: {
    position: "absolute",
    top: "40%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  SOHBox: {
    backgroundColor: "white",
    padding: 15,
    width: 300,
    height: 150,
    borderRadius: 20,
    marginBottom: 40,
    borderColor: "#F2F2F2",
    borderWidth: 5,
    justifyContent: "center",
  },
  TextContainerSOH: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  SOHText: {
    fontSize: 25,
    fontFamily: "asap",
    color: "#374353",
  },
  SOHPercentage: {
    paddingTop: 5,
    paddingLeft: 30,
    fontSize: 55,
    fontFamily: "asap",
    color: "#374353",
  },
  BattStatusBox: {
    backgroundColor: "white",
    padding: 15,
    width: 300,
    height: 150,
    borderRadius: 20,
    borderColor: "#F2F2F2",
    borderWidth: 5,
  },
  TextContainerBattStat: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  BattStatText: {
    fontSize: 25,
    fontFamily: "asap",
    color: "#374353",
  },
  BattStatResult: {
    paddingTop: 5,
    paddingLeft: 5,
    fontSize: 45,
    fontFamily: "asap",
    color: "#374353",
  },
  Line: {
    width: "95%",
    height: 3,
    backgroundColor: "#1F9753",
  },
  HeaderImg: {
    opacity: 0.6,
  },
  modalOpen: {
    width: 30,
    height: 30,
    top: 30,
  },
  modalOpen1: {
    width: 30,
    height: 30,
    top: 5,
  },
  modalOpen2: {
    width: 50,
    height: 50,
  },
  modalClose: {
    width: 50,
    height: 50,
    top: -30,
    alignSelf: "center",
  },
  BottomSection: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 15,
    alignContent: "space-between",
  },
  BottomSection1: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 20,
    alignContent: "space-between",
  },
  modalContent: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    marginTop: "auto",
  },
  modalText: {
    fontFamily: "asap",
    textAlign: "justify",
    fontSize: 20,
    position: "absolute",
    color: "#ffffff",
  },
});
