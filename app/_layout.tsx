import { Stack } from "expo-router";
import { RootSiblingParent } from "react-native-root-siblings";



export default function RootLayout() {
  return (
    <>
      <RootSiblingParent>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="onBoarding" options={{ headerShown: false }} />
          <Stack.Screen name="Gender" options={{ headerShown: false }} />
          <Stack.Screen name="Age" options={{ headerShown: false }} />
          <Stack.Screen name="PoidHeight" options={{ headerShown: false }} />
          <Stack.Screen name="Goals" options={{ headerShown: false }} />
          <Stack.Screen name="Welcom" options={{ headerShown: false }} />
          <Stack.Screen name="Home" options={{ headerShown: false }} />
          <Stack.Screen name="Beginner" options={{ headerShown: false }} />
          <Stack.Screen name="Practice" options={{ headerShown: false }} />



        </Stack>
      </RootSiblingParent>
    </>
  );
}
