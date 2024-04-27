# Notes
## HTML basics
- opening tag, closing tag, content = element
<p>hello</p>

- elements can have attributes(attribute name, attribute value)
<p class="editor-note">hello</p>

- Nesting elements
<p>My cat is <strong>very</strong> grumpy.</p>

- void elements: no content
<img src="images/firefox-icon.png" alt="My test image" />

- Anatomy of an HTML document
- <!DOCTYPE html>: preamble
- <html></html>: root element; wrap entire page; include **lang** attribute
- <head></head>: hidden from viewers. 
- <meta charset="utf-8"> language support
- <meta name="viewport" content="width=device-width"> — This viewport element ensures the page renders at the width of viewport, preventing mobile browsers from rendering pages wider than the viewport and then shrinking them down.
- <title></title>: title on browser tab / bookmark
- <body></body>: all the content that you want to show to web users when they visit your page. texts, images, vids, games, audio, etc
- <img src="images/firefox-icon.png" alt="My test image" />
    - alt: descriptive text
    - src: file path

- headings: <h1></h1> .... <h6></h6>
- paragraph: <p></p>
- lists: ordered, unordered <ul> <ol>
    - items in <ul></ul> or <ol></ol> are wrapped in <li></li>
    - <ul></ul>: bullet points
    - <ol></ol>: 1, 2, 3
- links: anchor. <a></a>
    - href attribute. 
    <a href="https://www.mozilla.org/en-US/about/manifesto/">
        Mozilla Manifesto
    </a>
