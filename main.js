/**
 * Created by Patrick on 08.03.2015.
 */
$(function(){
    // DOM element where the Timeline will be attached
    var container = document.getElementById('visualization');


    $.get('php/getImages.php',function(data){

        var items = new vis.DataSet();
        $(data).each(function(key){
            items.add({
                id: key,
                content: data[key]['titel'],
                start: new Date(data[key]['jahr'])
            });
        });

        // Configuration for the Timeline
        var options = {
            start:1975,
            end:1981,
            template: function (item) {
                return '<h1>' + item.header + '</h1><p>' + item.description + '</p>';
            },
            maxHeight: 700,
            minHeight: 700,
            zoomable: true,
            zoomMax: 400000000000,
            zoomMin: 190000000000
        };

        // Create a Timeline
        var timeline = new vis.Timeline(container, items,  options);
    });
});
