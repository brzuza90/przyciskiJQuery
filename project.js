$('.interface').on('click', function () {
    // console.log("działa")
    // console.log(this);
    // console.log($(this));
    // console.log($(this).attr("class"));
    // console.log(this.className);
    if ($(this).hasClass("orange")) {
        console.log("tak w pomarańczowy");
        // $('body').toggleClass('orange')
        // $('body').css('background-color', 'orangered');
        // $('body').css({
        //     'background-color': 'orangered',
        //     'font-size': '30px'
        // });
        $('body').attr('class', 'orange');
        // document.body.style.backgroundColor = "orangered";
    };
    // if (this.classList.contains("green")) {
    //     console.log("tak w zielony");
    //     // document.body.style.backgroundColor = "yellowgreen";
    // }
    if ($(this).hasClass("green")) {
        console.log("tak w zielony");
        // $('body').css({
        //     'background-color': 'yellowgreen'
        // });
        $('body').attr('class', 'green');
    };
    if ($(this).hasClass("increase")) {
        console.log("tak w plus");
        $('.text').animate({
            'font-size': '+=2px'
        }, 200)
    };
    if ($(this).hasClass("move")) {
        console.log("tak w strzałka");
        $('.text').animate({
            'left': '+=10px',
            'letter-spacing': '+=2px'
        })
    };
})