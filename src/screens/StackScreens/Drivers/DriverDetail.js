import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

////////////paper papkage///////////////
import {RadioButton,Snackbar,Menu } from 'react-native-paper';

//////////////////app icons////////////////
import Icon from 'react-native-vector-icons/Ionicons';

//////////////////////app components///////////////
import CamerBottomSheet from '../../../components/CameraBottomSheet/CameraBottomSheet';
import CustomButtonhere from '../../../components/Button/CustomButton';
import CustomHeader from '../../../components/Header/CustomHeader';


////////////////////redux////////////
import {useSelector, useDispatch} from 'react-redux';
import { setNavPlace,editUserImage } from '../../../redux/actions';
////////////////api////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

/////////////////////height width pakage/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';
import Colors from '../../../utills/Colors';

/////////////////app images///////////
import { appImages } from '../../../constant/images';

const DriverDetail = ({navigation,route}) => {
console.log('prevoius data:',route.params)
    /////////////////previous data state////////////////////////////////
    const [predata] = useState(route.params);

  /////////////////////////redux///////////////////
  const {phone_no,edit_user_image} =
    useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  ////////////hide state an toggle function//////////
  const [hide, sethide] = useState(false);
const hidetoggle=()=>{
if(hide === false)
{
sethide(true)
}
else{
    sethide(false)
}
}

  ///////////////API data states////////////////////
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [country, setCountry] =useState('');
  const [street_address, setStreet_address] = useState('');

  /////////////////////////Get Guests Data////////////////////
  const GetDriverDetail=async() => {
    console.log("order request function",)
    await axios({
      method: 'GET',
      url: BASE_URL+'api/guest/specificGuest/'+predata.guest_id,
    })
    .then(function (response) {
      console.log("response", JSON.stringify(response.data))
      setImage(response.data[0].img)
      setName(response.data[0].name)
      setEmail(response.data[0].email)
      setCity(response.data[0].city)
      setPhoneNo(response.data[0].phoneno)
    //   setState(response.data[0].estimated_amount)
    //   setZipcode(response.data.img)
    //   setCountry(response.data[0].car_type_id.price)
    //   setStreet_address(response.data[0].total_amount)
    })
    .catch(function (error) {
      console.log("error", error)
    })
    }
    useEffect(() => {
        //GetDriverDetail()
    }, []);
  return (

      <SafeAreaView style={styles.container}>
            <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <CustomHeader
          headerlabel={'Driver Details'}
         // type={'crypto'}
          iconPress={() => { navigation.goBack() }}
          icon={'chevron-back'}
        //   onpresseacrh={() => <CustomMenu/>}
          searchicon={'add'}
        />
{/* <CustomMenu/> */}
              <View style={[styles.userimage,{marginTop:hp(7)}]}>
                  <Image
                    //source={{uri:BASE_URL+image}}
                    source={appImages.ProfileUser}
                    style={{width: wp(30), height: hp(14)}}
                    resizeMode="contain"
                  />
              </View>
         <View style={{alignItems:'center',justifyContent:'center',margin:hp(2)}}>
            <Text style={styles.usernametext}>{name}Olivia, Female</Text>
            <Text style={styles.emailtext}>{email}example@gmail.com</Text>
         </View>
         <View style={styles.lineview}></View>

         <View style={{justifyContent:'center',marginBottom:hp(2)}}>
            <Text style={styles.headingtext}>Vehicle Details</Text>
         </View>
         <View style={styles.detailview}>
            <Text style={styles.detaillefttext}>Vehicle Color</Text>
            <Text style={styles.detailrighttext}>Black</Text>
         </View>
         <View style={styles.detailview}>
            <Text style={styles.detaillefttext}>Plate Number</Text>
            <Text style={styles.detailrighttext}>AD786</Text>
         </View>
         <View style={styles.detailview}>
            <Text style={styles.detaillefttext}>Year of Manufacture</Text>
            <Text style={styles.detailrighttext}>2010</Text>
         </View>
         <View style={styles.lineview}></View>
         <View style={{justifyContent:'center',marginBottom:hp(2)}}>
            <Text style={styles.headingtext}>Payment Details</Text>
         </View>
         <View style={styles.detailview}>
            <Text style={styles.detaillefttext}>Bank Name</Text>
            <Text style={styles.detailrighttext}>Black</Text>
         </View>
         <View style={styles.detailview}>
            <Text style={styles.detaillefttext}>Account Holders Name</Text>
            <Text style={styles.detailrighttext}>Olivia</Text>
         </View>
         <View style={styles.detailview}>
            <Text style={styles.detaillefttext}>Account Number</Text>
            <Text style={styles.detailrighttext}>0000-0000-0000</Text>
         </View>
         <View style={styles.detailview}>
            <Text style={styles.detaillefttext}>Expiry Date</Text>
            <Text style={styles.detailrighttext}>01/01/2022</Text>
         </View>
         <View style={styles.detailview}>
            <Text style={styles.detaillefttext}>CVV code</Text>
            <Text style={styles.detailrighttext}>9876</Text>
         </View>
         <View style={styles.lineview}></View>
         <TouchableOpacity onPress={()=>hidetoggle()}>
         <View style={{justifyContent:'center',marginBottom:hp(2),flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.headingtext}>Documents</Text>
    <View style={{marginRight:wp(5)}}>
        {hide=== false?
            <Image
            source={appImages.IconDown}
            style={styles.icon}
            resizeMode='contain'
          />
    :
    <Image
    source={appImages.IconUp}
    style={styles.icon}
    resizeMode='contain'
  />
    }

    </View>

         </View>
         </TouchableOpacity>
         {hide=== true?
         <View style={styles.docimagesview}>
         <Image
            source={require('../../../assets/dataimages/card.png')}
            style={styles.docimages}
            resizeMode='contain'
          />
         </View>
     :null}

         </ScrollView>
      </SafeAreaView>

  );
};

export default DriverDetail;
