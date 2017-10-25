const notify = new Notify({
    title: '新的通知',
    content: 'notify预览版发布'
})

notify.show({
    autoHide: true,
    timeout: 20000 //20秒后默认关闭
})

var btn1 = document.getElementById('close');
var btn2 = document.getElementById('btnout');
btn1.onclick = function() {
    notify.show({
            autoHide: true,
            timeout: 0
        }) //点击叉按钮立即关闭

}
btn2.onclick = function() {
        window.location.href = "http://www.baidu.com"
    } //点击了解跳转到相关页面