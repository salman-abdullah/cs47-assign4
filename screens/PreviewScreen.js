
import { StyleSheet, Text, View } from "react-native";
import React from 'react'
import WebView from "react-native-webview";

const PreviewScreen = ({navigation, route}) => {
    const previewUrl = route.params.previewUrl
    return (
        <WebView
            source={{
            uri: previewUrl,
            }}
      />
    );
};

export default PreviewScreen;

const styles = StyleSheet.create({});