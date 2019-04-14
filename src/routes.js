import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'

import Welcome from './screens/Welcome'
import Respositories from './screens/Repositories'
import Organizations from './screens/Organizations'
import { colors } from './styles'
const Routes = (userLogged = false) => createAppContainer(
    createSwitchNavigator(
        {
            Welcome,
            User: createBottomTabNavigator({
                Respositories,
                Organizations
            }, {
                    tabBarOptions: {
                        showIcon: true,
                        showLabel: false,
                        activeTintColor: colors.white,
                        inactiveTintColor: colors.whiteTransparent,
                        style: {
                            backgroundColor: colors.secundary
                        }
                    }
                })
        }, {
            initialRouteName: userLogged ? 'User' : 'Welcome'
        }
    ))

export default Routes
