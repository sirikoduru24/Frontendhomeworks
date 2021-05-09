//Search based on first name, here in data empty name has a value so didnot put a value for it.
import {useState} from "react";

export default function Search() {
  const [character, setCharacter] = useState(null);
  
  async function getCharacter(search) {
    try {
      let response = await fetch(`https://thronesapi.com/api/v2/Characters`);
      let data = await response.json();
      console.log('Search:',`${search}`)
      var id;
      data.forEach(elem => {
          let charName = String(`${search}`)
          let character = String(elem.firstName)
          if (character.toLowerCase() === charName.toLowerCase()) {
             id = elem.id;
             console.log('id',id) 
          } 
      });
      let result = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
      let res = await result.json();
      //console.log('result',res)
      //setCharacter(res)
      if (res.status === 200 || res.status === 400) {
        setCharacter(null)
      } else {
      setCharacter(res);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event) {
    let id = document.getElementById('item');
    getCharacter(id.value);
    event.preventDefault();
  }

  return (
    <div className ="m-4">
      <h1 class="text-success"> Search </h1>
      <form class = "row g-3">
        <div class = "col-sm-3">
          <label className = "form-label" htmlFor="item">
            Search for your favourite Game Of Thrones Character
          </label>
        </div>
        <div class = "col-sm-3">
          <input type ="text" id = "item" class = "form-control input-sm"></input>
        </div>
        <div class = "col-sm-2">
          <button className ="btn btn-primary btn-block" value = "search" id = "search" onClick = {handleChange} >Search</button>
        </div>
      </form>
      <br></br>
      {!character && (
          <div class="text-danger">Please enter a valid character name as an input</div>
        )
      }
      {character && (
        <div>
        <h1> Search Results</h1>
        <div class = 'd-flex flex-column'>
          <div>
          <img src = {character.imageUrl} alt = {character.id} height = "250px" width = "250"></img>
          </div>
          <div>
          Full Name: {character.fullName}
          </div>
        </div>
        </div>
      )}
    </div>
    
     );
}
