KISSY.add("xiami/suspender",function(d,e,i,j,f){var e=d.all,b=e("#suspender"),g,h=e(".s-popup"),c=0;b.on(i.Gesture.tap,function(){j.forward(g,"xiami/transition/newplayer")});if(d.Player)d.Player.on("playSong",function(a){a.musicInfo&&a.musicInfo.albumCover&&b.one(".s-inner").css({"background-image":'url("'+a.musicInfo.albumCover+'")'})});return{getSuspender:function(){return b},setCurrentMod:function(a){g=a},show:function(){b.show().attr("class","")},hide:function(){b.hide()},playOne:function(a){var c=
"http://img.xiami.com/images/album/img78/64778/4059921286936374_1.jpg";a.albumCover&&(c=a.albumCover);b.one(".s-inner").css({"background-image":'url("'+c+'")'});b.addClass("playing");setTimeout(this._updateLoading,100,!1,this);f.playSongNow(a)},_updateLoading:function(){100>c?(b.removeClass("loading-"+c),c+=25,b.addClass("loading-"+c),setTimeout(arguments.callee,100)):d.later(function(){b.removeClass("loading-"+c);c=0},500)},addToList:function(a){d.isArray(a)||(a=[a]);f.addToList(a);h.one(".J_PopupMsg").text(a.length+
"首歌曲已添加到播放列表").end().show(0.3);d.later(function(){h.hide(0.3)},1500)}}},{requires:["node","event","./transition/index","./transition/newplayer"]});