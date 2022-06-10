import { Link } from "@react-navigation/native";
import React, { useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import WebView from "react-native-webview";
function Pdfview({ route, navigation }) {
  const { uri } = route.params;
  useEffect(() => {
    console.log(uri);
  }, []);

  const pdfUrl = "http://www.africau.edu/images/default/sample.pdf";
  const ulrdrive = "https://www.medicard.com.bo/assets/precios.pdf";
  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      {/* <View style={{ height: 100, width: "100%", backgroundColor: "red" }}>
        <Text>Hello</Text>
      </View>
      <View> */}
      <WebView
        source={{
          uri: `https://drive.google.com/viewerng/viewer?embedded=true&url=${uri}`,
          // uri: pdfUrl,
          // uri: ulrdrive,
        }}
      />
      {/* </View> */}
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
});
export default Pdfview;
