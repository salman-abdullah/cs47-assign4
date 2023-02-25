import { StyleSheet, SafeAreaView, Text, Image, View } from "react-native";
import { useSpotifyAuth } from "../utils";
import { Themes } from "../assets/Themes";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import SpotifyAuthButton from "../components/SpotifyAuthButton";
import SongList from "../components/SongList";

export default function HomeScreen({ navigation }) {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  console.log("tracks", tracks);

  let contentDisplayed = null;

  if (token) {
    contentDisplayed = <SongList tracks={tracks} navigation={navigation}/>;
  } else {
    contentDisplayed = (
      <SpotifyAuthButton authenticationFunction={getSpotifyAuth}/>
    );
  }
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Image
        source={require('../assets/spotify-logo.png')}
        style={styles.logo}
        />
        <Text style={styles.headerText}>My Top Tracks</Text>
      </View>


      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  logo: {
    height: 30,
    width: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '7%',
    width: '100%',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 6,
  },
  padding: 100
});
