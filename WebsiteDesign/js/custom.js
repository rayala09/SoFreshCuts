$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'tagged',
        // userId: '972208343',
        tagName: 'moyo',
        limit: 12,
        resolution: 'standard_resolution',
        // accessToken: '559504279.1677ed0.a61830f3ab43431f9bd396b920b2ab0b',
        clientId: '5926b80e2cde412182f26eef33d35a01',
        sortBy: 'most-recent',
        template: '<div class="instafeed"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // // This will create a single gallery from all elements that have class "gallery-item"
    // $('.gallery').magnificPopup({
    //     type: 'image',
    //     delegate: 'a',
    //     gallery: {
    //         enabled: true
    //     }
    // });


});