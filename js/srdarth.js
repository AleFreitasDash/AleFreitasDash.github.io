jQuery.fn.srdarth=function(options){
var options=jQuery.extend({error:!1,comment:!1,calculatewrapper:!1,calculate:!1,oncalculate:!1,onendcalculate:!1,onready:!1,onfocus:!1,onblur:!1,onerror:!1,onenter:!1,onescape:!1,oninput:!1,ifnull:"",sign:!0},options),convert=function(e,n){
var a="0",o="",t="00";
if(2!=(n=n||(n=2))){t="";
for(
var l=0;
l<n;
l++)t+=String("0")}if(!isNaN(parseFloat(e))){o=(a=parseFloat(Math.abs(e)).toFixed(n).toString()).substr(a.indexOf(".")+1,n).toString(),a=parseInt(a).toString();
for(var u=/(\d+)(\d{3})/;u.test(a);)a=a.replace(u,"$1 $2");
if(o!=t){var r=/[0]*$/g;
a+="."+o.replace(r,"")}e<0&&(a="âˆ’"+a)}return a};
return this.each(function(){
var nchars=new RegExp(/[\!\@\#\â„–\$\%\^\&\=\[\]\\\'\;\{\}\|\"\:\<\>\?~\`\_A-ZÐ-Ð¯a-zÐ°-Ñ]/),chars="1234567890+-/*,. ",errTimer=void 0,focusObj=this,valueBack=0,valueYng=0,metic=new RegExp(/[\+\-\*\/]/),meticI=new RegExp(/^[\+\-\*\/]/),toValueBack=!1;

jQuery(this).blur(function(){if(toValueBack&&(valueYng=valueBack),toValueBack=!1,options.sign)e=valueYng<0?"-":"";
else 
var e="";
0!=(valueYng=Math.abs(valueYng))?($(focusObj).val(e+convert(valueYng)),options.onblur&&options.onblur(focusObj,e+convert(valueYng))):($(focusObj).val(options.ifnull),options.onblur&&options.onblur(focusObj,options.ifnull))}),jQuery(this).keypress(function(e){
var n;
if(e.charCode?(n=String.fromCharCode(e.charCode),c=e.charCode):(n=String.fromCharCode(e.which),c=e.which),37==c||39==c)return!0;
e.ctrlKey||nchars.test(n)||13==e.keyCode&&(options.onenter&&setTimeout(function(){options.onenter(focusObj,valueYng)},100),focusObj.blur())}),jQuery(this).keyup(function(e){if(valueYng=String(focusObj.value).replace(/ /g,"").replace(/,/g,"."),27==e.keyCode)return toValueBack=!0,options.onescape&&options.onescape(focusObj,valueBack),void focusObj.blur();
var comp=metic.test(valueYng);
if(comp){if(comp=meticI.test(valueYng)){
var tStr=String(valueBack)+String(valueYng);
try{valueYng=parseFloat(eval(tStr),10),valueYng=isNaN(valueYng)?0:valueYng,valueYng=isFinite(valueYng)?valueYng:0,jQuery(options.calculate).html(convert(valueYng))}catch(e){valueYng=0,jQuery(options.calculate).html(valueYng)}}else{
var tStr=String(valueYng);
try{valueYng=parseFloat(eval(tStr),10),valueYng=isNaN(valueYng)?0:valueYng,valueYng=isFinite(valueYng)?valueYng:0,jQuery(options.calculate).html(convert(valueYng))}catch(e){valueYng=0,jQuery(options.calculate).html(valueYng)}}options.oncalculate&&options.oncalculate(valueYng)}else isNaN(parseFloat(valueYng,10))?(valueYng=0,jQuery(options.calculate).html(valueYng)):jQuery(options.calculate).html(convert(parseFloat(valueYng,10))),options.onendcalculate&&options.onendcalculate(valueYng);
options.oninput&&options.oninput(this,e.keyCode)}),options.onready&&options.onready(this)})};
