SPA.Widget = (function () {
    var configMap = {
        widgetModel: document.getElementById("widget")
    };

    var init = function () {
        return true;
    };

    var message = function (msg) {
        $("#widget").fadeTo('slow', 1);
        SPA.Widget().resetWidget();
        configMap.widgetModel.classList.add('slide-fade-in');
        configMap.widgetModel.classList.add('text-center');
        configMap.widgetModel.innerHTML += '<i id="icon" class="fas"></i>'
            + '<button class="close" onclick="SPA.Widget().hideWidget();">&times;</button>'
            + '<div id ="message">' + msg + '</div>';
    };

    var showSucces = function (msg) {
        SPA.Widget().message(msg);
        document.getElementById("icon").classList.add('fa-check');
        configMap.widgetModel.classList.add('succes');
        configMap.widgetModel.innerHTML +=
            '<button id="button" class="shake succes" onclick="SPA.Widget().accept();">Akkoord</button>' + '<button id="button" class="fail" onclick="SPA.Widget().deny();">Weigeren</button></div>';
        logMessage(msg);
    };

    var showFail = function (msg) {
        SPA.Widget().message(msg);
        document.getElementById("icon").classList.add('fa-exclamation');
        configMap.widgetModel.classList.add('fail');
        logMessage(msg);
    };

    var logMessage = function (msg) {
        //localStorage.clear();
        if (localStorage.clickcount != null) {
            if (localStorage.clickcount > 9) {
                localStorage.clickcount = 0;
            }
            localStorage.setItem(localStorage.clickcount, msg);
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 0;
            localStorage.setItem(localStorage.clickcount, msg);
        }
        console.log("after logMessage " + localStorage.clickcount);
    };

    var accept = function () {
        alert('Accepted');
        SPA.Widget().hideWidget();
    }

    var deny = function () {
        alert('Denied');
        SPA.Widget().hideWidget();
    }

    var hideWidget = function () {
        configMap.widgetModel.classList.remove('slide-fade-in');
        $("#widget").fadeTo('slow', 0, function () {
            SPA.Widget().resetWidget();
        });
    }

    var resetWidget = function () {
        configMap.widgetModel.classList.remove('slide-fade-in');
        configMap.widgetModel.classList.remove('succes');
        configMap.widgetModel.classList.remove('fail');
        configMap.widgetModel.innerHTML = '';
    }

    return {
        init: init,
        showSucces: showSucces,
        showFail: showFail,
        accept: accept,
        deny: deny,
        hideWidget: hideWidget,
        message: message,
        resetWidget: resetWidget
    };
})