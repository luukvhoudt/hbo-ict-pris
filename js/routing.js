window.addEventListener('WebComponentsReady', function() {

    // We use Page.js for routing. This is a Micro
    // client-side router inspired by the Express router
    // More info: https://visionmedia.github.io/page.js/

    // Removes end / from app.baseUrl which page.base requires for production
    if (window.location.port === '') {  // if production
        page.base(app.baseUrl.replace(/\/$/, ''));
    }

    // Routes

    page(app.baseUrl, function() {
        app.route = 'home';
    });

    page('/', function() {
        app.route = 'home';
    });

    page('/agenda', function(data) {
        app.route = 'agenda';
    });

    page('/report', function() {
        app.route = 'report';
    });

    page('/logout', function() {
        app.route = 'logout';
    });

    // 404
    page('*', function() {
        app.$.toast.text = 'Can\'t find: ' + window.location.href  + '. Redirected you to Home Page';
        app.$.toast.show();
        page.redirect(app.baseUrl);
    });

    // add #! before urls
    page({
        hashbang: true
    });

});