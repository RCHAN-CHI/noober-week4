async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
  function renderNoober(ride) {
    let outputElement = document.querySelector('.rides')

  }

  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }

  let rides = response.json
for (let i= 0; i< json.length; i++) {
  ride = json[i]
}


}

window.addEventListener('DOMContentLoaded', pageLoaded)
 let outputElement = document.querySelector('.rides')
  outputElement.insertAdjacentHTML('beforeend',<body> ${json}</body>)
