import React from 'react';
import { render } from 'react-sketchapp';
import { Text } from 'react-primitives';

import config from '../../config';

function convertTextSizes(textSizes, baseSize) {
  let obj = { ...textSizes }
  Object.keys(textSizes).forEach(textSize => {
    obj[textSize] = textSizes[textSize] * baseSize
  })
  return obj
}

function sketchifyUnits(config) {
  let obj = {}  
  obj.textSizes = {...convertTextSizes(config.textSizes, 16)}
  return obj
}

const lsSketch = {...config, ...sketchifyUnits(config)}

export default (context) => {
  render(<Text style={{ color: lsSketch.colors.blue, fontSize: lsSketch.textSizes['3xl'] }}>hello world!</Text>, context.document.currentPage());
}