jQuery.fn.stickyFooter = function() {
    var o = $(this[0])
    o.find("a").click(function(e) {
            e.preventDefault()
            var box_act = o.parent().find('div.active'); // active element
            var a_obj = $(this);
            if (box_act.length != 0) {
                var box = $(this).attr("href"); // element to show
                var box_act_id = box_act.attr("id");
                
                if('#'+box_act_id != box){
                    o.find('a').removeClass('active_tab');
                            a_obj.addClass('active_tab');
                    o.parent().find('div.active').fadeOut('fast', function() {
                            box_act.removeClass('active');
                            o.parent().find(box).addClass('active');
                            $(box).fadeIn();
                        });
                
                }else{
                    $('#sticky-footer').animate({
                        height: "19px"
                    }, 500 , function() {
                        box_act.removeClass('active');
                        a_obj.removeClass('active_tab');
                        box_act.css('display', 'none');
                    });
                        
                }
            }else{
                var box = $(this).attr("href"); // element to show
                a_obj.addClass('active_tab');
                $(box).slideDown( 'fast', function() {
                    
                $('#sticky-footer').animate({
                    height: "260px"
                }, 500 );
                    
                });
                o.parent().find(box).addClass('active');
                
            }
        
        return false;
    });
    positionFooter();
};


$(window).scroll(positionFooter); 
$(window).resize(positionFooter); 
$(window).load(positionFooter);

function positionFooter() { 
     var mFoo = $("#sticky-footer");
     if ((($(document.body).height() + mFoo.height()) < $(window).height() && mFoo.css("position") == "fixed") || ($(document.body).height() < $(window).height() && mFoo.css("position") != "fixed")) { mFoo.css({ position: "fixed", bottom: "0px" }); 
     } else {
         mFoo.css({ position: "static" }); }
 } 