import { Dimensions } from 'react-native'

const { width, heigth } = Dimensions.get('window')

export default {
    baseMargin: 10,
    basePadding: 20,
    baseRadius: 3,
    screenWidth: width < heigth ? width : heigth,
    screeHeigth: width < heigth ? width : heigth
}
