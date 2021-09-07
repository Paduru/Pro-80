import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ImageBackground
          source={require("../assets/stars.gif")}
          style={styles.backgroundImage}
        >
          <View style={styles.titleBar}>
            <Text style={styles.titleText}> Stellar App</Text>
          </View>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              navigation.navigate("SpaceCraft");
            }}
          >
            <Text style={styles.routeText}>Space Craft</Text>
            <Image
              source={require("../assets/space_crafts.png")}
              style={styles.iconImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              navigation.navigate("StarMap");
            }}
          >
            <Text style={styles.routeText}>Star Map</Text>
            <Image
              source={require("../assets/star_map.png")}
              style={styles.iconImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              navigation.navigate("DailyPic");
            }}
          >
            <Text style={styles.routeText}>Daily Pic</Text>
            <Image
              source={require("../assets/daily_pictures.png")}
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  titleBar: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: "white",
  },
  routeText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "purple",
    marginTop: 75,
    paddingLeft: 30,
  },
  iconImage: {
    position: "absolute",
    width: 150,
    height: 150,
    resizeMode: "contain",
    right: -25,
    top: -50,
  },
});

export default HomeScreen;
