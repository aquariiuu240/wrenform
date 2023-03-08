# wrenform syntax

## Using Wrenform

To begin using wrenform in your project, add `<script src="https://cdn.jsdelivr.net/gh/aquariiuu240/wrenform/js/0-2-4.min.js">` to it. Next, you'll want to begin by adding the `w` class to all elements that you want to be wrendered. 

To wrender, add this line to your javascript: `wrender(wf.defaults)`. This will run the wrendering program. `wf.defaults` is a customizable object that holds information about responsive screen sizes, measurement types (e.g. pixels, em, percentage). For a solid understanding of what is in it, I reccomend you look at the javascript file, as the object names will (in the future when I get around to it) have comments explaining what they do.

Great! Let's begin :3

### Making a grid

To make a grid, add the `grid-n` class to your desired element. You shouldn't actually put in the `n` part, instead replace it with the number of columns you want. For example, if you want a 5 column grid, add `grid-5` to that element. If you instead want to specify by rows instead of columns, use `gridr-n`. *Remember, with wrenform, grid column numbers function more as a denominator than anything. You can have a grid-100, because you might want to divide it into 20, 56, and 24*.

To specify grid-gap, use the `gap-n` class. The `n` will be in pixels. (In the future this will be changeable in `wf.defaults`. 

### Populating it

Cool! We did that. Now the easiest thing to do is to put some elements inside the grid and watch them get sorted. But wait! What if you want an element to take up more than one column's width or height? `ecol-n` and `erow-n` will help. As the names suggest, adding that to an element will make it span a certain amount of columns/rows, based on your chosen `n`. 

### Responsive design

wrenform currently supports 5 different screensizes, specified in the variable `wf.defaults`. Change these as you wish, but make sure to update the variable before calling the function. To specify a max width, add `-sn` to your class (where `n` is a number between 1 and 5, specified in `wf.defaults`), e.g. `ecol-5 ecol-3-s2`. 

You can also use the `show` and `hide` classes (the names are self explanatory) and like all classes, use the responsive modifiers.
