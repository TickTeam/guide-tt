require(["gitbook", "jQuery"], function(gitbook, $) {

  // 子目录收缩
  function expand(chapter) {
    chapter.show();

    if (chapter.parent().attr('class') != 'summary' &&
      chapter.parent().attr('class') != 'book-summary' &&
      chapter.length != 0
    ) {
      expand(chapter.parent());
    }
  }

  // 用户统计
  function analy () {
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36126366-1']);
    _gaq.push(['_setDomainName', 'ticktick.com']);
    _gaq.push(['_setAllowLinker', true]);
    _gaq.push(['_trackPageview']);
    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  }

  function toggle () {
    var isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
    if(!isMobile || !$('.with-summary').length) return;
    $('.toggle-summary').click()
    $('.book-body').scrollTop(0)
  }

  gitbook.events.bind("page.change", function() {
    // 
    analy()

    // 
    toggle()
  });

});