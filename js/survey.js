// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
  controls: false,
  keyboard: true,
  transition: 'slide', // none/fade/slide/convex/concave/zoom

  dependencies: [
    { src: 'plugin/markdown/marked.js' },
    { src: 'plugin/markdown/markdown.js' },
    { src: 'plugin/notes/notes.js', async: true },
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ]
});

$('.next').click(function() {
  Reveal.next();
});

$('.prev').click(function() {
  Reveal.prev();
});
