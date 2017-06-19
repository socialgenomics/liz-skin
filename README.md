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

Click through to each file individually for more extensive inline documentation.

#### Utility Functions
* [Borders](https://github.com/repositive/liz-skin/blob/master/utilities/_border.scss) - Apply borders & border radii `e.g. "border-bottom rounded"`
* [Colors](https://github.com/repositive/liz-skin/blob/master/utilities/_color.scss) - Apply font color `fc-`, background color `bc-` & border color `e.g. "fc-primary"`
* [Cursors](https://github.com/repositive/liz-skin/blob/master/utilities/_cursor.scss) - Adjust default cursors `e.g. "cursor-pointer"` 
* [Display](https://github.com/repositive/liz-skin/blob/master/utilities/_display.scss) - Apply display types & responsively hide elements `e.g. "block hide-s hide-m"`
* [Flex Layout](https://github.com/repositive/liz-skin/blob/master/utilities/_flex.scss) - Define layouts with flexbox `e.g. "flex flex-wrap items-center justify-center"`
* [Font Styles](https://github.com/repositive/liz-skin/blob/master/utilities/_font-styles.scss) - Set font sizes & font-weights `e.g. "fs2 fw-med"`
* [Icon Sizing](https://github.com/repositive/liz-skin/blob/master/utilities/_icon.scss) - Set icon & avatar sizes `e.g. "icon-medium"`
* [Margin](https://github.com/repositive/liz-skin/blob/master/utilities/_margin.scss) - Apply spacing (margin-right & -bottom only) outside of an element's border. Uses the [spacing scale](https://github.com/repositive/liz-skin/blob/master/settings/_spacing.scss) `e.g. "mr3"`
* [Overflow](https://github.com/repositive/liz-skin/blob/master/utilities/_overflow.scss) - Set overflow behaviour `e.g. "overflow-hidden"`
* [Padding](https://github.com/repositive/liz-skin/blob/master/utilities/_padding.scss) - Apply spacing around an element's content. Uses the [spacing scale](https://github.com/repositive/liz-skin/blob/master/settings/_spacing.scss) `e.g. "px3"`
* [Position](https://github.com/repositive/liz-skin/blob/master/utilities/_position.scss) - Set position behaviour, apply z-indices & basic alignment `e.g. "absolute z5 top-0"` 
* [Type Setting](https://github.com/repositive/liz-skin/blob/master/utilities/_type-setting.scss) - Adjust text-alignment, decoration & casing `e.g. "ta-center tt-uppercase td-underline"` 

## Components

* [Grid Wrapper](https://github.com/repositive/liz-skin/blob/master/components/_grid-wrapper.scss)


## Directory Structure

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


## Contribute
An issue with taking a functional CSS approach is that developers have to learn a new CSS API. It's therefore important to make the naming of utilities as intuitive as possible. Please open a PR if you want to suggest edits to any utility names. 

## Acknowledgements

This library has borrowed heavily from [BassCSS](http://basscss.com/) by [Brent Jackson](http://jxnblk.com/). It also includes the simple [toast grid](https://daneden.github.io/Toast/) developed by [Dan Eden](https://daneden.me/).
