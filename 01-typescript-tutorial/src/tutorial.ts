// let someValue: never = 0;
// console.log(someValue);

type Theme = 'light' | 'dark';

function checkTheme(theme: Theme) {
  if (theme === 'light') {
    console.log('light theme');
    return;
  };
  if (theme === 'dark') {
    console.log('dark theme');
    return;
  };
  theme;
};
checkTheme('dark');
checkTheme('light');


enum Color {
  Red,
  Blue,
  Green,
};

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return 'Red';
    case Color.Blue:
      return 'Blue';
    case Color.Green:
      return 'Green';
    default:
      let unexpectedColor: never = color;
      throw new Error(`Unexpected color value: ${unexpectedColor}`);
  };
};

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Blue)); 
console.log(getColorName(Color.Green)); 