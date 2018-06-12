import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection } from './common/CardSection';
import { Input } from './common';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="First Name"
            placeholder="Jane"
            value={this.props.firstName}
            onChangeText={value => this.props.employeeUpdate({ prop: 'firstName', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Last Name"
            placeholder="Johnson"
            value={this.props.lastName}
            onChangeText={value => this.props.employeeUpdate({ prop: 'lastName', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
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
  const { firstName, lastName, phone } = state.employeeForm;

  return { firstName, lastName, phone };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
