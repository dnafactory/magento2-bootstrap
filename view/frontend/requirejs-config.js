var config = {
    map:{
        '*':{
            "popper.js":   "popper",
            "bs.util":     "DNAFactory_Bootstrap/js/bootstrap/util",
            "bs.alert":    "DNAFactory_Bootstrap/js/bootstrap/alert",
            "bs.button":   "DNAFactory_Bootstrap/js/bootstrap/button",
            "bs.carousel": "DNAFactory_Bootstrap/js/bootstrap/carousel",
            "bs.collapse": "DNAFactory_Bootstrap/js/bootstrap/collapse",
            "bs.dropdown": "DNAFactory_Bootstrap/js/bootstrap/dropdown",
            "bs.modal":    "DNAFactory_Bootstrap/js/bootstrap/modal",
            "bs.popover":  "DNAFactory_Bootstrap/js/bootstrap/popover",
            "bs.scrollspy":"DNAFactory_Bootstrap/js/bootstrap/scrollspy",
            "bs.tab":      "DNAFactory_Bootstrap/js/bootstrap/tab",
            "bs.toast":    "DNAFactory_Bootstrap/js/bootstrap/toast",
            "bs.tooltip":  "DNAFactory_Bootstrap/js/bootstrap/tooltip"
        }
    },
    paths:{
        "popper":   "DNAFactory_Bootstrap/js/vendor/popper"
    },
    shim: {
        'popper.js': {
            deps: ['jquery'],
            'exports': 'Popper'
        }
    }
};