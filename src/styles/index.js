import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    joincontainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center'
    },
    headerButton: {
        height: 44,
        width: 44,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputtextform: {
        width: '100%',
        alignItems:'center',
        paddingBottom: 10,
    },
    jointextform: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        padding: 5
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
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop: 10
    },
    custombtn: {
        width: 150,
        height: 40,
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