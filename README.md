## jQuery Socialstats

jQuery Socialstats allows you to easily get plain text comments, likes and tweets number from a given URL.


### Installation

Simple put this code after the jQuery library:

```html
<script src="/path/to/jquery.socialstats.min.js"></script>
```

### Usage

Use data attributes to define which data do you want to get for each element:

```html
<div class="socialstats">
	<span class="fb-likes" data-network="facebook" data-url="http://www.google.com.br"></span>
	<span class="fb-comments" data-network="facebook" data-action="comments" data-url="http://www.google.com.br"></span>
	<span class="tt-tweets" data-network="twitter" data-url="http://www.google.com.br"></span>
</div>
```

And then, initialize the plugin:

```javascript
$(".socialstats").find("span").socialstats();
```

### Author

Hyperbolic - www.hyperbolic.com.br

### Contributors

  - [Raank](http://github.com/raank)

----
## Licence

MIT.