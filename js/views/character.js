$(document).ready(function() {
	$("#tblCharacter").DataTable({
	    ajax: {
	    	url: "https://spreadsheets.google.com/feeds/list/1zMDOJlHQLf5z2JVbmsckdIlBRHBKCEG1B0AcKSnk0ZE/2/public/values?alt=json",
	        dataSrc: "feed.entry"
	    },
	    dom: "ftipr",
	    columns:[
	        {
	            title: "Name",
	            data: "gsx$charactername.$t"
	        },
	        {
	            title: "Stars",
	            data: "gsx$stars.$t",
	            render: function(data, type, full, meta) {
	                var _stars = "<span style='display:none;'>" + data + "</span>";
	                for (var i = parseInt(data); i > 0; i-- ) {
	                    _stars += "<i class='glyphicon glyphicon-star'></i>";
	                }
	                return _stars;
	            }
	        },
	        {
	            title: "Trait",
	            data: "gsx$trait.$t",
	            render: function(data, type, full, meta) {
	                var _trait = "<span style='display:none;'>" + data + "</span><img src='images/traits/" + data + ".png' width='40' style='display: block; margin: auto;'/>";
	                return _trait;
	            }
	        },
	        {
	            title: "Persona",
	            data: "gsx$persona.$t"
	        },
	        {
	            title: "Adrenaline Rush Skill",
	            data: "gsx$rush.$t"
	        },
	        {
	            title: "Leader Skill",
	            data: "gsx$leaderskill.$t"
	        }
	    ],
	    columnDefs: [
	   		{
	   			targets: [1,2,3],
	   			orderable: false
	   		}
	   	],
	   	deferRender: true,
	    responsive: true,
	    order: [1, "desc"],
	    initComplete: function() {
			this.api().columns().every(function() {
				var column = this;
				if (column.index() === 1 || column.index() === 2 || column.index() === 3) {
	                createSelect(column);
	            }
			});
	    }
	});
});
