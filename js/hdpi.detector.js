/*
 * hdpi screen detector javascript 1.0.1 (High Dots Per Inch)
 * Ricardo Jorge Gil Ramos
 * http://jorgegilramos.es/
 *
 * Thanks to:
 *  - Thomas Fuchs media query: http://retinafy.me/
 *  - Modernizr for inspiration: http://modernizr.com/
 *
 * RJGR © Creative Commons Attribution-NonCommercial 3.0 
 * License: http://creativecommons.org/licenses/by-nc/3.0/
 */
var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-device-pixel-ratio: 1.5),(min-resolution: 1.5dppx)";
if (window.Modernizr){
  // Try modernizr first
  Modernizr.addTest("hdpi", function(){
    if (window.devicePixelRatio > 1)
      return true;
    else {
      if (Modernizr.mq(mediaQuery))
        return true;
    }
    return false;
  });
} else {
  window.Detector = (function(window, document, undefined){
    var version = "1.0.1",
    Detector = {};
    docElement = document.documentElement;
    Detector._version = version;
    Detector.hdpi = function () {
      if (window.devicePixelRatio > 1)
        return true;
      else {
        if (window.matchMedia && window.matchMedia(mediaQuery).matches)
          return true;
      }
      return false;
    }();
    // Add class to document
    if (docElement.className === undefined) docElement.className="";
    docElement.className += ' ' + (Detector.hdpi ? '' : 'no-') + "hdpi";
    return Detector;
  })(this, this.document);
}
