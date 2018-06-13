import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import { CardSection } from './common';

class LiftListItem extends Component {
  onRowPress(props) {
    console.log('lift list item props', this.props);
    // Actions.liftEdit({ lift: this.props.lift });
  }

  render() {
    const { name } = this.props.lift;

    return (
      <TouchableOpacity onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default LiftListItem;
