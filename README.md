hdpi-detector
=============

Simple hdpi screen detector in javascript (High Dots Per Inch) based in feature detection.

Compatible with modernizr library.

## Live Demo
[Demo hdpi.detector.js with javascript](http://jorgegilramos.github.io/me/test/demo_javascript.html)
[Demo hdpi.detector.js with css class](http://jorgegilramos.github.io/me/test/demo_css.html)

## Usage

###html
```html
<script src="js/hdpi.detector.js" type="text/javascript"></script>
```

###css
```css
.no-hdpi img {
  /* no hdpi image. Low resolution */
  background-image: url("no-hdpi.png");
}
.hdpi img {
  /* hdpi image. High resolution */
  background-image: url("hdpi.png");
}
```

###javascript

Using native javascript class:
```javascript
if (Detector.hdpi) {
  // The user has a hdpi display 
} else {
  // The user has a non-hdpi display
}
```

Using modernizr:
```javascript
if (Modernizr.hdpi) {
  // The user has a hdpi display 
} else {
  // The user has a non-hdpi display
}
```
