import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    incidentList:{
        marginTop: 20,
    },

    incident:{
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 20
    },

    incidentProperty:{
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold',
        marginTop: 24,
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },

    contact:{
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 20
    },

    contactTitle:{
        fontSize: 18,
        color: '#41414D',
        fontWeight: 'bold',
    },

    contactText:{
        fontSize: 15,
        color: '#737380',
        marginTop: 8,
    },

    buttonBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    },

    contactButton: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 44,
        width: '48%',
        alignItems: 'center', //This shit align in Horizontal
        justifyContent: 'center'//and this shit in Vertical
    },

    contactButtonText: {
        fontSize: 15,
        color: '#FFF',
        fontWeight: 'bold',
    },
});