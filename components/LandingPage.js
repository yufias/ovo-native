import React from 'react'
import { Text,StyleSheet, View, Platform, StatusBar } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle,faArrowAltCircleUp, faHistory } from '@fortawesome/free-solid-svg-icons'
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
            <View style={styles.action}>
                <View style={styles.actionContent}>
                    <FontAwesomeIcon 
                        icon={ faPlusCircle } 
                        color={ '#5b0e91' }
                        size={ 24 }
                    />
                    <Text>Top Up</Text>
                </View>
                <View style={styles.actionContent}>
                    <FontAwesomeIcon 
                        icon={ faArrowAltCircleUp } 
                        color={ '#5b0e91' }
                        size={ 24 }
                    />
                    <Text>Transfer</Text>
                </View>
                <View style={styles.actionContent}>
                    <FontAwesomeIcon 
                        icon={ faHistory } 
                        color={ '#5b0e91' }
                        size={ 24 }
                    />
                    <Text>History</Text>
                </View>
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
        // backgroundColor: '#6836bb',
        padding: 12,
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
    },
    action: {
        backgroundColor: '#d5d5d5',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 16,
        padding: 8,
    },
    actionContent: {
        alignItems: 'center',
        margin: 4,
    }
})