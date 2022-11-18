import React, { useEffect, useState, useRef } from 'react';
import {
    SafeAreaView, FlatList, StatusBar, ImageBackground,BackHandler,
    ScrollView,
    Image, View, Text, TouchableOpacity, TextInput,ActivityIndicator
} from 'react-native';


//////////////////app icons////////////////
import AntDesign from 'react-native-vector-icons/AntDesign';
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

const Guestss = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      img:require('../../../assets/dataimages/hotel.png')
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd9556-145571e29d72',
        title: 'Third Item',
      },
      {
        id: '5869r4a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
          id: '58694a0f-3da1-471f-bd9rr556-145571e29d72',
          title: 'Third Item',
        },
  ];

const GuestsList = ({ navigation,route }) => {

    //Modal States
    const [modalVisible, setModalVisible] = useState(false);

    ///////////////////redux states///////////////////////
    const {hoteltype, phone_no} =
    useSelector(state => state.userReducer);
  const dispatch = useDispatch();


    ///////////// Get Guests states and API function/////////////
    const [Guests, setGuests] = useState('')

    const GetGuests = async () => {
        axios({
            method: 'GET',
            url: BASE_URL + 'api/guest/allGuests',
        })
            .then(async function (response) {
                console.log("list data here ", response.data)
                setGuests(response.data)
            })
            .catch(function (error) {
                console.log("error", error)
            })
        } 

    useEffect(() => {
        GetGuests()
      
    }, []);

    return (
<SafeAreaView style={styles.container}>
    <ScrollView 
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}>
            <StatusBar backgroundColor={'black'} barStyle="light-content" />
            <CustomHeader
          headerlabel={'Orders'}
          iconPress={() => { navigation.toggleDrawer() }}
          icon={'chevron-back'}
          onpresseacrh={() => navigation.navigate('AddGuests')}
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
            { Guestss === ''?null:
Guestss.map((item, key) => (
    <TouchableOpacity onPress={()=> route.params.navplace === 'CreateTrip'?
    navigation.navigate('CreateTrip'):
    navigation.navigate('GuestsDetail',{guest_id:item._id,navplace:'GuestDetail'})}>
    <GuestCards
                                        // guestlogo={item.img}
                                        // guestname={item.name}
                                        // guestemail={item.email}
                                        // guestgender={item.gender}
                                        guestname={'Guest name here'}
                                        guestemail={'Email here'}
                                        guestgender={'Gender Here'}
                                    />
                                    </TouchableOpacity>
))
}
</ScrollView>
</SafeAreaView>

    )
};

export default GuestsList;