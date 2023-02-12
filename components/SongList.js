import { Text, FlatList, Image, View, StyleSheet } from "react-native";
import { millisToMinutesAndSeconds } from "../utils";


const SongList = ({ tracks }) => {
    

    return (
        <FlatList 
            data={tracks} 
            
            renderItem={({ item, index }) => {

                return (
                    <View style={styles.container}>
                        <View style={styles.index}>
                            <Text style={{ color: "white" }}>{index + 1}</Text>
                        </View>
                        <View style={styles.imageView}>
                            <Image
                                source={{ uri: item.imageUrl }}
                                style={styles.image}
                            />
                        </View>
                        

                        <View style={styles.titleAndArtist}>
                            
                            <Text numberOfLines={1} style={{ color: "white" }}>{item.songTitle}</Text>
                            <Text numberOfLines={1} style={{ color: "white" }}>{item.songArtists[0].name}</Text>
                        </View>
                        
                        <View style={styles.album}>
                            <Text numberOfLines={1} style={{ color: "white" }}>{item.albumName} </Text>
                        </View>
                        
                        <View style={styles.duration}>
                            <Text style={{ color: "white" }}>{millisToMinutesAndSeconds(item.duration)}</Text>
                        </View>
                        


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
    index: {
        flexDirection: 'row',
        width: '5%',
        alignItems: 'center',
        justifyContent: 'center',
    }
  });

export default SongList;