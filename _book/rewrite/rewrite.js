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
  function cnzz () {
    var $cn = $('<div id="cnzz" style="display: none"></div>')
    $cn.appendTo($('body'));

    var _czc = _czc || [];
    (function (d) {
      var z=d.createElement("script");z.type="text/javascript";z.async=true;
      z.src=("https:"==d.location.protocol?"https://":"http://")+"s11.cnzz.com/stat.php?id=1255624904&web_id=1255624904";
      d.getElementById("cnzz").appendChild(z);
    })(document);

  }

  function toggle () {
    var isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
    if(!isMobile || !$('.with-summary').length){
      return;
    }else{
      $('.book-summary').hide();
      $('.toggle-summary').click();
      $('.book-body').scrollTop(0);
    }
  }

  gitbook.events.bind("page.change", function() {
    $('li.chapter').children('ul.articles').hide();
    $chapter = $('li.chapter.active');
    $children = $chapter.children('ul.articles');
    $parent = $chapter.parent();
    $siblings = $chapter.siblings().children('ul.articles');

    expand($chapter);

    if ($children.length > 0) {
      $children.show();
    }

    // 
    cnzz()

    // 
    toggle()
  });

});