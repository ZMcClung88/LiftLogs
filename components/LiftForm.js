import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { liftUpdate } from '../actions';
import { CardSection } from './common/CardSection';
import { Input } from './common';

class LiftForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Lift Name"
            placeholder="Eagle Express"
            value={this.props.name}
            onChangeText={value => this.props.liftUpdate({ prop: 'name', value })}
          />
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = state => {
  console.log('state', state);
  const { name } = state.liftForm;

  return { name };
};

export default connect(mapStateToProps, { liftUpdate })(LiftForm);
