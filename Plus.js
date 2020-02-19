import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

function plus(props) {
  const [text, setText] = useState('');
  const [ref, setRef] = useState('');
  return (
    <View>
      <View style={{flexDirection: 'row', padding: 15, height: 70}}>
        <FAIcon
          style={{padding: 5, marginTop: 10, flex: 1}}
          onPress={() => {
            if (text) {
              props.add(text);
              setText('');
            }
            if (ref) {
              ref.clear();
            }
          }}
          name="plus"
          color="steelblue"
          size={15}
        />
        <TextInput
          style={{flex: 10, borderColor: 'red', borderWidth: 1}}
          placeholder={'Write text you want to add'}
          ref={input => {
            setRef(input);
          }}
          onChangeText={text => {
            setText(text);
          }}
        />
      </View>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    list: state.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: task =>
      dispatch({
        type: 'ADD',
        data: task,
      }),
  };
}
const Plus = connect(
  mapStateToProps,
  mapDispatchToProps,
)(plus);
export default Plus;
