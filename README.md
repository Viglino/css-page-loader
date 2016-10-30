# [page-loader](https://github.com/Viglino/css-page-loader)

Lightweight CSS loading animations to use when page loads. 
See it in action: http://viglino.github.io/css-page-loader/

## 

The aim of this project is to create a set of minimal instruction to display loading spinners automatically on top of the page to hide the loading process.

The project also provide a collection of loading spinners animated with CSS.

## How it runs?

A fixed div is created on top of the page (at a z-index of 10000) to mask the page when loading. Other elements are added to that div. CSS3 animations are used to animate them. 

See in details "How TO - CSS Loader" on w3schools: http://www.w3schools.com/howto/howto_css_loader.asp


## Basic usage

Place loading code on top of the `body` before other js codes.
```html
<link rel="stylesheet" href="pageloader-loading.css" />
<script type="text/javascript" src="pageloader.js"></script>
```

The `pageLoader` object control the loading overlay. 

After the page is loaded and all initialization scripts are run, you can hide the loading overlay:
```javascript
pageLoader.hide();
```

If you need to show it again:
```javascript
pageLoader.show();
```

To display information when loading:
```javascript
pageLoader.information("Hello world!");
```

### Internationalization: 

You can define the text to show when loading in the content of the `.page-loader .loader` 
```html
<style>
	.page-loader .loader p:before { content: "loading";	}
</style>
```

### Customising

Use one of the CSS provided to get another transition or build your own one.


## License

[MIT License](https://github.com/Viglino/css-page-loader/blob/master/LICENSE)
