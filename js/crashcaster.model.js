crashcaster.model = (function () {

    var plugin_name = "crashcaster.model";
    var plugin_version = "0.0.1";
    var READY_STATE = { _current: -1, NOT_STARTED: 0, LOADING: 1, LOADED: 2 };



    function init() {
        echo("initialize crashcaster.model");

        // Nothing to wait for set the READY_STATE
        READY_STATE._current = READY_STATE.LOADED;
    };

    // Public method: A simple example function, exposed as a public method
    function echo(v) {
        console.log(v);
    };


    function color(opacity) {
        var opacity = (opacity == undefined) ? 1.0 : parseFloat(opacity);
        return {
            'LIGHT_AQUA': 'rgba(204, 255, 221, ' + opacity + ')',
            'AQUA': 'rgba(48, 145, 112, ' + opacity + ')',
            'BLACK': 'rgba(0, 0, 0, ' + opacity + ')',
            'WHITE': 'rgba(255, 255, 255, ' + opacity + ')',
            'GRAY': 'rgba(128, 128, 128, ' + opacity + ')',
            'RED': 'rgba(255, 0, 0, ' + opacity + ')',
            'CYAN': 'rgba(0, 255, 255, ' + opacity + ')',
            'YELLOW': 'rgba(255, 255, 0, ' + opacity + ')',
            'ORANGE': 'rgba(255, 128, 0, ' + opacity + ')',
            'BLUE': 'rgba(0, 0, 255, ' + opacity + ')',
            'PURPLE': 'rgba(128, 0, 128, ' + opacity + ')',
            'GREEN': 'rgba(0, 255, 0, ' + opacity + ')',
            'LIGHT_GREEN': 'rgba(168, 210, 0, ' + opacity + ')',
            'BABY_BLUE': 'rgba(59, 194, 234, ' + opacity + ')',
            'REDDISH': 'rgba(255, 93, 85, ' + opacity + ')',
            'MUSTARD': 'rgba(255, 198, 65, ' + opacity + ')',
            'GRAPE': 'rgba(186, 127, 214, ' + opacity + ')'
        };
    }

    // Call the initialization function by default
    init();

    var my = {
        plugin_name: plugin_name,
        plugin_version: plugin_version,
        //READY_STATE: READY_STATE,
        init: init,
        echo: echo,
        color: color
    };

    return my;
}());