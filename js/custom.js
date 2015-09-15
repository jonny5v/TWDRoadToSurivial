$(function() {
	var url = "https://spreadsheets.google.com/feeds/list/1zMDOJlHQLf5z2JVbmsckdIlBRHBKCEG1B0AcKSnk0ZE/od6/public/values?alt=json";
    
    $("#table").DataTable({
        ajax: {
        	url: url,
            dataSrc: "feed.entry"
        },
        columns:[
            {
                title: "Character",
                data: "gsx$charactername.$t"
            },
            {
                title: "Star",
                data: "gsx$stars.$t"
            },
            {
                title: "Trait",
                data: "gsx$trait.$t"
            },
            {
                title: "Persona",
                data: "gsx$persona.$t"
            },
            {
                title: "Rush",
                data: "gsx$rush.$t"
            },
            {
                title: "Leader Skill",
                data: "gsx$leaderskill.$t"
            }
        ],
        responsive: true,
        order: [1, "desc"],
        initComplete: function() {
			this.api().columns().every(function() {
				var column = this;
				
				if (column.index() === 1) {
					createSelect(column);
				} else if (column.index() === 2) {
					createSelect(column);
				} else if (column.index() === 3) {
					createSelect(column);
				}
			});
        }
    });
    
    function createSelect(column) {
    	var select = $('<select><option value=""></option></select>')
            .appendTo( $(column.footer()).empty() )
            .on( 'change', function () {
                var val = $.fn.dataTable.util.escapeRegex(
                    $(this).val()
                );

                column
                    .search( val ? '^'+val+'$' : '', true, false )
                    .draw();
            });

        column.data().unique().sort().each( function ( d, j ) {
            select.append( '<option value="'+d+'">'+d+'</option>' )
        });
    };
});
