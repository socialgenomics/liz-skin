# Liz-Skin

An opinionated, functional SCSS library developed by [Repositive.io](https://repositive.io/).

## Getting Started

**1. Install with npm:** 

`npm install @repositive/liz-skin --save`

**2. Setup your `app.scss` import document:** 

Add the [`template.import.scss`](https://github.com/repositive/liz-skin/blob/master/template.import.scss) file into your `styles` directory. Rename it `app.scss`.

**3. In `app.scss`, correct the `..path/to/node_modules`**

Find & replace each `..path/to/node_modules` with the correct path to your `node_modules` directory.

**4. Do your pre-flight checks and you're off**

Compile your SCSS to CSS, check you've`<link>`-ed your stylesheet correctly and you're good to go.

## QuickFire Docs

More extensive documentation can be found in each file individually.

#### Utility Functions
* [Borders](https://github.com/repositive/liz-skin/blob/master/utilities/_border.scss) - Add a border & border radius `e.g. "border-bottom rounded"`
* [Colors](https://github.com/repositive/liz-skin/blob/master/utilities/_color.scss) - Apply font `fc-`, background `bc-` & border `border-` colors `e.g. "fc-primary bc-off-white"`
* [Cursors](https://github.com/repositive/liz-skin/blob/master/utilities/_cursor.scss) - Specify cursor style `e.g. "cursor-pointer"` 
* [Display](https://github.com/repositive/liz-skin/blob/master/utilities/_display.scss) - Set display behaviour, responsively hide elements `e.g. "block hide-s hide-m"`
* [Flex Layout](https://github.com/repositive/liz-skin/blob/master/utilities/_flex.scss) - Define layout with flexbox `e.g. "flex flex-wrap items-center justify-center"`
* [Font Styles](https://github.com/repositive/liz-skin/blob/master/utilities/_font-styles.scss) - Set font size & weight `e.g. "fs2 fw-med"`
* [Icon Sizing](https://github.com/repositive/liz-skin/blob/master/utilities/_icon.scss) - Set icon size `e.g. "icon-medium"`
* [Margin](https://github.com/repositive/liz-skin/blob/master/utilities/_margin.scss) - Apply margin (margin-right & -bottom only). Uses the [spacing scale](https://github.com/repositive/liz-skin/blob/master/settings/_spacing.scss) `e.g. "mb0 mr3"`
* [Overflow](https://github.com/repositive/liz-skin/blob/master/utilities/_overflow.scss) - Set overflow behaviour `e.g. "overflow-hidden"`
* [Padding](https://github.com/repositive/liz-skin/blob/master/utilities/_padding.scss) - Apply padding. Uses the [spacing scale](https://github.com/repositive/liz-skin/blob/master/settings/_spacing.scss) `e.g. "pb4 px3"`
* [Position](https://github.com/repositive/liz-skin/blob/master/utilities/_position.scss) - Set position behaviour, 'pin' to top/bottom/left/right, set z-index `e.g. "absolute z5 top-0 left-0"` 
* [Type Setting](https://github.com/repositive/liz-skin/blob/master/utilities/_type-setting.scss) - Adjust text-alignment, decoration & upper-/lowercase `e.g. "ta-center td-underline tt-uppercase"` 

#### Components

* [Grid Wrapper](https://github.com/repositive/liz-skin/blob/master/components/_grid-wrapper.scss) - Sets responsive width & padding and centers a grid. Two resizing options: `-fluid` or `-stepped` `e.g. "grid-wrapper grid-wrapper-fluid"`
* [Grid System](https://github.com/repositive/liz-skin/blob/master/components_toast-grid.scss) - Dan Eden's Toast Grid. See [full docs](https://github.com/daneden/toast) `e.g. "grid__col grid__col--1-of-3"`
* [Balloon Tooltips](https://github.com/repositive/liz-skin/blob/master/components/_balloons.scss) - Nice tooltips by Claudio Holanda. See [full docs](https://kazzkiq.github.io/balloon.css/) `e.g. data-balloon="I'm a tooltip" data-balloon-pos="up"`

## Other Directories

#### [`settings`](https://github.com/repositive/liz-skin/tree/master/settings) directory

The settings directory doesn't output any CSS. It contains only variables. Some settings (relating to [color](https://github.com/repositive/liz-skin/blob/master/settings/_color.scss), [typography](https://github.com/repositive/liz-skin/blob/master/settings/_typography.scss) & other [misc-ui](https://github.com/repositive/liz-skin/blob/master/settings/_misc-ui.scss)) are specific to Repositive, its brand & styleguide. Others (e.g. [spacing](https://github.com/repositive/liz-skin/blob/master/settings/_spacing.scss) & [layout-and-breakpoints](https://github.com/repositive/liz-skin/blob/master/settings/_layout-and-breakpoints.scss)) are more design agnostic. All of these agnostic variables are flagged as `!default` - edit / override with your spacing scale as you desire.

#### [`reset`](https://github.com/repositive/liz-skin/tree/master/reset) directory

In the reset directory are two common/generic resets:
* [box-sizing reset](https://github.com/repositive/liz-skin/blob/master/reset/_box-sizing.scss)
* [normalize.css](https://github.com/repositive/liz-skin/blob/master/reset/_normalize.scss)

There is also a highly opinionated reset file to apply some base Repositive styles:

* [custom-reset](https://github.com/repositive/liz-skin/blob/master/reset/_custom-reset.scss) - users outside of Repositive may prefer not to import this file

## Contribute
An issue with taking a functional CSS approach is that developers have to learn a new CSS API. It's therefore important to make the naming of utilities as intuitive as possible. Please open a PR if you want to suggest edits to any utility names. 

## Acknowledgements

This library has borrowed heavily from [BassCSS](http://basscss.com/) by [Brent Jackson](http://jxnblk.com/). It also includes the simple [toast grid](https://daneden.github.io/Toast/) developed by [Dan Eden](https://daneden.me/) and [Balloon CSS](https://kazzkiq.github.io/balloon.css/) by [Claudia Holanda](https://github.com/kazzkiq).
