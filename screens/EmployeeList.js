import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { Button } from 'react-native-elements';
import { employeesFetch } from '../actions';
import ListItem from '../components/ListItem';

class EmployeeList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Employees',
      tabBarIcon: () => {
        return <Icon name="favorite" size={24} />;
      },
      headerTintColor: 'royalblue',
      headerStyle: {
        backgroundColor: '#1e304f'
      },
      headerRight: (
        <Button
          title="Add"
          onPress={() => navigation.navigate('addEmp')}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0,122,255,1)"
        />
      )
    };
  };

  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    // console.log('employee', employee);
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <ListView
        style={{ backgroundColor: '#1e304f' }}
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
