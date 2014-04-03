jQuery(document).ready(function(){
  var jq = jQuery;
  var _expClasses = ['i-1','i-2','i-3','i-4'];
  jq('.item-title').click(function(){
    var $e = jq(this);
    var $w = jq('.wrap');
    if($e.data('item')){
      $w.addClass($e.data('item').concat('-exp-view'));
      _expClasses.forEach(function(c){
        if(c !== $e.data('item')){
          $w.removeClass(c.concat('-exp-view'));
          jq('.item').removeClass('item-view');
        }
      });
      $e.parent('.item').addClass('item-view');
      $w.addClass('item-exp-view');
    }
  });
  jq('.close-item-view').click(function(){
    var $w = jq('.wrap');
    jq(this).parents('.item').removeClass('item-view');
    $w.removeClass('item-exp-view');
    _expClasses.forEach(function(c){
      $w.removeClass(c.concat('-exp-view'));
    });
  });
  jq('.expand-item-view').click(function(){
    var $w = jq('.wrap');
    var $e = jq(this);
    var item = $e.data('item');
    if(item){
      $w.removeClass([item.concat('-exp-view'),'item-exp-view'].join(' '))
        .addClass([item.concat('-page-view'),'item-page-view'].join(' '));
      $e.parents('.item').removeClass('item-view');
    }
    jq('.item').addClass('page-view-icon');
  });
  jq('.item').click(function(){
    var $e = jq(this);
    var $w = jq('.wrap');
    var item = $e.data('item');
    if($e.hasClass('page-view-icon')){ // on page view
      _expClasses.forEach(function(c){
        if(c !== item){
          $w.removeClass(c.concat('-page-view'));
//          jq('.item').removeClass('item-view');
        }
      });
      $w.addClass(item.concat('-page-view'));
    }
  });
});