# Liz-Skin

An opinionated, functional SCSS library developed by [Repositive.io](https://repositive.io/).

## Getting Started

#### Install with npm:

`npm install @repositive/liz-skin --save`

#### Setup your `main.scss` import sheet

Copy `template.import.scss` ([link](https://github.com/repositive/liz-skin/blob/master/template.import.scss)) into your `styles` directory. Rename it `main.scss` (or `app.scss` or whatever).

#### Correct path to `node_modules`

In this `main.scss` import sheet, replace each `../path/to/node_modules` with the correct path to your `node_modules` directory.

#### And you're off...

Compile your SCSS to CSS, check you've`<link>`-ed your stylesheet correctly and you're good to go.

## What's what?

#### [`settings`](https://github.com/repositive/liz-skin/tree/master/settings) directory

The settings directory doesn't output any CSS. It contains only variables. Some settings (relating to [color](https://github.com/repositive/liz-skin/blob/master/settings/_color.scss), [typography](https://github.com/repositive/liz-skin/blob/master/settings/_typography.scss) & other [misc-ui](https://github.com/repositive/liz-skin/blob/master/settings/_misc-ui.scss)) are specific to Repositive, its brand & styleguide. Others (e.g. [spacing](https://github.com/repositive/liz-skin/blob/master/settings/_spacing.scss) & [layout-and-breakpoints](https://github.com/repositive/liz-skin/blob/master/settings/_layout-and-breakpoints.scss)) are more design agnostic. All of these agnostic variables are flagged as `!default` - edit / override with your spacing scale as you desire.

#### [`reset`](https://github.com/repositive/liz-skin/tree/master/reset) directory

In the reset directory are two common/generic resets:
* [box-sizing reset](https://github.com/repositive/liz-skin/blob/master/reset/_box-sizing.scss)
* [normalize.css](https://github.com/repositive/liz-skin/blob/master/reset/_normalize.scss)

There is also a highly opinionated reset file used by Repositive to reset the hell out of HTML elements:

* [custom-reset](https://github.com/repositive/liz-skin/blob/master/reset/_custom-reset.scss) - users outside of Repositive may prefer to delete this file

#### [`components`](https://github.com/repositive/liz-skin/tree/liz-skin-documentation/components) directory

These could probably have a better name than "components" - they aren't components as we tend to think of UI components, more just amped up utility classes.

In here, you'll find a:

* [grid system](https://github.com/repositive/liz-skin/blob/liz-skin-documentation/components/_grid.scss) - slightly customised Toast Grid - see full documentation [here](https://github.com/daneden/toast)
* [grid wrapper](https://github.com/repositive/liz-skin/blob/liz-skin-documentation/components/_grid-wrapper.scss) - defines the widths & padding of the grid at different viewports widths
* [list styles](https://github.com/repositive/liz-skin/blob/liz-skin-documentation/components/_list.scss) - will be utilities as soon as I get around to it
* [balloons](https://github.com/repositive/liz-skin/blob/liz-skin-documentation/components/_balloons.scss) - an external library for nice tooltips


#### [`utilities`](https://github.com/repositive/liz-skin/tree/master/utilities) directory

Utility classes for setting:

* [border styles](https://github.com/repositive/liz-skin/blob/master/utilities/_border.scss)
* [color](https://github.com/repositive/liz-skin/blob/master/utilities/_color.scss) - background colors, border colors & font-colors
* [cursors](https://github.com/repositive/liz-skin/blob/master/utilities/_cursor.scss)
* [display](https://github.com/repositive/liz-skin/blob/master/utilities/_display.scss) - includes classes for responsively hiding UI
* [flex layout](https://github.com/repositive/liz-skin/blob/master/utilities/_flex.scss)
* [font styles](https://github.com/repositive/liz-skin/blob/master/utilities/_font-styles.scss) - font-size & font-weight
* [icon](https://github.com/repositive/liz-skin/blob/master/utilities/_icon.scss) widths
* [margin](https://github.com/repositive/liz-skin/blob/master/utilities/_margin.scss)
* [overflow](https://github.com/repositive/liz-skin/blob/master/utilities/_overflow.scss)
* [padding](https://github.com/repositive/liz-skin/blob/master/utilities/_padding.scss)
* [position](https://github.com/repositive/liz-skin/blob/master/utilities/_position.scss) - also includes z-index scale
* [type-setting](https://github.com/repositive/liz-skin/blob/master/utilities/_type-setting.scss) - alignment, line-breaks & text-decoration

## Usage

Each file has inline documentation for further detail. Outlined below is the information you'll most often need to know.

#### Margin, Padding & Spacing

The spacing scale is defined as follows (see [`_spacing.scss`](https://github.com/repositive/liz-skin/blob/master/settings/_spacing.scss)):

```
$global-spacing-unit    : 24px !default;

$spacing-factor-tiny    : 0.125 !default; // by default, 3px
$spacing-factor-small   : 0.25 !default; // by default, 6px
$spacing-factor-medium  : 0.5 !default; // by default, 12px
$spacing-factor-large   : 1 !default; // by default, 24px
$spacing-factor-x-large : 2 !default; // by default, 48px
```

This scale is implemented in [`_margin.scss`](https://github.com/repositive/liz-skin/blob/master/utilities/_margin.scss) & [`padding.scss`](https://github.com/repositive/liz-skin/blob/master/utilities/_padding.scss) using the following class syntax:

```
Base:
  p = padding
  m = margin

Modifiers:
  x = horizontal
  y = vertical
  t = top
  b = bottom
  l = left
  r = right

  0 = none
  1 = tiny
  2 = small
  3 = medium
  4 = large
  5 = x-large

Media Query Extensions (mobile-first):
 -m = at medium viewports
 -l = at large viewports

e.g.

.mb0 { margin-bottom: 0; }

.px3 {
  padding-left: $spacing-unit-medium ; // or 12px
  padding-right: $spacing-unit-medium ; // or 12px
}
```

## Acknowledgements

This library has borrowed heavily from [BassCSS](http://basscss.com/) by [Brent Jackson](http://jxnblk.com/). It also includes the simple [toast grid](https://daneden.github.io/Toast/) developed by [Dan Eden](https://daneden.me/).
