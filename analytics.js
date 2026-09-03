(function () {
  function increment(key) {
    try {
      var count = Number(localStorage.getItem(key) || 0) + 1;
      localStorage.setItem(key, count);
      return count;
    } catch (error) {
      return null;
    }
  }

  var pageviews = increment('poornima-portfolio-pageviews');
  var visitors = null;

  try {
    if (!localStorage.getItem('poornima-portfolio-visitors')) {
      localStorage.setItem('poornima-portfolio-visited', 'true');
      visitors = increment('poornima-portfolio-visitors');
    } else {
      visitors = Number(localStorage.getItem('poornima-portfolio-visitors'));
    }
  } catch (error) {
    visitors = null;
  }

  document.querySelector('[data-counter="pageviews"]').textContent = pageviews === null ? '--' : pageviews.toLocaleString();
  document.querySelector('[data-counter="visitors"]').textContent = visitors === null ? '--' : visitors.toLocaleString();
})();