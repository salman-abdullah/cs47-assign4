
import { StyleSheet, Text, View } from "react-native";
import React from 'react'
import WebView from "react-native-webview";

const DetailsScreen = ({navigation, route}) => {
    const externalUrl = route.params.externalUrl
    return (
        <WebView
            source={{
            uri: externalUrl,
            }}
      />
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({});