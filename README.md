# wrenform
Javascript library for implimentation of CSS grid and flexbox in a mobile environment. 
Wholly unfinished so don't bother right now :)

Also should be noted this was (at the time of writing) built solely for my usage (feel free to use it as well) meaning that it might be unoptimized and at times unhelpful. I'll try to fix that in the future. 

Currently, in version 0.1.0, way before I plan to release it, and only an hour after starting the project, it's already pretty helpful for just quickening grid and getting custom grid sizes across the board without too much work.

---

## Basic syntax

As of now, only a few things to know. 
- Use `<script src="https://cdn.jsdelivr.net/gh/aquariiuu240/wrenform/js/currentversion.js">` to implement 
- Use the `w` class for elements you want to be wrendered
- To wrender, in your javascript, include `wrender(wf.defaults)`
- `wf.defaults` is currently a list of preprogrammed screen-width settings. You can change this before wrendering
- uhm screen sizes don't matter as of the current version
- use `grid-n` where `n` is the number of columns in your grid. only use the `grid` on elements that contain a grid
- use `e-n` where `n` is the number of columns that element spans within a grid.
- i think u can nest grids
- don't expect much at the moment, i have lots to add

---

## in the future

- flexbox
- a large css library (js would be for loading only what needed)
- toggle display:none for readability
- optimize
- improve grid features
