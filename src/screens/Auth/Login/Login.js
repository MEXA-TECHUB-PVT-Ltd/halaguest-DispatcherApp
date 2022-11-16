import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,TextInput,
  Image, View, Text, TouchableOpacity, Button,StatusBar
} from 'react-native';

////////////paper papkage///////////////
import { Checkbox,Snackbar } from 'react-native-paper';

///////////////////app components////////////////
import CustomButtonhere from '../../../components/Button/CustomButton';

import CountryPicker from "react-native-country-picker-modal"
import Icon from 'react-native-vector-icons/MaterialIcons';


//////////////////app styles///////////
import styles from './styles';
import Authtextstyles from '../../../styles/GlobalStyles/Authtextstyles';
import Authlaststyles from '../../../styles/GlobalStyles/Authlaststyles';
import Logostyles from '../../../styles/GlobalStyles/Logostyles';
import Colors from '../../../utills/Colors';


////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setPhoneNumber,setLoginUser } from '../../../redux/actions';

/////////////////////app images///////////////////
import { appImages } from '../../../constant/images';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp} from 'react-native-responsive-screen';

////////////////api////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {

    /////////////redux states///////
    const { HotelTypes,login_user_id,phone_no} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    ///////////////////checkbox state///////////////////
    const [checked, setChecked] = React.useState(false);

       /////////button states/////////////
 const [loading, setloading] = useState(0);
 const [disable, setdisable] = useState(0);
 const [visible, setVisible] = useState(false);
 const [snackbarValue, setsnackbarValue] = useState({value: '', color: ''});
 const onDismissSnackBar = () => setVisible(false);

    ///////////////country picker states//////////////////////
  const [CountryPickerView, setCountryPickerView] = useState(false);
  const [countryCode, setCountryCode] = useState('92');
  const [number, setnumber] = useState('');

  //////////////////////Api Calling Login/////////////////
  const Login = async () => {
        console.log('userid:',BASE_URL + 'api/phoneNo/logins',countryCode,number);
    axios({
      method: 'POST',
      url: BASE_URL + 'api/phoneNo/logins',
      data: {
        table_name: 'dispacher',
        phoneno: countryCode+number,
        device_token: 'dfdf3434' 
      },
    })
      .then(function (response) {
        console.log('response', JSON.stringify(response.data));
        dispatch(setPhoneNumber(response.data.data.phoneno))
        dispatch(setLoginUser(response.data.data._id))
        //navigation.navigate('Verification',{Phonenumber:number})
      })
      .catch(function (error) {
        console.log('error', error);
      });
  };
  //////////////////////// API forms validations////////////////////////
  const LoginValidation = async () => {
    // input validation
    if (number == '') {
      setsnackbarValue({value: 'Please Enter Phone Number', color: 'red'});
      setVisible('true');
    } 

    else {
      setloading(1);
      setdisable(1);
      Login()
    }
  };

  useEffect(() => {

  }, []);

  return (

    <SafeAreaView style={styles.container}> 
      <StatusBar backgroundColor='#fff' barStyle="dark-content"/>
        {CountryPickerView == true ? <CountryPicker
          withFilter={true}
          withCallingCode={true}
          withModal={true}
          withFlag={true}
          withFlagButton={true}

          onSelect={(e) => {
            setCountryPickerView(false)
            //setCountryFlag(JSON.parse(e.flag))
            setCountryCode(JSON.parse(e.callingCode))
          }}
          onClose={(e) => {
            setCountryPickerView(false)
          }}
          visible={CountryPickerView}
        /> :
          <View></View>
        }
        <View 
     style={[Logostyles.Logoview]}
        >
          <Image
            source={appImages.logo}
            style={Logostyles.logo}
            resizeMode='contain'
          />
        </View>
<View style={Authtextstyles.textview}>
            <Text style={Authtextstyles.toptext}>Sign In</Text>
            <Text style={Authtextstyles.subtext}>Please enter your phone number
            {phone_no+login_user_id}
            </Text>
          </View>

<View style={[styles.action,{flexDirection:'row'}]}>
          <TouchableOpacity
            onPress={() => {
              setCountryPickerView(true)
            }}>
            <View style={styles.countrypicker}>
                <TextInput
                  underlineColor={'white'}
                  activeUnderlineColor={'white'}
                  //style={styles.input}
                  editable={false}
                  value={'+'+countryCode}
                  style={{ fontSize: hp(2), fontWeight: '500',
                   color: Colors.Appthemecolor,padding:'0.3%' }}
                  placeholderTextColor={"black"}
                />
            </View>
          </TouchableOpacity>
     <TextInput
       placeholder="000000000"
       onChangeText={setnumber}
       placeholderTextColor={Colors.Appthemecolor}
       autoCapitalize="none"
       keyboardType='number-pad'
       style={{ width: '80%', marginLeft:wp(3), alignSelf: 'center', color: '#000' }}
     />
   </View>
   <View style={{flexDirection:"row",alignItems:'center',marginTop:hp(2)}}>
   <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      color={Colors.Appthemecolor}
      uncheckedColor={Colors.Appthemecolor}
      onPress={() => {
        setChecked(!checked);
      }}
    />
   <Text style={styles.greytext}>
{'By continuing, I confirm I have read the '}  
    <Text style={styles.bluetext}> 
      Terms & Condition
    </Text>

</Text>
   </View>

        <CustomButtonhere
            title={'SIGN IN'}
            widthset={78}
            topDistance={32}
            onPress={() => 
             {LoginValidation()}
            }
          />
                     {/* <View style={Authlaststyles.lasttextview}>
        <Text style={Authlaststyles.lasttext}>Don't have an account? </Text>
        <TouchableOpacity  onPress={() => navigation.navigate('Signup')}>
        <Text style={Authlaststyles.lasttext}>Sign Up</Text>
        </TouchableOpacity>
      </View> */}
              <Snackbar
          duration={400}
          visible={visible}
          onDismiss={onDismissSnackBar}
          style={{
            backgroundColor: snackbarValue.color,
            marginBottom:'20%',
            zIndex: 999,
          }}>
          {snackbarValue.value}
        </Snackbar>
    </SafeAreaView>
  )
};

export default Login;