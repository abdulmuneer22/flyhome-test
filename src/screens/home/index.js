import React, { useCallback, useState } from 'react'
import { ActivityIndicator, View, Text, ScrollView } from 'react-native'
import { getRestaurentList } from '../../../android/app/api'
import Button from '../../components/button'
import Header from '../../components/header'
import ListComponent from '../../components/list-component'
import MapComponent from '../../components/map-component'
import { ViewTypeInterface } from '../../const'
import styles from './styles'

export default function Home() {
    const [viewType, setViewType] = useState(ViewTypeInterface.LIST)
    const [results, setResults] = useState(null)
    const [loading, setLoading] = useState(false)



    const queryRequest = useCallback(async (text) => {
        if (text && text.length > 4) {
            setLoading(true)
            let response = await getRestaurentList(text)
            setLoading(false)
            if (response && response.results) {
                setResults(response.results)
                return
            }
        } else {
            setResults(null)
        }

    }, [])

    const toggleViewType = () => {
        if (viewType === ViewTypeInterface.LIST) {
            setViewType(ViewTypeInterface.MAP)

        } else {
            setViewType(ViewTypeInterface.LIST)
        }
    }

    return (
        <View style={styles.wrapper}>
            <Header onQueryInit={(text) => queryRequest(text)} />
            <Button onPress={toggleViewType} viewType={viewType} />
            <View style={{ flex: 1 }}>
                {
                    viewType === ViewTypeInterface.LIST ? <ListComponent results={results}  /> : <MapComponent results={results} />
                }
                {
                    loading ? <ActivityIndicator /> : null
                }
            </View>
        </View>
    )
}
