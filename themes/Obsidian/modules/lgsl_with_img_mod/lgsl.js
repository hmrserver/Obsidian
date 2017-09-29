jQuery(function($){
$('head').append('<style>.light{background-color:rgba(17,29,41,0.701)!important;} .dark{background-color:#0F1926!important;}</style>');
$('[style*="background-color:#f4f7fa"]').addClass("light");
$('[style*="background-color:#e4eaf2"]').addClass("dark");
$('div[style*="border:1px solid"]').css("border", "transparent");
$('img[src*="modules/lgsl_with_img_mod/lgsl_files/other/icon_online.gif"]').attr('src', 'themes/Obsidian/images/online.png');
$('img[src*="modules/lgsl_with_img_mod/lgsl_files/other/icon_no_response.gif"]').attr('src', 'themes/Obsidian/images/offline.png');
$('img[src*="modules/lgsl_with_img_mod/lgsl_files/other/icon_details.gif"]').attr('src', 'themes/Obsidian/images/icon_details.png');

})