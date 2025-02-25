
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { LIGHT_BROWN, BLACK_ONE, LIGHT_GREEN } from '../../global/Colors';
import { RF } from '@Global/Responsive';
import { ROBOTO_BOLD, ROBOTO_REGULAR } from '../../global/FontFamilies';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    containerLayout: {
        width,
        alignItems:"center",
        justifyContent:"center"
    },
    mainLayout: {
        width: width * 0.92,
        paddingVertical: width * 0.1,
        alignItems:"center",
        justifyContent:"center"
    },
    adjustCard: { paddingVertical: 0, },
    headerLayout: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: '90%',
        justifyContent: 'space-between',
        marginLeft: width * 5
    },
    header: {
        height: 60,
        width: '100%',
        backgroundColor: 'rgba(172,208,132,1)',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      back: {
        width: 30,
        height: 30,
      },
    logoLayout: {
        width: '70%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    logo: {
        aspectRatio: 283 / 282,
        width: '45%',
        height: undefined,
    },
    //Card Header
    cardHeader: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '94%',
        alignSelf: 'center',
        marginTop: width * 0.10
    },
    //Card Header Text
    cardHeaderTxt: {
        fontSize: RF(16),
        fontFamily: ROBOTO_BOLD,
        color: BLACK_ONE
    },
    //Card Header Message
    cardHeaderMsgView: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '94%',
        alignSelf: 'center',
        // backgroundColor: "green",
        marginVertical: width * 0.03
    },
    //Card Message 
    cardHeaderMsgTxt: {
        fontSize: RF(14),
        fontFamily: ROBOTO_REGULAR,
        color: BLACK_ONE
    },
    headerTitleLayout: {
        // backgroundColor: "yellow",
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTxt: {
        fontSize: RF(18),
        fontWeight: 'bold',
        color: LIGHT_BROWN
        // fontFamily:'verdanabold'
    },
    inputFieldContainer: {
        paddingVertical: width * 0.09
    },
    btnView: {
        marginVertical: 15
    },
})
