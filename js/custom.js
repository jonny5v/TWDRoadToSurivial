// global javascript functions
var alert = 0,
	tough = 0,
	strong = 0,
	fast = 0;

function createSelect(column) {
	var select = $('<select class="form-control"><option value="">' + $(column.header()).text() + '</option></select>')
        .appendTo( $(column.header()).empty() )
        .on('change', function () {
            var val = $.fn.dataTable.util.escapeRegex($(this).val());
            column.search( val ? '^'+val+'$' : '', true, false ).draw();
        });

    column.data().unique().sort().each( function ( d, j ) {
        select.append( '<option value="'+d+'">'+d+'</option>' )
    });
};