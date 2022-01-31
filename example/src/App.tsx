import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply, Components } from 'bosphorus';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(10, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Components.Button />
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
