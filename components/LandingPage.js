import React from 'react'
import { Text,StyleSheet, View, Platform, StatusBar } from 'react-native'
import NavBar from './NavBar'

export default function LandingPage() {
    return(
        <View style={styles.container}>
            <NavBar></NavBar>
            <View style={styles.cashPoints}>
                <Text style={styles.cashTitle}>OVO Cash</Text>
                <Text style={styles.cashRp}>Rp
                    <Text style={styles.cashAmount}>11.260</Text>
                </Text>
                <Text style={styles.cashTitle}>OVO Points
                    <Text style={styles.pointsAmount}> 541.552</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#fff',
    },
    cashPoints: {
        backgroundColor: '#5b0e91',
        padding: 6,
    },
    cashTitle: {
        margin: 2,
        color: '#d5d5d5'
    },
    cashRp: {
        color: 'white',
        margin: 2,
        fontSize: 12
    },
    cashAmount: {
        margin: 2,
        color: 'white',
        fontSize: 18
    },
    pointsAmount: {
        color: '#d9a005'
    }
})