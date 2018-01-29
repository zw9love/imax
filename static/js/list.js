$(".main_more").hover(function () {
    $(this).find(".main_more_hide").stop().animate({top: "0%"}, "fast")
}, function () {
    $(this).find(".main_more_hide").stop().animate({top: "100%"}, "fast")
});
var row, list = [{id: 1, src: "img/more1.jpg", info: "但丁密码"}, {id: 2, src: "img/more2.jpg", info: "奇异博士"}, {
    id: 3,
    src: "img/more3.jpg",
    info: "神奇动物在哪里"
}, {id: 4, src: "img/more4.jpg", info: "侠盗一号：星球大战外传"}, {id: 5, src: "img/more5.jpg", info: "长城"}, {
    id: 6,
    src: "img/more6.jpg",
    info: "美女与野兽"
}, {id: 7, src: "img/more7.jpg", info: "逗鸟外传：萌宝满天飞"}, {id: 8, src: "img/more8.jpg", info: "我的战争"}, {
    id: 9,
    src: "img/more9.jpg",
    info: "冰川时代5：星际碰撞"
}, {id: 10, src: "img/more10.jpg", info: "谍影重重5"}, {id: 11, src: "img/more11.jpg", info: "火海凌云"}, {
    id: 12,
    src: "img/more12.jpg",
    info: "盗墓笔记"
}], arr = [];

function getRand(i, r) {
    for (var n = Math.ceil(1e5 * Math.random()) % (r - i + 1) + i, o = 0; o < arr.length; o++) if (n == arr[o]) return void getRand(i, r);
    arr.push(n)
}

function deffRandArray(i) {
    for (var r = 0; r < i; r++) getRand(0, list.length - 1)
}

function screenCheck() {
    var i = $(window).width();
    row = i <= 1366 && i > 768 ? 6 : i <= 768 && i > 540 ? 4 : i <= 540 ? 2 : 8
}

screenCheck(), $(window).resize(screenCheck), $(".main_bottom button").on("click", function () {
    arr = [], deffRandArray(row);
    for (var i = 0; i < arr.length; i++) $('<li><img src="' + list[arr[i]].src + '" alt=""><div><h3>即将上映</h3><h1><a href="javascript:;">' + list[arr[i]].info + '</a></h1><a href="javascript:;" class="main_more">更多详情<span class="main_more_hide"></span></a></div></li>').appendTo($(".main ul"))
});