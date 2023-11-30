import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect,useState } from "react";
import Header from "../components/Header";
import CommonBtn from "../components/CommonBtn";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";


const HomeScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState(null);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => Logout()}>
          <Image source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAABSUlLy8vL7+/sgICA1NTWoqKilpaWenp6bm5tPT0/39/diYmJ7e3v8/PzLy8tfX19GRkZpaWmFhYUuLi4JCQnp6em9vb14eHi2trbW1tYpKSnh4eFYWFiSkpJBQUEYGBiJiYlvb2/FxcVDQ0PPz8+weAOqAAAFdklEQVR4nO2d2VbjMAxAHdKmQEMa6EpLacP2/584E9Z4KY0tGUk5vu8z6B7J8RJXUaoveT053B6X41UGoJnXvf/gn7LeVAVErMt8RG1jMdo8Ytm9c0MtZJBXqHotG2qnLvt7dL8se6W2+qFcRPD7D7XXN9smjmDG5FmTX0Ty45LDN9C89ysX1G7vXEfzy7IXarkW/Cnih3tquZabiIILarmW218CbJYFgGm1o5ZreXa7re4v63WelyMA1GofOKf51WFPHRcaE4fflMXjD4md7XdkuqcLY7S0BC+pY8JlbvoVa+qQcKlNQRbTMyYPhuATdUDYmKvRa+qAsMkNQRYLLFSMFD5Tx4NOqW8JlyV1QOhc6ikczjLtm7EmeKAOBx99vTamDicC+p5iSx1OBJquYDGjDgcfvUgn1OFEQNsXrnLqcCKgnT7NqaOJQKktuoe0p/9irQ3DIRap9qB5oI4mBtqDpqKOJgZPXcOBHc18oK1oWL2HxkJ7F8Pi6B0b7ZBtgBsnpbQbJUOcLNRFMhRPMpRPMpRPMpRPMpRPMpRPMpRPMpRPMpRPMpRPMpRPMqRlX42z4hoWFmvDr5cqoAsinA1/3qlALlAwNuxe6wUoMjZ87YYW/mqTsWGWoSjyNdTvUIQXKl9DI4fBWWRseMRRZGy4MQ3DFBkbOn4tGDIWORuqKUYWWRvOMBRZGyp1By9U5oYzuCJzQ4SxyN4QPBbZG4ILlb8hNIsCDIGKEgxhk4YMQ8hYlGEImTSkGIaPRSmG4WNRjmHoWJRjGDoWJRmGjUVJhmGFKsowKIuyDEMUhRkGTBriDL3HojhD70lDoKHnWBRo6DkWRRo6xuLpLIo09CpUmYauQj2lKNWw/6QRajgjpn+hhhjOtvNiTM2D2Z/slGKA4f7V/r+Z4CpUf8O8IQq/D45fo/sbxmxUC8bRnMXb0Gzuxgx7KHob2vcHWGE3m/M23FLF3o/HwefQbtrpbWhexmIGwjjU/wU3MJ6lvJPouE0csKbZOdZLTLg6V3M916Xllb3q/XscH3FwdpYN3FvMIB3aMZg51lauDMrdH/YWFGvYW1CqodV//HR3Z5mG/TMo1NC+WntaUKShncHfGpALNPQYgy3yDL1KVAk09BUUZ+hZokqcoc808YksQ+8SVcIMAzIoy9B/DLYIMgwpUSXJMFBQjqHfUq2DFMNgQSmGoSWqpBgCBGUYhpeokmEIEpRgCClRJcEQlkEBhlBB9obAElXsDeGCzA3BJaqYG2IIsja8h5eoYm34giLI2dC6Xxn2aU3GhjiCjA3NGxFBJao4Gxo5DP76K2PDAkWQs2H3flloiSrWhp3zUYAga8PR82dcoK8ycjZUqm4/ZVTBPtLE2xCDZCifZCifZCifZCifZCifZCifZCifZCifZCifZCifZCif4X9bXbtZDDt6ZUrVNdxRRxODRdfQ0RlEPk9dw/AP8jBm0jWsqKOJwa5r+EAdTQz0+wBDnC5KrUHCC3U4MdDujt1QRxMD7VHjaA0iH+1RA3tjzpWma1jMqMOJgLaqgX0ukil6mTZDTOJYU3yiDicCV5rhELdQpd6tZ1lSB4TPtZ5Eu22deHKj5dKCOiB8jCQCLnOyxexPdqAOCJ3aMHS0H5SO9WP+Yk0dEjKjpak4uEObnWWYHWvqoHCZ2IrZdFh7/oVDMVsdhrSIe3Ypts/Vy3qd5yWgySG12Tf2DzZ/aJZFONOKy/uCiK26uRw2V+dDDYXLev7qfKihcHnt8+Zo7YqD3WmbiDJar2c+Z7Hb8floZRuq0jn5D8lQqb39Q3Ewd9RSBmv0iYPfWfNo83g+7P6weZRqrDdVcT72foJ8FqcmeT053B6XY8g82cz/fhv2DyRPUGU5fZNEAAAAAElFTkSuQmCC'}}
            style={{width:30,height:30, marginRight:20}}
          />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() =>navigation.navigate("ProfileScreen")}>
          <Image source={{uri: 'https://tse1.mm.bing.net/th?id=OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa&pid=Api&rs=1&c=1&qlt=95&w=116&h=116'}}
            style={{width:30,height:30, marginRight:20}}
          />
        </TouchableOpacity>
      ),
    });
    const Logout=() =>{
      signOut(auth).then(() => {
        navigation.replace("Login");
      }).catch((error) => {
        // An error happened.
      });
      

    }
    
  },[]);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Header />
        <Text style={styles.heading}>Select Category</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
             data={['Skin Doctor', 'Mental Health', 'Physical Health', 'Homopethy', 'Alopethy', 'Aurvedic', 'Gynac']}
            horizontal
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity style={styles.Gradient}  onPress={() => {
                navigation.navigate("SearchScreen");
              }}>
                  <Text style={styles.textStyle}>{'Skin Doctor'}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Top Rated Doctors</Text>
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <FlatList
            numColumns={2}
            data={[1, 1, 1, 1, 1, 1]}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.docItem}>
                  <Image
                    source={require("../../src/images/doctor.png")}
                    style={styles.docImg}
                  />
                  <Text style={styles.docName}>Doctor {index + 1}</Text>
                  <Text style={styles.docSpl}>Skin Specialist</Text>
                  <Text
                    style={[
                      styles.docStatus,
                      {
                        color: index / 2 == 0 ? "green" : "red",
                        opacity: index / 2 == 0 ? 1 : 0.5,
                      },
                    ]}
                  >
                    {index / 2 == 0 ? "Available" : "Busy"}
                  </Text>

                  <CommonBtn
                    w={170}
                    h={40}
                    status={index / 2 == 0 ? true : false}
                    txt={"Book Appointment"}
                    onClick={() => {
                      if (index / 2 == 0) {
                        navigation.navigate("BookAppointment");
                      }
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
    <View style={styles.bottomView}>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Completed')
      }}>
        <Image source={require('../../src/images/confirm.png')} style={styles.bottomIcon}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Pending')
      }}>
        <Image source={require('../../src/images/pending.png')} style={styles.bottomIcon}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate('SearchScreen')
      }}>
        <Image source={require('../../src/images/search.png')} style={styles.bottomIcon}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Doctor')
      }}>
        <Image source={require('../../src/images/doctor.png')} style={styles.bottomIcon}/>
      </TouchableOpacity>
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
  },
  Gradient: {
    width: 120,
    height: 100,
    borderRadius: 10,
    marginLeft: 10,
    backgroundColor: "#2683C3",
  },
  textStyle: {
    marginTop: 37,
    marginLeft: 10,
    fontSize: 18,
    color: "#fff",
  },
  docItem: {
    width: "45%",
    height: 230,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 0.2,
    margin: 10,
  },
  docImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 20,
  },
  docName: {
    fontSize: 16,
    fontWeight: "700",
    alignSelf: "center",
    marginTop: 10,
  },
  docSpl: {
    fontSize: 14,
    fontWeight: "600",
    alignSelf: "center",
    color: "green",
    marginTop: 5,
    backgroundColor: "#f2f2f2",
    padding: 5,
    borderRadius: 10,
  },
  docStatus: {
    fontSize: 14,
    fontWeight: "600",
    alignSelf: "center",
    marginTop: 5,
    alignSelf: "center",
  },
  bottomView: {
    width: "99%",
    height: 50,
    borderRadius: 10,
    elevation: 5,
    position: "absolute",
    bottom: 5,
    backgroundColor: "#2683C3",
    alignSelf:'center',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'

  },
  bottomIcon:{
    width:50,
    height:50,
  }
});
export default HomeScreen;
