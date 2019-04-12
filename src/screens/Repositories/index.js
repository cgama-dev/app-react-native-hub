import React from 'react'
import { Text, View, AsyncStorage } from 'react-native';
import Header from './../../components/Header'
// AsyncStorage.clear()
const Repositories = () => {
    return (
        <View>
            <Header title='Repositórios' />
            <Text>Screen Repositories</Text>
        </View>
    )
}

export default Repositories
