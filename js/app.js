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
    jq(this).parent('.item').removeClass('item-view');
    $w.removeClass('item-exp-view');
    _expClasses.forEach(function(c){
      $w.removeClass(c.concat('-exp-view'));
    });
  });
});