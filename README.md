# liz-skin


### Changelog - to v1.0.0

* No `.u-` namespacing. There is a 'gotacha' - some old classes in Discover's custom directory still have `.u-`, I will tidy this ASAP.
* Inline documentation.
* No arbitrary image width classes (`.u-w4`). See `icon.scss` for new width classes, designed around common avatar sizes. It might not be the perfect system, but it's an improvement.
* More responsive flexibility. Use the suffixes '-s',`-m`, `-l`, `-w` (note: not every suffix is available for every utility) to apply different margins, paddings, displays (show/hide) on different media breakpoints.
* Some simplified syntax: e.g. `.block`, `.inline-block`, '.absolute', '.relative', '.circle', '.square'.
* Everything relating to font has a 'f' in front of it: e.g. font-size `.fs*`, font-weight `.fw*` and (font-)color: `fc-primary` - not longer `.u-tc-primary`.
* Revised spacing scale: deleted the 96px space, introduced the 3px space. So `.mb1` = 3px, `.mb2` = 6px, `.mb3` = 12px, `.mb4` = 24px, `.mb5` = 48px.
