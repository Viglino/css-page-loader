# [page-loader](https://github.com/Viglino/css-page-loader)

Lightweight CSS loading animations to use when page loads. 
See it in action: http://viglino.github.io/css-page-loader/

## 

The aim of this project is to create a set of minimal instruction to display loading spinners automatically on top of the page to hide the loading process.

The project also provide a collection of loading spinners animated with CSS.

## Basic usage

Place loading code on top of the `body` before other js codes.
```html
<link rel="stylesheet" href="pageloader-loading.css" />
<script type="text/javascript" src="pageloader.js"></script>
```
Internationalization: 
Define the text to show as loading as content of the `.page-loader .loader` 
```html
<style>
	.page-loader .loader p:before { content: "loading";	}
</style>
```

## Learn how to create a preloader with CSS.

How TO - CSS Loader on w3schools: http://www.w3schools.com/howto/howto_css_loader.asp


## License

[MIT License](https://github.com/lukehaas/css-loaders/blob/step2/LICENSE)
