var navBar = document.querySelector('#finan-nav-fix');
var box = document.getElementById('box');

var arr = document.getElementById('arr')

var ul = document.querySelector('#carousel-list');

var screen = document.querySelector('.screen');

var pageList = document.querySelectorAll('ol li');

//给body加滚动事件
document.body.onscroll = function () {

    // //判断body的scrollTop是不是大于或等于顶部图片的高度
    // if(document.body.scrollTop >= topPart.offsetHeight){

    //     navBar.classList.add('fixed');
    // }

    // body
    // console.log(document.body.scrollTop);
    // html
    // console.log(document.documentElement.scrollTop);


    // 如果要获取页面滚出去的距离，就用下面的这套兼容方式就行了
    // 复制粘贴就可以了
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // console.log(scrollTop);
    if (scrollTop >= 108) {

        navBar.classList.add('fixed');
        //设置正文的marginTop，让它在10的基础上多加一个导航条的高度，才能让它位置不变
        // mainPart.style.marginTop = 10 + navBar.offsetHeight + "px";

    } else {
        //没有滚出那么多高度就不要固定定位
        navBar.classList.remove('fixed');
        // mainPart.style.marginTop = 10 + "px";
    }


}


function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

function animate(obj, target) {

    clearInterval(obj.timerID);

    obj.timerID = setInterval(function () {

        //先获得它当前的位置
        var currentLeft = obj.offsetLeft;

        if (Math.abs(target - currentLeft) > 100) {

            //如果目标比当前位置大，就是往右走就给正10
            //否则-10
            var step = target > currentLeft ? 100 : -100;
            //在当前的位置上多加
            currentLeft += step;

            //设置给它的位置
            obj.style.left = currentLeft + "px";
        } else {

            obj.style.left = target + "px";
            clearInterval(obj.timerID);
        }

    }, 10);
}

// var iconfont = document.getElementById('rotate180');




// var a = document.getElementById('finan-nav-left-list')
// var oldColor = null;
// a.onmouseenter = function() {
//     // oldColor = this.style.color;
//     // this.style.color = '#B45F1A';
//     iconfont.style.transform = "rotate(180deg)";
//     iconfont.style.transition = 'all 0.5s';
//     // alert(1)
// }
// a.onmouseout = function() {
//     // this.style.color = oldColor;
//     iconfont.style.transform = "rotate(0deg)";
// }




// 找到最上面的div
// var topPart = document.getElementById('topPart');


// 找到导航条
// 找到正文
// var mainPart = document.getElementById('mainPart');





box.onmouseover = function () {

    clearInterval(timeID);

}
box.onmouseout = function () {

    timeID = setInterval(nextPage, 2500);
}
var index = 0;

document.getElementById('right').onclick = function () {

    nextPage();
}

var timeID = setInterval(nextPage, 2500);


function nextPage() {

    if (index == ul.children.length - 1) {

        index = 0;

        ul.style.left = 0;
    }

    index++;

    animate(ul, -index * screen.offsetWidth);

    for (var i = 0; i < pageList.length; i++) {

        pageList[i].className = "";
    }
    if (index == ul.children.length - 1) {

        pageList[0].className = "current";

    } else {
        pageList[index].className = "current";
    }
}

document.getElementById('left').onclick = function () {

    if (index == 0) {

        index = ul.children.length - 1;

        ul.style.left = -index * screen.offsetWidth + "px";

    }
    index--;

    animate(ul, -index * screen.offsetWidth);

    for (var i = 0; i < pageList.length; i++) {

        pageList[i].className = "";
    }
    pageList[index].className = "current";
}


for (var i = 0; i < pageList.length; i++) {

    pageList[i].setAttribute('index', i);

    pageList[i].onclick = function () {

        index = this.getAttribute('index');

        animate(ul, -index * screen.offsetWidth);

        for (var j = 0; j < pageList.length; j++) {

            pageList[j].className = "";

            this.className = "current";
        }
    }
}