import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#CDDDF1',
    },
    infocontainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#A0C4C5'
    },
    loginupper: {
        height: '30%',
        width: '100%',
    },
    loginlower: {
        width: '100%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logintextinput: {
        width: 180,
        color: 'white',
    },
    Sectionstyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        height: 40,
    },
    Imagestyle: {
        padding: 10,
        margin: 5,
        height: 15,
        width: 10,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    rightText: {
        fontSize: 10,
        color: 'white',
    },
    circleButton: {
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 100,
    },
    bottomText: {
        fontSize: 10,
        color: 'white',
        marginTop: 10,
    },
    header: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dogimagestyle: {
        margin: 15,
        width: 150,
        height: '30%',
    },
    weatherimagestyle: {
        marginTop: 20,
        width: 150,
        height:  150,
    },
    ellipticButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: 60,
        height: 30,
        backgroundColor: '#639B9B',
        borderRadius: 50,
    },
    largeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        width: 120,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 100,
    }
})