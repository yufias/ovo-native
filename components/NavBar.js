import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { color } from 'react-native-reanimated'

export default function NavBar() {
    return(
        <View style={styles.container}>
            <Text style={styles.navText}>OVO</Text>
            <Text style={styles.navText}>Notif</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        height: 200,
        width: '100%',
    },
    navText: {
        color: 'white',
        fontSize: 12,
    }
})