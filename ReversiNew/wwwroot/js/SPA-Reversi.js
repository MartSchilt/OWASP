SPA.Reversi = (function () {
    var configMap = {
        player: "white",
        blackPieces: 0,
        whitePieces: 0
    };

    var init = function () {
        return true;
    };

    var setDataClick = function () {
        var table = document.getElementById('reversiBoard');
        configMap.blackPieces = 0;
        configMap.whitePieces = 0;

        // init externals
        SPA.Data.numbersApi();
        handlebarsUpdate();

        // init table
        if (table != null) {
            for (var i = 0; i < table.rows.length; i++) {
                for (var j = 0; j < table.rows[i].cells.length; j++) {
                    table.rows[i].cells[j].onclick = function () {
                        placePiece(this.id);
                    }
                }
            }
        }
    };

    var placePiece = function (cellId) {
        var cell = document.getElementById(cellId).querySelector('.fa');

        SPA.Data.numbersApi();

        if (validateLocation(cell) == true) {
            cell.classList.add('fa-circle');
            cell.classList.add(configMap.player);

            if (configMap.player == "black") {
                configMap.blackPieces += 1;
                console.log("Black: " + configMap.whitePieces);
                configMap.player = "white";
                handlebarsUpdate();
            } else {
                configMap.whitePieces += 1;
                console.log("White: " + configMap.whitePieces);
                configMap.player = "black";
                handlebarsUpdate();
            }

            SPA.Chart.updateChart();
        } else {
            SPA.Widget().showFail('Al bezet');
        }
    };

    var validateLocation = function (cell) {
        if (cell.classList.contains("black") || cell.classList.contains("white")) {
            return false
        } else {
            return true;
        }
    }
    
    var handlebarsUpdate = function () {
        var playerData = configMap.player; 
        var playerName;
        var template = Handlebars.getTemplate('gameplay.hbs');

        if (playerData == "black") {
            playerName = "zwarte";
        }
        else {
            playerName = "witte";
        }

        var data = template({ player: playerName });

        document.getElementById('currentPlayer').innerHTML = data;
    }

    return {
        init: init,
        configMap: configMap,
        setDataClick: setDataClick
    };
})();