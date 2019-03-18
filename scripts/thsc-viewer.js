function writefile(myobject)
{
	var idxq=myobject.fileref;
	var userloginx=myobject.user;	
	var b="https:\/\/drive.google.com\/file\/d\/"+myobject.fileref+"\/preview";
	var downloadlka="https:\/\/drive.google.com\/uc?export=download&id="+idxq;

	setTimeout(function(){document.getElementById("mediaplayer").src=b; 
	document.getElementById("mediaplayer").id="medialoaded"}, 1)

	var titlex=getParameterByName('n');
	fbox="<div class=\"poverlay-content\" style=\"background: rgb(200,200,248); background: rgba(200,200,248, 0.97) !important;\">"
	fbox="&nbsp;<h4>"+titlex+"</h4>Download File: <a class=\"border\" href=\""+downloadlka+"\" target=\"_blank\">Download File<\/a><br><br> Close Info/Options Box: <a class=\"border\" onclick=\"hidefbox()\" href=\"#\">Close</a><br><br><br>Logged in as: " + userloginx+"</div>"

	setTimeout(function(){document.getElementById("logged-in-user").innerHTML="Logged in as: " + userloginx;
	document.getElementById("figurebox").innerHTML=fbox; document.getElementById("downloadlk").innerHTML="<a class=\"border\" onclick=\"showfbox()\" href=\"#ui-blank\">Info/Options</a>&nbsp;&nbsp;"}, 2)
}

function showfbox()
{
	if (document.getElementById("figurebox").style.width == "24px")
	{
		document.getElementById("figurebox").style.width = "290px";
		document.getElementById("figurebox").style.height = "400px";
		document.getElementById("figurebox").style.background = "rgba(200,200,248, 0.97)";
	}
	else
	{
		document.getElementById("figurebox").style.width = "24px";
		document.getElementById("figurebox").style.height = "24px";	
		document.getElementById("figurebox").style.background = "none";
	}	
}

function loadx()
{
	var searchq=window.location.search+""
	var q=window.location.search+"=z&end" || "?noquery"
	var qt=q.split("&")[0]
	var queryx=qt.split("=")[0];

	var idx=getParameterByName('id', "0000")
	var study=getParameterByName('study', "0000")

	if(idx != "0000" && study == "0000")
	{
		var idstring = "id="+idx+"&";
		searchq = searchq.replace(idstring, "");
			url="/s/index.html"+searchq
		window.location.replace(url);
	}
	else
	{
	setTimeout(function(){loadz()}, 1)
	}
	}
	function loadz()
	{
	var searchq=window.location.search+""
	var q=window.location.search+"=z&end" || "?noquery"
	var qt=q.split("&")[0]
	var queryx=qt.split("=")[0];
	switch(queryx)
	{
	case "?close":
	window.close();
	document.write("This window can now be closed.")
	break;
	case "?landing":
	document.getElementById('homepage').style.display='none';
	document.getElementById('sites-chrome-everything').style.display='block';
	setTimeout(function(){configure()}, 0);
	break;
	case "?download":
	document.getElementById('homepage').style.display='none';
	document.getElementById('sites-chrome-everything2').style.display='block';
	var titlex=getParameterByName('n');
	var idx=getParameterByName('id');
	document.getElementById("download-link").innerHTML="Download File: "+ titlex;
	document.getElementById("qtitle").value=titlex;
	document.getElementById("qid").value=idx;
	document.getElementById("qsearch").value=searchq;
	break;
	case "?easter-eggs":
	case "?tree":
	document.write("<html><head>");
	document.write("<meta charset=\"utf-8\">");
	document.write("<link href=\"/s/styles/style-tree.css\" rel=\"stylesheet\" type=\"text/css\">");
	document.write("<link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/s/images/icon_def.png\">");
	document.write("<title id=\"title\">thsconline</title>");
	document.write("</head><body style=\"margin-left:45px;margin-top:45px;\">");
	document.write("<h3 id=\"header\">thsconline tree</h1>");
	document.write("Access extra content here <br><br>");
	document.write("<table><tbody id=\"tbody\">");
	document.write("<tr><td><img src=\"/s/images/icon_back.png\">&nbsp;&nbsp;<a href=\"../?\">[Parent Directory]</a></td></tr>");
	document.write("<tr><td><img src=\"/s/images/icon_home.png\">&nbsp;&nbsp;<a href=\"/s/\">[View Site]</a></td></tr>");
	document.write("<tr><td>&nbsp;</td></tr>");
	document.write("<tr><td><h5>Folders:</h5></td></tr>");
	document.write("<tr><td><img src=\"/s/images/icon_folder.png\">&nbsp;&nbsp;<a href=\"apps/\">apps</a></td></tr>");
	document.write("<tr><td><img src=\"/s/images/icon_folder.png\">&nbsp;&nbsp;<a href=\"fonts\/\">fonts</a></td></tr>");
	document.write("<tr><td><img src=\"/s/images/icon_folder.png\">&nbsp;&nbsp;<a href=\"images\/\">images</a></td></tr>");
	document.write("<tr><td><img src=\"/s/images/icon_folder.png\">&nbsp;&nbsp;<a href=\"scripts\/\">scripts</a></td></tr>");
	document.write("<tr><td><img src=\"/s/images/icon_folder.png\">&nbsp;&nbsp;<a href=\"styles\/\">styles</a></td></tr>");
	document.write("</table>");
	document.write("</body></html>");
	break;



	case "?login":
	window.location="https://script.google.com/macros/s/AKfycbwCD820RhO-z3t-E5KXoAUk8qkr0XLUwfgOa8rT6KlUWsWR1lQ/exec?base=login";
	break;
	case "?view":
	var searchq=window.location.search+""
	var viewno=getParameterByName('view', "0000")
	var titlex=getParameterByName('n', "Error: File Not Specified")

	var rfx=getParameterByName('panel', "NE")	
	// var downloadlk="https:\/\/drive.google.com\/uc?export=download&id="+idx;
	// var downloadlink="/s/?download&id="+idx+"&title="+titlex;
	// var viewlk="https:\/\/drive.google.com\/file\/d\/"+idx+"\/preview";
	var fname=titlex.replace("Markers Notes", "HSC (Markers Notes)");
	var fname=fname.replace("Solutions", "HSC (Solutions)");

	var year=titlex.substring(0, 4);
	var root=titlex.substr(5).toLowerCase();
	var hfolder="HSC Questions"
	if (root=="solutions" || root=="solution"){var hfolder="HSC Solutions"}
	if (root=="solutions%20-%20markers%20notes" || root=="solutions - markers notes" || root=="markers%20notes" || root=="markers notes"){var hfolder="HSC Solutions - Markers Notes"}
	var maths="maths=0";
	var forumenabled="forum=0";
	var idx="NE";
	if (viewno.charAt(0)=="f"){viewnox=viewno.substr(1); var switchx="yes"; }
	else
	{
	if (viewno.charAt(0)=="B"){viewnox=viewno.substr(1); var switchx="sdf"; } else {var switchx="no"; var viewnox=viewno;}
	}
	idx=titlex.replace(/ /g, "");
	idx=viewnox+"_"+idx.replace(/w.sol/g, "");
	idx=idx.replace(/P1/g, "_P1");

	idx=idx.replace(/P2 (Adv.)/g, "_P2");
	idx=idx.replace(/P2 (Std.)/g, "_P2");
	idx=idx.replace(/P2/g, "_P2");

	idx=idx.replace(/PracticeExam/g, "_PracticeExam");
	idx=idx.replace(/'s/g, "_");

	switch(viewnox)
	{
	case "yr09":
	case "1009":
	var tix="THSC Online";
	var tags="/s/yr09/#"+idx;
	break;
	case "yr10":
	case "1010":
	var tix="THSC Online";
	var tags="/s/yr10/#"+idx;
	break;
	case "yr11":
	case "1011":
	var tix="THSC Online";
	var tags="/s/yr11/#"+idx;
	break;
	case "yr12":
	case "1012":
	var tix="THSC Online";
	var tags="/s/yr12/#"+idx;
	break;
	case "1034":
	var tix="THSC Online";
	var tags="/s/?landing";
	break;
	case "1070":
	var tix="HSC Agriculture";
	var tags="/s/yr12/Agriculture/hscpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="234"
	break;
	case "1076":
	var tix="HSC Agriculture HY Papers";
	var tags="/s/yr12/Agriculture/assessment-tasks.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="234"
	break;
	case "1078":
	var tix="HSC Agriculture Trial Papers";
	var tags="/s/yr12/Agriculture/trialpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="234"
	break;
	case "1170":
	var tix="HSC Ancient History";
	var tags="/s/yr12/Ancient History/hscpapers.html?rf#"+idx;	
	var downloadlk="https://github.com/thsconline/s/raw/gh-pages/resources/Ancient History/"+hfolder+"/Ancient History "+fname+".pdf";
	var viewlk="https://docs.google.com/viewer?url=https://thsconline.github.io/s/resources/Ancient History/"+hfolder+"/Ancient History "+fname+".pdf&embedded=true";
	var forumenabled="forum=1";
	var forumlk="32"
	break;
	case "1178":
	var tix="HSC Ancient History Trial Papers";
	var tags="/s/yr12/Ancient History/trialpapers.html#"+idx;	
	var forumenabled="forum=1";
	var forumlk="32"
	break;
	case "1366":
	var tix="Year 11 Biology HY Papers";
	var tags="/s/yr11/Biology/assessment-tasks.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="16"
	break;
	case "1368":
	var tix="Year 11 Biology Yearly Papers";
	var tags="/s/yr11/Biology/prelimpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="16"
	break;
	case "1370":
	var tix="HSC Biology";
	var tags="/s/yr12/Biology/hscpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="16"
	break;
	case "1376":
	var tix="HSC Biology HY Papers";
	var tags="/s/yr12/Biology/assessment-tasks.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="16"
	break;
	case "1378":
	var tix="HSC Biology Trial Papers";
	var tags="/s/yr12/Biology/trialpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="16"
	break;
	case "1520":
	var tix="HSC Business Services";
	var tags="/s/yr12/Business Services/index.html#"+idx;
	break;
	case "1568":
	var tix="Year 11 Business Studies Yearly Papers";
	var tags="/s/yr11/Business Studies/prelimpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="21"
	break;
	case "1570":
	var tix="HSC Business Studies";
	var tags="/s/yr12/Business Studies/hscpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="21"
	break;
	case "1576":
	var tix="HSC Business Studies HY Papers";
	var tags="/s/yr12/Business Studies/assessment-tasks.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="21"
	break;
	case "1578":
	var tix="HSC Business Studies Trial Papers";
	var tags="/s/yr12/Business Studies/trialpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="21"
	break;
	case "1720":
	var tix="HSC CAFS";
	var tags="/s/yr12/CAFS/index.html?rf#"+idx;	
	var downloadlk="https://github.com/thsconline/s/raw/gh-pages/resources/CAFS/"+hfolder+"/CAFS "+fname+".pdf";
	var viewlk="https://docs.google.com/viewer?url=https://thsconline.github.io/s/resources/CAFS/"+hfolder+"/CAFS "+fname+".pdf&embedded=true";
	var forumenabled="forum=1";
	var forumlk="90"
	break;
	case "1816":
	var tix="Year 11 Chemistry HY Papers";
	var tags="/s/yr11/Chemistry/assessment-tasks.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="17"
	break;
	case "1818":
	var tix="Year 11 Chemistry Yearly Papers";
	var tags="/s/yr11/Chemistry/prelimpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="17"
	break;
	case "1820":
	var tix="HSC Chemistry";
	var tags="/s/yr12/Chemistry/hscpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="17"
	break;
	case "1821":
	var tix="HSC Chemistry CT1 Nov-Dec Assessments";
	var tags="/s/yr12/Chemistry/assessment-tasks.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="17"
	break;
	case "1823":
	var tix="HSC Chemistry CT3 May-Jun Assessments";
	var tags="/s/yr12/Chemistry/assessment-tasks.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="17"
	break;
	case "1826":
	var tix="HSC Chemistry HY Papers";
	var tags="/s/yr12/Chemistry/assessment-tasks.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="17"
	break;
	case "1828":
	var tix="HSC Chemistry Trial Papers";
	var tags="/s/yr12/Chemistry/trialpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="17"
	break;
	case "2070":
	var tix="HSC Dance";
	var tags="/s/yr12/Dance/index.html?rf#"+idx;	
	var downloadlk="https://github.com/thsconline/s/raw/gh-pages/resources/Dance/"+hfolder+"/Dance "+fname+".pdf";
	var viewlk="https://docs.google.com/viewer?url=https://thsconline.github.io/s/resources/Dance/"+hfolder+"/Dance "+fname+".pdf&embedded=true";
	var forumenabled="forum=1";
	var forumlk="130"
	break;
	case "2120":
	var tix="HSC Design &amp; Tech";
	var tags="/s/yr12/Design &amp; Tech/index.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="39"
	break;
	case "2320":
	var tix="HSC Drama";
	var tags="/s/yr12/Drama/index.html?rf#"+idx;	
	var downloadlk="https://github.com/thsconline/s/raw/gh-pages/resources/Drama/"+hfolder+"/Drama "+fname+".pdf";
	var viewlk="https://docs.google.com/viewer?url=https://thsconline.github.io/s/resources/Drama/"+hfolder+"/Drama "+fname+".pdf&embedded=true";
	var forumenabled="forum=1";
	var forumlk="62"
	break;
	case "2420":
	var tix="HSC Earth &amp; Environmental Science";
	var tags="/s/yr12/Earth &amp; Environmental Science/hscpapers.html#"+idx
	var forumenabled="forum=1";
	var forumlk="43"
	break;
	case "2428":
	var tix="HSC Earth &amp; Environmental Science";
	var tags="/s/yr12/Earth &amp; Environmental Science/trialpapers.html#"+idx
	var forumenabled="forum=1";
	var forumlk="43"
	break;
	case "2466":
	var tix="Year 11 Economics HY Papers";
	var tags="/s/yr11/Economics/assessment-tasks.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="22"
	break;
	case "2468":
	var tix="Year 11 Economics Yearly Papers";
	var tags="/s/yr11/Economics/prelimpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="22"
	break;
	case "2470":
	var tix="HSC Economics";
	var tags="/s/yr12/Economics/hscpapers.html#"+idx
	var forumenabled="forum=1";
	var forumlk="22"
	break;
	case "2476":
	var tix="HSC Economics HY Papers"
	var tags="/s/yr12/Economics/assessment-tasks.html#"+idx
	var forumenabled="forum=1";
	var forumlk="22"
	break;
	case "2478":
	var tix="HSC Economics Trial Papers"
	var tags="/s/yr12/Economics/trialpapers.html#"+idx
	var forumenabled="forum=1";
	var forumlk="22"
	break;
	case "2670":
	var tix="HSC Engineering Studies";
	var tags="/s/yr12/Engineering Studies/index.html?rf#"+idx;	
	var downloadlk="https://github.com/thsconline/s/raw/gh-pages/resources/Engineering Studies/"+hfolder+"/Engineering Studies "+fname+".pdf";
	var viewlk="https://docs.google.com/viewer?url=https://thsconline.github.io/s/resources/Engineering Studies/"+hfolder+"/Engineering Studies "+fname+".pdf&embedded=true";
	var forumenabled="forum=1";
	var forumlk="28"
	break;
	case "2716":
	var tix="HSC English HY";
	var tags="/s/yr12/English/assessment-tasks.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="4"
	break;
	case "2718":
	var tix="HSC English Trial Paper 1";
	var tags="/s/yr12/English/trialpapers_paper1.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="44"
	break;
	case "2720":
	var tix="HSC English";
	var tags="/s/yr12/English/hscpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="4"
	break;
	case "2727":
	var tix="HSC English Trial Paper 2 Standard";
	var tags="/s/yr12/English/trialpapers_paper2_standard.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="6"
	break;
	case "2728":
	var tix="HSC English Trial Paper 2 Advanced";
	var tags="/s/yr12/English/trialpapers_paper2_advanced.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="7"
	break;
	case "2730":
	var tix="HSC English Ext 1";
	var tags="/s/yr12/English Ext 1 & 2/hscpapers_extension1.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="8"
	break;
	case "2738":
	var tix="HSC English Ext 1 Trial Papers";
	var tags="/s/yr12/English Ext 1 & 2/trialpapers_extension1.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="8"
	break;
	case "2920":
	var tix="HSC Food Tech";
	var tags="/s/yr12/Food Tech/index.html?rf#"+idx;	
	var downloadlk="https://github.com/thsconline/s/raw/gh-pages/resources/Food Tech/"+hfolder+"/Food Tech "+fname+".pdf";
	var viewlk="https://docs.google.com/viewer?url=https://thsconline.github.io/s/resources/Food Tech/"+hfolder+"/Food Tech "+fname+".pdf&embedded=true";
	break;
	case "3220":
	var tix="HSC Geography";
	var tags="/s/yr12/Geography/index.html?rf#"+idx;	
	var downloadlk="https://github.com/thsconline/s/raw/gh-pages/resources/Geography/"+hfolder+"/Geography "+fname+".pdf";
	var viewlk="https://docs.google.com/viewer?url=https://thsconline.github.io/s/resources/Geography/"+hfolder+"/Geography "+fname+".pdf&embedded=true";
	break;
	case "3630":
	var tix="HSC History Extension";
	var tags="/s/yr12/History Extension/hscpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="34"
	break;
	case "3638":
	var tix="HSC History Extension Trial Papers";
	var tags="/s/yr12/History Extension/trialpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="34"
	break;
	case "3720":
	var tix="HSC Hospitality Papers";
	var tags="/s/yr12/Hospitality/index.html#"+idx;
	break;
	case "4118":
	var tix="Year 11 IPT Yearly Papers";
	var tags="/s/yr11/IPT/prelimpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="29"
	break;
	case "4120":
	var tix="HSC IPT";
	var tags="/s/yr12/IPT/index.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="29"
	break;
	case "4126":
	var tix="HSC IPT HY Papers";
	var tags="/s/yr12/IPT/assessment-tasks.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="29"
	break;
	case "4128":
	var tix="HSC IPT Trial Papers";
	var tags="/s/yr12/IPT/trialpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="29"
	break;
	case "4200":
	var tix="HSC Languages";
	var tags="/s/yr12/LOTE/index.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="53"
	break; 
	case "4600":
	var tix="HSC Japanese";
	var tags="/s/yr12/LOTE/Japanese/index.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="53"
	break; 
	case "4619":
	var tix="HSC Japanese Beginners";
	var tags="/s/yr12/LOTE/Japanese/hscpapers_beginners.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="53"
	break; 
	case "4620":
	var root=titlex.substr(5).toLowerCase();
	if (root=="solutions" || root=="solution" || root=="solutions%20-%20markers%20notes" || root=="solutions - markers notes"){root="hsc"}
	var tix="HSC Japanese Continuers";
	var tags="/s/yr12/LOTE/Japanese/"+root+"papers_continuers.html?rf#"+idx;
	var forumenabled="forum=1";
	var forumlk="53"
	break; 
	case "4626":
	var tix="HSC Japanese Continuers HY Papers";
	var tags="/s/yr12/LOTE/Japanese/assessment-tasks_continuers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="53"
	break; 
	case "4627":
	var tix="HSC Japanese Beginners Trial Papers";
	var tags="/s/yr12/LOTE/Japanese/trialpapers_beginners.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="53"
	break;
	case "4628":
	var tix="HSC Japanese Continuers Trial Papers";
	var tags="/s/yr12/LOTE/Japanese/trialpapers_continuers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="53"
	break;
	case "4630":
	var tix="HSC Japanese Extension";
	var tags="/s/yr12/LOTE/Japanese/hscpapers_extension.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="53"
	break; 
	case "5018":
	var tix="Year 11 Legal Studies Yearly Papers";
	var tags="/s/yr11/Legal Studies/prelimpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="24"
	break;
	case "5020":
	var tix="HSC Legal Studies";
	var tags="/s/yr12/Legal Studies/hscpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="24"
	break;
	case "5028":
	var tix="HSC Legal Studies Trial Papers";
	var tags="/s/yr12/Legal Studies/trialpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="24"
	break;
	case "5098":
	var tix="Year 9 Maths Yearly Papers";
	var tags="/s/yr9/Maths/yr9papers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="10"
	break;
	case "5100":
	var tix="Year 10 Maths";
	var tags="/s/yr10/Maths/index.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="10"
	break;
	case "5108":
	var tix="Year 10 Maths Yearly Papers";
	var tags="/s/yr10/Maths/yr10papers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="10"
	break;
	case "5200":
	var tix="Year 11 Maths";
	var tags="/s/yr11/Maths/index.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="10"
	break;
	case "5218":
	var tix="Year 11 General Maths Yearly Papers";
	var tags="/s/yr11/Maths/prelimpapers_general.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="11"
	break;
	case "5221":
	var tix="Year 11 Maths PT1 Mar-Apr Assessments";
	var tags="/s/yr11/Maths/assessment-tasks_advanced.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="12"
	break;
	case "5222":
	var tix="Year 11 Maths PT2 Jul-Aug Assessments";
	var tags="/s/yr11/Maths/assessment-tasks_advanced.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="12"
	break;
	case "5226":
	var tix="Year 11 Maths HY Papers";
	var tags="/s/yr11/Maths/assessment-tasks_advanced.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="12"
	break;
	case "5228":
	var tix="Year 11 Maths Yearly Papers";
	var tags="/s/yr11/Maths/prelimpapers_advanced.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="13"
	break;
	case "5231":
	var tix="Year 11 Maths Ext 1 PT1 Mar-Apr Assessments";
	var tags="/s/yr11/Maths/assessment-tasks_extension1.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="13"
	break;
	case "5232":
	var tix="Year 11 Maths Ext 1 PT2 Jul-Aug Assessments";
	var tags="/s/yr11/Maths/assessment-tasks_extension1.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="13"
	break;
	case "5236":
	var tix="Year 11 Maths Ext 1 HY Papers";
	var tags="/s/yr11/Maths/assessment-tasks_extension1.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="13"
	break;
	case "5238":
	var tix="Year 11 Maths Ext 1 Yearly Papers";
	var tags="/s/yr11/Maths/prelimpapers_extension1.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="13"
	break;
	case "5276":
	var tix="Year 11 Maths (Accelerated) HY Papers";
	var tags="/s/yr11/Maths/assessment-tasks_accelerated.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="12"
	break;
	case "5278":
	var tix="Year 11 Maths (Accelerated) Yearly Papers";
	var tags="/s/yr11/Maths/prelimpapers_accelerated.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="12"
	break;
	case "5300":
	var tix="HSC Maths";
	var tags="/s/yr12/Maths/index.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="10"
	break;
	case "5310":
	var tix="HSC General Maths";
	var tags="/s/yr12/Maths/hscpapers_general.html?rf#"+idx;
	var forumenabled="forum=1";
	var forumlk="11"
	break;
	case "5313":
	var tix="HSC General Maths CT3 May-Jun Assessments";
	var tags="/s/yr12/Maths/assessment-tasks_general.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="11"
	break;
	case "5316":
	var tix="HSC General Maths HY Papers";
	var tags="/s/yr12/Maths/assessment-tasks_general.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="11"
	break;
	case "5318":
	var tix="HSC General Maths Trial Papers";
	var tags="/s/yr12/Maths/trialpapers_general.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="11"
	break;
	case "5320":
	var tix="HSC Maths";
	var tags="/s/yr12/Maths/hscpapers_advanced.html?rf#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="12"
	break;
	case "5321":
	var tix="HSC Maths CT1 Nov-Dec Assessments";
	var tags="/s/yr12/Maths/assessment-tasks_advanced.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="12"
	break;
	case "5323":
	var tix="HSC Maths CT3 May-Jun Assessments";
	var tags="/s/yr12/Maths/assessment-tasks_advanced.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="12"
	break;
	case "5324":
	var tix="HSC Maths CT4 Aug-Sep Assessments";
	var tags="/s/yr12/Maths/assessment-tasks_advanced.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="12"
	break;
	case "5326":
	var tix="HSC Maths HY Papers";
	var tags="/s/yr12/Maths/assessment-tasks_advanced.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="12"
	break;
	case "5328":
	var tix="HSC Maths Trial Papers";
	var tags="/s/yr12/Maths/trialpapers_advanced.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="12"
	break;
	case "5330":
	var tix="HSC Maths Ext 1";
	var tags="/s/yr12/Maths/hscpapers_extension1.html?rf#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="13"
	break;
	case "5331":
	var tix="HSC Maths Ext 1 CT1 Nov-Dec Assessments";
	var tags="/s/yr12/Maths/assessment-tasks_extension1.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="13"
	var maths="maths=1";
	break;
	case "5332":
	var tix="HSC Maths Ext 1 CT2 Feb-Mar Assessments";
	var tags="/s/yr12/Maths/assessment-tasks_extension1.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="13"
	break;
	case "5333":
	var tix="HSC Maths Ext 1 CT3 May-Jun Assessments";
	var tags="/s/yr12/Maths/assessment-tasks_extension1.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="13"
	break;
	case "5334":
	var tix="HSC Maths Ext 1 CT4 Aug-Sep Assessments";
	var tags="/s/yr12/Maths/assessment-tasks_extension1.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="13"
	break;
	case "5336":
	var tix="HSC Maths Ext 1 HY Papers";
	var tags="/s/yr12/Maths/assessment-tasks_extension1.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="13"
	break;
	case "5338":
	var tix="HSC Maths Ext 1 Trial Papers";
	var tags="/s/yr12/Maths/trialpapers_extension1.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="13"
	break;
	case "5340":
	var tix="HSC Maths Ext 2";
	var tags="/s/yr12/Maths/hscpapers_extension2.html?rf#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="14"
	break;
	case "5341":
	var tix="HSC Maths Ext 2 CT1 Nov-Dec Assessments";
	var tags="/s/yr12/Maths/assessment-tasks_extension2.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="14"
	break;
	case "5342":
	var tix="HSC Maths Ext 2 CT2 Feb-Mar Assessments";
	var tags="/s/yr12/Maths/assessment-tasks_extension2.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="14"
	break;
	case "5343":
	var tix="HSC Maths Ext 2 CT3 May-Jun Assessments";
	var tags="/s/yr12/Maths/assessment-tasks_extension2.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="14"
	break;
	case "5344":
	var tix="HSC Maths Ext 2 CT4 Aug-Sep Assessments";
	var tags="/s/yr12/Maths/assessment-tasks_extension2.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="14"
	break;
	case "5346":
	var tix="HSC Maths Ext 2 HY Papers";
	var tags="/s/yr12/Maths/assessment-tasks_extension2.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="14"
	break;
	case "5348":
	var tix="HSC Maths Ext 2 Trial Papers";
	var tags="/s/yr12/Maths/trialpapers_extension2.html#"+idx;
	var maths="maths=1";
	var forumenabled="forum=1";
	var forumlk="14"
	break;
	case "5385A":
	/* 5385= QLD Maths */
	var tix="QLD Maths A Papers";
	var tags="/s/yr12/Maths/qpapers_mathsA.html?rf#"+idx;
	break;
	case "5385B":
	/* 5385= QLD Maths */
	var tix="QLD Maths B Papers";
	var tags="/s/yr12/Maths/qpapers_mathsB.html?rf#"+idx;
	break;
	case "5386":
	/* 5385-5389= TCE Maths */
	var tix="TCE General Maths Papers";
	var tags="/s/yr12/Maths/tcepapers_general.html?rf#"+idx;
	break;
	case "5386_o":
	/* 5385-5389= TCE Maths */
	var tix="TCE Maths Applied Papers";
	var tags="/s/yr12/Maths/tcepapers_general.html?rf#"+idx;
	break;
	case "5387":
	/* 5385-5389= TCE Maths */
	var tix="TCE Maths Methods Papers";
	var tags="/s/yr12/Maths/tcepapers_mmethods.html?rf#"+idx;
	break;
	case "5389":
	/* 5385-5389= TCE Maths */
	var tix="TCE Maths Specialised Papers";
	var tags="/s/yr12/Maths/tcepapers_specialist.html?rf#"+idx;
	break;
	case "5391":
	/* 539= VCE Maths */
	var tix="VCE Further Maths Papers";
	var tags="/s/yr12/Maths/vcepapers_fmaths.html?rf#"+idx;
	break;
	case "5405":
	/* COMPETITIONS */
	var root=titlex.split(" ")[0].toLowerCase();
	var tix="Olympiad/Competition Paper";
	var tags="/s/yr12/Maths/Competitions/cp_"+root+".html#"+idx;
	var forumenabled="forum=1";
	var forumlk="238"
	break;
	case "5442":
	/* COURSE MATERIALS */
	var root=titlex.split(" ")[0].toLowerCase()+titlex.split(" ")[1].toLowerCase();
	var tix="Maths Ext 2 Course Material";
	var tags="/s/yr12/Maths/Materials/ws_"+root+"s.html#"+idx;
	break;
	case "5518":
	var tix="Year 11 Modern History Yearly Papers";
	var tags="/s/yr11/Modern History/prelimpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="33"
	break;
	case "5520":
	var tix="HSC Modern History";
	var tags="/s/yr12/Modern History/hscpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="33"
	break;
	case "5528":
	var tix="HSC Modern History Trial Papers";
	var tags="/s/yr12/Modern History/trialpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="33"
	break;
	case "6420":
	var tix="HSC PDHPE";
	var tags="/s/yr12/PDHPE/hscpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="25"
	break;
	case "6428":
	var tix="HSC PDHPE Trial Papers";
	var tags="/s/yr12/PDHPE/trialpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="25"
	break;
	case "6516":
	var tix="Year 11 Physics HY Papers";
	var tags="/s/yr11/Physics/assessment-tasks.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="18"
	break;
	case "6518":
	var tix="Year 11 Physics Yearly Papers";
	var tags="/s/yr11/Physics/prelimpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="18"
	break;
	case "6520":
	var tix="HSC Physics";
	var tags="/s/yr12/Physics/hscpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="18"
	break;
	case "6521":
	var tix="HSC Physics CT1 Nov-Dec Assessments";
	var tags="/s/yr12/Physics/assessment-tasks.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="18"
	break;
	case "6523":
	var tix="HSC Physics CT3 May-Jun Assessments";
	var tags="/s/yr12/Physics/assessment-tasks.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="18"
	break;
	case "6526":
	var tix="HSC Physics HY Papers";
	var tags="/s/yr12/Physics/assessment-tasks.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="18"
	break;
	case "6528":
	var tix="HSC Physics Trial Papers";
	var tags="/s/yr12/Physics/trialpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="18"
	break;
	case "7470":
	var tix="HSC Software"; /* SDD */
	var tags="/s/yr12/Software/hscpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="30"
	break;
	case "7478":
	var tix="HSC Software Trial Papers"; /* SDD */
	var tags="/s/yr12/Software/trialpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="30"
	break;
	case "7520":
	var tix="HSC Senior Science";
	var tags="/s/yr12/Senior Science/hscpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="19"
	break;
	case "7528":
	var tix="HSC Senior Science Trial Papers";
	var tags="/s/yr12/Senior Science/trialpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="19"
	break;
	case "7670":
	var tix="HSC Society & Culture";
	var tags="/s/yr12/Society & Culture/index.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="26"
	break;
	case "7700":
	var tix="HSC Studies of Religion";
	var tags="/s/yr12/Studies of Religion/hscpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="38"
	break;
	case "7710":
	var titlex=titlex.replace(" (SOR1)", "");
	var tix="HSC Studies of Religion 1";
	var tags="/s/yr12/Studies of Religion/hscpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="38"
	break;
	case "7718":
	var tix="HSC Studies of Religion 1 Trial Papers";
	var tags="/s/yr12/Studies of Religion/trialpapers_sor1.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="38"
	break;
	case "7720":
	var titlex=titlex.replace(" (SOR2)", "");
	var tix="HSC Studies of Religion 2";
	var tags="/s/yr12/Studies of Religion/hscpapers.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="38"
	break;
	case "7728":
	var tix="HSC Studies of Religion 2 Trial Papers";
	var tags="/s/yr12/Studies of Religion/trialpapers_sor2.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="38"
	break;
	case "7920":
	var tix="HSC Textiles & Design";
	var tags="/s/yr12/Textiles & Design/index.html#"+idx;
	break;
	case "8570":
	var tix="HSC Visual Arts"; /* VA */
	var tags="/s/yr12/Visual Arts/index.html#"+idx;
	var forumenabled="forum=1";
	var forumlk="37"
	break;
	case "sdf":
	var switchx="sdf";
	break;
	default:
	window.location="https://thsconline.github.io/frenzy/v/"+viewno+".html?id="+idx+"&n="+titlex+""
	return;
	break;
	}
			
	if(rfx != "NE")
	{
	switch(rfx)
	{
	case "1":
	var tags = tags.replace(".html#", ".html?list1#")
	break;
	case "2":
	var tags = tags.replace(".html#", ".html?list2#")
	break;
	case "rf":
	var tags = tags.replace(".html#", ".html?rf#")
	break;
	default:
	break;
	}
	}
					
	if (switchx=="yes")
	{
	var tags=treelink;
	}
	if (switchx=="sdf")
	{
	var sdfforumlk="http://community.boredofstudies.org/"+getParameterByName('linkref', "459/secondary-education/")
	}
	var myurl = document.location;
	document.write("<html><head>");
	if (switchx=="sdf")
	{
	document.write("<title>File Viewer<\/title>");
	}
	else
	{
	document.write("<title>"+tix+" - "+titlex.replace("<i>", "").replace("</i>", "") +"<\/title>");
	}
	document.write("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\">");
	document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\"><link rel=\"shortcut icon\" type=\"image\/x-icon\" href=\"https:\/\/thsconline.github.io\/s\/images\/icon_def.png\">");
	document.write("<link href=\"\/s\/styles\/style.css\" rel=\"stylesheet\" type=\"text\/css\">");
	document.write("<style>html, body {height:100% !important;}</style><!--[if lt IE 9]><style> #mediaplayer{display:none;}</style><![endif]-->");
	// document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script>");
	document.write("<script src=\"/s/scripts/thsc-viewer.js\" type=\"text/javascript\"></script><\/head>");
	document.write("<body><div id=\"figurebox\" onclick=\"showfbox()\" class=\"poverlay\"></div>");
	document.write("<span class=\"overlaybar\" style=\"width:100%;background-color:#7777FF;color:white !important;z-index:1000px;position:absolute;top:0px;padding-top:3px;padding-bottom:3px;\">");
	document.write("<span class=\"overlayinsert folder-path-element\">");
	if (switchx=="sdf")
	{
	document.write("<span class=\"nmob\">&nbsp;<\/span>");}
	else
	{
	document.write("<span class=\"nmob\">&nbsp;&nbsp;<b>"+tix+"</b> - <\/span>"+titlex);
	}
	document.write("<span style=\"float:right;\">&nbsp;&nbsp;");
	if (switchx=="sdf")
	{
	}
	else
	{
	if(maths=="maths=1")
	{
	document.write("<span class=\"nmob\"><a class=\"border\" href=\"\/s\/resources\/Maths Reference Sheet.pdf\" target=\"_blank\">Math Formulae<\/a>&nbsp;&nbsp;</span>");
	document.write("<span class=\"nmob\"><a class=\"border\" href=\"\/s\/resources\/Standard Integral Sheet.pdf\" target=\"_blank\">Standard Integrals<\/a>&nbsp;&nbsp;</span>");
	}
	if(forumenabled=="forum=1")
	{
	document.write("<span class=\"nmob\"><a class=\"border\" href=\"http://community.boredofstudies.org/forumdisplay.php?f="+forumlk+"\" target=\"_blank\">Forum<\/a>&nbsp;&nbsp;</span>");
	// document.write("<span class=\"nmob\"><a class=\"border\" href=\"http://community.boredofstudies.org/newthread.php?do=newthread&f="+forumlk+"\" target=\"_blank\">Ask Question / Discuss<\/a>&nbsp;&nbsp;</span>");
	}
	// document.write("<a class=\"border\" href=\""+downloadlk+"\" target=\"_blank\">Download PDF<\/a>&nbsp;&nbsp;");
	document.write("<span id=\"downloadlk\"></span>");
	}
	// document.write("<a class=\"border\" href=\"/s/?login\" target=\"_blank\">BETA Login/Register<\/a>&nbsp;&nbsp;");
	// document.write("<a class=\"border\" href=\"/s/?download"+searchq.substr(5)+"\" target=\"_blank\">BETA Download<\/a>&nbsp;&nbsp;");

	if (switchx=="sdf")
	{
		if (viewno.charAt(0)=="B"){
		linkx="/s/?view="+viewnox+"&id="+idx+"&n="+titlex+""
		/*	document.write("<a class=\"border\" href=\""+linkx+"\"  style=\"background-color:#222222 !important;\">Expand<\/a>&nbsp;&nbsp;")*/
		}
	document.write("<a class=\"border\" href=\"https:\/\/thsconline.github.io\/s/\">Go to THSC<\/a>&nbsp;&nbsp;<a class=\"nofill border\" href=\"\/s\/?close\">Close &#215;<\/a></span></span></span><br>");
	}
	else
	{
	document.write("<!--&nbsp;&nbsp;--><a class=\"border\" href=\""+tags+"\">Close &#215;<\/a>&nbsp;&nbsp;</span><span style=\"float:right;\" id=\"logged-in-user\"></span></span></span><br>");
	}


	var viewlk="https:\/\/drive.google.com\/file\/d\/1QLU8Rfy7Lk_vO0HiRSQSVSBM3oAgCncq\/preview"; // temp line
	document.write("<style>.drive-viewer-popout-button{display:none;}</style><iframe style=\"width:98%; height:95%;\" height=\"95%\" id=\"mediaplayer\" src=\""+viewlk+"\"><noscript>&nbsp;Enable Javascript to Load File<\/noscript><\/iframe>");
	document.write("<script type=\"application/javascript\" src=\"https:\/\/script.google.com\/macros\/s\/AKfycbwCD820RhO-z3t-E5KXoAUk8qkr0XLUwfgOa8rT6KlUWsWR1lQ\/exec?field="+titlex+"&base="+viewnox+"&prefix=writefile\"></script></body></html>"); 


	break;

	case "?study":
	var searchq=window.location.search+""
	var viewno=getParameterByName('study', "000")
	var viewnox = viewno.split(".")[0];
	var idx=getParameterByName('id', "index");
	if (idx.slice(-2)=="_s")
	{
	var newid=idx.substring(0, idx.length - 2);
	}
	else
	{
	var newid=idx;
	}
	var oid = idx;
	switch(viewno)
	{
	case "534.3":
	var tix="Maths Ext 2 - Conics";
	var subj="Maths Ext 2";
	var tags="/s/yr12/Maths/Questions%20by%20Topic/topic_conics_extension2.html#"+newid;
	var tagsx="https://script.google.com/macros/s/AKfycbwCD820RhO-z3t-E5KXoAUk8qkr0XLUwfgOa8rT6KlUWsWR1lQ/exec?base=thsc&serve="+viewnox+"/"+oid;
	break;
	case "534.SAMPLE":
	var tix="Maths Ext 2 - Sample Questions";
	var subj="Maths Ext 2";
	var tags="/tex/sample.html#"+newid;
	var tagsx="https://script.google.com/macros/s/AKfycbwCD820RhO-z3t-E5KXoAUk8qkr0XLUwfgOa8rT6KlUWsWR1lQ/exec?base=thsc&serve="+viewnox+"/"+oid;
	default:
	break;
	}

	var viewnox=viewno.split(".")[0]
	var topic=getParameterByName('topic', "Question #");

	if (topic=="Question #"){
		var topic = "";
	if(idx=="index" || idx=="! temp")
	{
	// var tagsx="questions\/"+subj+"\/"+idx+".html"
	}
	else
	{
	if (idx.slice(-2)=="_s")
	{
	var newid=idx.substring(0, idx.length - 2);
	var idx=newid+" w. sol";
	var linkx="\/s\/?study="+viewno+"&id="+newid;
	}
	else
	{
	var newid=idx;
	var linkx="\/s\/?study="+viewno+"&id="+idx+"_s";
	}
	var tagsx="https://script.google.com/macros/s/AKfycbwCD820RhO-z3t-E5KXoAUk8qkr0XLUwfgOa8rT6KlUWsWR1lQ/exec?base=thsc&serve="+viewnox+"/"+oid;
	var downloadtex = "https://github.com/thsconline/tex/raw/gh-pages/"+viewnox+"/"+newid+".tex"
	var downloadlk = "https://github.com/thsconline/tex/raw/gh-pages/"+viewnox+"/"+newid+".pdf"
	var ielink = "https://thsconline.github.io/tex/"+viewnox+"/"+newid+".pdf"
	var ievernine="https://docs.google.com/viewer?url=https://thsconline.github.io/tex/"+viewnox+"/"+newid+".pdf";
	}
	}
	else
	{
	var idx="";
	var tagsx="topics\/"+subj+"\/"+topic;
	}
	var myurl = document.location;
	document.write("<html><head>");
	document.write("<title>"+tix+" - "+ topic + idx+"</title>");
	document.write("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\">");
	document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\"><link rel=\"shortcut icon\" type=\"image\/x-icon\" href=\"https:\/\/thsconline.github.io\/s\/images\/icon_def.png\">");
	document.write("<link href=\"\/s\/styles\/style.css\" rel=\"stylesheet\" type=\"text\/css\">");
	document.write("<style>html, body {height:100% !important;}</style><!--[if lt IE 7]><style> #mediaplayer{display:none;}</style><![endif]-->");
	document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script>");
	document.write("<\/head>");
	document.write("<body><div id=\"figurebox\"></div>");
	document.write("<span class=\"overlaybar\" style=\"width:100%;background-color:#7777FF;color:white !important;z-index:1000px;position:absolute;top:0px;padding-top:3px;padding-bottom:3px;\">");
	document.write("<span class=\"overlayinsert folder-path-element\">");
	document.write("<span class=\"nmob\">&nbsp;&nbsp;<b>"+tix+"</b> - <\/span>"+topic+idx);
	document.write("<span style=\"float:right;\">");
	if (topic!=""){}
			else
			{
	if (oid.slice(-2)=="_s")
	{
	document.write("<a class=\"border\" href=\""+linkx+"\">Hide Worked Solutions<\/a>&nbsp;&nbsp;");
	}
	else
	{
	document.write("<a class=\"border\" href=\""+linkx+"\">Show Worked Solutions<\/a>&nbsp;&nbsp;");
	}
	}
	var ua = window.navigator.userAgent; var msie = ua.indexOf("MSIE ");
	if (msie > 0){var version=parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
	if(version<10){
	window.location=ievernine;
	} else {
	document.write("<a id=\"pdflink\" class=\"border\" href=\""+downloadlk+"\" target=\"_blank\">Download PDF<\/a>&nbsp;&nbsp;");
	document.write("<a id=\"texlink\" class=\"border\" href=\""+downloadtex+"\" target=\"_blank\">Download TEX<\/a>&nbsp;&nbsp;");
	document.write("&nbsp;&nbsp;<a class=\"border\" href=\""+tags+"\">Close &#215;<\/a>&nbsp;&nbsp;</span></span></span><br>");
	document.write("<style>.drive-viewer-popout-button{display:none;}</style><iframe style=\"width:98%; height:95%;\" height=\"95%\" id=\"mediaplayer\" src=\""+tagsx+"\"><noscript>&nbsp;Enable Javascript to Load File<\/noscript><\/iframe>");
	document.write("</body></html>");
	}}
	else {
	document.write("<a id=\"pdflink\" class=\"border\" href=\""+downloadlk+"\" target=\"_blank\">Download PDF<\/a>&nbsp;&nbsp;");
	document.write("<a id=\"texlink\" class=\"border\" href=\""+downloadtex+"\" target=\"_blank\">Download TEX<\/a>&nbsp;&nbsp;");
	document.write("&nbsp;&nbsp;<a class=\"border\" href=\""+tags+"\">Close &#215;<\/a>&nbsp;&nbsp;</span></span></span><br>");
	document.write("<style>.drive-viewer-popout-button{display:none;}</style><iframe style=\"width:98%; height:95%;\" height=\"95%\" id=\"mediaplayer\" src=\""+tagsx+"\"><noscript>&nbsp;Enable Javascript to Load File<\/noscript><\/iframe>");
	document.write("</body></html>");
	}	


	break;

	default:
	document.getElementById("homepage").style.display='inline';
	break;

	}
}
function getParameterByName(name, defaultx, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return defaultx;
    if (!results[2]) return defaultx;
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
