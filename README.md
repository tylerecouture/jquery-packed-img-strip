# packed-responsive-strip
A jquery plugin to pack various height elements, currently supports images or figures, into a single, equal height strip.

### Use:
Include the js file

Wrap your images or figures in a div with the class "pack":
````
<div class='pack'>
  <img src="http://via.placeholder.com/600x150"/>
  <img src="http://via.placeholder.com/150x500"/>
  <img src="http://via.placeholder.com/300x300"/>
</div>
````

Incluce jquery and the js file, then call the plugin on your "pack" div after images have loaded:
````
<script src="https://code.jquery.com/jquery-3.2.1.min.js"</script>
<script src="jquery-packed-img-strip.js"></script>
<script>
$(window).on('load', function() {
      $("div.pack").pack();
});
</script>
````

# Working Example:

https://rawgit.com/tylerecouture/packed-responsive-strip/master/test.html
