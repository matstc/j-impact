/*
    TimelineJS - ver. 2.26.2 - 2013-10-07
    Copyright (c) 2012-2013 Northwestern University
    a project of the Northwestern University Knight Lab, originally created by Zach Wise
    https://github.com/NUKnightLab/TimelineJS
    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
    If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/
/*
LazyLoad makes it easy and painless to lazily load one or more external
JavaScript or CSS files on demand either during or after the rendering of a web
page.

Supported browsers include Firefox 2+, IE6+, Safari 3+ (including Mobile
Safari), Google Chrome, and Opera 9+. Other browsers may or may not work and
are not officially supported.

Visit https://github.com/rgrove/lazyload/ for more info.

Copyright (c) 2011 Ryan Grove <ryan@wonko.com>
All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

@module lazyload
@class LazyLoad
@static
@version 2.0.3 (git)
*/
function getEmbedScriptPath(e){for(var t=document.getElementsByTagName("script"),i="",n="",a=0;a<t.length;a++)t[a].src.match(e)&&(i=t[a].src);return""!=i&&(n="/"),i.split("?")[0].split("/").slice(0,-1).join("/")+n}function createStoryJS(e,t){function i(){LoadLib.js(k.js,n)}function n(){b.js=!0,"en"!=k.lang?LazyLoad.js(S.locale,a):b.language=!0,c()}function a(){b.language=!0,c()}function o(){b.css=!0,c()}function s(){b.font.css=!0,c()}function l(){b.font.js=!0,c()}function c(){b.checks>40||(b.checks++,b.js&&b.css&&b.font.css&&b.font.js&&b.language?b.finished||(b.finished=!0,g()):b.timeout=setTimeout("onloaded_check_again();",250))}function r(){var e="storyjs-embed";h=document.createElement("div"),u=""!=k.embed_id?document.getElementById(k.embed_id):document.getElementById("timeline-embed"),u.appendChild(h),h.setAttribute("id",k.id),k.width.toString().match("%")?u.style.width=k.width.split("%")[0]+"%":(k.width=k.width-2,u.style.width=k.width+"px"),k.height.toString().match("%")?(u.style.height=k.height,e+=" full-embed",u.style.height=k.height.split("%")[0]+"%"):k.width.toString().match("%")?(e+=" full-embed",k.height=k.height-16,u.style.height=k.height+"px"):(e+=" sized-embed",k.height=k.height-16,u.style.height=k.height+"px"),u.setAttribute("class",e),u.setAttribute("className",e),h.style.position="relative"}function g(){VMM.debug=k.debug,f=new VMM.Timeline(k.id),f.init(k),m&&VMM.bindEvent(global,onHeadline,"HEADLINE")}var f,h,u,d,m=!1,y="2.24",j="1.7.1",p="",b={timeout:"",checks:0,finished:!1,js:!1,css:!1,jquery:!1,has_jquery:!1,language:!1,font:{css:!1,js:!1}},S={base:embed_path,css:embed_path,js:embed_path,locale:embed_path+"js/locale/",jquery:"//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js",font:{google:!1,css:embed_path+"css/themes/font/",js:"//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"}},k={version:y,debug:!1,type:"timeline",id:"storyjs",embed_id:"timeline-embed",embed:!0,width:"100%",height:"100%",source:"https://docs.google.com/spreadsheet/pub?key=0Agl_Dv6iEbDadFYzRjJPUGktY0NkWXFUWkVIZDNGRHc&output=html",lang:"en",font:"default",css:S.css+"timeline.css?"+y,js:"",api_keys:{google:"",flickr:"",twitter:""},gmap_key:""},v=[{name:"Merriweather-NewsCycle",google:["News+Cycle:400,700:latin","Merriweather:400,700,900:latin"]},{name:"NewsCycle-Merriweather",google:["News+Cycle:400,700:latin","Merriweather:300,400,700:latin"]},{name:"PoiretOne-Molengo",google:["Poiret+One::latin","Molengo::latin"]},{name:"Arvo-PTSans",google:["Arvo:400,700,400italic:latin","PT+Sans:400,700,400italic:latin"]},{name:"PTSerif-PTSans",google:["PT+Sans:400,700,400italic:latin","PT+Serif:400,700,400italic:latin"]},{name:"PT",google:["PT+Sans+Narrow:400,700:latin","PT+Sans:400,700,400italic:latin","PT+Serif:400,700,400italic:latin"]},{name:"DroidSerif-DroidSans",google:["Droid+Sans:400,700:latin","Droid+Serif:400,700,400italic:latin"]},{name:"Lekton-Molengo",google:["Lekton:400,700,400italic:latin","Molengo::latin"]},{name:"NixieOne-Ledger",google:["Nixie+One::latin","Ledger::latin"]},{name:"AbrilFatface-Average",google:["Average::latin","Abril+Fatface::latin"]},{name:"PlayfairDisplay-Muli",google:["Playfair+Display:400,400italic:latin","Muli:300,400,300italic,400italic:latin"]},{name:"Rancho-Gudea",google:["Rancho::latin","Gudea:400,700,400italic:latin"]},{name:"Bevan-PotanoSans",google:["Bevan::latin","Pontano+Sans::latin"]},{name:"BreeSerif-OpenSans",google:["Bree+Serif::latin","Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800:latin"]},{name:"SansitaOne-Kameron",google:["Sansita+One::latin","Kameron:400,700:latin"]},{name:"Lora-Istok",google:["Lora:400,700,400italic,700italic:latin","Istok+Web:400,700,400italic,700italic:latin"]},{name:"Pacifico-Arimo",google:["Pacifico::latin","Arimo:400,700,400italic,700italic:latin"]}];if("object"==typeof e)for(d in e)Object.prototype.hasOwnProperty.call(e,d)&&(k[d]=e[d]);if("undefined"!=typeof t&&(k.source=t),"object"==typeof url_config&&(m=!0,k.source.match("docs.google.com")||k.source.match("json")||k.source.match("storify")||(k.source="https://docs.google.com/spreadsheet/pub?key="+k.source+"&output=html")),k.js.match("locale")&&(k.lang=k.js.split("locale/")[1].replace(".js",""),k.js=S.js+"timeline-min.js?"+y),k.js.match("/")||(k.css=S.css+k.type+".css?"+y,k.js=S.js+k.type,k.js+=k.debug?".js?"+y:"-min.js?"+y,k.id="storyjs-"+k.type),S.locale=k.lang.match("/")?k.lang:S.locale+k.lang+".js?"+y,r(),LoadLib.css(k.css,o),"default"==k.font)b.font.js=!0,b.font.css=!0;else{var _;k.font.match("/")?(_=k.font.split(".css")[0].split("/"),S.font.name=_[_.length-1],S.font.css=k.font):(S.font.name=k.font,S.font.css=S.font.css+k.font+".css?"+y),LoadLib.css(S.font.css,s);for(var w=0;w<v.length;w++)S.font.name==v[w].name&&(S.font.google=!0,WebFontConfig={google:{families:v[w].google}});S.font.google?LoadLib.js(S.font.js,l):b.font.js=!0}try{if(b.has_jquery=jQuery,b.has_jquery=!0,b.has_jquery){var p=parseFloat(jQuery.fn.jquery);b.jquery=p<parseFloat(j)?!1:!0}}catch(L){b.jquery=!1}b.jquery?i():LoadLib.js(S.jquery,i),this.onloaded_check_again=function(){c()}}LazyLoad=function(e){function t(t,i){var n,a=e.createElement(t);for(n in i)i.hasOwnProperty(n)&&a.setAttribute(n,i[n]);return a}function i(e){var t,i,n=r[e];n&&(t=n.callback,i=n.urls,i.shift(),g=0,i.length||(t&&t.call(n.context,n.obj),r[e]=null,f[e].length&&a(e)))}function n(){var t=navigator.userAgent;l={async:e.createElement("script").async===!0},(l.webkit=/AppleWebKit\//.test(t))||(l.ie=/MSIE/.test(t))||(l.opera=/Opera/.test(t))||(l.gecko=/Gecko\//.test(t))||(l.unknown=!0)}function a(a,g,h,u,d){var m,y,j,p,b,S,k=function(){i(a)},v="css"===a,_=[];if(l||n(),g)if(g="string"==typeof g?[g]:g.concat(),v||l.async||l.gecko||l.opera)f[a].push({urls:g,callback:h,obj:u,context:d});else for(m=0,y=g.length;y>m;++m)f[a].push({urls:[g[m]],callback:m===y-1?h:null,obj:u,context:d});if(!r[a]&&(p=r[a]=f[a].shift())){for(c||(c=e.head||e.getElementsByTagName("head")[0]),b=p.urls,m=0,y=b.length;y>m;++m)S=b[m],v?j=l.gecko?t("style"):t("link",{href:S,rel:"stylesheet"}):(j=t("script",{src:S}),j.async=!1),j.className="lazyload",j.setAttribute("charset","utf-8"),l.ie&&!v?j.onreadystatechange=function(){/loaded|complete/.test(j.readyState)&&(j.onreadystatechange=null,k())}:v&&(l.gecko||l.webkit)?l.webkit?(p.urls[m]=j.href,s()):(j.innerHTML='@import "'+S+'";',o(j)):j.onload=j.onerror=k,_.push(j);for(m=0,y=_.length;y>m;++m)c.appendChild(_[m])}}function o(e){var t;try{t=!!e.sheet.cssRules}catch(n){return g+=1,200>g?setTimeout(function(){o(e)},50):t&&i("css"),void 0}i("css")}function s(){var e,t=r.css;if(t){for(e=h.length;--e>=0;)if(h[e].href===t.urls[0]){i("css");break}g+=1,t&&(200>g?setTimeout(s,50):i("css"))}}var l,c,r={},g=0,f={css:[],js:[]},h=e.styleSheets;return{css:function(e,t,i,n){a("css",e,t,i,n)},js:function(e,t,i,n){a("js",e,t,i,n)}}}(this.document),LoadLib=function(){function e(e){var i=0,n=!1;for(i=0;i<t.length;i++)t[i]==e&&(n=!0);return n?!0:(t.push(e),!1)}var t=[];return{css:function(t,i,n,a){e(t)||LazyLoad.css(t,i,n,a)},js:function(t,i,n,a){e(t)||LazyLoad.js(t,i,n,a)}}}(this.document);var WebFontConfig;if("undefined"==typeof embed_path||"undefined"==typeof embed_path)var embed_path=getEmbedScriptPath("storyjs-embed.js").split("js/")[0];!function(){"object"==typeof url_config?createStoryJS(url_config):"object"==typeof timeline_config?createStoryJS(timeline_config):"object"==typeof storyjs_config?createStoryJS(storyjs_config):"object"==typeof config&&createStoryJS(config)}();