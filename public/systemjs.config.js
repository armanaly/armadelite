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
        '@angular/forms': 'js/vendor/@angular/forms/bundles/forms.umd.js'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'boot.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' }
    };

    // var packageNames = [
    //     '@angular/common',
    //     '@angular/compiler',
    //     '@angular/core',
    //     '@angular/http',
    //     '@angular/forms',
    //     '@angular/platform-browser',
    //     '@angular/platform-browser-dynamic',
    //     '@angular/router',
    //     '@angular/testing',
    //     '@angular/upgrade'
    // ];
    //
    // // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    // packageNames.forEach(function(pkgName) {
    //     packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    // });

    var config = {
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);