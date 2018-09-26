jQuery(document).ready(function(){jQuery("a").each(function(){var e=jQuery(this);var t=e.attr("href");if(t==undefined||t=="")return;var n=t.replace("http://","").replace("https://","");var r=t.split(".").reverse();var i=r[0].toLowerCase();var r=t.split("/").reverse();var s=r[2];var o=false;if(typeof analyticsFileTypes!="undefined"){if(jQuery.inArray(i,analyticsFileTypes)!=-1){o=true;e.click(function(){if(analyticsEventTracking=="enabled"){if(analyticsSnippet=="enabled"){_gaq.push(["_trackEvent","Downloads",i.toUpperCase(),t])}else{ga("send","event","Downloads",i.toUpperCase(),t)}}else{if(analyticsSnippet=="enabled"){_gaq.push(["_trackPageview",analyticsDownloadsPrefix+n])}else{ga("send","pageview",analyticsDownloadsPrefix+n)}}})}}if(t.match(/^http/)&&!t.match(document.domain)&&o==false){e.click(function(){if(analyticsEventTracking=="enabled"){if(analyticsSnippet=="enabled"){_gaq.push(["_trackEvent","Outbound Traffic",t.match(/:\/\/(.[^/]+)/)[1],t])}else{ga("send","event","Outbound Traffic",t.match(/:\/\/(.[^/]+)/)[1],t)}}else if(analyticsSnippet=="enabled"){_gaq.push(["_trackPageview",analyticsOutboundPrefix+n])}else{ga("send","pageview",analyticsOutboundPrefix+n)}})}})})
/*
     FILE ARCHIVED ON 07:38:36 Jul 27, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:43:03 Sep 26, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 409.917 (3)
  esindex: 0.012
  captures_list: 524.369
  CDXLines.iter: 11.104 (3)
  PetaboxLoader3.datanode: 78.953 (4)
  exclusion.robots: 0.38
  exclusion.robots.policy: 0.361
  RedisCDXSource: 98.805
  PetaboxLoader3.resolve: 368.926 (3)
  load_resource: 73.136
*/