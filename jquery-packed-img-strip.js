// https://learn.jquery.com/plugins/basic-plugin-creation/

(function( $ ) {

    //noinspection JSAnnotator
    $.fn.pack = function( options ) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            //color: "#556b2f",
            // backgroundColor: "white"
        }, options );

        //     // this should be a container div with a series of child elements within.
        $(this).children().each( function() {

                  if($(this).is('img')) {
                    var img = this;
                  }
                  else { // <figure>
                    var img = $(this).find('img')[0];
                  }
                  let aspect = img.naturalWidth/img.naturalHeight;
                  $(this).css({flex: aspect + ''});
              });

        return this;
        // });

    };

}( jQuery ));
