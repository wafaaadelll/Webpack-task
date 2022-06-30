import "./style.css";

///////////////////////////////////////////////////////
const sec = document.createElement("section")
document.body.appendChild(sec)
const element = document.createElement("main");
const p = document.createElement('p')
p.innerHTML = 'cards name'
sec.classList.add('sec')
element.classList.add('card')
p.classList.add('p')
sec.appendChild(element);
import photo from '../../assets/city.png'
const img = document.createElement("img");
img.src = photo;
img.style.width = "300px"
img.style.height = "300px"
element.appendChild(img);
element.appendChild(p)
///////////////////////////////////
const element1 = document.createElement("main");
const p1 = document.createElement('p')
p1.innerHTML = 'cards name'
element1.classList.add('card')
p1.classList.add('p')
sec.appendChild(element1);
import photo1 from '../../assets/image.png'
const img1 = document.createElement("img");
img1.src = photo1;
img1.style.width = "300px"
img1.style.height = "300px"
element1.appendChild(img1);
element1.appendChild(p1)
sec.appendChild(element1);

////////////////////////////////////////////////
const element2 = document.createElement("main");
const p2 = document.createElement('p')
p2.innerHTML = 'cards name'
element2.classList.add('card')
p1.classList.add('p')
sec.appendChild(element2);
import photo2 from '../../assets/city.png'
const img2 = document.createElement("img");
img2.src = photo2;
img2.style.width = "300px"
img2.style.height = "300px"
element2.appendChild(img2);
element2.appendChild(p2)
sec.appendChild(element2);

///////////////////////////////////////////////////


const sec1 = document.createElement("section")
document.body.appendChild(sec1)
sec1.classList.add('bgimg')
const divs2 = document.createElement("div")
sec1.appendChild(divs2);
divs2.classList.add('middle')
const ps2 = document.createElement("p")
const ps3 = document.createElement("p")
divs2.appendChild(ps2);
divs2.appendChild(ps3);
ps2.innerHTML = 'COMING SOON'
ps2.innerHTML = '35 days left'
const divs3 = document.createElement("div")
sec1.appendChild(divs3);
div3.classList.add('bottomleft')
const ps4 = document.createElement("p")
divs3.appendChild(ps4);
ps4.innerHTML = 'Some text'
