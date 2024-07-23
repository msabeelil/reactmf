export const sendMessageToAndroid = (eventName, data) => {
  if (window.AndroidBridge) {
    console.log("Android bridge available");
    window.AndroidBridge.postMessage(JSON.stringify({ eventName, data }));
  } else {
    console.warn("AndroidBridge not available, running in browser mode");
    window.postMessage(JSON.stringify({ eventName, data }), "*");
  }
};
