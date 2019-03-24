import Reactotron from 'reactotron-react-native'

if (__DEV__) {

    const tron = Reactotron
        // Ip da maquina virtual... machine host ip
        .configure({  name: "modulo1", host: "192.168.0.6"})
        .useReactNative() // add all built-in react native plugins
        .connect() // let's connect!

    console.tron = tron

    tron.clear()

}
