/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const primaryPink = '#FF69B4'; // Hot Pink
const secondaryBlack = '#1A1A1A'; // Dark Black

export const Colors = {
  light: {
    text: secondaryBlack,
    background: '#FFFFFF',
    tint: primaryPink,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: primaryPink,
  },
  dark: {
    text: '#ECEDEE',
    background: '#2C2C2C',
    tint: primaryPink,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: primaryPink,
  },
};
