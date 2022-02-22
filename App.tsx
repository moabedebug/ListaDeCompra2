import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native"

export default function App(){
  return(
    <View style={styles.Container}>
      <View style={styles.ContainerTitle}>
        <Text style={styles.TextContainer}>Lista De Compra</Text>
      </View>
      <View style={styles.boxList}>
        <View style={styles.list}>
          
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1
  },
  ContainerTitle: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 35,
    borderColor: "#F00000",
    borderWidth: 1
    
  },
  TextContainer: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#1B3A4B"
  },
  boxList: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  list: {
    width: "95%",
    height: 238,
    backgroundColor: "#Ffff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
})
