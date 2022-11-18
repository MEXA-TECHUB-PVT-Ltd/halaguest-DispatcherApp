import React from 'react';
import {
  StyleSheet,
} from 'react-native';

////////////////app colors////////////
import Colors from '../../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

  ////////////////app fonts////////////
import { fontFamily } from '../../../../constant/fonts';

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor:'white'
  },

  ////////////////////user image///////////////////
  userimage:
  {
      borderColor:'#AAAAAA',
      borderWidth:1,
      width:wp(30),
      height:hp(14),
borderRadius:wp(25),
//backgroundColor:'white',
alignItems:'center',
justifyContent:'center',
alignSelf:'center',
marginBottom:hp(0),
marginTop:hp(2)
},
image: {
    height:wp(30),
    width:wp(30),
borderRadius:80,
  },

  //////////////////////line view///////////////////
 lineview:
  {
      borderBottomColor:'#707070',
      borderBottomWidth:0.5,
      width:wp(88),
alignSelf:'center',
marginBottom:hp(6),
marginTop:hp(3)
  },

    //////////////////////user detail///////////////////
    usernametext:
    {
        width:wp(50),
        fontFamily:fontFamily.Poppins_SemiBold,
        fontSize:hp(2.5),
        color:Colors.Appthemecolor,
        textAlign:'center'
    },
    detailview:
    {
        width: wp(90),
    flexDirection:'row',
    marginTop:hp(1),
    justifyContent:'space-between',
    alignItems:'center',
    alignContent:'center',
    alignSelf:'center'
    },
    lineview:
    {
        width: wp(90),
    flexDirection:'row',
    marginTop:hp(1),
    borderBottomColor:'#DCDCDC',
    borderBottomWidth:0.8,
    alignSelf:'center'
    },
    detailtextright:
    {
        //backgroundColor:'red',
        width: wp('45%'),
        color:Colors.Appthemecolor,
        fontFamily:fontFamily.Poppins_SemiBold,
    fontSize: hp(1.8),
    marginBottom:hp(1),
    justifyContent:'center',
    textAlign:'right',
    },
     detailtextleft:
    {
        //backgroundColor:'red',
        width: wp('40%'),
        color:'#2E383F',
        fontFamily: fontFamily.Poppins_Medium,
    fontSize: hp('1.8%'),
    
    justifyContent:'center',
    marginBottom:'4%'
    },
});
export default styles;
