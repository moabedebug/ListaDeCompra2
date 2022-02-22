import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native"

export default function App(){
  return(
    <View style={styles.Container}>
      <Text style={styles.TextContainer}>Lista De Compra</Text>
      <View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 35
    
  },
  TextContainer: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#1B3A4B"
  }
})
