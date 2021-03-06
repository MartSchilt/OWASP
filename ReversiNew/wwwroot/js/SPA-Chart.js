SPA.Chart = (function () {
    var configMap;

    var init = function () {
        showChart();
        return true;
    };

    var showChart = new Chart(document.getElementById('chart').getContext('2d'), {
        type: 'pie',
        data: {
            labels: ['Black', 'White'],
            datasets: [{
                label: 'Score',
                data: [0, 0],
                backgroundColor: ["#000", "#ddd"],
            }]
        },
        options: {
            title: {
                display: true,
                text: "Scores: "
            }
        }
    });

    var updateChart = function () {
        showChart.data.datasets[0].data[0] = SPA.Reversi.configMap.blackPieces;
        showChart.data.datasets[0].data[1] = SPA.Reversi.configMap.whitePieces;
        showChart.update();
    };

    return {
        init: init,
        showChart: showChart,
        updateChart: updateChart
    };
})();