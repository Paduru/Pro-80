import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Alert,
  SafeAreaView,
  Image,
} from "react-native";
import axios from "axios";

import API_KEY from "../config";

function DailyPicScreen(props) {
  const [dailyPic, setDailyPic] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDailyPic = async () => {
      var url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

      axios
        .get(url)
        .then((response) => {
          setDailyPic(response.data);
        })
        .catch((error) => {
          Alert.alert("Couldn't get information", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    getDailyPic();
  }, []);
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text> Getting Picture Information... </Text>
      </View>
    );
  } else {
    var dailyPicTitle = dailyPic.title;
    var dailyPicImage = dailyPic.url;
    var dailyPicDesc = dailyPic.explanation;
    console.log(dailyPic, dailyPicTitle);
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.header}>
            <Text style={styles.headerText}> Daily Pic </Text>
          </View>
          <View style={styles.dailyPic}>
            <Text style={styles.dailyPicTitle}> {dailyPicTitle} </Text>
            <Image
              source={{
                uri: dailyPicImage,
              }}
              style={styles.dailyPicImage}
            />
            <Text style={styles.dailyPicDesc}> {dailyPicDesc} </Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { backgroundColor: "purple" },
  headerText: { fontSize: 40, textAlign: "center", color: "white" },
  dailyPic: { marginTop: 15, alignItems: "center" },
  dailyPicTitle: { fontSize: 25, color: "purple" },
  dailyPicImage: { width: 150, height: 150, marginTop: 15 },
  dailyPicDesc: { fontSize: 15, textAlign: "center", marginTop: 15 },
});

export default DailyPicScreen;
