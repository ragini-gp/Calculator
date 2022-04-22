let scr = document.getElementById('screen');
let btn = document.querySelectorAll('button');
let m="";
// console.log(btn);
for(a of btn){
    a.addEventListener('click',function c(e){
        let b=e.target.innerText;
        console.log(b);
        if(b=='x')
        m+='*';
        else if(b=='C')
        m="";
        else if(b=='back')
        m=m.substr(0,m.length-1);
        else if(b!='=')
        m+=b;
        scr.value=m;
        if(b=='=')
        scr.value=eval(m);
    })
}