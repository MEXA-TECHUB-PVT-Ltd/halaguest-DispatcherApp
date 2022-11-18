import React from 'react';
import {View,Text,TouchableOpacity,Modal,Image} from 'react-native';
import styles from './styles';
import Lottie from 'lottie-react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const LottieModal = (props) => {

    return(
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.modalVisible}
          onRequestClose={props.CloseModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
{/*           
            <View style={{justifyContent:'center', alignSelf:'center',
              alignItems:'center',marginBottom:heightPercentageToDP(5),
              marginTop:heightPercentageToDP(5),
              //backgroundColor:'red',
              alignSelf:'center',height:heightPercentageToDP(20)}}> */}
              <View style={{height:heightPercentageToDP(30),alignItems:'center',justifyContent:'center'}}>
              <Lottie source={require('./SuccesModal.json')}  autoPlay style={styles.animatedIcon}/>
              </View>

{/* </View> */}
{/* <TouchableOpacity onPress={()=> props.CloseModal}>
                
                </TouchableOpacity> */}
              {/* <View style={{justifyContent:'center', 
              alignItems:'center',marginBottom:15,
              alignSelf:'center'}}>
                       <Text style={styles.modaltext}>
                            {props.text}</Text>
              </View>
       

*/}
     {/* <View  style={styles.ApprovedView}>
       <TouchableOpacity 
         onPress={props.onPress}>
       <Text style={styles.Pendingtext}>{props.buttontext}</Text>
        </TouchableOpacity>
     </View>  */}
            </View>
          </View>
        </Modal>
    )
};

export default LottieModal;