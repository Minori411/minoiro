$(function() {
    $('.dropdown-trigger').dropdown({
        constrainWidth:false,
        coverTrigger:false,
        alignment:'left'
    });

    $(document).on('click', function(e) {
        // ２．クリックされた場所の判定
        if(!$(e.target).closest('.dropdown-trigger').length && !$(e.target).closest('#button').length){
            $('.dropdown-content').fadeOut();
        }else if($(e.target).closest('#button').length){
            // ３．ポップアップの表示状態の判定
            if($('.dropdown-content').is(':hidden')){
                $('dropdown-content').fadeIn();
            }else{
                $('.dropdown-content').fadeOut();
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });
