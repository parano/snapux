// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
  controls: false,
  keyboard: true,
  transition: 'slide',
  viewDistance: 100,

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

$('textarea').focus(function() {
  $(this).css({
    "background-color": "rgb(206, 206, 206)",
    "color": "#616161"
  });
});
