import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { ViewTypeInterface } from '../../const'


const Button = ({ viewType, onPress }) => <TouchableOpacity
    onPress={onPress}
    style={{
        width: 160,
        height: 40,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        alignSelf: 'center',
        marginVertical: 10
    }}>
    <Text> {viewType === ViewTypeInterface.LIST ? 'Show map' : 'Show List'} </Text>
</TouchableOpacity>


export default Button