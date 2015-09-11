$(function() {
	var url = "https://spreadsheets.google.com/feeds/list/1zMDOJlHQLf5z2JVbmsckdIlBRHBKCEG1B0AcKSnk0ZE/od6/public/values?alt=json";
    
    $("#table").DataTable({
        ajax: {
        	url: url,
            dataSrc: "feed.entry"
        },
        columns:[
            {
                "title": "Character",
                "data": "gsx$charactername.$t"
            },
            {
                "title": "Star",
                "data": "gsx$stars.$t"
            },
            {
                "title": "Trait",
                "data": "gsx$trait.$t"
            },
            {
                "title": "Persona",
                "data": "gsx$persona.$t"
            },
            {
                "title": "Rush",
                "data": "gsx$rush.$t"
            },
            {
                "title": "Leader Skill",
                "data": "gsx$leaderskill.$t"
            }
                
        ],
        responsive: true,
        order: [1, "desc"]
    });
});
