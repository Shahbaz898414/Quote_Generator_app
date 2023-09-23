const change=document.querySelector('.change')
const name=document.querySelector('.name')
const add=document.querySelector('.add')


change.addEventListener('click', generate)


async function generate() {
  let  res= await fetch('https://api.quotable.io/random');

  let data= await res.json();
  add.innerHTML= '"' +data['content'] + '"';
  name.innerHTML=data['author'];;

}

generate();