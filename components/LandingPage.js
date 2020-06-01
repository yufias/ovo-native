import React from 'react'
import { Text, StyleSheet, View, Platform, StatusBar, Dimensions } from 'react-native'
import Svg, { Circle, Text as TextSvg } from 'react-native-svg'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle,faArrowAltCircleUp, faHistory } from '@fortawesome/free-solid-svg-icons'
import NavBar from './NavBar'

const WIDTH = Dimensions.get('screen').width

export default function LandingPage() {
    return(
        <View style={styles.container}>
            <NavBar></NavBar>
            <Svg height="40%" width={WIDTH} viewBox="0 310 100 100">
                <Circle
                    cx="50"
                    cy="50"
                    r="370"
                    fill="#6836bb"
                >
                </Circle>
                    <TextSvg
                        x="-45"
                        y="325"
                        textAnchor="middle"
                        fontWeight="bold"
                        fontSize="10"
                        fill="#d5d5d5"
                    >
                        OVO Cash
                    </TextSvg>
                    <TextSvg
                        x="-60"
                        y="340"
                        textAnchor="middle"
                        fontWeight="bold"
                        fontSize="10"
                        fill="white"
                    >
                        Rp
                    </TextSvg>
                    <TextSvg
                        x="-27"
                        y="347"
                        textAnchor="middle"
                        fontWeight="bold"
                        fontSize="16"
                        fill="white"
                    >
                        11.260
                    </TextSvg>
                    <TextSvg
                        x="-40"
                        y="365"
                        textAnchor="middle"
                        fontWeight="bold"
                        fontSize="10"
                        fill="#d5d5d5"
                    >
                        OVO Points
                    </TextSvg>
                    <TextSvg
                        x="7"
                        y="365"
                        textAnchor="middle"
                        fontWeight="bold"
                        fontSize="10"
                        fill="#d9a005"
                    >
                        541.552
                    </TextSvg>
            </Svg>
            {/* <View style={styles.cashPoints}>
                <Text style={styles.cashTitle}>OVO Cash</Text>
                <Text style={styles.cashRp}>Rp
                    <Text style={styles.cashAmount}>11.260</Text>
                </Text>
                <Text style={styles.cashTitle}>OVO Points
                    <Text style={styles.pointsAmount}> 541.552</Text>
                </Text>
            </View> */}
            <View style={styles.action}>
                <View style={styles.actionContent}>
                    <FontAwesomeIcon 
                        icon={ faPlusCircle } 
                        color={ '#5b0e91' }
                        size={ 28 }
                    />
                    <Text style={styles.actionFont}>Top Up</Text>
                </View>
                <View style={styles.actionContent}>
                    <FontAwesomeIcon 
                        icon={ faArrowAltCircleUp } 
                        color={ '#5b0e91' }
                        size={ 28 }
                    />
                    <Text style={styles.actionFont}>Transfer</Text>
                </View>
                <View style={styles.actionContent}>
                    <FontAwesomeIcon 
                        icon={ faHistory } 
                        color={ '#5b0e91' }
                        size={ 28 }
                    />
                    <Text style={styles.actionFont}>History</Text>
                </View>
            </View>
        </View>
    )
}

const window = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#fff',
    },
    cashPoints: {
        backgroundColor: '#5b0e91',
        // backgroundColor: '#6836bb',
        padding: 12,
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderRadius: 200,
        // width: window.width * 2,
        // height: window.width * 2,
        // marginLeft: -(window.width / 2),
        // position: "absolute",
        // bottom: 0,
        // overflow: "hidden",
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
        // backgroundColor: '#d5d5d5',
        backgroundColor: 'white',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 18,
        padding: 10,
        top: -65,
        position: 'relative',
        overflow: 'hidden'
    },
    actionContent: {
        alignItems: 'center',
        margin: 4,
    },
    actionFont: {
        color: '#5b0e91',
        fontSize: 14
    }
})