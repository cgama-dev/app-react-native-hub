import React, { Component } from 'react'
import { Text, View, AsyncStorage, ActivityIndicator, FlatList } from 'react-native';
import Header from './../../components/Header'
import Icon from 'react-native-vector-icons/FontAwesome'
import api from './../../services/api'
import styles from './styles';
import RepositoryItem from './RepositoryItem'

class Repositories extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />
    }

    state = {
        username: '',
        loading: true,
        data: [],
        refreshing:false
    }

    async componentDidMount() {
        await this.loadRepositories()
    }

    handleListItem = ({ item }) => <RepositoryItem repository={item} />

    loadRepositories = async () => {

        this.setState({ refreshing: true })

        const username = await AsyncStorage.getItem('@Githun:username')

        const { data } = await api.get(`/users/${username}/repos`)

        this.setState({ data, loading: false, refreshing: false })
    }

    handleList = () => {
        const { data, refreshing } = this.state

        return (<FlatList
            data={data}
            keyExtractor={item => String(item.id)}
            renderItem={this.handleListItem}
            onRefresh={this.loadRepositories}
            refreshing={refreshing}
        />)
    }

    render() {
        const { loading } = this.state
        return (
            <View style={styles.container}>
                <Header title='Repositórios' />
                {
                    loading ? <ActivityIndicator style={styles.loading} /> : this.handleList()
                }
            </View>
        )
    }
}

export default Repositories
