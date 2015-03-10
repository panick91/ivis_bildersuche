/**
 * Created by Patrick on 08.03.2015.
 */
var timeline;
var graph2d;

$(function () {
    // DOM element where the Timeline will be attached

    $.get('php/getImages.php', function (data) {
        createDetailView(data);
        createTimeLine(data);
    });
});


function createDetailView(data) {
    var container = document.getElementById('visualization');

    var items = new vis.DataSet();
    $(data).each(function (key) {
        items.add({
            id: key,
            header: data[key]['titel'],
            path: data[key]['filename'] + '.jpg',
            start: new Date(data[key]['jahr'])
        });
    });
    // Configuration for the Timeline
    var options = {
        start: '1975-01-01',
        end: '1981-01-01',
        template: function (item) {
            var path = "Datensatz Eva Aeppli SIK-ISEA/" + item.path;
            return '<span>' + item.header + '</span><img class="thumbnail" src="' + path + '"></img>';
        },
        maxHeight: 700,
        minHeight: 700,
        zoomable: true,
        zoomMax: 190000000000,
        zoomMin: 190000000000
    };
    // Create a Timeline
    timeline = new vis.Timeline(container, items, options);


    timeline.on('rangechange', function(date){
        console.log(date);
        graph2d.setOptions({
            start: date.start,
            end:date.end
        });
    });
}


function createTimeLine(data) {
    var container = document.getElementById('timeline');

    //console.log(data);

    var dataSet = [];
    var imageItems = [];
    $(data).each(function (key) {
        if (data[key]['jahr'] != "") {
            var index = findKey(dataSet, data[key]['jahr']);
            if (index > -1) {
                dataSet[index]['counter'] = dataSet[index]['counter'] + 1;
            } else {
                dataSet.push(
                    {
                        jahr: data[key]['jahr'],
                        counter: 1
                    });
            }
        }
    });

    $(dataSet).each(function (key) {
        imageItems.push(
            {
                x: dataSet[key]['jahr'] + '-01-01',
                y: dataSet[key]['counter'],
                label:{
                    content:dataSet[key]['counter'].toString(),
                    xOffset:10,
                    yOffset:20
                }
            });
    });

    var dataset = new vis.DataSet(imageItems);

    var options = {
        start: '1975-01-01',
        end: '1981-01-01',
        height: 200,
        zoomMax: 190000000000,
        zoomMin: 190000000000,
        dataAxis:{
            visible:false
        },
        defaultGroup: 'Number of Images',
        legend:true
    };
    graph2d = new vis.Graph2d(container, dataset, options);

    graph2d.on('rangechange', function(date){
        console.log(date);
        timeline.setOptions({
            start: date.start,
            end:date.end
        });
    });

}

function findKey(dataset, year) {
    var index = -1;
    $(dataset).each(function (key, value) {
        if (value['jahr'] === year) {
            index = key;
        }
    });

    return index;
}