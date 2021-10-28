import axios from 'axios'
import Toast from 'react-native-simple-toast'




const URI = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=12.9716%2C77.5946&radius=1500&type=${type}&keyword=food&key=AIzaSyDcj1j9lY50CH7kocb7wrFPCANl_70PrUY"

const getRestaurentList = async (query) => {
    try {
        let response = await axios.get(URI.replace('${type}', query))
        return response.data
    } catch (error) {
        Toast.show('Sorry something went wrong , please try again')
        console.log(error);
    }


}



export { getRestaurentList }