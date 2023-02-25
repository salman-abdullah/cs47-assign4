import { StyleSheet, SafeAreaView, Text, Image, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import SongList from "./components/SongList";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from "./screens/DetailsScreen";
import PreviewScreen from "./screens/PreviewScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false,}}/>

        <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>

        <Stack.Screen name="PreviewScreen" component={PreviewScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
