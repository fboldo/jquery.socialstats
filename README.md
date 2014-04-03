## jQuery Socialstats

jQuery Socialstats allows you to easily get plain text comments, likes and tweets number from a given URL.


## Installation

Simple put this code after the jQuery library:

```html
<script src="/path/to/jquery.socialstats.js"></script>
```

## Usage

Use data attributes to define which data do you want to get for each element:

```html
<span class="socialstats" data-network="facebook"></span> <span class="socialstats" data-network="facebook" data-action="comments"></span> <span class="socialstats" data-network="twitter"></span>
```

And then, initialize the plugin:

```javascript
$(".socialstats").socialstats();
```

