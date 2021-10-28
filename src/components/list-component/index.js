import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { LIST_ITEMS } from '../../stubs'


const ListItem = ({ name, index, opening_hours: { open_now } = {} }) => <View style={{
    minHeight: 60,
    width: '90%',
    marginHorizontal: '5%',
    marginBottom: 4,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: index % 2 == 0 ? 'grey' : 'purple'
}}>
    <Text>{name}</Text>
    <Text>Open Now : {open_now ? "YES" : "NO"}</Text>
</View>

export default function ListComponent({ results }) {
    return (
        <View>
            <FlatList data={results}
                keyExtractor={(item) => item.place_id}
                ListEmptyComponent={results ? <View>
                    <Text>Sorry , not found anything , please try a different item</Text>
                </View> : ""}
                renderItem={({ item, index }) => <ListItem {...item} index={index} />} />
        </View>
    )
}
