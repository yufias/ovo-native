import React from 'react'
import { Text,StyleSheet, View, Platform, StatusBar } from 'react-native'
import NavBar from './NavBar'

export default function LandingPage() {
    return(
        <View style={styles.container}>
            <NavBar></NavBar>
            <Text>This is Landing Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})