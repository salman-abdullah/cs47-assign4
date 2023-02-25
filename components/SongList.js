import { Text, FlatList, Image, View, StyleSheet } from "react-native";
import { millisToMinutesAndSeconds } from "../utils";
import { Ionicons } from '@expo/vector-icons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import PreviewScreen from "../screens/PreviewScreen";

const SongList = ({ tracks, navigation }) => {
    

    return (
        <FlatList 
            data={tracks} 
            renderItem={({ item }) => {
                console.log(item.externalUrl)
                return (
                    <View style={styles.container}>
                        
                        {/* play button */}
                        <Pressable
                            onPress = {() => {
                                navigation.navigate('PreviewScreen', {previewUrl: item.previewUrl})
                            }} style={styles.playButton}>
                            <View>
                                <Ionicons name="play-circle" size={30} color="green" />
                            </View>
                        </Pressable>
                        
                        {/* details */}
                        <Pressable
                            onPress = {() => {
                                navigation.navigate('DetailsScreen', {externalUrl: item.externalUrl})
                            }} style={styles.details}>
                            {/* song image */}
                            <View style={styles.imageView}>
                                <Image
                                   source={{ uri: item.imageUrl }}
                                    style={styles.image}
                                />
                            </View>
                        
                            {/* title and artist */}
                            <View style={styles.titleAndArtist}>
                                <Text numberOfLines={1} style={{ color: "white" }}>{item.songTitle}</Text>
                                <Text numberOfLines={1} style={{ color: "white" }}>{item.songArtists[0].name}</Text>
                            </View>
                        
                            {/* album */}
                            <View style={styles.album}>
                                <Text numberOfLines={1} style={{ color: "white" }}>{item.albumName} </Text>
                            </View>
                        
                            {/* duration */}
                            <View style={styles.duration}>
                                <Text style={{ color: "white" }}>{millisToMinutesAndSeconds(item.duration)}</Text>
                            </View>
                        </Pressable>
                    </View>
                    
                    
                );
        }}
        />
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 80,
        width: '100%',
        justifyContent: 'space-between',
    },
    image: {
      height: '80%',
      width: '80%',
    },
    imageView: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleAndArtist: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '30%',
        justifyContent: 'center',

    },
    album: {
        flexDirection: 'row',
        width: '30%',
        alignItems: 'center',
    },
    duration: {
        flexDirection: 'row',
        width: '10%',
        alignItems: 'center',
        textAlign: 'left',
    },
    playButton: {
        flexDirection: 'row',
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    details: {
        flexDirection: 'row',
        height: '100%',
        width: '90%',
        justifyContent: 'space-between',
    }
  });

export default SongList;