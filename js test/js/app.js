let hour= new Date().getHours();
if (hour>=0 && hour<=5){
    alert(`Good Night!`)
    document.body.style.backgroundImage="url('https://i.pinimg.com/564x/b7/d2/26/b7d226b487d73d81cebffb738e306642.jpg')"
}
if(hour>=6 && hour<=12){
    alert(`Good Morning!`)
    document.body.style.backgroundImage="url('https://i.pinimg.com/originals/64/53/bd/6453bd8b55f3ccc154acf74e1ec1d112.gif')"
}
if(hour>=13 && hour<=18){
    alert(`Good Afternoon!`)
    document.body.style.backgroundImage="url('https://i.pinimg.com/564x/d6/9e/8d/d69e8df73fbf12c3ab726740bb787f37.jpg')"
}
if(hour>=19 && hour<=23){
    alert('Good Evening!')
    document.body.style.backgroundImage="url('https://i.pinimg.com/564x/61/54/5b/61545ba38aa998e5fa85576370e2fc30.jpg')"
}



var PI=Math.PI;
var r=5;
var Area=PI*Math.pow(r,2);
console.log(Area);


let button=document.getElementById('btn')
function darktheme(){
   if (button.innerHTML=='DARK MODE'){
        document.body.style.backgroundColor='black'
        document.body.style.color='white'
        button.innerHTML='LIGHT MODE'
   }
   else {
      document.body.style.backgroundColor='white'
     document.body.style.color='black'
   } 
}


