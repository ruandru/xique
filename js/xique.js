/*
 * @Author: Administrator
 * @Date:   2016-07-21 11:04:11
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-07-22 09:38:55
 */

(function($) {
    $(document).ready(function() {
        /* 喜鹊兑换礼品 start*/
        $('.qixihuodong .duihuanliping .daijinquan .content li').hover(function() {
            $(this).find('.zhezhao').show();

        }, function() {
            $(this).find('.zhezhao').hide();
            $(this).find('.zhezhaoqueren').hide();
            $(this).find('.xiqueshumubuzu').hide();
        })
        $('.qixihuodong .duihuanliping .liping .content li').hover(function() {
                $(this).find('.zhezhao').show();
            }, function() {
                $(this).find('.zhezhao').hide();
                $(this).find('.zhezhaoqueren').hide();
                $(this).find('.xiqueshumubuzu').hide();
            })
            /*未兑换成功*/
        $('.qixihuodong .duihuanliping .daijinquan .content li .zhezhao> a,.qixihuodong .duihuanliping .liping .content li .zhezhao> a').on('click', function() {
            /*当前项目喜鹊数目*/
            var numnow = 0;
            /*库存*/
            var kucun = 0;
            /* 自己喜鹊数目*/
            var num = parseInt($('.qixihuodong .huodongfanshi .xiquenum p span').html());
            /* 项目喜鹊数目*/
            var xiquenum = parseInt($(this).parents('li').find('span:eq(0)').html());
            if (num < xiquenum) {
                $(this).parents('.zhezhao').hide();
                $(this).parents('.zhezhao').siblings('.xiqueshumubuzu').show();

            } else {
                $(this).parents('.zhezhao').hide();
                $(this).parents('.zhezhao').siblings('.zhezhaoqueren').show();
            }
        });
        /*代金券兑换流程  start*/
        $('.qixihuodong .duihuanliping .daijinquan .content li .zhezhaoqueren >a:nth-child(2)').on('click', function() {
            var numnow = parseInt($(this).parents('li').find('span:eq(0)').html()); //获取喜鹊
            var kucun = parseInt($(this).parents('li').find('p:eq(1)>span').html());
            var num = parseInt($('.qixihuodong .huodongfanshi .xiquenum p span').html());
            if (num >= numnow && kucun > 0) {
                num = num - numnow;
                kucun--;
                $('.qixihuodong .huodongfanshi .xiquenum p span').html(num);
                $(this).parents('li').find('p:eq(1)>span').html(kucun + '件');
                $('.mask-success').show();
                $('.mask-success .box').show();

            } else {
                $('.qixihuodong .huodongfanshi .xiquenum p span').html(num);
                $('.qixihuodong .duihuanliping .daijinquan .content li p:eq(2)').html();
                $('.mask-error').show();
                $('.mask-error .box').show();

            }
        });
        /*代金券兑换流程  end*/
        /* 礼品兑换流程 start*/
        $('.qixihuodong .duihuanliping .liping .content li .zhezhaoqueren >a:nth-child(2)').on('click', function() {
            var numnow = parseInt($(this).parents('li').find('span:eq(0)').html()); //获取喜鹊
            var kucun = parseInt($(this).parents('li').find('p:eq(1)>span').html());
            var num = parseInt($('.qixihuodong .huodongfanshi .xiquenum p span').html());
            if (num >= numnow && kucun > 0) {
                num = num - numnow;
                kucun--;
                $('.qixihuodong .huodongfanshi .xiquenum p span').html(num);
                $(this).parents('li').find('p:eq(1)>span').html(kucun + '件');
                $('.mask-success').show();
                $('.mask-success .box').show();

            } else {
                $('.qixihuodong .huodongfanshi .xiquenum p span').html(num);
                $('.qixihuodong .duihuanliping .liping .content li p:eq(2)').html();
                $('.mask-error').show();
                $('.mask-error .box').show();
            }
        });
        /* 礼品兑换流程 end*/
        $('.qixihuodong .duihuanliping .daijinquan .content li .xiqueshumubuzu >a').on('click', function() {
            $(this).parent('.xiqueshumubuzu').hide();
        })
        $('.qixihuodong .duihuanliping .daijinquan .content li .zhezhaoqueren >a:nth-child(3)').on('click', function() {
            $(this).parents('.zhezhaoqueren').hide();
        })
        $('.qixihuodong .duihuanliping .liping .content li .xiqueshumubuzu >a').on('click', function() {
            $(this).parent('.xiqueshumubuzu').hide();
        })
        $('.qixihuodong .duihuanliping .liping .content li .zhezhaoqueren >a:nth-child(3)').on('click', function() {
            $(this).parents('.zhezhaoqueren').hide();
        })

        $('.mask-success .box >span').on('click', function() {
            $('.mask-success').hide();
            $('.mask-success .box').hide();
            $('.mask-error').hide();
        })
        $('.mask-error .box >span').on('click', function() {
                $('.mask-error').hide();
                $('.mask-error .box').hide();
                $('.mask-success').hide();
            })
            /* 喜鹊兑换礼品 end*/
            /* /*  留言板 start*/

        var timer = null;
        var sum = 0;

        $('.qixigaobaiqian .liuyanban .liuyan').clone(true).appendTo('.qixigaobaiqian .liuyanban .liuyanqu .liuyanbox');
        timer = setInterval(autoplay, 20);

        var height = $('.qixigaobaiqian .liuyanban .liuyanqu .liuyanbox').height();
        console.log(height);

        function autoplay() {
            sum--;
            if (sum < Math.ceil(-height / 2)) {
                sum = 0;
            }
            $('.qixigaobaiqian .liuyanban .liuyanqu .liuyanbox').get(0).style.top = sum + 'px';
        }
        $('.qixigaobaiqian .liuyanban .liuyanqu').hover(function() {
            clearInterval(timer);
        }, function() {
            timer = setInterval(autoplay, 20);
        })
        $('.qixigaobaiqian .liuyanban a').on('click', function() {
            $('.liuyan-mianban').show();
            $('.mask').show();
        })
        $('.liuyan-mianban .liuyancircle span').on('click', function() {
            $('.liuyan-mianban').hide();
            $('.mask').hide();
        })
        $('.liuyan-mianban .liuyancircle a').on('click', function() {
                var text = $('.liuyan-mianban .liuyancircle textarea').val();
                if (text == "") {
                    $('.liuyan-mianban .liuyancircle textarea').val() = "输入不能为空哦！";
                    return false;
                } else {
                    $('.liuyan-mianban').hide();
                    $('.mask').hide();
                    $('<p>' + text + '<span>——甄**</span></p>').appendTo('.qixigaobaiqian .liuyanban .liuyan');
                }
            })
            /*  留言板 end*/
    })

})($);
