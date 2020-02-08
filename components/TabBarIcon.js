import React from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export const TabBarIconIonic = props => {
  return (
      <Ionicons
          name={props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
  );
}

export const TabBarIconAnt = props => {
  return (
      <AntDesign
          name={props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
  );
}
