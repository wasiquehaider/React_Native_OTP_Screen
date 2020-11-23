import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Grid, Col} from 'react-native-easy-grid';

class OtpInput extends React.Component {
  state = {otp: []};
  otpTextInput = [];

  componentDidMount() {
    this.otpTextInput[0].focus();
  }

  renderInputs() {
    const inputs = Array(4).fill(0);
    const txt = inputs.map((i, j) => (
      <Col key={j} style={styles.txtMargin}>
        <View>
          <TextInput
            style={[
              styles.inputRadius,
              {
                borderWidth: 1,
                borderColor: '#000000',
                borderRadius: 10,
                fontSize: 20,
              },
            ]}
            placeholder="-"
            placeholderTextColor="#000000"
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(v) => this.focusNext(j, v)}
            onKeyPress={(e) => this.focusPrevious(e.nativeEvent.key, j)}
            ref={(ref) => (this.otpTextInput[j] = ref)}
          />
        </View>
      </Col>
    ));
    return txt;
  }

  focusPrevious(key, index) {
    if (key === 'Backspace' && index !== 0)
      this.otpTextInput[index - 1].focus();
  }

  focusNext(index, value) {
    if (index < this.otpTextInput.length - 1 && value) {
      this.otpTextInput[index + 1].focus();
    }
    if (index === this.otpTextInput.length - 1) {
      this.otpTextInput[index].blur();
    }
    const otp = this.state.otp;
    otp[index] = value;
    this.setState({otp});
    this.props.getOtp(otp.join(''));
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Grid style={styles.gridPad}>{this.renderInputs()}</Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gridPad: {},
  txtMargin: {margin: 3},
  inputRadius: {height: 50, textAlign: 'center'},
});

export default OtpInput;
