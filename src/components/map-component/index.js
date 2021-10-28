import React from 'react'
import { View, Text , StyleSheet} from 'react-native'
import MapView from 'react-native-maps';
import { LOCATION } from '../../const';

export default function MapComponent() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={LOCATION}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
     position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
     justifyContent: 'flex-end',
     alignItems: 'center',
     backgroundColor: 'red',
   },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });