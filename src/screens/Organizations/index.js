import React, { Component } from 'react'
import { Text, View, AsyncStorage, ActivityIndicator, FlatList } from 'react-native';
import Header from './../../components/Header'
import Icon from 'react-native-vector-icons/FontAwesome'
import api from './../../services/api'
import styles from './styles';
import OrganizationItem from './OrganizationItem'

class Organizations extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />
    }

    state = {
        username: '',
        loading: true,
        data: [],
        refreshing:false
    }

    async componentDidMount() {
        await this.loadOrganizations()
    }

    handleListItem = ({ item }) => <OrganizationItem organization={item} />

    loadOrganizations = async () => {

        this.setState({ refreshing: true })

        const username = await AsyncStorage.getItem('@Githun:username')

        const { data } = await api.get(`/users/${username}/orgs`)

        this.setState({ data, loading: false, refreshing: false })

    }

    handleList = () => {
        const { data, refreshing } = this.state

        return (<FlatList
            data={data}
            keyExtractor={item => String(item.id)}
            renderItem={this.handleListItem}
            onRefresh={this.loadOrganizations}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            refreshing={refreshing}
        />)
    }

    render() {
        const { loading } = this.state
        return (
            <View style={styles.container}>
                <Header title='Organizações' />
                {
                    loading ? <ActivityIndicator style={styles.loading} /> : this.handleList()
                }
            </View>
        )
    }
}

export default Organizations
