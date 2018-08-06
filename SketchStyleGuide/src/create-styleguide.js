import React from 'react';
import { render, Artboard, Page} from 'react-sketchapp';
import { Text, View } from 'react-primitives';

import config from '../../config';
import sketchifyUnits from './utils/convertUnits' ;

const lsSketch = {...config, ...sketchifyUnits(config)};

const ColorSwatch = ({ hexCode }) => (
  <View>hi</View>
)

const ArtboardTile = ({ coord, name, children, style }) => (
  <Artboard name={name} style={{
    width: 480,
    height: 600,
    top: coord.y,
    left: coord.x,
    position: 'absolute',
    padding: 48,
    ...style
  }}>
    {children}
  </Artboard>
)

const TypographyArtboard = () => (
  <ArtboardTile name="Typography" coord={{ x: 0, y: 0 }}>
    { Object.keys(lsSketch.textSizes)
      .reverse()
      .map(textSize => (
        <Text style={{
          fontFamily: "Guyot Headline",
          color: lsSketch.colors['black-primary'],
          fontSize: lsSketch.textSizes[textSize]
        }}>Connecting the world of genomic data</Text>
      )
    )}
  </ArtboardTile>
)

const Swatch = ({ name, hex }) => (
  <View
    name={`Swatch ${name}`}
    style={{
      height: 78,
      width: 78,
      margin: 6,
      backgroundColor: hex,
      padding: 8,
    }}
  >
    <Text name="Swatch Name" style={{ color: "#000000", fontWeight: 'bold' }}>
      {name}
    </Text>
    <Text name="Swatch Hex" style={{ color: "#000000" }}>
      {hex}
    </Text>
  </View>
);

const ColorsArtboard = props => (
  <ArtboardTile name="Color Swatches" coord={{ x: 600, y: 0 }} style={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 42
  }}>
    { Object.keys(lsSketch.colors).map(swatch => <Swatch name={swatch} hex={lsSketch.colors[swatch]} /> )}
  </ArtboardTile>
)

const Document = props =>
  <Page style={{ flex: 1 }}>
    <TypographyArtboard />
    <ColorsArtboard />
  </Page>;


export default (context) => {
  render(<Document />, context.document.currentPage());
}