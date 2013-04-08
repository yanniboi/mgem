



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="http://www.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "KW0d5iANCJsvNqX9AwjIhrWXkbk:1334242638661";
 
 
 var CS_env = {"profileUrl":["/u/115968898142510901214/"],"token":"KW0d5iANCJsvNqX9AwjIhrWXkbk:1334242638661","assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/17979195433110598383","projectHomeUrl":"/p/kmutolle","relativeBaseUrl":"","projectName":"kmutolle","loggedInUserEmail":"yan.loetzer@gmail.com"};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 
 </script>
 
 
 <title>jquery.autofill.js - 
 kmutolle -
 
 
 a place for happy rainbows and chunky pieces of sunshine - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/17979195433110598383/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/17979195433110598383/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/17979195433110598383/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/17979195433110598383/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
</script>
<script type="text/javascript">
 window.___gcfg = {lang: 'en'};
 (function() 
 {var po = document.createElement("script");
 po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(po, s);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 
 <a href="#" id="multilogin-dropdown" onclick="return false;"
 ><u><b>yan.loetzer@gmail.com</b></u> <small>&#9660;</small></a>
 
 
 | <a href="/u/115968898142510901214/" id="projects-dropdown" onclick="return false;"
 ><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="/u/115968898142510901214/" onclick="_CS_click('/gb/ph/profile');"
 title="Profile, Updates, and Settings"
 ><u>Profile</u></a>
 | <a href="https://www.google.com/accounts/Logout?continue=http%3A%2F%2Fcode.google.com%2Fp%2Fkmutolle%2Fsource%2Fbrowse%2Ftrunk%2Fcode%2Fphp_code_ignitor%2Fassets%2Fjs%2Fjquery.autofill.js%3Fr%3D76" 
 onclick="_CS_click('/gb/ph/signout');"
 ><u>Sign out</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 <td id="plogo">
 <link itemprop="url" href="/p/kmutolle">
 <a href="/p/kmutolle/">
 
 <img src="http://www.gstatic.com/codesite/ph/images/defaultlogo.png" alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/kmutolle/"><span itemprop="name">kmutolle</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/p/kmutolle/"><span itemprop="description">a place for happy rainbows and chunky pieces of sunshine</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/kmutolle/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 <a href="/p/kmutolle/downloads/list" class="tab ">Downloads</a>
 
 
 
 
 
 <a href="/p/kmutolle/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/p/kmutolle/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/kmutolle/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 


 <span class="inst1"><a href="/p/kmutolle/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/kmutolle/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/kmutolle/source/list">Changes</a></span> &nbsp;
 
 &nbsp;
 
 <form action="/p/kmutolle/source/search" method="get" style="display:inline"
 onsubmit="document.getElementById('codesearchq').value = document.getElementById('origq').value">
 <input type="hidden" name="q" id="codesearchq" value="">
 <input type="text" maxlength="2048" size="38" id="origq" name="origq" value="" title="Google Code Search" style="font-size:92%">&nbsp;<input type="submit" value="Search Trunk" name="btnG" style="font-size:92%">
 
 
 
 
 
 
 </form>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 
<!-- IE -->




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/kmutolle/source/browse/?r=76">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/kmutolle/source/browse/trunk/?r=76">trunk</a><span class="sp">/&nbsp;</span><a href="/p/kmutolle/source/browse/trunk/code/?r=76">code</a><span class="sp">/&nbsp;</span><a href="/p/kmutolle/source/browse/trunk/code/php_code_ignitor/?r=76">php_code_ignitor</a><span class="sp">/&nbsp;</span><a href="/p/kmutolle/source/browse/trunk/code/php_code_ignitor/assets/?r=76">assets</a><span class="sp">/&nbsp;</span><a href="/p/kmutolle/source/browse/trunk/code/php_code_ignitor/assets/js/?r=76">js</a><span class="sp">/&nbsp;</span>jquery.autofill.js</span>
 
 

 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper">
 <ul class="leftside">
 
 <li><a href="/p/kmutolle/source/browse/trunk/code/php_code_ignitor/assets/js/jquery.autofill.js?r=75" title="Previous">&lsaquo;r75</a></li>
 
 </ul>
 </td>
 
 <td class="flipper"><b>r76</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(http://www.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn76_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn76_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn76_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn76_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn76_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn76_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn76_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn76_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn76_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn76_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn76_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn76_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn76_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn76_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn76_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn76_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn76_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn76_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn76_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn76_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn76_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn76_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn76_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn76_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn76_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn76_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn76_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn76_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn76_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn76_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn76_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn76_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn76_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn76_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn76_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn76_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn76_37"

><td id="37"><a href="#37">37</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn76_1

><td class="source">// Auto-Fill Plugin<br></td></tr
><tr
id=sl_svn76_2

><td class="source">// Written by Joe Sak http://www.joesak.com/2008/11/19/a-jquery-function-to-auto-fill-input-fields-and-clear-them-on-click/<br></td></tr
><tr
id=sl_svn76_3

><td class="source">(function($){<br></td></tr
><tr
id=sl_svn76_4

><td class="source">	$.fn.autofill=function(options){<br></td></tr
><tr
id=sl_svn76_5

><td class="source">		var defaults={<br></td></tr
><tr
id=sl_svn76_6

><td class="source">				value:&quot;slaapwel&quot;,<br></td></tr
><tr
id=sl_svn76_7

><td class="source">				defaultTextColor:&quot;#b2adad&quot;,<br></td></tr
><tr
id=sl_svn76_8

><td class="source">				activeTextColor:&quot;#333&quot;};<br></td></tr
><tr
id=sl_svn76_9

><td class="source">		<br></td></tr
><tr
id=sl_svn76_10

><td class="source">		var options=$.extend(defaults,options);<br></td></tr
><tr
id=sl_svn76_11

><td class="source">		<br></td></tr
><tr
id=sl_svn76_12

><td class="source">		return this.each(<br></td></tr
><tr
id=sl_svn76_13

><td class="source">				function(){<br></td></tr
><tr
id=sl_svn76_14

><td class="source">					var obj=$(this);<br></td></tr
><tr
id=sl_svn76_15

><td class="source">					obj.css({color:options.defaultTextColor});<br></td></tr
><tr
id=sl_svn76_16

><td class="source">					obj.val(obj.attr(&#39;rel&#39;));<br></td></tr
><tr
id=sl_svn76_17

><td class="source">										<br></td></tr
><tr
id=sl_svn76_18

><td class="source">					obj.focus(<br></td></tr
><tr
id=sl_svn76_19

><td class="source">							function(){<br></td></tr
><tr
id=sl_svn76_20

><td class="source">								//alert(obj.val() + &quot; : &quot; + obj.attr(&#39;rel&#39;));<br></td></tr
><tr
id=sl_svn76_21

><td class="source">								if(obj.val()==obj.attr(&#39;rel&#39;)){<br></td></tr
><tr
id=sl_svn76_22

><td class="source">									obj.val(&quot;&quot;).css({color:options.activeTextColor});<br></td></tr
><tr
id=sl_svn76_23

><td class="source">								}<br></td></tr
><tr
id=sl_svn76_24

><td class="source">							}<br></td></tr
><tr
id=sl_svn76_25

><td class="source">							)<br></td></tr
><tr
id=sl_svn76_26

><td class="source">							<br></td></tr
><tr
id=sl_svn76_27

><td class="source">					obj.blur(<br></td></tr
><tr
id=sl_svn76_28

><td class="source">							function(){<br></td></tr
><tr
id=sl_svn76_29

><td class="source">								if(obj.val()==&quot;&quot;){<br></td></tr
><tr
id=sl_svn76_30

><td class="source">									obj.css({color:options.defaultTextColor}).val(obj.attr(&#39;rel&#39;));<br></td></tr
><tr
id=sl_svn76_31

><td class="source">								}<br></td></tr
><tr
id=sl_svn76_32

><td class="source">							}<br></td></tr
><tr
id=sl_svn76_33

><td class="source">						);<br></td></tr
><tr
id=sl_svn76_34

><td class="source">				}<br></td></tr
><tr
id=sl_svn76_35

><td class="source">			);<br></td></tr
><tr
id=sl_svn76_36

><td class="source">	};<br></td></tr
><tr
id=sl_svn76_37

><td class="source">})(jQuery);<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn76_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn76_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/kmutolle/source/detail?spec=svn76&amp;r=76">r76</a>
 by fragilem17
 on Nov 24, 2009
 &nbsp; <a href="/p/kmutolle/source/diff?spec=svn76&r=76&amp;format=side&amp;path=/trunk/code/php_code_ignitor/assets/js/jquery.autofill.js&amp;old_path=/trunk/code/php_code_ignitor/assets/js/jquery.autofill.js&amp;old=75">Diff</a>
 </div>
 <pre>[No log message]</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/kmutolle/source/detail?r=76&spec=svn76';
 var publish_url = '/p/kmutolle/source/detail?r=76&spec=svn76#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/trunk/code/php_code_ignitor/assets/css/cartpool_style.css');
 changed_urls.push('/p/kmutolle/source/browse/trunk/code/php_code_ignitor/assets/css/cartpool_style.css?r\x3d76\x26spec\x3dsvn76');
 
 
 changed_paths.push('/trunk/code/php_code_ignitor/assets/images/input_bg.png');
 changed_urls.push('/p/kmutolle/source/browse/trunk/code/php_code_ignitor/assets/images/input_bg.png?r\x3d76\x26spec\x3dsvn76');
 
 
 changed_paths.push('/trunk/code/php_code_ignitor/assets/js/cartpool_cart.js');
 changed_urls.push('/p/kmutolle/source/browse/trunk/code/php_code_ignitor/assets/js/cartpool_cart.js?r\x3d76\x26spec\x3dsvn76');
 
 
 changed_paths.push('/trunk/code/php_code_ignitor/assets/js/cartpool_login.js');
 changed_urls.push('/p/kmutolle/source/browse/trunk/code/php_code_ignitor/assets/js/cartpool_login.js?r\x3d76\x26spec\x3dsvn76');
 
 
 changed_paths.push('/trunk/code/php_code_ignitor/assets/js/jquery.autofill.js');
 changed_urls.push('/p/kmutolle/source/browse/trunk/code/php_code_ignitor/assets/js/jquery.autofill.js?r\x3d76\x26spec\x3dsvn76');
 
 var selected_path = '/trunk/code/php_code_ignitor/assets/js/jquery.autofill.js';
 
 
 changed_paths.push('/trunk/code/php_code_ignitor/database.php');
 changed_urls.push('/p/kmutolle/source/browse/trunk/code/php_code_ignitor/database.php?r\x3d76\x26spec\x3dsvn76');
 
 
 changed_paths.push('/trunk/code/php_code_ignitor/system/application/config/config.php');
 changed_urls.push('/p/kmutolle/source/browse/trunk/code/php_code_ignitor/system/application/config/config.php?r\x3d76\x26spec\x3dsvn76');
 
 
 changed_paths.push('/trunk/code/php_code_ignitor/system/application/controllers/login.php');
 changed_urls.push('/p/kmutolle/source/browse/trunk/code/php_code_ignitor/system/application/controllers/login.php?r\x3d76\x26spec\x3dsvn76');
 
 
 changed_paths.push('/trunk/code/php_code_ignitor/system/application/controllers/start.php');
 changed_urls.push('/p/kmutolle/source/browse/trunk/code/php_code_ignitor/system/application/controllers/start.php?r\x3d76\x26spec\x3dsvn76');
 
 
 changed_paths.push('/trunk/code/php_code_ignitor/system/application/views/group_products.php');
 changed_urls.push('/p/kmutolle/source/browse/trunk/code/php_code_ignitor/system/application/views/group_products.php?r\x3d76\x26spec\x3dsvn76');
 
 
 changed_paths.push('/trunk/code/php_code_ignitor/system/application/views/index.php');
 changed_urls.push('/p/kmutolle/source/browse/trunk/code/php_code_ignitor/system/application/views/index.php?r\x3d76\x26spec\x3dsvn76');
 
 
 changed_paths.push('/trunk/code/php_code_ignitor/system/application/views/register_login.php');
 changed_urls.push('/p/kmutolle/source/browse/trunk/code/php_code_ignitor/system/application/views/register_login.php?r\x3d76\x26spec\x3dsvn76');
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/kmutolle/source/browse/trunk/code/php_code_ignitor/assets/css/cartpool_style.css?r=76&amp;spec=svn76"
 
 >...or/assets/css/cartpool_style.css</option>
 
 <option value="/p/kmutolle/source/browse/trunk/code/php_code_ignitor/assets/images/input_bg.png?r=76&amp;spec=svn76"
 
 >...nitor/assets/images/input_bg.png</option>
 
 <option value="/p/kmutolle/source/browse/trunk/code/php_code_ignitor/assets/js/cartpool_cart.js?r=76&amp;spec=svn76"
 
 >...nitor/assets/js/cartpool_cart.js</option>
 
 <option value="/p/kmutolle/source/browse/trunk/code/php_code_ignitor/assets/js/cartpool_login.js?r=76&amp;spec=svn76"
 
 >...itor/assets/js/cartpool_login.js</option>
 
 <option value="/p/kmutolle/source/browse/trunk/code/php_code_ignitor/assets/js/jquery.autofill.js?r=76&amp;spec=svn76"
 selected="selected"
 >...tor/assets/js/jquery.autofill.js</option>
 
 <option value="/p/kmutolle/source/browse/trunk/code/php_code_ignitor/database.php?r=76&amp;spec=svn76"
 
 >...de/php_code_ignitor/database.php</option>
 
 <option value="/p/kmutolle/source/browse/trunk/code/php_code_ignitor/system/application/config/config.php?r=76&amp;spec=svn76"
 
 >...em/application/config/config.php</option>
 
 <option value="/p/kmutolle/source/browse/trunk/code/php_code_ignitor/system/application/controllers/login.php?r=76&amp;spec=svn76"
 
 >...pplication/controllers/login.php</option>
 
 <option value="/p/kmutolle/source/browse/trunk/code/php_code_ignitor/system/application/controllers/start.php?r=76&amp;spec=svn76"
 
 >...pplication/controllers/start.php</option>
 
 <option value="/p/kmutolle/source/browse/trunk/code/php_code_ignitor/system/application/views/group_products.php?r=76&amp;spec=svn76"
 
 >...ication/views/group_products.php</option>
 
 <option value="/p/kmutolle/source/browse/trunk/code/php_code_ignitor/system/application/views/index.php?r=76&amp;spec=svn76"
 
 >...stem/application/views/index.php</option>
 
 <option value="/p/kmutolle/source/browse/trunk/code/php_code_ignitor/system/application/views/register_login.php?r=76&amp;spec=svn76"
 
 >...ication/views/register_login.php</option>
 
 </select>
 </td></tr></table>
 
 
 



 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/kmutolle/source/detail?spec=svn76&r=75">r75</a>
 by fragilem17
 on Nov 24, 2009
 &nbsp; <a href="/p/kmutolle/source/diff?spec=svn76&r=75&amp;format=side&amp;path=/trunk/code/php_code_ignitor/assets/js/jquery.autofill.js&amp;old_path=/trunk/code/php_code_ignitor/assets/js/jquery.autofill.js&amp;old=">Diff</a>
 <br>
 <pre class="ifOpened">first commit from the local version</pre>
 </div>
 
 
 <a href="/p/kmutolle/source/list?path=/trunk/code/php_code_ignitor/assets/js/jquery.autofill.js&start=76">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 901 bytes,
 37 lines</div>
 
 <div><a href="//kmutolle.googlecode.com/svn-history/r76/trunk/code/php_code_ignitor/assets/js/jquery.autofill.js">View raw file</a></div>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="http://www.gstatic.com/codesite/ph/17979195433110598383/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="http://www.gstatic.com/codesite/ph/17979195433110598383/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://kibbles.googlecode.com/files/kibbles-1.3.3.comp.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="http://www.gstatic.com/codesite/ph/17979195433110598383/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn76': '/trunk/code/php_code_ignitor/assets/js/jquery.autofill.js'}
 codereviews = CR_controller.setup(
 {"profileUrl":["/u/115968898142510901214/"],"token":"KW0d5iANCJsvNqX9AwjIhrWXkbk:1334242638661","assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/17979195433110598383","projectHomeUrl":"/p/kmutolle","relativeBaseUrl":"","projectName":"kmutolle","loggedInUserEmail":"yan.loetzer@gmail.com"}, '', 'svn76', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="http://www.gstatic.com/codesite/ph/17979195433110598383/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/17979195433110598383/js/ph_core.js"></script>
 
 
 
 
 <script type="text/javascript" src="/js/codesite_product_dictionary_ph.pack.04102009.js"></script>
</div> 
<div id="footer" dir="ltr">
 <div class="text">
 &copy;2011 Google -
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>
 
 


 
 </body>
</html>

