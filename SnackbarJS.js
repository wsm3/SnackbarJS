(function ($) {

    var SnackbarJS = {

        "addToBody": function () {
            $("body").append('<div id="snackbar"></div>')
        },

        "getSnackbar": function () {
            return $("div#snackbar");
        },

        "setStyle": function () {
            this.getSnackbar().css(
                {
                    "display": "none",
                    "width": "100%",
                    "background-color": "#333",
                    "color": "#fff",
                    "text-align": "center",
                    "border-radius": "2px",
                    "padding": "5px",
                    "position": "absolute",
                    "top": "0px",
                    "left": "0px",
                    "z-index": "9999"
                }
            )
        },

        "show": function () {
            this.getSnackbar().slideDown("slow");
        },

        "destroy": function () {
            this.getSnackbar().slideUp();
            var _this = this;
            setTimeout(function () {
                _this.getSnackbar().remove()
            }, 1000)
        },

        "deInit": function () {
            var _this = this;
            setTimeout(function () {
                _this.destroy()
            }, 3000)
        },

        "setText": function (text) {
            this.getSnackbar().html(text);
        },

        "SnackBar": function (text) {
            this.addToBody();
            this.setStyle();
            this.setText(text)
            this.show();
            this.deInit()
        }
    }


    $.SnackBar = function (text) {
        SnackbarJS.SnackBar(text);
    };


})(jQuery);