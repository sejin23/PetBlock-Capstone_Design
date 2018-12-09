import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    switchheader: {
        flex: 1,
        width: '100%',
        height: 44,
        borderWidth: 1,
        alignItems: 'center'
    },
    headerButton: {
        height: 44,
        width: 44,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    joincontainer: {
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center'
    },
    jointextform: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        padding: 5
    },
    joinicon: {
        width: '100%',
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    jointext: {
        width: '100%',
        flex: 4,
        padding: 10,
    },
    joinbutton: {
        width: '90%',
        flex: 1,
    },
    joinname: {
        flex: 1,
    },
    joinblankform: {
        flex: 3,
    },
    joinblank: {
        borderColor: '#aaa',
        width:'100%',
        height:35,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    lowButton: {
        flex: 3,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop: 10
    },
    custombtn: {
        width: 150,
        height: 40,
    },
    inputtextform: {
        flex: 2, 
        width: '100%',
        alignItems:'center',
        paddingBottom: 10
    },
    inputblank: {
        borderColor: '#aaa',
        width:'80%',
        height:35,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    }
})