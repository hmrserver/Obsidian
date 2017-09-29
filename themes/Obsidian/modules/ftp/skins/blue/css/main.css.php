
/* CSS document colors
#003250
#5893ac
#bbd2e0
#F2F2F5
#A7A7A7
#787878
*/

* {
	padding: 0;
	margin: 0;
}

body {
	background-color: #162535;
	font-family: 'Lucida Grande', Verdana, Arial, Sans-Serif;
	color: #fff;
	text-align: center;
}

#container {
	margin-left: auto;
	margin-right: auto;
	margin-top: 10px;
	margin-bottom: 20px;
	width: 980px;
	font-size: 1.2em;
	text-align: left;
}

#head {
	padding-top: 20px;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 20px;
	height: 62px;
	background: url(http://hmrworld.tk/panel/modules/ftp/skins/blue/images/img/bg_head.jpg) no-repeat;
}

#headleft {
	float:left;
}

#headright {
	float:right;
	width:470px;
}

#headright h2 {
	color: #FFF;
}

#main {
	background: #F2F2F5;
	padding: 10px;
}

#menu {
	width: 200px;
	float: left;
}

.menuhead {
	background: url(http://hmrworld.tk/panel/modules/ftp/skins/blue/images/img/bg_tabletop.png);
	height: 18px;
	width: 200px;
	color: #FFF;
	padding-top: 2px;
	font-weight: bold;
	text-align: center;
}

.menucontent {
	background: #bbd2e0;
	color: #003250;
	width: 193px;
	padding-left: 5px;
	padding-top: 10px;
	padding-bottom: 10px;
	border-bottom: solid 1px #003250;
	border-left: solid 1px #003250;
	border-right: solid 1px #003250;
}

#content {
	margin-left: 10px;
	width: 750px;
	float: right;
}

#mainleft {
	float:left;
	width: 465px;
}

#mainright {
	float: right;
	width: 485px;
	margin-left: 10px;
}

#tabelfeaturestop {
	padding-left: 10px; background-color: #003250; height: 21px; color:#FFF; padding-top:5px;
}

#tablefeature {
	background: #bbd2e0;
	border-left: #003250 1px solid;
	border-right: #003250 1px solid;
	border-bottom: #003250 1px solid;
	padding: 2px;
}

#tablefeature span {
	background-image: url(http://hmrworld.tk/panel/modules/ftp/skins/blue/images/img/arrow.gif);
	background-repeat: no-repeat;
	background-position: 0.5em;
	padding-left: 20px;
	font-weight: bold;
	color: #003250;
}

#tablefeature p {
	padding-left:20px;
	padding-top: 2px;
	padding-bottom:2px;
}

#foot {
	height: 24px;
	background: url(http://hmrworld.tk/panel/modules/ftp/skins/blue/images/img/bg_foot.jpg) no-repeat;
	text-align: center;
	padding-top: 13px;
	color: #fff;

}

#poweredby {
	padding-top: 10px;
	text-align: center;
	font-size: 0.75em;
}

a, a:link {
	text-decoration: underline;
	color: #003250;
}

a:hover {
	text-decoration: none;
	color: #5893ac;
}

#foot a, #foot a:link {
	text-decoration: none;
	font-weight: bold;
	color: #fff;
}

#foot a:hover {
	text-decoration: none;
	color: #5893ac;
}

/* Tags */
h1, h2, h3 {
	font-family: 'Trebuchet MS', 'Lucida Grande', Verdana, Arial, Sans-Serif;
	font-weight: bold;
	}

h1 {
	font-size: 2.2em;
	color: #e7e7e7;
}

h2 {
	font-size: 1.6em;
	color: #003250;
}

h3 {
	font-size: 1.4em;
}

.underline {
	text-decoration:underline;
}

.button {
	color: #003250;
	background: #fff;
	border: solid 1px #003250;
	width: 50px;
	padding: 2px;
}

.smallbutton {
	color: #003250;
	background: #fff;
	border: solid 1px #003250;
	padding: 1px;
}

br {
	line-height: 1em;
}

ul {
	padding-left: 15px;
}

/* Navigation */
.navlist {
	margin-left: 0;
	padding-left: 0;
	list-style: none;
}

.navlist li {
	padding-left: 20px;
	background-image: url(http://hmrworld.tk/panel/modules/ftp/skins/blue/images/img/arrow.gif);
	background-repeat: no-repeat;
	background-position: 0.5em;
}

.navlist li a, .navlist li a:link {
	text-decoration: none;
	color: #003250;
}

.navlist li a:hover {
	text-decoration: none;
	color: #5893ac;
}

/* Form */

select, input {
	padding: 2px;
	margin-top: 1px;
	margin-right: 0;
	margin-bottom: 1px;
	margin-left: 0;
	font-size: 1em;
}

textarea {
	padding: 2px;
}

.warning-box {
	background-color: #FFDD00;
	color: #000000;
	border: 2px;
	border-style: solid;
	border-color: #FFCC33; 
	margin-left: 0px;
	margin-right: 10px;
}

.warning-text {
	padding-bottom : 5px;
	padding-top : 5px;
	padding-left : 10px;
	padding-right : 10px;
}

.browse_cell {
	width: 120px; 
	height: 60px; 
	font-size: 0.8em; 
	text-align: center; 
	overflow: hidden;
	padding: 3px;
}

.browse_rows_actions {
	background-color: #bbd2e0;
	color: #000000;
	font-size: 80%;
	font-weight: normal;
	text-align: left;
}

.browse_rows_heading {
	background-color: #bbd2e0;
	color: #000000;
	font-size: 110%;
	font-weight: bold;
}

.browse_rows_odd, .browse_rows_even {
	color: #000000; 
	font-size: 80%;
	font-weight: normal;
	text-align: left;
}

.browse_rows_separator {
	border: 2px;
	color: #000000;
	font-size: 100%;
	text-align: left;
}

/*------------------------------------------------------------------------
   Process bar
From the PHP Pear package HTML_Progress
http://pear.laurent-laville.org/HTML_Progress/examples/horizontal/string.php
------------------------------------------------------------------------*/

.p_ba7428 .progressBar, .p_ba7428 .progressBarBorder {
    width: 172px;
    height: 24px;
    position: relative;
    left: 0;
    top: 0;
}

.p_ba7428 .progressBarBorder {
    border-width: 0;
    border-style: solid;
    border-color: #003250;
}

.p_ba7428 .installationProgress {
    width: 350px;
    text-align: left;
    font-family: Verdana, Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: #000000;
}

.p_ba7428 .cellI, .p_ba7428 .cellA {
    width: 15px;
    height: 20px;
    font-family: Courier, Verdana;
    font-size: 0.8em;
    float: left;
}

.p_ba7428 .cellI {
    background-color: #003250;
}

.p_ba7428 .cellA {
    background-color: #003250;
    visibility: hidden;
}

.input {
    border: 1px solid #006
}

input[type="submit"],
button {
    padding: 4px 8px;
    border-radius: 2px;
    cursor: pointer;
    margin: 2px 2px;
    color: #fff;
    background-color: #37b799;
    border-color: #37b799;
    border: 2px solid #37b799;
}

input[type="submit"]:hover,
button:hover {
    border: 2px solid #248E75;
    background: #248E75 !important;
    color: #eee;
    border-radius: 2px;
}
input[type="text"],
input[type="password"],
textarea {
    color: #fff;
    padding: 4px;
    border: 1px solid #121c32;
    border-radius: 2px;
    background-color: #1D324880;
}

input[type="text"]:focus,
input[type="password"]:focus,
textarea:focus,
input[type="text"]:hover,
input[type="password"]:hover,
textarea:hover {
    border-color: #3cbc81;
}

.page > table {
	background: transparent !important;
}
.page > table > tbody > tr > td > a > b{
	color: #fff !important;
}