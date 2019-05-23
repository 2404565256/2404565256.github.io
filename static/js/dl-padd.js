
window.onload = function () {
    (function (window) {
        // window.localStorage.setItem('res', 'https://www.baidu.com/');
        var sHfdl = window.localStorage.getItem('sHfdl');
        //找到top 上面的登录  如果登录了替换标签
        var login_bar = document.querySelector('.login-bar').children[0];
        console.log(login_bar);
        
        // 缓存里没有 就等于 null    ==  false
        //  console.log(sHfdl);  
        console.log(dl_txSzsjs);
        if (sHfdl) {
            // alert(1);
            //缓存里有 sHfdl  的值 ==  都是登录后设置的 true
            //缓存里有 sHfdl  的值 成功后随机取一张图片
            // console.log(window.location.href == 'https://2404565256.github.io/index.html#');
            if(window.location.href == 'https://2404565256.github.io/index.html#'||window.location.href == 'https://2404565256.github.io/index.html'){
                var dl_txSz = ['static/images/pgLk_toux1.jpg', 'static/images/pgLk_toux2.jpg', 'static/images/pgLk_toux3.jpg'];
            }else{
                var dl_txSz = ['images/pgLk_toux1.jpg', 'images/pgLk_toux2.jpg', 'images/pgLk_toux3.jpg'];
            }
            //随机数 0  -   2
            var dl_txSzsjs = Math.floor(Math.random() * dl_txSz.length);
            login_bar.innerHTML = '<a href ="javascript:;"><img style="width: 32px;     border-radius: 50%;   margin-top: -8px;" src="' + dl_txSz[dl_txSzsjs] + '"/></a>';
            return;
        } else {
            // alert(2)
            var sHfdl_div = document.createElement('div');
            sHfdl_div.id = 'sHfdl_div';
            document.body.appendChild(sHfdl_div);
            sHfdl_div.onclick = function () {
                //获取到当前的地址  
                console.log(window.location.href);
                window.localStorage.setItem('sHfdl_cc', window.location.href);
                window.location.href = 'https://2404565256.github.io/static/dl.html';
            }
        }
    }(window))
}