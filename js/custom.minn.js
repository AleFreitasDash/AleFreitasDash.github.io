var YashAdmin=function(){"use strict";var e=$(window).width();$(window).height();var t=function(){jQuery(".default-select,.table-responsive select").length>0&&(jQuery(".default-select").selectpicker(),jQuery(".default-select,.table-responsive select").selectpicker())},n=function(){setTimeout(function(){jQuery("#preloader").remove(),$("#main-wrapper").addClass("show")},800)},a=function(){$(".heart").on("click",function(){$(this).toggleClass("heart-blast")})},i=function(){jQuery("#menu").length>0&&$("#menu").metisMenu(),jQuery(".metismenu > .mm-active ").each(function(){!jQuery(this).children("ul").length>0&&jQuery(this).addClass("active-no-child")})},o=function(){$("#checkAll").on("change",function(){$("td input, .email-list .custom-checkbox input").prop("checked",$(this).prop("checked"))}),$(".checkAllInput").on("change",function(){jQuery(this).parents(".ItemsCheckboxSec").find('input[type="checkbox"]').prop("checked",$(this).prop("checked"))})},l=function(){let e=new Date,t=e.getFullYear(),n=document.getElementsByClassName("current-year");for(let a of n)a.innerHTML=t},s=function(){$(".nav-control").on("click",function(){$("#main-wrapper").toggleClass("menu-toggle"),$(".hamburger").toggleClass("is-active")})},c=function(){for(var e=window.location,t=$("ul#menu a").filter(function(){return this.href==e}).addClass("mm-active").parent().addClass("mm-active");t.is("li");)t=t.parent().addClass("mm-show").parent().addClass("mm-active")},r=function(){$("ul#menu>li").on("click",function(){let e=$("body").attr("data-sidebar-style");"mini"===e&&(console.log($(this).find("ul")),$(this).find("ul").stop())})},d=function(){var e=window.outerHeight,e=window.outerHeight;(e>0?e:screen.height)&&($(".content-body").css("min-height",window.innerHeight-60+"px"),"mini"===$("body").attr("data-sidebar-style")&&$(".deznav .metismenu").height()>window.innerHeight-60&&$(".content-body").css("min-height",$(".deznav .metismenu").height()+60+"px"))},h=function(){$('a[data-action="collapse"]').on("click",function(e){e.preventDefault(),$(this).closest(".card").find('[data-action="collapse"] i').toggleClass("mdi-arrow-down mdi-arrow-up"),$(this).closest(".card").children(".card-body").collapse("toggle")}),$('a[data-action="expand"]').on("click",function(e){e.preventDefault(),$(this).closest(".card").find('[data-action="expand"] i').toggleClass("icon-size-actual icon-size-fullscreen"),$(this).closest(".card").toggleClass("card-fullscreen")}),$('[data-action="close"]').on("click",function(){$(this).closest(".card").removeClass().slideUp("fast")}),$('[data-action="reload"]').on("click",function(){var e=$(this);e.parents(".card").addClass("card-load"),e.parents(".card").append('<div class="card-loader"><i class=" ti-reload rotate-refresh"></div>'),setTimeout(function(){e.parents(".card").children(".card-loader").remove(),e.parents(".card").removeClass("card-load")},2e3)})},u=function(){let e=$(".header").innerHeight();$(window).scroll(function(){"horizontal"===$("body").attr("data-layout")&&"static"===$("body").attr("data-header-position")&&"fixed"===$("body").attr("data-sidebar-position")&&($(this.window).scrollTop()>=e?$(".deznav").addClass("fixed"):$(".deznav").removeClass("fixed"))})},f=function(){e<=991&&(jQuery(".menu-tabs .nav-link").on("click",function(){jQuery(this).hasClass("open")?(jQuery(this).removeClass("open"),jQuery(".fixed-content-box").removeClass("active"),jQuery(".hamburger").show()):(jQuery(".menu-tabs .nav-link").removeClass("open"),jQuery(this).addClass("open"),jQuery(".fixed-content-box").addClass("active"),jQuery(".hamburger").hide())}),jQuery(".close-fixed-content").on("click",function(){jQuery(".fixed-content-box").removeClass("active"),jQuery(".hamburger").removeClass("is-active"),jQuery("#main-wrapper").removeClass("menu-toggle"),jQuery(".hamburger").show()}))},m=function(){jQuery(window).on("scroll",function(){jQuery(".header").length>0&&(jQuery(".header"),$(window).scroll(function(){var e=$(".header");$(window).scrollTop()>=100?e.addClass("is-fixed"):e.removeClass("is-fixed")}))})},v=function(){jQuery(".bell-link").on("click",function(){jQuery(".chatbox").addClass("active")}),jQuery(".chatbox-close").on("click",function(){jQuery(".chatbox").removeClass("active")})},g=function(){$(".btn-number").on("click",function(e){e.preventDefault(),fieldName=$(this).attr("data-field"),type=$(this).attr("data-type");var t=$("input[name='"+fieldName+"']"),n=parseInt(t.val());isNaN(n)?t.val(0):"minus"==type?t.val(n-1):"plus"==type&&t.val(n+1)})},p=function(){jQuery(".dz-chat-user-box .dz-chat-user").on("click",function(){jQuery(".dz-chat-user-box").addClass("d-none"),jQuery(".dz-chat-history-box").removeClass("d-none")}),jQuery(".dz-chat-history-back").on("click",function(){jQuery(".dz-chat-user-box").removeClass("d-none"),jQuery(".dz-chat-history-box").addClass("d-none")}),jQuery(".dz-fullscreen").on("click",function(){jQuery(".dz-fullscreen").toggleClass("active")})},b=function(){jQuery(".dz-fullscreen").on("click",function(e){document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.webkitRequestFullscreen?document.documentElement.webkitRequestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.msRequestFullscreen&&document.documentElement.msRequestFullscreen()})},k=function(){jQuery(".show-pass").on("click",function(){jQuery(this).toggleClass("active"),"password"==jQuery("#dz-password").attr("type")?jQuery("#dz-password").attr("type","text"):"text"==jQuery("#dz-password").attr("type")&&jQuery("#dz-password").attr("type","password")})},C=function(){$(".dz-load-more").on("click",function(e){e.preventDefault(),$(this).append(' <i class="fas fa-sync"></i>');var t=$(this).attr("rel"),n=$(this).attr("id");$.ajax({method:"POST",url:t,dataType:"html",success:function(e){$("#"+n+"Content").append(e),$(".dz-load-more i").remove()}})})},y=function(){jQuery("#lightgallery").length>0&&$("#lightgallery").lightGallery({loop:!0,thumbnail:!0,exThumbImage:"data-exthumbimage"}),jQuery("#lightgallery2").length>0&&$("#lightgallery2").lightGallery({loop:!0,thumbnail:!0,exThumbImage:"data-exthumbimage"})},x=function(){$(".custom-file-input").on("change",function(){var e=$(this).val().split("\\").pop();$(this).siblings(".custom-file-label").addClass("selected").html(e)})},z=function(){var e=$(window).height()-206;$(".chatbox .msg_card_body").css("height",e)},w=function(){jQuery("#datetimepicker1").length>0&&$("#datetimepicker1").datetimepicker({inline:!0}),jQuery(".bt-datepicker").length>0&&$(".bt-datepicker").datepicker({autoclose:!0,todayHighlight:!0}).datepicker("update",new Date)},F=function(){jQuery("#ckeditor").length>0&&ClassicEditor.create(document.querySelector("#ckeditor"),{simpleUpload:{uploadUrl:"ckeditor-upload.php"}}).then(e=>{window.editor=e}).catch(e=>{console.error(e.stack)})},_=function(){e>1024&&$(".metismenu  li").unbind().each(function(e){if($("ul",this).length>0){var t=$("ul:first",this).css("display","block"),n=t.offset().left,a=t.width(),t=$("ul:first",this).removeAttr("style");$("body").height();var i=$("body").width();if(jQuery("html").hasClass("rtl"))var o=n+a<=i;else var o=n>0;o?$(this).find("ul:first").removeClass("left"):$(this).find("ul:first").addClass("left")}})},_=function(){e>1024&&$(".metismenu  li").unbind().each(function(e){if($("ul",this).length>0){var t=$("ul:first",this).css("display","block"),n=t.offset().left,a=t.width(),t=$("ul:first",this).removeAttr("style");$("body").height();var i=$("body").width();if(jQuery("html").hasClass("rtl"))var o=n+a<=i;else var o=n>0;o?$(this).find("ul:first").removeClass("left"):$(this).find("ul:first").addClass("left")}})},E=function(){$(".chat-rightarea-btn").on("click",function(){$(this).toggleClass("active"),$(".chat-right-area").toggleClass("active")}),$(".chat-hamburger").on("click",function(){$(".chat-left-area").toggleClass("active")})},A=function(){var e={init:function(){var e=document.querySelectorAll(".draggable-zone");if(0===e.length)return!1;new Sortable.default(e,{draggable:".draggable",handle:".draggable.draggable-handle",mirror:{appendTo:"body",constrainDimensions:!0}}).on("drag:stop",()=>{setTimeout(function(){var e;e=0,jQuery(".dropzoneContainer").each(function(){e=jQuery(this).find(".draggable-handle").length,jQuery(this).find(".totalCount").html(e)})},200)})}};jQuery(document).ready(function(){e.init()})},q=function(){$(".btc-converts").length>0&&(setTimeout(()=>{"dark"===$("body").attr("data-theme-version")&&$(".btc-converts").attr("dark-mode",!0)},1e3),$("#theme_version").on("change",function(){"dark"===$("body").attr("data-theme-version")?$(".btc-converts").attr("dark-mode",!0):$(".btc-converts").attr("dark-mode",!1)}))},T=function(e){parseInt($(".header").css("height"),10),$(".navbar-nav .scroll").on("click",function(e){if(e.preventDefault(),jQuery(".navbar-nav .scroll").parent().removeClass("active"),jQuery(this).parent().addClass("active"),""!==this.hash){var t=parseInt($(this.hash).offset().top,10),n=parseInt($(".header .header-content").css("height"),10);$("html, body").animate({scrollTop:t-n},800,function(){})}}),S()},S=function(e){if(jQuery(".navbar-nav").length>0){var t=parseInt(jQuery(".header").height(),10);jQuery(document).on("scroll",function(){var e=jQuery(this).scrollTop();jQuery(".navbar-nav .scroll").each(function(){var n,a=jQuery(this);jQuery(a.attr("href")),parseInt(jQuery(this.hash).offset().top,10)-t<=e&&(jQuery(".navbar-nav .scroll").parent().removeClass("active"),a.parent().addClass("active"))})})}},H=function(){if(jQuery(".dz-theme-mode").length>0){jQuery(".dz-theme-mode").on("click",function(){jQuery(this).toggleClass("active"),jQuery(this).hasClass("active")?(jQuery("body").attr("data-theme-version","dark"),setCookie("version","dark")):(jQuery("body").attr("data-theme-version","light"),setCookie("version","light"))});var e=getCookie("version");null!=e&&jQuery("body").attr("data-theme-version",e),jQuery(".dz-theme-mode").removeClass("active"),jQuery(window).on("resize",function(){var e=getCookie("version");null!=e&&jQuery("body").attr("data-theme-version",e)}),setTimeout(function(){"dark"===jQuery("body").attr("data-theme-version")&&jQuery(".dz-theme-mode").addClass("active")},1600)}},Y=function(){$(".btn-follow").click(function(){var e=$(this);"Follow"==e.text()?(e.text("Following"),e.css({"border-color":"#e7e7e7","background-color":"#e7e7e7",color:"black"})):(e.text("Follow"),e.css({"border-color":"#58bad7","background-color":"#58bad7",color:"#fff"}))})};return{init:function(){i(),o(),s(),c(),r(),d(),h(),u(),f(),v(),g(),p(),b(),k(),C(),y(),x(),z(),w(),F(),m(),E(),A(),q(),t(),T(),l(),_(),H(),a(),Y()},load:function(){n()},resize:function(){z(),setTimeout(()=>{d()},300)},handleMenuPosition:function(){_()}}}();jQuery(document).ready(function(){$('[data-bs-toggle="popover"]').popover();"use strict";YashAdmin.init()}),jQuery(window).on("load",function(){"use strict";YashAdmin.load(),setTimeout(function(){YashAdmin.handleMenuPosition()},1e3)}),jQuery(window).on("resize",function(){"use strict";YashAdmin.resize(),setTimeout(function(){YashAdmin.handleMenuPosition()},1e3)});