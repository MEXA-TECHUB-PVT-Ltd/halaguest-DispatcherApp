import React, { useEffect, useState,useRef } from 'react';
import {View,Text,TouchableOpacity,Image,FlatList} from 'react-native';

///////////////////app pakages///////////////
import RBSheet from "react-native-raw-bottom-sheet";

////////////app styles//////////////
import styles from './styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setCarType ,setCarTypeId} from '../../redux/actions';

  //////////////////////////app api/////////////////////////
  import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
  import AsyncStorage from '@react-native-async-storage/async-storage';

const CarType = (props) => {

    /////////////redux states///////
    const {car_type} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();


  //////////dropdownlink data/////////////
  const [dddata, setdddata] = useState()

  ///////////////CarType function///////////////
    const GetCarType =async () => {
        console.log('here:',BASE_URL+'api/carType/allCarType')
        axios({
          method: 'GET',
          url: BASE_URL+'api/carType/allCarTypes',
        })
          .then(function (response) {
            setdddata(response.data)
          })
          .catch(function (error) {
            console.log("error", error)
          })
      }
      useEffect(() => {
        GetCarType()
          }, []);
    return(
        <RBSheet
        ref={props.refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        openDuration={50}
        closeDuration={50}
        animationType="fade"
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
          },
          draggableIcon: {
            backgroundColor: "white"
          },
          container: {
            borderTopLeftRadius:wp(10),
            borderTopRightRadius:wp(10),
              //height:hp(35),
              maxHeight:hp(90),
          }
        }}>
        <View style={{
          flexDirection: 'row', justifyContent: "space-between",
          marginHorizontal: 0
        }}>
          <Text style={styles.bottomsheettext}>Select Car Type</Text>
        </View>
        <FlatList
          data={dddata}
          renderItem={({ item, index, separators }) => (
            <TouchableOpacity
            onPress={() =>
              {
                dispatch(setCarType(item.name)),
                dispatch(setCarTypeId(item._id)),
                props.refRBSheet.current.close()

              }}
             >
            <View style={styles.card}>
                <Text style={styles.cardtext}>
                  {item.name}
                </Text>
            </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item._id}
        
        />
        </RBSheet>
    )
};

export default CarType;