import React from 'react';
import {StyleSheet,
Dimensions
} from 'react-native';
import Colors from '../../utills/Colors';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    centeredView: {
        zIndex:0,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
      },
      modalView: {
        width: wp(85),
        paddingTop:wp(5),
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
     
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      modaltext:
      { 
   
          fontSize:hp(3),
          fontWeight:'bold',
          color:Colors.Appthemecolor,
          fontFamily: "Poppins",
          textAlign:'center'
      },
      modalsubtext:
      { 
   
          fontSize:hp(2),
          fontWeight:'400',
          color:'#535353',
          fontFamily: "Poppins",
          textAlign:'center'
      },
      ApprovedView:
      {
        height: hp(6),
        width: wp(45),
         borderRadius:wp(3),
         backgroundColor:Colors.Appthemecolor,
        //  /marginRight:10,
         alignContent:'center',
         alignItems:'center',
         justifyContent:'center',
         marginBottom:hp(4)
      },
      Pendingtext:
      {
          textAlign:'center',
          margin:10,color:'white',
          fontSize:15,fontWeight:'bold'
      },

   
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 35,
        textAlign: "center"
      },
      buttonview:
      {
          flexDirection:'column', justifyContent:"flex-end",
    marginBottom:30,marginTop:'40%',
      },
      maintext:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        fontFamily: "Montserrat Bold",
      },

      logoutbtnView:
      {
        width: wp(65),
         borderRadius:wp(3),
         flexDirection:'row',
         justifyContent:'space-between',
         alignItems:'center',
         marginBottom:hp(2),
         //backgroundColor:'red',
          },
          cancelbtn:
          {
            height: hp(5.5),
            width: wp(28),
             borderRadius:wp(3),
             borderColor:Colors.Appthemecolor,
             borderWidth:1,
             alignItems:'center',
             marginBottom:hp(4)
          },
          donebtn:
          {
            height: hp(5.5),
            width: wp(28),
             borderRadius:wp(3),
             backgroundColor:Colors.Appthemecolor,
             alignItems:'center',
             marginBottom:hp(4)
          },
  });
  export default styles;
  