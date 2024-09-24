import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import * as Notifications from 'expo-notifications';

// Define a task name
const TASK_NAME = 'BACKGROUND_NOTIFICATION_TASK';

// Register the background task
TaskManager.defineTask(TASK_NAME, async () => {
  try {
    // Function to send a notification
    await sendRandomNotification();

    // Return BackgroundFetch.Result.NewData if task succeeds
    return BackgroundFetch.Result.NewData; // Ensure that this matches the new usage
  } catch (error) {
    // Return BackgroundFetch.Result.Failed if there's an error
    return BackgroundFetch.Result.Failed; // Ensure that this matches the new usage
  }
});

// Function to send a random notification
async function sendRandomNotification() {
  const messages = [
    'Take a break and stretch!',
    'Time to hydrate!',
    'Remember to move around!',
    'Stay active!',
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Friendly Reminder',
      body: randomMessage,
    },
    trigger: null, // Send immediately
  });
}

// Register background fetch
export async function registerBackgroundTask() {
  try {
    const status = await BackgroundFetch.getStatusAsync();
    if (status === BackgroundFetch.Status.Restricted || status === BackgroundFetch.Status.Denied) {
      console.log('Background execution is not allowed');
      return;
    }

    // Register the task
    await BackgroundFetch.registerTaskAsync(TASK_NAME, {
      minimumInterval: 5 * 60 * 60, // 5 hours in seconds
      stopOnTerminate: false, // Continue after the app is closed
      startOnBoot: true, // Start when the device boots
    });

    console.log('Background fetch registered successfully!');
  } catch (error) {
    console.log('Failed to register background task:', error);
  }
}
