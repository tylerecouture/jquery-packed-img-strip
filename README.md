# packed-responsive-strip
A jquery plugin to pack various height elements, currently supports images or figures, into a single, equal height strip.

### Use:
Include the js file

Wrap your images or figures in a div:
````
<div class='pack'>
  <img src="http://via.placeholder.com/600x150"/>
  <img src="http://via.placeholder.com/150x500"/>
  <img src="http://via.placeholder.com/300x300"/>
</div>
````

Indluce the js file and call the plugin on your wrapper div:
````
<script src="packed-responsive-strip.js"></script>
<script>
    $("div.pack").pack();
</script>
````
