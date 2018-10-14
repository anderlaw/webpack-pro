
function ajax(url,callback){
    let requestUrl =  'https://www.easy-mock.com/mock/5b80c83a8542656c88974c91/api'+url;
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        callback(this.responseText)
    }
    xhr.open('get',requestUrl)
    xhr.send();
}
function insertTimer(selector){
    let ele = document.querySelector(selector);
    ele.innerHTML = "现在时刻："+ new Date().toLocaleString();
    setInterval(function(){
        ele.innerHTML = "现在时刻："+ new Date().toLocaleString();
    },1000)
}
function insertImg(imgSelctor,src){
    let ele = document.querySelector(imgSelctor);
    ele.src = src;
}
export default {
    ajax,
    insertTimer,
    insertImg
}