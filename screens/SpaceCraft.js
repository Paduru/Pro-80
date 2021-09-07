import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import axios from "axios";

function SpaceCraftScreen(props) {
  const [airCrafts, setAirCrafts] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
        .then((response) => {
          setAirCrafts(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.25 }}>
        <Text> Space Crafts </Text>
      </View>
      <View style={{ flex: 0.75 }}>
        <FlatList
          keyExtractor={(item, index) => {
            index.toString();
          }}
          data={airCrafts}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 10,
                  elevation: 10,
                }}
              >
                <Image
                  source={{ uri: item.agency.image_url }}
                  style={{
                    width: "100%",
                    height: 200,
                    marginTop: 15,
                    marginBottom: 15,
                    marginRight: 10,
                  }}
                ></Image>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {item.name}
                </Text>
                <Text style={{ color: "#696969" }}> {item.agency.name} </Text>
                <Text>DESCRIPTION</Text>
                <Text
                  style={{ color: "#A9A9A9", marginLeft: 10, marginRight: 10 }}
                >
                  {item.agency.description}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default SpaceCraftScreen;
