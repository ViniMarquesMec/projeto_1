export const turboLogger = (mesage, textColor = "blue") => {
  const textStyle = `color: ${textColor}`;
  console.log(`%c${mesage}`, textStyle);
};
