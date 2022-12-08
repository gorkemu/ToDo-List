(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(n){t(1,arguments);var r=Object.prototype.toString.call(n);return n instanceof Date||"object"===e(n)&&"[object Date]"===r?new Date(n.getTime()):"number"==typeof n||"[object Number]"===r?new Date(n):("string"!=typeof n&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function r(e){t(1,arguments);var r=n(e);return r.setHours(0,0,0,0),r}function a(e,n){t(2,arguments);var a=r(e),o=r(n);return a.getTime()===o.getTime()}Math.pow(10,8);var o=36e5;function i(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function u(e,n){var r;t(1,arguments);var a=i(null!==(r=null==n?void 0:n.additionalDigits)&&void 0!==r?r:2);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var o,u=f(e);if(u.date){var d=m(u.date,a);o=h(d.restDateString,d.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);var s,c=o.getTime(),l=0;if(u.time&&(l=v(u.time),isNaN(l)))return new Date(NaN);if(!u.timezone){var g=new Date(c+l),w=new Date(0);return w.setFullYear(g.getUTCFullYear(),g.getUTCMonth(),g.getUTCDate()),w.setHours(g.getUTCHours(),g.getUTCMinutes(),g.getUTCSeconds(),g.getUTCMilliseconds()),w}return s=y(u.timezone),isNaN(s)?new Date(NaN):new Date(c+l+s)}var d={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},s=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,c=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,l=/^([+-])(\d{2})(?::?(\d{2}))?$/;function f(t){var e,n={},r=t.split(d.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?e=r[0]:(n.date=r[0],e=r[1],d.timeZoneDelimiter.test(n.date)&&(n.date=t.split(d.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var a=d.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}function m(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?a:100*o,restDateString:t.slice((r[1]||r[2]).length)}}function h(t,e){if(null===e)return new Date(NaN);var n=t.match(s);if(!n)return new Date(NaN);var r=!!n[4],a=g(n[1]),o=g(n[2])-1,i=g(n[3]),u=g(n[4]),d=g(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,u,d)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var a=7*(e-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(e,u,d):new Date(NaN);var c=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(p[e]||(b(t)?29:28))}(e,o,i)&&function(t,e){return e>=1&&e<=(b(t)?366:365)}(e,a)?(c.setUTCFullYear(e,o,Math.max(a,i)),c):new Date(NaN)}function g(t){return t?parseInt(t):1}function v(t){var e=t.match(c);if(!e)return NaN;var n=w(e[1]),r=w(e[2]),a=w(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a)?n*o+6e4*r+1e3*a:NaN}function w(t){return t&&parseFloat(t.replace(",","."))||0}function y(t){if("Z"===t)return 0;var e=t.match(l);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,a)?n*(r*o+6e4*a):NaN}var p=[31,null,31,30,31,30,31,31,30,31,30,31];function b(t){return t%400==0||t%4==0&&t%100!=0}function T(e,r){t(2,arguments);var a=n(e),o=i(r);return isNaN(o)?new Date(NaN):o?(a.setDate(a.getDate()+o),a):a}function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function D(e){return t(1,arguments),e instanceof Date||"object"===C(e)&&"[object Date]"===Object.prototype.toString.call(e)}function S(e){if(t(1,arguments),!D(e)&&"number"!=typeof e)return!1;var r=n(e);return!isNaN(Number(r))}function M(e,r){t(2,arguments);var a=n(e).getTime(),o=i(r);return new Date(a+o)}function k(e,n){t(2,arguments);var r=i(n);return M(e,-r)}var N=864e5;function U(e){t(1,arguments);var r=1,a=n(e),o=a.getUTCDay(),i=(o<r?7:0)+o-r;return a.setUTCDate(a.getUTCDate()-i),a.setUTCHours(0,0,0,0),a}function x(e){t(1,arguments);var r=n(e),a=r.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(a+1,0,4),o.setUTCHours(0,0,0,0);var i=U(o),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var d=U(u);return r.getTime()>=i.getTime()?a+1:r.getTime()>=d.getTime()?a:a-1}function E(e){t(1,arguments);var n=x(e),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=U(r);return a}var P=6048e5,W={};function q(){return W}function L(e,r){var a,o,u,d,s,c,l,f;t(1,arguments);var m=q(),h=i(null!==(a=null!==(o=null!==(u=null!==(d=null==r?void 0:r.weekStartsOn)&&void 0!==d?d:null==r||null===(s=r.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==u?u:m.weekStartsOn)&&void 0!==o?o:null===(l=m.locale)||void 0===l||null===(f=l.options)||void 0===f?void 0:f.weekStartsOn)&&void 0!==a?a:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=n(e),v=g.getUTCDay(),w=(v<h?7:0)+v-h;return g.setUTCDate(g.getUTCDate()-w),g.setUTCHours(0,0,0,0),g}function Y(e,r){var a,o,u,d,s,c,l,f;t(1,arguments);var m=n(e),h=m.getUTCFullYear(),g=q(),v=i(null!==(a=null!==(o=null!==(u=null!==(d=null==r?void 0:r.firstWeekContainsDate)&&void 0!==d?d:null==r||null===(s=r.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==u?u:g.firstWeekContainsDate)&&void 0!==o?o:null===(l=g.locale)||void 0===l||null===(f=l.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==a?a:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(h+1,0,v),w.setUTCHours(0,0,0,0);var y=L(w,r),p=new Date(0);p.setUTCFullYear(h,0,v),p.setUTCHours(0,0,0,0);var b=L(p,r);return m.getTime()>=y.getTime()?h+1:m.getTime()>=b.getTime()?h:h-1}function j(e,n){var r,a,o,u,d,s,c,l;t(1,arguments);var f=q(),m=i(null!==(r=null!==(a=null!==(o=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(d=n.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==o?o:f.firstWeekContainsDate)&&void 0!==a?a:null===(c=f.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==r?r:1),h=Y(e,n),g=new Date(0);g.setUTCFullYear(h,0,m),g.setUTCHours(0,0,0,0);var v=L(g,n);return v}var O=6048e5;function F(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const I=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return F("yy"===e?r%100:r,e.length)},H=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):F(n+1,2)},z=function(t,e){return F(t.getUTCDate(),e.length)},B=function(t,e){return F(t.getUTCHours()%12||12,e.length)},A=function(t,e){return F(t.getUTCHours(),e.length)},Q=function(t,e){return F(t.getUTCMinutes(),e.length)},G=function(t,e){return F(t.getUTCSeconds(),e.length)},R=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return F(Math.floor(r*Math.pow(10,n-3)),e.length)};function X(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+F(o,2)}function J(t,e){return t%60==0?(t>0?"-":"+")+F(Math.abs(t)/60,2):$(t,e)}function $(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+F(Math.floor(a/60),2)+n+F(a%60,2)}const Z={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return I(t,e)},Y:function(t,e,n,r){var a=Y(t,r),o=a>0?a:1-a;return"YY"===e?F(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):F(o,e.length)},R:function(t,e){return F(x(t),e.length)},u:function(t,e){return F(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return F(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return F(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return H(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return F(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,r,a,o){var i=function(e,r){t(1,arguments);var a=n(e),o=L(a,r).getTime()-j(a,r).getTime();return Math.round(o/O)+1}(e,o);return"wo"===r?a.ordinalNumber(i,{unit:"week"}):F(i,r.length)},I:function(e,r,a){var o=function(e){t(1,arguments);var r=n(e),a=U(r).getTime()-E(r).getTime();return Math.round(a/P)+1}(e);return"Io"===r?a.ordinalNumber(o,{unit:"week"}):F(o,r.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):z(t,e)},D:function(e,r,a){var o=function(e){t(1,arguments);var r=n(e),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var o=r.getTime(),i=a-o;return Math.floor(i/N)+1}(e);return"Do"===r?a.ordinalNumber(o,{unit:"dayOfYear"}):F(o,r.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return F(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return F(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return F(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return B(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):A(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):F(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):F(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):Q(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):G(t,e)},S:function(t,e){return R(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return J(a);case"XXXX":case"XX":return $(a);default:return $(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return J(a);case"xxxx":case"xx":return $(a);default:return $(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+X(a,":");default:return"GMT"+$(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+X(a,":");default:return"GMT"+$(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return F(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return F((r._originalDate||t).getTime(),e.length)}};var _=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},V=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},K={p:V,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return _(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",_(a,e)).replace("{{time}}",V(o,e))}};const tt=K;function et(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var nt=["D","DD"],rt=["YY","YYYY"];function at(t){return-1!==nt.indexOf(t)}function ot(t){return-1!==rt.indexOf(t)}function it(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var ut={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function dt(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var st,ct={date:dt({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:dt({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:dt({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},lt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function ft(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function mt(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],d=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(d)?gt(d,(function(t){return t.test(u)})):ht(d,(function(t){return t.test(u)}));i=t.valueCallback?t.valueCallback(s):s,i=n.valueCallback?n.valueCallback(i):i;var c=e.slice(u.length);return{value:i,rest:c}}}function ht(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function gt(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const vt={code:"en-US",formatDistance:function(t,e,n){var r,a=ut[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:ct,formatRelative:function(t,e,n,r){return lt[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:ft({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:ft({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:ft({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:ft({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:ft({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(st={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(st.matchPattern);if(!n)return null;var r=n[0],a=t.match(st.parsePattern);if(!a)return null;var o=st.valueCallback?st.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:mt({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:mt({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:mt({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:mt({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:mt({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var wt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,yt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,pt=/^'([^]*?)'?$/,bt=/''/g,Tt=/[a-zA-Z]/;function Ct(t){var e=t.match(pt);return e?e[1].replace(bt,"'"):t}const Dt="todo.projects",St="todo.selectedProjectId";let Mt=JSON.parse(localStorage.getItem(Dt))||[],kt=localStorage.getItem(St);function Nt(){return Mt}function Ut(){return kt}const xt=document.querySelector("#projects-list"),Et=document.querySelector(".todos-container"),Pt=document.querySelector(".project-header"),Wt=document.querySelector("#todos-list");function qt(){document.getElementById("add-todo-form-container").style.display="",document.querySelector("#title").focus()}function Lt(){document.getElementById("add-todo-form").reset(),document.getElementById("add-todo-form-container").style.display="none"}function Yt(){document.getElementById("new-project-form-container").style.display="",document.querySelector("#project-name-input").focus()}function jt(){document.getElementById("new-project-form").reset(),document.getElementById("new-project-form-container").style.display="none"}function Ot(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function Ft(){Ot(xt),Nt().forEach((t=>{const e=document.createElement("div");e.dataset.projectId=t.id,e.classList.add("project-name"),e.textContent=t.name,t.id===Ut()&&e.classList.add("selected-project");const n=document.createElement("i");n.classList.add("delete-project-button"),n.classList.add("fa-solid"),n.classList.add("fa-xmark"),n.setAttribute("title","Delete Project"),e.appendChild(n),xt.appendChild(e)}));const e=Nt().find((t=>t.id===Ut()));e?(Et.style.display="",Pt.textContent=e.name,Ot(Wt),function(e){(function(t){return t.todos})(e).forEach((e=>{const r=document.createElement("div");r.dataset.todoId=e.id,r.classList.add("new-todo"),Wt.appendChild(r);const o=document.createElement("div");o.classList.add("icons-wrapper"),r.appendChild(o);const d=document.createElement("i");d.classList.add("fa-solid"),d.classList.add("fa-flag"),d.classList.add(e.priority.toLowerCase()),d.setAttribute("title",`${e.priority} priority`),o.appendChild(d);const s=document.createElement("i");s.classList.add("delete-todo-button"),s.classList.add("fa-solid"),s.classList.add("fa-trash-can"),s.setAttribute("title","Delete Todo"),o.appendChild(s);const c=document.createElement("div");c.classList.add("new-todo-wrapper"),r.appendChild(c);const l=document.createElement("p");if(l.classList.add("todo-title"),l.textContent=e.title,c.appendChild(l),e.description){const t=document.createElement("p");t.classList.add("todo-description"),t.textContent=e.description,c.appendChild(t)}if(e.dueDate){const r=document.createElement("p");r.classList.add("todo-duedate"),function(e){return t(1,arguments),a(e,Date.now())}(u(e.dueDate))?r.textContent="Today":function(e){return t(1,arguments),a(e,T(Date.now(),1))}(u(e.dueDate))?r.textContent="Tomorrow":r.textContent=function(e,r,a){var o,u,d,s,c,l,f,m,h,g,v,w,y,p,b,T,C,D;t(2,arguments);var M=String(r),N=q(),U=null!==(o=null!==(u=null==a?void 0:a.locale)&&void 0!==u?u:N.locale)&&void 0!==o?o:vt,x=i(null!==(d=null!==(s=null!==(c=null!==(l=null==a?void 0:a.firstWeekContainsDate)&&void 0!==l?l:null==a||null===(f=a.locale)||void 0===f||null===(m=f.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==c?c:N.firstWeekContainsDate)&&void 0!==s?s:null===(h=N.locale)||void 0===h||null===(g=h.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==d?d:1);if(!(x>=1&&x<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var E=i(null!==(v=null!==(w=null!==(y=null!==(p=null==a?void 0:a.weekStartsOn)&&void 0!==p?p:null==a||null===(b=a.locale)||void 0===b||null===(T=b.options)||void 0===T?void 0:T.weekStartsOn)&&void 0!==y?y:N.weekStartsOn)&&void 0!==w?w:null===(C=N.locale)||void 0===C||null===(D=C.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==v?v:0);if(!(E>=0&&E<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!U.localize)throw new RangeError("locale must contain localize property");if(!U.formatLong)throw new RangeError("locale must contain formatLong property");var P=n(e);if(!S(P))throw new RangeError("Invalid time value");var W=k(P,et(P)),L={firstWeekContainsDate:x,weekStartsOn:E,locale:U,_originalDate:P};return M.match(yt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,tt[e])(t,U.formatLong):t})).join("").match(wt).map((function(t){if("''"===t)return"'";var n=t[0];if("'"===n)return Ct(t);var o=Z[n];if(o)return null!=a&&a.useAdditionalWeekYearTokens||!ot(t)||it(t,r,String(e)),null!=a&&a.useAdditionalDayOfYearTokens||!at(t)||it(t,r,String(e)),o(W,t,U.localize,L);if(n.match(Tt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return t})).join("")}(u(e.dueDate),"d MMM"),c.appendChild(r)}}))}(e)):Et.style.display="none"}function It(){localStorage.setItem(Dt,JSON.stringify(Mt)),localStorage.setItem(St,kt),Ft()}document.querySelector(".create-project-button").addEventListener("click",Yt),document.querySelector(".cancel-project-button").addEventListener("click",jt),document.querySelector("#new-project-form").addEventListener("submit",(t=>{t.preventDefault(),function(){const t=document.querySelector("#project-name-input").value;if(null==t||""===t)return;const e=(n=t,{id:Date.now().toString(),name:n,todos:[]});var n;Mt.push(e),It(),jt()}()})),document.querySelector("#projects-list").addEventListener("click",(t=>{var e;t.target.classList.contains("project-name")?(e=t.target.dataset.projectId,kt=e,It()):t.target.classList.contains("delete-project-button")&&(function(t){Mt=Mt.filter((e=>e.id!==t)),It()}(t.target.parentElement.dataset.projectId),t.target.parentElement.dataset.projectId===Ut()&&(kt=null))})),document.querySelector(".create-todo-button").addEventListener("click",qt),document.querySelector(".cancel-todo-button").addEventListener("click",Lt),document.querySelector("#add-todo-form").addEventListener("submit",(t=>{t.preventDefault(),function(){const t=(e=document.querySelector("#title").value,n=document.querySelector("#description").value,r=document.querySelector("#duedate").value,a=document.querySelector("#priority").value,{id:Date.now().toString(),title:e,description:n,dueDate:r,priority:a});var e,n,r,a,o;o=t,Mt.find((t=>t.id===kt)).todos.push(o),It(),Lt()}()})),document.querySelector("#todos-list").addEventListener("click",(t=>{t.target.classList.contains("delete-todo-button")&&function(t){const e=Mt.find((t=>t.id===kt));e.todos=e.todos.filter((e=>e.id!==t)),It()}(t.target.parentElement.parentElement.dataset.todoId)})),Ft()})();