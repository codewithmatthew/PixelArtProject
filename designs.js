//Selecting the document;
$(document).ready(function(){
    $('#sizePicker').submit(function makeGrid(grid){
        $('table tr').remove();
        const rows = $('#inputHeight').val();
        const col = $('#inputWidth').val();

        //Adding elements to the html document.
        for(let r = 1; r <= rows; r++){
            $('table').append('<tr> </tr>');
            for(let c = 1; c <= col; c++){
                $('tr:last').append('<td> </td>');
                $('td').attr("class", 'cells');
            }
        }

        //Prevent any default responses by the grid
        grid.preventDefault();

        //Selectors and (shorthand)listeners
        $('.cells').click(function(event){            
            const cellColour = $('#colorPicker').val();
            $(event.target).css('background-color', cellColour);

        });
    });
});

//Code by MattJR(Matthew Jeremiah Rungwe) </Code>
