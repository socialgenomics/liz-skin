# liz-skin


### Changelog - to v1.0.0

* No `.u-` namespacing. There is a 'gotacha' - some old classes in Discover's custom directory still have `.u-`, I will tidy this ASAP.
* Revised spacing scale: deleted the 96px space, introduced the 3px space:
```scss
.p0 {} // = 0px padding
.p1 {} // = 3px padding
.p2 {} // = 6px padding
.p3 {} // = 12px padding
.p4 {} // = 24px padding
.p5 {} // = 48px padding
```
* Inline documentation.
* More responsiveness. Use the suffixes `-s`,`-m`, `-l`, `-w` (note: not every suffix is available for every utility) to apply different margins, paddings, displays (show/hide) on different media breakpoints.
* Some simplified syntax: e.g. `.block`, `.inline-block`, `.absolute`, `.relative`, `.circle`, `.square`.
* Everything relating to font has a 'f' in front of it. So `.u-tc-primary` is replaced by`.fc-primary`, to be consistent with font-size and font-weight.
* No arbitrary image width classes (`.u-w4`). See `icon.scss` for new width classes, designed around common avatar sizes. It might not be the perfect system, but it's an improvement.
