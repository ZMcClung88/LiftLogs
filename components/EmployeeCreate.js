import React, { Component } from 'react';
import { View } from 'react-redux';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate, resetForm } from '../actions';
import { Card, CardSection, Spinner, Button } from './common';
// import { Card } from './common/Card';
// import { CardSection } from './common/CardSection';
// import { Button } from './common/Button';
// import { Spinner } from './common/Spinner';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { firstName, lastName, phone, shift } = this.props;
    this.props.employeeCreate({ firstName, lastName, phone, shift: shift || 'Monday' });
    this.props.props.navigation.navigate('menu');
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { firstName, lastName, phone, shift } = state.employeeForm;

  return { firstName, lastName, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate, resetForm })(EmployeeCreate);