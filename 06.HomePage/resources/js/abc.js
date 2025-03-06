$(() => {
    // nav 각각 내려오게 하기
    $('.nav>li').mouseover(function() {
        $(this).children('.submenu').slidDown();
    });
    $('.nav>li').mouseout(function() {
        $(this).children('.submenu').slidUp();
    })
    
    setInterval(slide, 2000);

    // x = [img, img, img]
    let x = $('#imgslide>img')
    let y = 3;
    function slide() {
        y--;
        if(y==0) {
            x.fadeIn();
            y=3;
        } else {
            x.eq(y).fadeOut();
        }
    }
});