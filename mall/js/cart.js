$(function () {


    //1.全选和取消全选
    $(".checkAll").click(function () {
        if ($(this).attr("checked")){
            //修改为取消选中
            $(this).removeAttr("checked").attr("src","../images/cart/product_normal.png");
            $(".checkItem").removeAttr("checked").attr("src","../images/cart/product_normal.png");
        }else{
            $(this).attr('checked',"true").attr("src",'../images/cart/product_true.png');
            $(".checkItem").attr('checked',"true").attr("src",'../images/cart/product_true.png');
        }

    });
    $(".checkItem").click(function () {
        if($(this).attr("checked")){
            $(this).removeAttr("checked").attr("src","../images/cart/product_normal.png")
        }else{
            $(this).attr("checked","true").attr("src","../images/cart/product_true.png")
        }
    });

    $(".checkItem").click(function () {
        if($(".checkItem[checked]").length == $(".checkItem").length){
            $(".checkAll").attr("checked","true").attr("src","../images/cart/product_true.png");
        }else{
            $(".checkAll").removeAttr("checked").attr("src","../images/cart/product_normal.png");
        };
    });

    $(".add").click(function () {
        var value = $(this).prev().val();
        value ++;
        $(this).prev().val(value);
        countPrice($(this),value);

    });
    $(".minus").click(function () {
        var value = $(this).next().val();
        if (value >1){
            value --;
        };
        $(this).next().val(value);
        countPrice($(this),value);
    });

    function countPrice(that,value) {
        var str = that.parents('.item').find('.gprice p').html();
        var price = str.substring(2);
        var sum = price * value;
        sum = sum.toFixed(2);
        that.parent().next().html('¥'+" "+sum);
    };

    $(".action").click(function () {
        $(this).parents('.item').remove();
    });




});