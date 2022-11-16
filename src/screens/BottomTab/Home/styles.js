import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

  ///////////////////app fonts///////////
  import { fontFamily } from '../../../constant/fonts';

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
backgroundColor:'white'
  },

createtripbtn:
{
  position:'absolute',
bottom:hp(4),
height:hp(7),
width:wp(45),
alignItems:'center',
justifyContent:'center',
alignSelf:'center',
borderRadius:wp(3),
backgroundColor:Colors.BottomTabcolor,
shadowColor: "#000",
shadowOffset: {
    width: 0,
    height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,
},
createtriptext:
{
  color:'white',
fontFamily:fontFamily.Poppins_Regular,
fontSize:hp(2.2)
}
});
export default styles;
