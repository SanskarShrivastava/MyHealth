import { StyleSheet, SafeAreaView, TextInput } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import filter from "lodash.filter";
const API_ENDPOINT = 'https://randomuser.me/api/';

export default function SearchScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState([]);
  const [SearchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchData(API_ENDPOINT);
  }, []);
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
      console.log(json.results);
      setFullData(json.results);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(fullData, (user) => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
  };
  const contains = ({ name, email }, query) => {
    const { first, last } = name;
    if (
      first.includes(query) ||
      last.includes(query) ||
      email.includes(query)
    ) {
      return true;
    }
    return false;
  };
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color="#5500dc" />
      </View>
    );
  }
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          Error in fetching data... Please check your network connection!
        </Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search"
        clearButtonMode="always"
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderColor: "#000",
          borderWidth: 1,
          borderRadius: 10,
        }}
        autoCapitalize="none"
        autoCorrect={false}
        value={SearchQuery}
        onChangeText={(query) => handleSearch(query)}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.login.username}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("BookAppointment");
              }}
            >
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri: item.picture.thumbnail }}
                  style={styles.image}
                />
                <View>
                  <Text style={styles.textName}>
                    {item.name.first} {item.name.last}
                  </Text>
                  <Text style={styles.textEmail}>{item.email}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("BookAppointment");
              }}
            >
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri: item.picture.thumbnail }}
                  style={styles.image}
                />
                <View>
                  <Text style={styles.textName}>
                    {item.name.first} {item.name.last}
                  </Text>
                  <Text style={styles.textEmail}>{item.email}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("BookAppointment");
              }}
            >
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri: item.picture.thumbnail }}
                  style={styles.image}
                />
                <View>
                  <Text style={styles.textName}>
                    {item.name.first} {item.name.last}
                  </Text>
                  <Text style={styles.textEmail}>{item.email}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("BookAppointment");
              }}
            >
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri: item.picture.thumbnail }}
                  style={styles.image}
                />
                <View>
                  <Text style={styles.textName}>
                    {item.name.first} {item.name.last}
                  </Text>
                  <Text style={styles.textEmail}>{item.email}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("BookAppointment");
              }}
            >
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri: item.picture.thumbnail }}
                  style={styles.image}
                />
                <View>
                  <Text style={styles.textName}>
                    {item.name.first} {item.name.last}
                  </Text>
                  <Text style={styles.textEmail}>{item.email}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("BookAppointment");
              }}
            >
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri: item.picture.thumbnail }}
                  style={styles.image}
                />
                <View>
                  <Text style={styles.textName}>
                    {item.name.first} {item.name.last}
                  </Text>
                  <Text style={styles.textEmail}>{item.email}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("BookAppointment");
              }}
            >
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri: item.picture.thumbnail }}
                  style={styles.image}
                />
                <View>
                  <Text style={styles.textName}>
                    {item.name.first} {item.name.last}
                  </Text>
                  <Text style={styles.textEmail}>{item.email}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("BookAppointment");
              }}
            >
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri: item.picture.thumbnail }}
                  style={styles.image}
                />
                <View>
                  <Text style={styles.textName}>
                    {item.name.first} {item.name.last}
                  </Text>
                  <Text style={styles.textEmail}>{item.email}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("BookAppointment");
              }}
            >
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri: item.picture.thumbnail }}
                  style={styles.image}
                />
                <View>
                  <Text style={styles.textName}>
                    {item.name.first} {item.name.last}
                  </Text>
                  <Text style={styles.textEmail}>{item.email}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  textName: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "600",
  },
  textEmail: {
    fontSize: 14,
    marginLeft: 10,
    color: "grey",
  },
});
