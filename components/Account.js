import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function Account() {
    return(
        <View style={styles.container}>
            <Text>Account Page for your app</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})