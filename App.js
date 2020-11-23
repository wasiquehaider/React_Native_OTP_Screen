import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import OtpInput from './components/OTPInput';

const App = () => {
  const [state, setState] = useState({otp: ''});
  const getOtp = (otp) => {
    console.log(otp);
    setState({otp});
  };
  return (
    <View style={styles.container}>
      <View style={styles.firstPortion}>
        <Text style={styles.topheading}>Verification Code</Text>
      </View>
      <View style={styles.secondPortion}>
        <View style={styles.subPortion}>
          <View style={styles.subPortion1}>
            <Text style={styles.subHeading}>
              Please enter verification code sent to your mobile
            </Text>
          </View>
          <View style={styles.subPortion2}>
            <OtpInput getOtp={(otp) => getOtp(otp)} />
          </View>
          <View style={styles.subPortion3}>
            <TouchableOpacity style={styles.submitBtn}>
              <Text style={styles.submitBtnText}>VERIFY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb306',
  },
  firstPortion: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
  },
  secondPortion: {flex: 0.7},
  subPortion: {
    flex: 1,
    backgroundColor: '#FFFFFf',
    borderTopRightRadius: 50,
    padding: 30,
  },
  subPortion1: {flex: 0.3},
  subPortion2: {flex: 0.4},
  subPortion3: {flex: 0.3},
  topheading: {fontSize: 20, fontWeight: '700', color: '#ffffff'},
  subHeading: {fontSize: 15, fontWeight: '700', color: '#000000'},
  submitBtn: {
    backgroundColor: '#ffb306',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  submitBtnText: {fontSize: 20, fontWeight: '700', color: '#ffffff'},
});

export default App;
