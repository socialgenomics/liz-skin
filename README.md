# Liz-Skin

An opinionated (\*), functional SCSS library developed by [Repositive.io](https://repositive.io/). \*At this time, the framework contains colour variables, spacing units and other misc-ui variables. These are all flagged as `!default` however, so you can override with your color flavours of choice.

## Getting Started

##### Install with npm:

`npm install @repositive/liz-skin --save`

##### Setup your `main.scss` import sheet

Copy `template.import.scss` ([link](https://github.com/repositive/liz-skin/blob/master/template.import.scss)) into your `styles` directory. Rename it `main.scss` or whatever you want to call it.

##### Correct path to `node_modules`

In this `main.scss` import sheet, replace each `../path/to/node_modules` with the correct path to your `node_modules` directory.

## What's what?

##### `utilities` directory

Utility classes for setting:

* [border styles](https://github.com/repositive/liz-skin/blob/master/utilities/_border.scss)
* [color](https://github.com/repositive/liz-skin/blob/master/utilities/_color.scss) (background colors, border colors & font-colors)
* [cursors](https://github.com/repositive/liz-skin/blob/master/utilities/_cursor.scss)
* [display](https://github.com/repositive/liz-skin/blob/master/utilities/_display.scss) (includes classes for responsively hiding UI)
* [flex layout](https://github.com/repositive/liz-skin/blob/master/utilities/_flex.scss)
* [font styles](https://github.com/repositive/liz-skin/blob/master/utilities/_font-styles.scss) (font-size & font-weight)
* [icon](https://github.com/repositive/liz-skin/blob/master/utilities/_icon.scss) widths
* [margin](https://github.com/repositive/liz-skin/blob/master/utilities/_margin.scss)
* [overflow](https://github.com/repositive/liz-skin/blob/master/utilities/_overflow.scss)
* [padding](https://github.com/repositive/liz-skin/blob/master/utilities/_padding.scss)
* [position](https://github.com/repositive/liz-skin/blob/master/utilities/_position.scss) (also includes z-index scale)
* [type-setting](https://github.com/repositive/liz-skin/blob/master/utilities/_type-setting.scss) (alignment, line-breaks & text-decoration)

See each file for inline documentation.

## Acknowledgements

This library has borrowed heavily from [BassCSS](http://basscss.com/) by [Brent Jackson](http://jxnblk.com/). It also includes the simple [toast grid](https://daneden.github.io/Toast/) developed by [Dan Eden](https://daneden.me/).
