
function chartInit(){
    var chart = bb.generate({
        data: {
            columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 130, 100, 140, 200, 150, 50]
            ],
            type: "bar"
        },
        bar: {
            width: {
                ratio: 0.5
            }
        },
        bindto: "#barChart"
    });
    setTimeout(function() {
        chart.load({
            columns: [
                ["data3", 130, -150, 200, 300, -200, 100]
            ]
        });
    }, 1000);

    var chart = bb.generate({
        data: {
            columns: [
                ["data1", 30],
                ["data2", 120]
            ],
            type: "donut", // for ESM specify as: donut()
            onclick: function(d, i) {
                console.log("onclick", d, i);
            },
            onover: function(d, i) {
                console.log("onover", d, i);
            },
            onout: function(d, i) {
                console.log("onout", d, i);
            }
        },
        donut: {
            title: "Iris Petal Width"
        },
        bindto: "#donutChart"
    });

    setTimeout(function() {
        chart.load({
            columns: [
                ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
            ]
        });
    }, 1500);

    setTimeout(function() {
        chart.unload({
            ids: "data1"
        });
        chart.unload({
            ids: "data2"
        });
    }, 2500);

    var chart = bb.generate({
        data: {
            x: "x",
            columns: [
                ["x", 30, 50, 100, 230, 300, 310],
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 130, 300, 200, 300, 250, 450]
            ],
            type: "line", // for ESM specify as: line()
        },
        bindto: "#simpleXYLineChart"
    });

    setTimeout(function() {
        chart.load({
            columns: [
                ["data1", 100, 250, 150, 200, 100, 350]
            ]
        });
    }, 1000);

    setTimeout(function() {
        chart.load({
            columns: [
                ["data3", 80, 150, 100, 180, 80, 150]
            ]
        });
    }, 1500);

    setTimeout(function() {
        chart.unload({
            ids: "data2"
        });
    }, 2000);
}