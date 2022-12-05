import React, { useEffect, useState, useRef } from 'react';
import {
    SafeAreaView,StatusBar, TouchableOpacity,
    ScrollView,
    Image, View, 
} from 'react-native';

//////////////////////app components///////////////
import CustomHeader from '../../../components/Header/CustomHeader';
import GuestCards from '../../../components/CustomCards/GuestCards/GuestCards';
import Loader from '../../../components/Loader/Loader';

////////////////////redux////////////
import {useSelector, useDispatch} from 'react-redux';
import { setNavPlace,setTopTabDriver,setTopTabPayment,setTopTabVehicle } from '../../../redux/actions';

////////////////api////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';
import Colors from '../../../utills/Colors';

/////////////////app images///////////
import { appImages } from '../../../constant/images';

const Orders = ({ navigation }) => {

   ////////////////loading/////////////
const [loading, setloading] = useState(true);

    ///////////////////redux states///////////////////////
    const {hoteltype, phone_no,top_tab_driver,top_tab_payment,top_tab_vehicle } =
    useSelector(state => state.userReducer);
  const dispatch = useDispatch();

   /////////////main menu status states/////////////
   const [Drivers, setDrivers] = useState('')

   const GetDrivers = async () => {
       var user= await AsyncStorage.getItem('Userid')
       axios({
           method: 'GET',
           url: BASE_URL + 'api/driver/getDispacherDriver/'+user,
       })
           .then(async function (response) {
               //console.log("list data here ", response.data)
               setDrivers(response.data)
               setloading(false)
           })
           .catch(function (error) {
               console.log("error", error)
           })
       }    

    useEffect(() => {
      GetDrivers()
    }, []);

    return (
<SafeAreaView style={styles.container}>
<Loader
    isLoading={loading}
    />
    <ScrollView 
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}>
            <StatusBar backgroundColor={'black'} barStyle="light-content" />
            <CustomHeader
          headerlabel={'Diver Trips'}

        />
<View style={{marginTop:hp(3)}}>
{ Drivers === ''?null:
Drivers.slice(0, 3).map((item, key) => (
  
  <TouchableOpacity 
  activeOpacity={true}
  onPress={()=>navigation.navigate('DriverOrders',{driverid:item._id,navplace:'DriverList'})}>

    <GuestCards
                                        guestlogo={BASE_URL+item.img}
                                        guestname={item.name}
                                        guestemail={item.email}
                                        guestgender={item.gender}
                               
                                    />
                                    </TouchableOpacity>
))

}
</View>


</ScrollView>
</SafeAreaView>

    )
};

export default Orders;