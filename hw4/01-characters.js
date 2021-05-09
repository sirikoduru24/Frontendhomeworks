let url = 'https://thronesapi.com/api/v2/Characters';

let addItems = (elem) => {
  let sec = document.getElementById('results');
  sec.style.padding = '5px 5px 5px 5px'
  sec.style.margin = '5px 5px 5px 5px'
  let maindiv = document.createElement('div');
  maindiv.style.width = '250px'
  maindiv.style.padding = '5px 5px 5px 5px'
  sec.append(maindiv)
  let imgdiv = document.createElement('div')
  imgdiv.id = 'imgdiv';
  imgdiv.padding = '5px 5px 5px 5px'
  imgdiv.innerHTML = '<img src ='+ elem.imageUrl + ' height = 225px width = 225px alt = ' + elem.id + '> </img>'
  maindiv.append(imgdiv)
  let namediv = document.createElement('div');
  namediv.innerHTML = elem.fullName
  namediv.style.textAlign = 'center'
  namediv.style.fontSize = '1.25em'
  namediv.style.color = 'black'
  maindiv.append(namediv)
  let title = document.createElement('div');
  title.innerHTML = elem.title
  title.style.textAlign = 'center'
  title.style.fontSize = '1.25em'
  title.style.color = 'black'
  maindiv.append(title)
  maindiv.addEventListener("mouseover", function(event) {
    maindiv.style.backgroundColor = "black";
    title.style.color = 'white';
    namediv.style.color = 'white'
  })
  maindiv.addEventListener("mouseout", function(event) {
    maindiv.style.backgroundColor = "transparent";
    title.style.color = 'black';
    namediv.style.color = 'black';
  })
  sec.style.display = 'flex';
  sec.style.flexDirection = 'row'
  sec.style.flexWrap = 'wrap'
  //sec.style.flexFlow = 'column-wrap';
  sec.style.justifyContent = 'center';
  maindiv.style.height = '100%'
  maindiv.style.display = 'flex';
  maindiv.style.flexDirection = 'column'
  maindiv.style.flexWrap = 'wrap'
  maindiv.style.textAlign = 'center'
}        
let fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
            data.forEach(elem => {
            addItems(elem);
            });
      })
      .catch((error) => console.log(error));
  };
fetchCharacters(url)
