import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { WebView } from "react-native-webview";

function StarMapScreen(props) {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`;

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          placeholder="Enter latitude"
          onChangeText={(text) => {
            setLatitude(text);
          }}
        />
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          placeholder="Enter longitude"
          onChangeText={(text) => {
            setLongitude(text);
          }}
        />
        <WebView
          scalesPageToFit={true}
          source={{ uri: path }}
          style={{ marginTop: 20, marginBottom: 20 }}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});

export default StarMapScreen;
