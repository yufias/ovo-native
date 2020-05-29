import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
    return(
        <View style={styles.container}>
            <Text style={styles.navText}>OVO</Text>
            <FontAwesomeIcon 
                icon={ faBell } 
                color={ 'white' }
                size={ 24 }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#6836bb',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        height: 50,
        width: '100%',
    },
    navText: {
        color: 'white',
        fontSize: 24,
    }
})