## Thorax

- *Current weight* 36kb gzipped
  - Using Zepto
  - Swapping Handlebars for runtime during build
  - Would CommonJS modules make it smaller?
- Even less boilerplate than Marionette
  - Automatically fetch model/collection on render
- Less primitives than Marionette, but more explicit in decision making around how components should be used
  - Routers are clearly designed to be controllers
  - Still supports collection views and layouts, a serious pain point for standard Backbone.
- `{{#link }}` is super handy, but breaks right/meta clicks.
  - I should fix this, if I have the time
- Loading states and rendering states are handlebars helpers. This makes it easy to manage preloading and other "not ready" states.
- Entire system feels very cohesive and tight. It was very trivial to make the basic blog example, with push state passing between views.
- Documentation clearly spells out API, but usage is pretty blurry. The [yeoman generator](https://github.com/walmartlabs/generator-thorax) helps a lot with this.

### Server Side Generation

Right now I can only really go so far as to scrape DOM hooks generated by `{{#link}}`. There appears to be some work over at Walmart Labs, but nothing has been open sourced.

### Links
- http://thoraxjs.org/
- http://vimeo.com/60230630

### TODO

- Better server-side rendering is probably possible. More time should be spent here.
- Explore client-side storage. The [localforage](https://github.com/mozilla/localForage) driver for Backbone is super cool, but doesn't fallback to standard sync if the data doesn't exist yet. Consider implementing a work around.

---

## React

- I'm hitting a pretty steep curve with this one. There seems to be really good thinking behind this, I'm just not quite there yet.
- Concept seems very promising
- Out of box server-side rendering is exceptionally attractive
- Situations awareness of DOM state on boot seems unique
- JSX could be difficult for some to accept. It feels alien at first and as some syntax requirements.

### Links
- http://facebook.github.io/react/
- http://www.youtube.com/watch?v=x7cQ3mrcKaY#t=1756

---

## Rendr

- This is the future. Painless to set up, familiar API. I am sold.
- All resources have URL persistence. Push state happens for free

### TODO

- How can I use this with superset frameworks, such as marionette?

### Links

- https://github.com/rendrjs/rendr
- https://www.youtube.com/watch?v=9g5Kzj6TpPY
