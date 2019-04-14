import React from 'react'
import { Text, View } from 'react-native';
import Header from './../../components/Header'
import Icon from 'react-native-vector-icons/FontAwesome'

const Organizations = () => {
    return (
        <View>
            <Header title='Organizações' />
            <Text>Screen Organizations</Text>
        </View>
    )
}

Organizations.navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />
}
export default Organizations
