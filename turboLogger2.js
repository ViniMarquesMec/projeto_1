export const turboLogger = (mesage, textColor = "green") => {
  const textStyle = `color: ${textColor}`;
  console.log(`%c${mesage}`, textStyle);
};
