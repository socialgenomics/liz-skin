function convertTextSizes(textSizes, baseSize) {
  let obj = { ...textSizes }
  Object.keys(textSizes).forEach(textSize => {
    obj[textSize] = textSizes[textSize] * baseSize
  })
  return obj
}

export default function sketchifyUnits(config) {
  let obj = {}  
  obj.textSizes = {...convertTextSizes(config.textSizes, 16)}
  return obj
}
