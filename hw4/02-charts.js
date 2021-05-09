let backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
];

let borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
];

// URL to Game of Thrones API to fetch all characters
let url = 'https://thronesapi.com/api/v2/Characters';
async function displayHouses(url) {
  try {
    let response = await fetch(url);
    let characters = await response.json();
    console.log(characters)
    var countHouses = {}
    characters.forEach(elem => {
      var str = String(elem.family);
      if(str == '') {
        str = 'None'
      } else if(str == 'Unknown' || str == 'Unkown') {
        str = 'None'
      } else if(str.includes('House')) {

      } else {
        str = 'House '+str;
      }
      if(countHouses[str]) {
        countHouses[str]++;
      } else {
        countHouses[str] = 1;
      }
    });
    var housename = [], housecount = [];
    for(const [key, value] of Object.entries(countHouses)) {
      if(value > 1) {
        housename.push(key);
        housecount.push(value);
      }
    }
    const data = {
      labels: housename,
      datasets: [{
        label: 'My First Dataset',
        data: housecount,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        hoverOffset: 4,
      }]
    };
    const config = {
      type: 'doughnut',
      data: data,
      options: {
        legend : {
          position: 'bottom'
        }
      }
    };
    var ctx = document.getElementById('myChart')
    var mychart = new Chart(ctx,config)
  } catch(error) {
      console.log(error);
  }
}

displayHouses(url)
