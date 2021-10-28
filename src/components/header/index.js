import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

export default function Header({ onQueryInit }) {
    const [searchText, setSearchText] = useState()
    
    return (
        <View style={{
            width: '100%',
            height: 40,
            backgroundColor: 'white',
            justifyContent: 'center',
            paddingHorizontal: '2%',
            marginTop: 20
        }}>
            <TextInput
                onChangeText={(text) => setSearchText(text)}
                style={{
                    width: '100%',
                    height: 40,
                }}
                placeholder="Enter your query here"
                value={searchText}
                onEndEditing={() => onQueryInit(searchText)}
            />
        </View>
    )
}
