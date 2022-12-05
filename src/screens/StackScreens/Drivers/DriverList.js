import React, { useEffect, useState, useRef } from 'react';
import {
    SafeAreaView, FlatList, StatusBar, ImageBackground,BackHandler,
    ScrollView,
    Image, View, Text, TouchableOpacity, TextInput,ActivityIndicator
} from 'react-native';
 
///////////////////react native navigation///////////////
import { useIsFocused } from '@react-navigation/native';

//////////////////app icons////////////////
import Ionicons from 'react-native-vector-icons/Ionicons';

//////////////////////app components///////////////
import CustomHeader from '../../../components/Header/CustomHeader';
import GuestCards from '../../../components/CustomCards/GuestCards/GuestCards';

////////////////////redux////////////
import {useSelector, useDispatch} from 'react-redux';
import { setNavPlace } from '../../../redux/actions';

////////////////api////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';
import Colors from '../../../utills/Colors';
import Inputstyles from '../../../styles/GlobalStyles/Inputstyles';

/////////////////app images///////////
import { appImages } from '../../../constant/images';


const DriverList = ({ navigation,route }) => {

    ////////////isfocused//////////
    const isfocussed = useIsFocused()

    //Modal States
    const [modalVisible, setModalVisible] = useState(false);

    ///////////////////redux states///////////////////////
    const {hoteltype, phone_no} =
    useSelector(state => state.userReducer);
  const dispatch = useDispatch();


   /////////////main menu status states/////////////
   const [Drivers, setDrivers] = useState('');

   const GetDrivers = async () => {
     var user = await AsyncStorage.getItem('Userid');
     axios({
       method: 'GET',
       url: BASE_URL + 'api/driver/getDispacherDriver/' + user,
     })
       .then(async function (response) {
         //console.log("list data here ", response.data)
         setDrivers(response.data);
       })
       .catch(function (error) {
         console.log('error', error);
       });
   };
 
   useEffect(() => {
    if (isfocussed) {
     GetDrivers();
    }
   }, [isfocussed]);

    return (
<SafeAreaView style={styles.container}>
    <ScrollView 
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}>
            <StatusBar backgroundColor={'black'} barStyle="light-content" />
            <CustomHeader
          headerlabel={'Divers'}
          iconPress={() => { navigation.toggleDrawer() }}
          icon={'chevron-back'}
          onpresseacrh={() => navigation.navigate('AddDriver')}
          searchicon={'add-sharp'}
        />
   <View style={[Inputstyles.action,
{
    backgroundColor:'white',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    
    elevation: 6,
    marginBottom:hp(4.5),
    marginTop:hp(3)
}]}>
        
                  <TextInput
                    //onChangeText={setName}
                    placeholder={'Search Guest'}
                    returnKeyType={'next'}
                    onSubmitEditing={() => {
                      ref_input2.current.focus();
                    }}
                    blurOnSubmit={false}
                    autoFocus={true}
                    placeholderTextColor={Colors.inputtextcolor}
                    style={Inputstyles.input}
                  />
                          <Ionicons name="search" color={Colors.drawertext} size={25} />
                </View>
            { Drivers === ''?null:
Drivers.map((item, key) => (
    <TouchableOpacity onPress={()=> 
    navigation.navigate('DriverDetail',{guest_id:item._id,navplace:'DriverDetail'})}>
    <GuestCards
                                        guestlogo={BASE_URL+ item.img}
                                        guestname={item.name}
                                        guestemail={item.email}
                                        guestgender={item.gender}
                              
                                    />
                                    </TouchableOpacity>
))
}
</ScrollView>
</SafeAreaView>

    )
};

export default DriverList;