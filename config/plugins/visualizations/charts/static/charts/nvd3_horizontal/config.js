define(['plugin/charts/nvd3/config'], function(nvd3_config) {

return $.extend(true, {}, nvd3_config, {
    title   : 'Bar diagram (horizontal)',
    settings : {
        x_axis_type : {
            init : 'hide'
        }
    }
});

});