function loadshell()
{	
	// var folder = document.getElementsByClassName("shell")[0].getAttribute("data-hash");
	// var fname = document.getElementsByClassName("shell")[0].getAttribute("data-filename");
	var url = window.location.pathname;
	var fname = url.substring(url.lastIndexOf('/')+1);
	var folder = '/s/'+url.split('/s/')[1].split('/').slice(0, -1).join('/') +'/';
	if (fname == ""){fname = "index"
		var folder = '/s/'+url.split('/s/')[1]+'/';
			}
	else
	{
		
		var folder = '/s/'+url.split('/s/')[1].split('/').slice(0, -1).join('/') +'/';
	}
var fname = fname.replace(".html", "");
var folder = folder.replace('//', '/');
var origin = window.location.protocol+'//'+url.split('/s/')[0]
alert(origin);
	
// <title>THSC Online - HSC Resources</title>
	document.write("<head><title>thsconline (loading...)</title><meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />")
	document.write("<meta name=\"viewport\" content=\"initial-scale=1, minimum-scale=1, width=device-width\" \/>")
	document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\" />")
	// document.write("<link href=\"\/s\/styles\/style.css\" rel=\"stylesheet\" type=\"text\/css\" />")
	document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script>");
	// document.write("<script src=\"https://thsconline.github.io\/s\/scripts\/thsc-api.js\" type=\"text\/javascript\"><\/script>");
	// document.write("<script src=\"https://thsconline.github.io\/s\/scripts\/thsc-search.js\" type=\"text\/javascript\"><\/script>");
	document.write("<link rel=\"shortcut icon\" type=\"image\/x-icon\" href=\"https://thsconline.github.io\/s\/images\/icon_def.png\" \/>");

	document.write("<script type=\"application\/javascript\" src=\"https:\/\/script.google.com\/macros\/s\/AKfycbyUUReOeIpiiIJWWMaKORJYURDTso_cm5RNuNu0W0oVKBPfNtdk\/exec?server="+origin+"&folderpath="+folder+"&filename="+fname+"&prefix=shell\"\"><\/script><\/head>");
	
}

function writeshell(http)
{
	document.title = http.title;
	document.write(http.htmlcontent); 
	setTimeout(function(){configure()}, 3)
	location.href = window.location.hash;  
}

String.prototype.capitalize = function(){
       return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
      }

function pdf4(input, root){
	/* Handling for HTML code from the version 6-7 */
var searchq=window.location.search+""
if(searchq=="?quick"){throw("Downloading File Instead");}
var titlex=input.innerHTML;
var idx=input.id;
var tags=unescape(location.pathname.substring(location.pathname.lastIndexOf('/')+1));
var tix=document.title;

var ua = window.navigator.userAgent; var msie = ua.indexOf("MSIE ");
if (msie > 0){var version=parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
if(version>8){} else {input.onclick=function(){return true}; document.getElementById(idx).click();
throw("Less than IE9 - Attempt to Download File directly")
return true;


}}
try
{
window.location="/s/index.html?view="+root+"&n="+titlex+""

//window.location="/s/index.html?view="+root+"&id="+idx+"&n="+titlex+""
}
catch (err)
{
var myurl = document.location;
document.write("<html><head>");
document.write("<title>"+tix+" - "+titlex.replace("<i>", "").replace("</i>", "") +"<\/title>");
document.write("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\">");
document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\"><link rel=\"shortcut icon\" type=\"image\/x-icon\" href=\"https:\/\/thsconline.github.io\/s\/images\/icon_def.png\">");
document.write("<link href=\"https:\/\/thsconline.github.io\/s\/styles\/style.css\" rel=\"stylesheet\" type=\"text\/css\">");
document.write("<style>html, body {height:100% !important;}</style><!--[if lt IE 9]><style> #mediaplayer{display:none;}</style><![endif]-->");
document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script><style>");
document.write("<\/head>");
document.write("<body>");
document.write("<span class=\"overlaybar folder-path-container goog-container\" style=\"width:100%;background-color:#D8D8D8;z-index:1000px;position:absolute;top:0px;\">");
document.write("<span class=\"overlayinsert folder-path-folder folder-path-element\">");
document.write("<span class=\"nmob\">&nbsp;&nbsp;<b>"+tix.split(" - ")[1]+" </b> - <\/span>"+titlex);
document.write("<span style=\"float:right;\">");
document.write("<!--<a class=\"nofill\" href=\"https:\/\/drive.google.com\/uc?export=download&id="+idx+"\" target=\"_blank\">Download PDF<\/a>&nbsp;&nbsp;-->");
document.write("&nbsp;&nbsp;<a class=\"nofill\" href=\""+tags+"\">[&#215;]<\/a>&nbsp;&nbsp;</span></span></span><br>");
document.write("<style>.drive-viewer-popout-button{display:none;}</style><iframe style=\"width:98%; height:95%;\" height=\"95%\" id=\"mediaplayer\" src=\"https:\/\/drive.google.com\/file\/d\/"+idx+"\/preview\"><noscript>&nbsp;Enable Javascript to Load File<\/noscript><\/iframe>");
document.write("</body></html>"); 
}

}

function pdf5(input, root){
var searchq=window.location.search+""
if(searchq=="?quick"){throw("Downloading File Instead");}
var titlex=input.innerHTML;
var idx=input.id;
var tags=unescape(location.pathname.substring(location.pathname.lastIndexOf('/')+1));
var tix=document.title;

var ua = window.navigator.userAgent; var msie = ua.indexOf("MSIE ");
if (msie > 0){var version=parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
if(version>8){} else {input.onclick=function(){return true}; document.getElementById(idx).click();
throw("Less than IE9 - Attempt to Download File directly")
return true;


}}
try
{
window.location="/s/?view="+root+"&n="+titlex+"&embed=true"
}
catch (err)
{
}

}

function openLink(a)
{
link="https://script.google.com/macros/s/AKfycbz-COYLMfNV3VGUv4V8zxY_vboQ8UaajJkMynva2lFX-yCla48/exec?"+a+"#sites-chrome-everything-caja-guest-0___"
window.open(link,"_blank","toolbar=no, titlebar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=400, height=270");
}



function toggle(a)
{
x=a.innerHTML.replace("&", "$")
visible=document.getElementById(x).getElementsByTagName('div')[0].style.display
if (visible=="none")
{document.getElementById(x).getElementsByTagName('div')[0].style.display="block"}
else { 
document.getElementById(x).getElementsByTagName('div')[0].style.display="none"
}
}

function toggleall(a,b)
{
x=document.getElementsByClassName(a)
y=document.getElementsByClassName(b)
if (x.length==y.length)
{
displayx=document.getElementsByClassName(a)[0].style.display
displayy=document.getElementsByClassName(b)[0].style.display

if (displayx=="block" || displayx=="inline"){displayx=="inline-block";}
if (displayy=="block" || displayy== "inline"){displayy=="inline-block";}

for (i=0;i<x.length;i++)
{
try
{
document.getElementsByClassName(a)[i].style.display=displayy;
document.getElementsByClassName(b)[i].style.display=displayx;
}
catch (err){}
}
}
}

function configure()
{
$( "&nbsp;&nbsp;<p><b>Any issues accessing files, please follow instructions <a class=\"ld_link\" href=\"/s/?landing\">here</a>. To upload files for future students: <a href=\"http://www.mediafire.com/filedrop/filedrop_hosted.php?drop=74ae2998b2af16eb5a4cae5f9c92b3005d7b3d88fa5d6348e4d1de43a593933b\" class=\"upload_link\">Upload Here</a></b><br><br><b>Note:</b> For Year 10 and Year 11 students please proceed with caution, as the content is currently only for the old syllabus</p>" ).appendTo("#contentall");
var q=window.location.search+"=z&end" || "?noquery"
var qt=q.split("&")[0]
var queryx=qt.split("=")[0];
var queryz=qt.split("=")[1];
switch(queryx)
{
case "?open":
var ida=-(1-queryz)
var version = document.documentMode || 9
if (version<9){if (ida > 7){ida=ida+7}} 
var anchors = document.links;
var thislinkx= anchors[ida].href;
window.location=thislinkx;
break;
           
default:
if(queryx=="?list2"){document.getElementById('web-list1').style.display='none'; document.getElementById('web-list2').style.display='inline';}
if(queryx=="?rf"){document.getElementById('web-list1').style.display='none'; document.getElementById('web-list2').style.display='inline';}
if(queryx=="?list1"){document.getElementById('web-list2').style.display='none'; document.getElementById('web-list1').style.display='inline';}
              
              try
{
 var anchors = document.links
  var linklength = anchors.length;
var searchbar="<div class=\"sites-header-cell-buffer-wrapper\"><select name=\"q\" id=\"jot-ui-searchInput\" style=\"width:252px;\" class=\"chosen-select\">"
searchbar+="<option value=\"#ui-blank\" class=\"inactive\" selected><\/option>"
    if (queryx=="?search")
{

    document.getElementById("contentall").getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].id="results"
    oput="<tr class=\"source\" id=\""+unescape(queryz)+"\"><td>"
oput+="<span class=\"title\"><img src=\"https:\/\/thsconline.github.io\/s\/images\/icon_folder.png\">&nbsp;&nbsp;<b>Search: "+unescape(queryz)+"</b></span>"
oput+="<span class=\"indent\">"
}
  for (i = 0; i<linklength;i++)
{
thislink= anchors[i]
valuex=thislink.innerHTML;
hrefx=thislink.href;
vn=thislink.id.split("_")[0];
classx=thislink.className;
if(classx=="xyz-123" || classx=="xyz-1234567890"|| classx=="xyz-1234"){classx=""}
if(classx!="" || classx=="x" || valuex=="View Sitemap" || valuex=="View Source" || valuex=="Back to Year 12 - HSC" || valuex=="Back to Year 11 - Preliminary" || valuex=="Additional Resources Home" || valuex=="Back to Year 10"  || valuex=="Up One Folder" || valuex=="Home Page" || valuex=="Access Point for Shared Resources" || valuex=="Back")
{
if (classx=="inactive"){ searchbar+="<option value=\"#ui-blank\" disabled>"+valuex+"<\/option>" }
if (classx=="nav x"){ searchbar+="<option value=\"#ui-blank\" disabled>"+valuex+"<\/option>" }


}

else {
    
    
    if (queryx=="?search")
{

    
    searchfx=valuex.search(unescape(queryz))
if (searchfx==-1) 
{
if (queryz=="w.%20sol")
{
thislink.href="#"+thislink.id;
thislink.onClick="return false;"
thislink.className="inactive"
}


}
else
{
newhref="/s/?view="+vn+"&n="+valuex;
thislink.href=newhref;
searchbar+="<option value='"+newhref+"'>"+valuex+"<\/option>"
oput+="<a href='"+hrefx+"'>"+valuex+"<\/a><br>";
}


    
}
 else   
    {searchbar+="<option value='"+hrefx+"'>"+valuex+"<\/option>"}
    
     }
}

searchbar+="</select><div class=\"goog-inline-block\" id=\"sites-searchbox-button-set\"><div tabindex=\"0\" class=\"goog-inline-block jfk-button jfk-button-standard\" id=\"sites-searchbox-search-button\" role=\"button\" onClick=\"window.location=document.getElementById('jot-ui-searchInput').value\"><\/div><\/div><\/div>"

  if (queryx=="?search")
{
if (queryz=="w.%20sol")
{

}
else
{
document.getElementById("results").innerHTML;
    document.getElementById("results").innerHTML=oput+"<\/span><\/td><\/tr>"
}
}

object=document.getElementsByClassName("sites-layout-searchbox")[0]
object.innerHTML=searchbar;


   var config = {
      '.chosen-select'           : {},
      '.chosen-select-deselect'  : {allow_single_deselect:true},
      '.chosen-select-no-single' : {disable_search_threshold:26},
      '.chosen-select-no-results': {no_results_text:'Not found!'},
      '.chosen-select-width'     : {width:"180px"}
    }
    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }
}
catch (err){console.log(err)}
try
{
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
document.getElementsByClassName("sites-layout-searchbox")[0].style.display="none"
}

}
catch (err){console.log(err)}

g=document.getElementById("sites-chrome-adminfooter-container").getElementsByTagName('div')[0].innerHTML;
// SITE VERSION
var siteversion="Version 9.0" 
g.replace("Version 8.0", siteversion)
try
{
 var urlw=window.location+"?uri"
 var jgq="https://raw.githubusercontent.com/thsconline/s/gh-pages/" +urlw.split("\/s\/")[1]
 var jgw=jgq.replace("\/?uri", "\/index.html?uri");
       if (queryx=="?landing"){var jeq=""}
       else {
 var jeq="<a href=\""+jgw+"\" target=\"blank\">View Source</a>"
 }
}
catch (err){var jeq="";console.log(err)}
        try
        {
h=g+"<img height=\"10px;\" src=\"http://counter.digits.net\/?counter={57da36d7-daf0-7014-c14b-9dbd7488e13c}&template=simple&background=EEEEFF&foreground=298CCA\" alt=\"Counter\" border=\"0\"\/>"


document.getElementById("sites-chrome-adminfooter-container").getElementsByTagName('div')[0].innerHTML=h;

}
catch (err){document.getElementById("sites-chrome-adminfooter-container").getElementsByTagName('div')[0].innerHTML=g;console.log(err)}
break;
}

}

function bar(z)
{
var slides = document.getElementsByClassName("overlaybar");
for(var i = 0; i < slides.length; i++)
{
 if(slides[i].id!=z){slides[i].style.display='none'}
}

x=document.getElementById(z).style.display; if(x=='none'){y='inline-block'} else {y='none'} document.getElementById(z).style.display=y;
}
