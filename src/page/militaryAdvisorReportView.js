if(typeof zJS == "undefined") {
    zJS = {};
}

if(typeof zJS.Page == "undefined") {
    zJS.Page = {};
}

zJS.Page.militaryAdvisorReportView = {
    //dont_refresh: true,

    init: function() {
        if(typeof ikalogs != "undefined") {
            var _ikalogs = new ikalogs();
        }
        if($('#troopsReport').find('.result').length > 0 && !$(".ikaeasy_full_report_btn").length) {
            var $full_report = $('.link:first').clone().addClass('ikaeasy_full_report_btn');
            $('#militaryAdvisorReportView').find('div.content').after($full_report);
        }
    }
};