/*! jQuery Mobile v1.3.2 | Copyright 2010, 2013 jQuery Foundation, Inc. | jquery.org/license */
(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function x(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function T(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=x(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function N(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function C(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function k(){g=!1}function L(){g=!0}function A(){E=0,v.length=0,m=!1,L()}function O(){k()}function M(){_(),c=setTimeout(function(){c=0,A()},e.vmouse.resetTimerDuration)}function _(){c&&(clearTimeout(c),c=0)}function D(t,n,r){var i;if(r&&r[t]||!r&&C(n.target,t))i=T(n,t),e(n.target).trigger(i);return i}function P(t){var n=e.data(t.target,s);if(!m&&(!E||E!==n)){var r=D("v"+t.type,t);r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation())}}function H(t){var n=x(t).touches,r,i;if(n&&n.length===1){r=t.target,i=N(r);if(i.hasVirtualBinding){E=w++,e.data(r,s,E),_(),O(),d=!1;var o=x(t).touches[0];h=o.pageX,p=o.pageY,D("vmouseover",t,i),D("vmousedown",t,i)}}}function B(e){if(g)return;d||D("vmousecancel",e,N(e.target)),d=!0,M()}function j(t){if(g)return;var n=x(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=N(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&D("vmousecancel",t,s),D("vmousemove",t,s),M()}function F(e){if(g)return;L();var t=N(e.target),n;D("vmouseup",e,t);if(!d){var r=D("vclick",e,t);r&&r.isDefaultPrevented()&&(n=x(e).changedTouches[0],v.push({touchID:E,x:n.clientX,y:n.clientY}),m=!0)}D("vmouseout",e,t),d=!1,M()}function I(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function q(){}function R(t){var n=t.substr(1);return{setup:function(r,s){I(this)||e.data(this,i,{});var o=e.data(this,i);o[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,P),e(this).bind(n,q),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",H).bind("touchend",F).bind("touchmove",j).bind("scroll",B))},teardown:function(r,s){--l[t],l[t]||b.unbind(n,P),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",H).unbind("touchmove",j).unbind("touchend",F).unbind("scroll",B));var o=e(this),u=e.data(this,i);u&&(u[t]=!1),o.unbind(n,q),I(this)||o.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var U=0;U<o.length;U++)e.event.special[o[U]]=R(o[U]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,r){var i=r.type;r.type=n,e.event.dispatch.call(t,r),r.type=i}var i=e(n);e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)});var s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})}},e.event.special.tap={tapholdThreshold:750,setup:function(){var t=this,n=e(t);n.bind("vmousedown",function(r){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),s===e.target&&l(t,"tap",e)}if(r.which&&r.which!==1)return!1;var s=r.target,o=r.originalEvent,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){l(t,"taphold",e.Event("taphold",{target:s}))},e.event.special.tap.tapholdThreshold)})}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t;return{time:(new Date).getTime(),coords:[n.pageX,n.pageY],origin:e(t.target)}},stop:function(e){var t=e.originalEvent.touches?e.originalEvent.touches[0]:e;return{time:(new Date).getTime(),coords:[t.pageX,t.pageY]}},handleSwipe:function(t,n){n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold&&t.origin.trigger("swipe").trigger(t.coords[0]>n.coords[0]?"swipeleft":"swiperight")},setup:function(){var t=this,n=e(t);n.bind(u,function(t){function o(t){if(!i)return;s=e.event.special.swipe.stop(t),Math.abs(i.coords[0]-s.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()}var i=e.event.special.swipe.start(t),s;n.bind(f,o).one(a,function(){n.unbind(f,o),i&&s&&e.event.special.swipe.handleSwipe(i,s),i=s=r})})}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)}}})}(e,this)});

(function ($, sr) {
	// debouncing function from John Hann
	// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
	var debounce = function (func, threshold, execAsap) {
		var timeout;
		return function debounced() {
			var obj = this, args = arguments;

			function delayed() {
				if (!execAsap)
					func.apply(obj, args);
				timeout = null;
			}

			if (timeout)
				clearTimeout(timeout);
			else if (execAsap)
				func.apply(obj, args);

			timeout = setTimeout(delayed, threshold || 100);
		};
	};
	// smartresize
	jQuery.fn[sr] = function (fn) {
		return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
	};
})(jQuery, 'smartresize');


(function($){$.fn.columnize=function(options){this.cols=[];this.offset=0;this.before=[];this.lastOther=0;this.prevMax=0;this.debug=0;this.setColumnStart=null;this.elipsisText='';var defaults={width:400,columns:false,buildOnce:false,overflow:false,doneFunc:function(){},target:false,ignoreImageLoading:true,columnFloat:"left",lastNeverTallest:false,accuracy:false,precise:false,manualBreaks:false,cssClassPrefix:"",elipsisText:'...',debug:0};options=$.extend(defaults,options);if(typeof(options.width)=="string"){options.width=parseInt(options.width,10);if(isNaN(options.width)){options.width=defaults.width;}}
if(typeof options.setColumnStart=='function'){this.setColumnStart=options.setColumnStart;}
if(typeof options.elipsisText=='string'){this.elipsisText=options.elipsisText;}
if(options.debug){this.debug=options.debug;}
if(!options.setWidth){if(options.precise){options.setWidth=function(numCols){return 100/numCols;};}else{options.setWidth=function(numCols){return Math.floor(100/numCols);};}}
function appendSafe($target,$elem){try{$target.append($elem);}catch(e){$target[0].appendChild($elem[0]);}}
return this.each(function(){var $inBox=options.target?$(options.target):$(this);var maxHeight=$(this).height();var $cache=$('<div></div>');var lastWidth=0;var columnizing=false;var manualBreaks=options.manualBreaks;var cssClassPrefix=defaults.cssClassPrefix;if(typeof(options.cssClassPrefix)=="string"){cssClassPrefix=options.cssClassPrefix;}
var adjustment=0;appendSafe($cache,$(this).contents().clone(true));if(!options.ignoreImageLoading&&!options.target){if(!$inBox.data("imageLoaded")){$inBox.data("imageLoaded",true);if($(this).find("img").length>0){var func=function($inBox,$cache){return function(){if(!$inBox.data("firstImageLoaded")){$inBox.data("firstImageLoaded","true");appendSafe($inBox.empty(),$cache.children().clone(true));$inBox.columnize(options);}};}($(this),$cache);$(this).find("img").one("load",func);$(this).find("img").one("abort",func);return;}}}
$inBox.empty();columnizeIt();if(!options.buildOnce){$(window).resize(function(){if(!options.buildOnce){if($inBox.data("timeout")){clearTimeout($inBox.data("timeout"));}
$inBox.data("timeout",setTimeout(columnizeIt,200));}});}
function prefixTheClassName(className,withDot){var dot=withDot?".":"";if(cssClassPrefix.length){return dot+cssClassPrefix+"-"+className;}
return dot+className;}
function columnize($putInHere,$pullOutHere,$parentColumn,targetHeight){while((manualBreaks||$parentColumn.height()<targetHeight)&&$pullOutHere[0].childNodes.length){var node=$pullOutHere[0].childNodes[0];if($(node).find(prefixTheClassName("columnbreak",true)).length){return;}
if($(node).hasClass(prefixTheClassName("columnbreak"))){return;}
appendSafe($putInHere,$(node));}
if($putInHere[0].childNodes.length===0)return;var kids=$putInHere[0].childNodes;var lastKid=kids[kids.length-1];$putInHere[0].removeChild(lastKid);var $item=$(lastKid);if($item[0].nodeType==3){var oText=$item[0].nodeValue;var counter2=options.width/18;if(options.accuracy)
counter2=options.accuracy;var columnText;var latestTextNode=null;while($parentColumn.height()<targetHeight&&oText.length){var indexOfSpace=oText.indexOf(' ',counter2);if(indexOfSpace!=-1){columnText=oText.substring(0,indexOfSpace);}else{columnText=oText;}
latestTextNode=document.createTextNode(columnText);appendSafe($putInHere,$(latestTextNode));if(oText.length>counter2&&indexOfSpace!=-1){oText=oText.substring(indexOfSpace);}else{oText="";}}
if($parentColumn.height()>=targetHeight&&latestTextNode!==null){$putInHere[0].removeChild(latestTextNode);oText=latestTextNode.nodeValue+oText;}
if(oText.length){$item[0].nodeValue=oText;}else{return false;}}
if($pullOutHere.contents().length){$pullOutHere.prepend($item);}else{appendSafe($pullOutHere,$item);}
return $item[0].nodeType==3;}
function split($putInHere,$pullOutHere,$parentColumn,targetHeight){if($putInHere.contents(":last").find(prefixTheClassName("columnbreak",true)).length){return;}
if($putInHere.contents(":last").hasClass(prefixTheClassName("columnbreak"))){return;}
if($pullOutHere.contents().length){var $cloneMe=$pullOutHere.contents(":first");if(typeof $cloneMe.get(0)=='undefined'||$cloneMe.get(0).nodeType!=1)return;var $clone=$cloneMe.clone(true);if($cloneMe.hasClass(prefixTheClassName("columnbreak"))){appendSafe($putInHere,$clone);$cloneMe.remove();}else if(manualBreaks){appendSafe($putInHere,$clone);$cloneMe.remove();}else if($clone.get(0).nodeType==1&&!$clone.hasClass(prefixTheClassName("dontend"))){appendSafe($putInHere,$clone);if($clone.is("img")&&$parentColumn.height()<targetHeight+20){$cloneMe.remove();}else if($cloneMe.hasClass(prefixTheClassName("dontsplit"))&&$parentColumn.height()<targetHeight+20){$cloneMe.remove();}else if($clone.is("img")||$cloneMe.hasClass(prefixTheClassName("dontsplit"))){$clone.remove();}else{$clone.empty();if(!columnize($clone,$cloneMe,$parentColumn,targetHeight)){$cloneMe.addClass(prefixTheClassName("split"));if($cloneMe.get(0).tagName=='OL'){var startWith=$clone.get(0).childElementCount+$clone.get(0).start;$cloneMe.attr('start',startWith+1);}
if($cloneMe.children().length){split($clone,$cloneMe,$parentColumn,targetHeight);}}else{$cloneMe.addClass(prefixTheClassName("split"));}
if($clone.get(0).childNodes.length===0){$clone.remove();$cloneMe.removeClass(prefixTheClassName("split"));}else if($clone.get(0).childNodes.length==1){var onlyNode=$clone.get(0).childNodes[0];if(onlyNode.nodeType==3){var whitespace=/\s/;var str=onlyNode.nodeValue;if(whitespace.test(str)){$clone.remove();$cloneMe.removeClass(prefixTheClassName("split"));}}}}}}}
function singleColumnizeIt(){if($inBox.data("columnized")&&$inBox.children().length==1){return;}
$inBox.data("columnized",true);$inBox.data("columnizing",true);$inBox.empty();$inBox.append($("<div class='"
+prefixTheClassName("first")+" "
+prefixTheClassName("last")+" "
+prefixTheClassName("column")+" "
+"' style='width:100%; float: "+options.columnFloat+";'></div>"));$col=$inBox.children().eq($inBox.children().length-1);$destroyable=$cache.clone(true);if(options.overflow){targetHeight=options.overflow.height;columnize($col,$destroyable,$col,targetHeight);if(!$destroyable.contents().find(":first-child").hasClass(prefixTheClassName("dontend"))){split($col,$destroyable,$col,targetHeight);}
while($col.contents(":last").length&&checkDontEndColumn($col.contents(":last").get(0))){var $lastKid=$col.contents(":last");$lastKid.remove();$destroyable.prepend($lastKid);}
var html="";var div=document.createElement('DIV');while($destroyable[0].childNodes.length>0){var kid=$destroyable[0].childNodes[0];if(kid.attributes){for(var i=0;i<kid.attributes.length;i++){if(kid.attributes[i].nodeName.indexOf("jQuery")===0){kid.removeAttribute(kid.attributes[i].nodeName);}}}
div.innerHTML="";div.appendChild($destroyable[0].childNodes[0]);html+=div.innerHTML;}
var overflow=$(options.overflow.id)[0];overflow.innerHTML=html;}else{appendSafe($col,$destroyable.contents());}
$inBox.data("columnizing",false);if(options.overflow&&options.overflow.doneFunc){options.overflow.doneFunc();}
options.doneFunc();}
function checkDontEndColumn(dom){if(dom.nodeType==3){if(/^\s+$/.test(dom.nodeValue)){if(!dom.previousSibling)return false;return checkDontEndColumn(dom.previousSibling);}
return false;}
if(dom.nodeType!=1)return false;if($(dom).hasClass(prefixTheClassName("dontend")))return true;if(dom.childNodes.length===0)return false;return checkDontEndColumn(dom.childNodes[dom.childNodes.length-1]);}
function columnizeIt(){adjustment=0;if(lastWidth==$inBox.width())return;lastWidth=$inBox.width();var numCols=Math.round($inBox.width()/options.width);var optionWidth=options.width;var optionHeight=options.height;if(options.columns)numCols=options.columns;if(manualBreaks){numCols=$cache.find(prefixTheClassName("columnbreak",true)).length+1;optionWidth=false;}
if(numCols<=1){return singleColumnizeIt();}
if($inBox.data("columnizing"))return;$inBox.data("columnized",true);$inBox.data("columnizing",true);$inBox.empty();$inBox.append($("<div style='width:"+options.setWidth(numCols)+"%; float: "+options.columnFloat+";'></div>"));$col=$inBox.children(":last");appendSafe($col,$cache.clone());maxHeight=$col.height();$inBox.empty();var targetHeight=maxHeight/numCols;var firstTime=true;var maxLoops=3;var scrollHorizontally=false;if(options.overflow){maxLoops=1;targetHeight=options.overflow.height;}else if(optionHeight&&optionWidth){maxLoops=1;targetHeight=optionHeight;scrollHorizontally=true;}
for(var loopCount=0;loopCount<maxLoops&&loopCount<20;loopCount++){$inBox.empty();var $destroyable,className,$col,$lastKid;try{$destroyable=$cache.clone(true);}catch(e){$destroyable=$cache.clone();}
$destroyable.css("visibility","hidden");for(var i=0;i<numCols;i++){className=(i===0)?prefixTheClassName("first"):"";className+=" "+prefixTheClassName("column");className=(i==numCols-1)?(prefixTheClassName("last")+" "+className):className;$inBox.append($("<div class='"+className+"' style='width:"+options.setWidth(numCols)+"%; float: "+options.columnFloat+";'></div>"));}
i=0;while(i<numCols-(options.overflow?0:1)||scrollHorizontally&&$destroyable.contents().length){if($inBox.children().length<=i){$inBox.append($("<div class='"+className+"' style='width:"+options.setWidth(numCols)+"%; float: "+options.columnFloat+";'></div>"));}
$col=$inBox.children().eq(i);if(scrollHorizontally){$col.width(optionWidth+"px");}
columnize($col,$destroyable,$col,targetHeight);split($col,$destroyable,$col,targetHeight);while($col.contents(":last").length&&checkDontEndColumn($col.contents(":last").get(0))){$lastKid=$col.contents(":last");$lastKid.remove();$destroyable.prepend($lastKid);}
i++;if($col.contents().length===0&&$destroyable.contents().length){$col.append($destroyable.contents(":first"));}else if(i==numCols-(options.overflow?0:1)&&!options.overflow){if($destroyable.find(prefixTheClassName("columnbreak",true)).length){numCols++;}}}
if(options.overflow&&!scrollHorizontally){var IE6=false;var IE7=(document.all)&&(navigator.appVersion.indexOf("MSIE 7.")!=-1);if(IE6||IE7){var html="";var div=document.createElement('DIV');while($destroyable[0].childNodes.length>0){var kid=$destroyable[0].childNodes[0];for(i=0;i<kid.attributes.length;i++){if(kid.attributes[i].nodeName.indexOf("jQuery")===0){kid.removeAttribute(kid.attributes[i].nodeName);}}
div.innerHTML="";div.appendChild($destroyable[0].childNodes[0]);html+=div.innerHTML;}
var overflow=$(options.overflow.id)[0];overflow.innerHTML=html;}else{$(options.overflow.id).empty().append($destroyable.contents().clone(true));}}else if(!scrollHorizontally){$col=$inBox.children().eq($inBox.children().length-1);$destroyable.contents().each(function(){$col.append($(this));});var afterH=$col.height();var diff=afterH-targetHeight;var totalH=0;var min=10000000;var max=0;var lastIsMax=false;var numberOfColumnsThatDontEndInAColumnBreak=0;$inBox.children().each(function($inBox){return function($item){var $col=$inBox.children().eq($item);var endsInBreak=$col.children(":last").find(prefixTheClassName("columnbreak",true)).length;if(!endsInBreak){var h=$col.height();lastIsMax=false;totalH+=h;if(h>max){max=h;lastIsMax=true;}
if(h<min)min=h;numberOfColumnsThatDontEndInAColumnBreak++;}};}($inBox));var avgH=totalH/numberOfColumnsThatDontEndInAColumnBreak;if(totalH===0){loopCount=maxLoops;}else if(options.lastNeverTallest&&lastIsMax){adjustment+=5;targetHeight=targetHeight+30;if(loopCount==maxLoops-1)maxLoops++;}else if(max-min>30){targetHeight=avgH+30;}else if(Math.abs(avgH-targetHeight)>20){targetHeight=avgH;}else{loopCount=maxLoops;}}else{$inBox.children().each(function(i){$col=$inBox.children().eq(i);$col.width(optionWidth+"px");if(i===0){$col.addClass(prefixTheClassName("first"));}else if(i==$inBox.children().length-1){$col.addClass(prefixTheClassName("last"));}else{$col.removeClass(prefixTheClassName("first"));$col.removeClass(prefixTheClassName("last"));}});$inBox.width($inBox.children().length*optionWidth+"px");}
$inBox.append($("<br style='clear:both;'>"));}
$inBox.find(prefixTheClassName("column",true)).find(":first"+prefixTheClassName("removeiffirst",true)).remove();$inBox.find(prefixTheClassName("column",true)).find(':last'+prefixTheClassName("removeiflast",true)).remove();$inBox.find(prefixTheClassName("split",true)).find(":first"+prefixTheClassName("removeiffirst",true)).remove();$inBox.find(prefixTheClassName("split",true)).find(':last'+prefixTheClassName("removeiflast",true)).remove();$inBox.data("columnizing",false);if(options.overflow){options.overflow.doneFunc();}
options.doneFunc();}});};$.fn.renumberByJS=function($searchTag,$colno,$targetId,$targetClass){this.setList=function($cols,$list,$tag1){var $parents=this.before.parents();var $rest;$rest=$($cols[this.offset-1]).find('>*');if(($rest.last())[0].tagName!=$tag1.toUpperCase()){if(this.debug){console.log("Last item in previous column, isn't a list...");}
return 0;}
$rest=$rest.length;var $tint=1;if(this.lastOther<=0){$tint=this.before.children().length+1;}else{$tint=$($parents[this.lastOther]).children().length+1;}
if($($cols[this.offset]).find($tag1+':first li.split').length){var $whereElipsis=$($cols[this.offset-1]).find($tag1+':last li:last');if(this.elipsisText===''||$($cols[this.offset-1]).find($tag1+':last ~ div').length||$($cols[this.offset-1]).find($tag1+':last ~ p').length){;}else{if($($whereElipsis).find('ul, ol, dl').length==0){var $txt=$whereElipsis.last().text();var $len=$txt.length;if($txt.substring($len-1)==';'){if($txt.substring($len-4)!=this.elipsisText+';'){$txt=$txt.substring(0,$len-1)+this.elipsisText+';';}}else{if($txt.substring($len-3)!=this.elipsisText){$txt+=this.elipsisText;}}
$whereElipsis.last().text($txt);}}
if($($cols[this.offset]).find($tag1+':first >li.split >'+$tag1).length==0){$tint--;}}
if($rest==1){$tint+=this.prevMax;}
if(this.nest>1){if(this.debug){console.log("Supposed to be a nested list...decr");}
$tint--;var $tt=$($cols[this.offset-1]).find($tag1+':first li.split:first');if($tt.length>0){if(this.debug){console.log("Previous column started with a split item, so that count is one less than expected");}
$tint--;}
$tt=$($cols[this.offset]).find($tag1+':first li:first').clone();$tt.children().remove();if($.trim($tt.text()).length>0){if(this.debug){console.log("If that was a complete list in the previous column, don't decr.");}
$tint++;if($($cols[this.offset-1]).find(">"+$tag1+':last ').children().length==0){if(this.debug){console.log("unless that was empty, in which case revert");}
$tint--;}}}else{var $tt=$($cols[this.offset]).find($tag1+':first li:first '+$tag1+".split li.split");if($tt.length>0){if(this.debug){console.log("[Nested] Column started with a split item, so that count is one less than expected");}
$tint--;}}
if(this.debug){console.log("Setting the start value to "+$tint+" ("+this.prevMax+")");}
if($tint>0){if(typeof this.setColumnStart=='function'){this.setColumnStart($list,$tint);}else{$list.attr('start',$tint);}}
return 0;}
if(typeof $targetId==='undefined'){$targetId=false;}
if(typeof $targetClass==='undefined'){$targetClass=false;}
if(!$targetId&&!$targetClass){throw"renumberByJS(): Bad param, must pass an id or a class";}
var $target='';this.prevMax=1;if($targetClass){$target="."+$targetClass;}else{$target="#"+$targetId;}
var $tag1=$searchTag.toLowerCase();var $tag2=$searchTag.toUpperCase();this.cols=$($target);if(this.debug){console.log("There are "+this.cols.length+" items, looking for "+$tag1);}
this.before=$(this.cols[0]).find($tag1+':last');this.prevMax=this.before.children().length;for(this.offset=1;this.offset<this.cols.length;this.offset++){if(this.debug){console.log("iterating "+this.offset+"...[of "+this.cols.length+"]");}
if(this.offset%$colno==0){if(this.debug){console.log("First column (in theory..)");}
this.prevMax=1;continue;}
this.before=$(this.cols[this.offset-1]).find($tag1+':last');if(this.before.length){if(this.debug){console.log("Have some "+$searchTag+" elements in the previous column");}
var $list=$(this.cols[this.offset]).find($tag1+':first');var $first=$(this.cols[this.offset]).find('*:first');if($first[0]!==$list[0]){continue;}
var $parents=this.before.parents();this.lastOther=0;var $found=false;for(;this.lastOther<$parents.length;this.lastOther++){if($parents[this.lastOther].tagName!=$tag2&&$parents[this.lastOther].tagName!="LI"){$found=true;this.lastOther--;break;}}
this.nest=1;if($(this.cols[this.offset]).find(">"+$tag1+':first li '+$tag1+":first").length){this.nest=2;}
this.setList(this.cols,$list,$tag1);this.lastOther--;$list=$(this.cols[this.offset]).find($tag1+':first li '+$tag1+":first");if($list.length){this.before=$(this.cols[this.offset-1]).find(">"+$tag1+':last li '+$tag1+":last");this.prevMax=0;this.nest=1;this.setList(this.cols,$list,$tag1);}
var $reset=$(this.cols[this.offset-1]).find(">"+$tag1+':last');this.prevMax=$reset.children().length;}}
return 0;};})(jQuery);