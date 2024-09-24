import { Stack } from "expo-router";
import { RootSiblingParent } from "react-native-root-siblings";
import * as Notifications from 'expo-notifications';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { registerBackgroundTask } from './bgTask';



export default function RootLayout() {

  useEffect(() => {
    // Request permission for notifications
    requestNotificationPermissions();
    registerBackgroundTask();
  }, []);

  const requestNotificationPermissions = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to send notifications was denied.');
    }
  };

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
          <Stack.Screen name="Advanced" options={{ headerShown: false }} />
          <Stack.Screen name="Expert" options={{ headerShown: false }} />
          <Stack.Screen name="Profile" options={{ headerShown: false }} />


        </Stack>
      </RootSiblingParent>
    </>
  );
}
// Configure how notifications behave when app is in the foreground
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});