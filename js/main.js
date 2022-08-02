let btn = document.getElementsByClassName('accordion');

for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener('click', function(){
    btn[i].classList.toggle('active')
    let desc = this.nextElementSibling;
    if(desc.style.maxHeight){
      desc.style.maxHeight = null;
    } else {
      desc.style.maxHeight = desc.scrollHeight + "px";
    }
  })

}