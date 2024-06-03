var resetButton=document.getElementById("resetSearch");
var searchButton=document.getElementById('searchTravel');
var resultDiv = document.getElementById('recommendations');
    

function resetForm(){
    document.getElementById('search').value="";
    resultDiv.innerHTML = '';
}

resetButton.addEventListener("click",resetForm);

function searchdestinationDetails() {

    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    
  }

searchdestinationDetails();

function provideRecommendations(){
    var input = document.getElementById('search').value.toLowerCase();
    resultDiv.innerHTML = '';

  if(input === 'japan' || input === 'australia' || input=== 'brazil'){
   
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        const condition = data.countries.find(item => item.name.toLowerCase() === input);
        if (condition) {
            console.log('true data found')
            condition.cities.forEach(function(city){
                resultDiv.innerHTML += `
                    <div class="card" >
                    <img src=${city.imageUrl} height="200" width="100%" />
                    <h3 class="destination-heading">${city.name}</h3>
                    <p class="destination-description">${city.description} </p>
                    </div>`;
            })
        } else {
            resultDiv.innerHTML = '<h3>Destination is not present</h3>';
        }
    })
    .catch(error => console.log('Error:', error));
  }
  else if(input === 'beach' || input==='beaches'){
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
    
        
            console.log('true data found')
            data.beaches.forEach(function(beach){
                resultDiv.innerHTML += `
                    <div class="card" >
                    <img src=${beach.imageUrl} height="200" width="100%" />
                    <h3 class="destination-heading">${beach.name}</h3>
                    <p class="destination-description">${beach.description} </p>
                    </div>`;
            })
    })
    .catch(error => console.log('Error:', error));
  }
  else if(input === 'temple' || input==='temples'){
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
    
        
            console.log('true data found')
            data.temples.forEach(function(temple){
                resultDiv.innerHTML += `
                    <div class="card" >
                    <img src=${temple.imageUrl} height="200" width="100%" />
                    <h3 class="destination-heading">${temple.name}</h3>
                    <p class="destination-description">${temple.description} </p>
                    </div>`;
            })
    })
    .catch(error => console.log('Error:', error));
  }
  else if(input === 'country' || input==='countries'){
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
    
        
            console.log('true data found')
            data.countries.forEach(function(country){
                country.cities.forEach(function(city){
                resultDiv.innerHTML += `
                    <div class="card" >
                    <img src=${city.imageUrl} height="200" width="100%" />
                    <h3 class="destination-heading">${city.name}</h3>
                    <p class="destination-description">${city.description} </p>
                    </div>`;
            })
        })
    })
    .catch(error => console.log('Error:', error));
  }
}

searchButton.addEventListener("click",provideRecommendations);

