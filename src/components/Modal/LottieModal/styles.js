import React from 'react';
import {StyleSheet,
} from 'react-native';


import Colors from '../../../utills/Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    centeredView: {
        zIndex:0,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
      },
      modalView: {
        width: wp(80),
        //paddingTop:wp('10%'),
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
          marginTop:30,
          fontSize:hp('2.5%'),
          fontWeight:'bold',
          color:'black',
          fontFamily: "Poppins",
          textAlign:'center'
      },
    
      ApprovedView:
      {
        height: hp('6%'),
        width: wp('45%'),
         borderRadius:45,
         backgroundColor:Colors.Appthemecolor,
        //  /marginRight:10,
         alignContent:'center',
         alignItems:'center',
         justifyContent:'center',
         marginBottom:hp(5)
      },
      Pendingtext:
      {
          textAlign:'center',
          //margin:10,
          color:'white',
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
      animatedIcon:{
        width: wp(25),
        // position: 'absolute',
        // top: -36,
        marginBottom:hp(0),
        
    }
  });
  export default styles;
  