import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const BottomBar = () => (
  <Appbar style={styles.top}>
    <Appbar.Action
      title="Music"
      icon="hammer"
      onPress={() => console.log('Pressed archive')}
    />
    <Appbar.Action
      icon="toy-brick"
      onPress={() => console.log('Pressed delete')}
    />

    <Appbar.Action
      icon="cursor-pointer"
      onPress={() => console.log('Pressed mail')}
    />

    <Appbar.Action
      icon="cursor-move"
      onPress={() => console.log('Pressed delete')}
    />
    <Appbar.Action
      icon="rotate-3d-variant"
      onPress={() => console.log('Pressed mail')}
    />
    <Appbar.Action icon="brush" onPress={() => console.log('Pressed label')} />
    <Appbar.Action
      icon="palette"
      onPress={() => console.log('Pressed delete')}
    />
    <Appbar.Action
      icon="delete"
      onPress={() => console.log('Pressed delete')}
    />
  </Appbar>
);

export default BottomBar;

const styles = StyleSheet.create({
  top: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

// { key: 'music', title: 'Goals', icon: 'trophy' },
//     { key: 'albums', title: 'Check-In', icon: 'check' },
//     { key: 'recents', title: 'Options', icon: 'cog' },
