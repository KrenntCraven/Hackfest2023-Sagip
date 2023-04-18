import React from "react";
import {StyleSheet, Text, Linking, Button, ScrollView,
  View, Image, TouchableOpacity,} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import BloodDonationStart from "./BloodDonationStart";


export default function DonatorMap() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <ScrollView style={{ paddingTop: 50, backgroundColor: "#fff", flex: 1 }}>
      <View style={{ paddingHorizontal: 20 }}>
      
      <View style={{justifyContent: "center", alignItems:"center"}}>
        <Text style={{textAlign:"center", fontSize: 25, fontWeight:"bold"}}>
            Blood Facility Locator
        </Text>
        <Text style={{textAlign:"center", fontSize: 13, 
                    marginHorizontal: 35, marginVertical: 20}}>
            Shown are the nearest blood facilities in your location.
        </Text>

        <Image
          style={{ width: 330, height: 397 }}
          source={require("../assets/FakeMap.png")}/>

        <Text style={{textAlign:"center", fontSize: 13,marginVertical: 20}}>
            Selected Blood Facility:
        </Text>
        <Text style={{textAlign:"center", fontSize: 15, fontWeight:"bold"}}>
            Red Cross Caloocan Chapter, 144 San Jose St.
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate(BloodDonationStart)}>
            <View style={{backgroundColor: "#DD4438", borderRadius: 10,
                        justifyContent: "center", alignItems:"center",
                        height: 40, width: 200, marginVertical: 15}}>
                <Text style={{color: "white"}}>Donate Here</Text>
            </View>
        </TouchableOpacity>

      </View>
        

        

      </View>
      <View style={{ width: "100%", height: 130 }}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  setFontSizeOne: {
    fontSize: 15, // Define font size here in Pixels
  },
  setFontSizeTwo: {
    fontSize: 20, // Define font size here in Pixels
    fontWeight: "bold",
    letterSpacing: -0.4,
  },
  setFontSizeThree: {
    fontSize: 25, // Define font size here in Pixels
  },
  setFontSizeFour: {
    fontSize: 30, // Define font size here in Pixels
  },
  // Gray
  setColor: {
    color: "#434343",
  },
  // Red
  setColor2: {
    color: "#DD4438",
  },
});

const AccountSettingButtons = StyleSheet.create({
    container:{
        height: 50, 
        width: '100%', 
        borderBottomWidth: 0.3, 
        borderColor: "gray",
        justifyContent: "center",
    }
});

const DonationButton = StyleSheet.create({
  // I want to donate
  Container1: {
    backgroundColor: "#FFFFFF",
    borderWidth: 0.5,
    borderColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 110,
    width: 130,
  },
  // I need Blood
  Container2: {
    backgroundColor: "#DD4438", borderWidth: 0.5, borderColor: "#FFFFFF",
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05, shadowRadius: 10, elevation: 10, borderRadius: 10,
    alignItems: "center", justifyContent: "center", height: 110, width: 130,
  },
  Button1: {
    color: "#FFFFFF", fontWeight: "700", fontSize: 14,
    position: "absolute", bottom: 10,
  },
  Button2: {
    color: "#DD4438", fontWeight: "700", fontSize: 14,
    position: "absolute", bottom: 10,
  },
});
