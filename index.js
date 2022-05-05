var ul=document.querySelector('.wrap ul');

setTimeout(function(){
    ul.className='';
},200)
// class的显示和影藏
var lis=document.querySelectorAll('.wrap ul li')
var last=null;
var closeBtns=document.querySelectorAll('.wrap .close');
lis.forEach(function(li,index){
    li.onclick=function(){
        ul.setAttribute('id','activeWrap')//添加id
        this.className='active';//添加class
       last&&(last.className="");//清空
        last=this;
        
    }
    //删除
    closeBtns[index].onclick=function(ev){
        lis[index].className="";
        ul.removeAttribute("id");
        last=null;

        ev.stopPropagation();
    }
})