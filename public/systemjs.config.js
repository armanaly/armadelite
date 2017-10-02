(function(global) {

    // map tells the System loader where to look for things
    var map = {
        'app':                        'js/app', // 'dist',
        'rxjs':                       'js/vendor/rxjs',
        '@angular':                   'js/vendor/@angular',
        // angular bundles
        '@angular/core': 'js/vendor/@angular/core/bundles/core.umd.js',
        '@angular/common': 'js/vendor/@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'js/vendor/@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'js/vendor/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'js/vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'js/vendor/@angular/http/bundles/http.umd.js',
        '@angular/router': 'js/vendor/@angular/router/bundles/router.umd.js',
        '@angular/forms': 'js/vendor/@angular/forms/bundles/forms.umd.js',
        '@angular/material': 'js/vendor/@angular/material/bundles/material.umd.js',
        // CDK individual packages
        '@angular/cdk/platform': 'js/vendor/@angular/cdk/bundles/cdk-platform.umd.js',
        '@angular/cdk/a11y': 'js/vendor/@angular/cdk/bundles/cdk-a11y.umd.js',
        '@angular/cdk/rxjs': 'js/vendor/@angular/cdk/bundles/cdk-rxjs.umd.js',
        '@angular/cdk/coercion': 'js/vendor/@angular/cdk/bundles/cdk-coercion.umd.js'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'boot.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' }
    };

    var config = {
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);