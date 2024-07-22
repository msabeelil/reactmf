// src/capacitorService.js
import { Plugins } from '@capacitor/core';

const { MyPlugin } = Plugins;

export const echo = async (value) => {
  try {
    const response = await MyPlugin.echo({ value });
    return response.value;
  } catch (error) {
    console.error('Error calling echo plugin', error);
  }
};
