
    function loadCars() {
        fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
            const carsContainer = document.getElementById('cars-container');
            carsContainer.innerHTML = '';
            
            data.forEach(car => {
                const carHtml = `
                <div class="col-lg-4 col-md-6 mb-4 car-description" id="${car.id}">
                    <div class="card h-100">
                        <img src="${car.image}" class="card-img-top" alt="${car.make} ${car.model}">
                        <div class="card-body">
                            <h5 class="card-title">${car.make} ${car.model}</h5>
                            <p class="card-text">Price: $${car.price}</p>
                            <p class="card-text">${car.mileage} - ${car.engineSize} - ${car.gearbox}</p>
                            <a href="#car-details" id=${car.id}" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>`;
                carsContainer.innerHTML += carHtml;
            });
        })
        .catch(error => console.error('Error loading cars:', error));
    }
    function loadTeam() {
        fetch('data/team.json')
        .then(response => response.json())
        .then(data => {
            const teamContainer = document.getElementById('team-population');
            teamContainer.innerHTML = '';
            const maxWitdh=240;
            const maxHeight=370.76;
            data.forEach(team => {
                const teamHtml = 
                `
                <div class="col-md-3 col-sm-6">
                <div class="trainer-item">
                    <div class="image-thumb">
                        <img src="${team.image}" alt="">
                    </div>
                    <div class="down-content">
                        <span>${team.role}</span>
                        <h4>${team.name}</h4>
                        <p></p>
                        <ul class="social-icons">
                            <li><a href="${team.facebook}"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="${team.twitter}"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="${team.linkedin}"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="${team.behance}"><i class="fa fa-behance"></i></a></li>
                        </ul>
                    </div>
                </div>
                </div>`;
                teamContainer.innerHTML += teamHtml;
            });
        })
        .catch(error => console.error('Error loading cars:', error));
    }

$(document).on("click", ".car-description", function(){
    const carID = $(this).attr("id");
    

    setTimeout(function (){
        $.getJSON("data/data.json", (cars) => {
            
            const selectedcar = cars.find(car => car.id === parseInt(carID));
            
            if(selectedcar){
                $(".cta-content").html(
                    `
                    <h2 id="car-title"><small><del id="car-prev-price">${selectedcar.previousPrice}</del></small> <em id="car-price">${selectedcar.price}</em></h2>
                    <p>Featured offer!</p>
                    `
                ),
                $(".carousel-inner").html(
                    `
                    <div class="carousel-item active">
                    <img class="d-block w-100" src="${selectedcar.image}" alt="First slide">
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="${selectedcar.image}" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="${selectedcar.image}" alt="Third slide">
                    </div>
                    `
                ),
                $("#specs-details").html(
                    `
                    <div class="col-sm-6">
                        <label>Type</label>
                   
                        <p>${selectedcar.type}</p>
                   </div>

                   <div class="col-sm-6">
                        <label>Make</label>
                   
                        <p>${selectedcar.make}</p>
                   </div>

                   <div class="col-sm-6">
                        <label> Model</label>
                   
                        <p>${selectedcar.model}</p>
                   </div>

                   <div class="col-sm-6">
                        <label>First registration</label>
                   
                        <p>${selectedcar.registration}</p>
                   </div>

                   <div class="col-sm-6">
                        <label>Mileage</label>
                   
                        <p>${selectedcar.mileage}</p>
                   </div>

                   <div class="col-sm-6">
                        <label>Fuel</label>
                   
                        <p>${selectedcar.fuel}</p>
                   </div>

                   <div class="col-sm-6">
                        <label>Engine size</label>
                   
                        <p>${selectedcar.engineSize}</p>
                   </div>

                   <div class="col-sm-6">
                        <label>Power</label>
                   
                        <p>${selectedcar.power}</p>
                   </div>


                   <div class="col-sm-6">
                        <label>Gearbox</label>
                   
                        <p>${selectedcar.gearbox}</p>
                   </div>

                   <div class="col-sm-6">
                        <label>Number of seats</label>
                   
                        <p>${selectedcar.seats}</p>
                   </div>

                   <div class="col-sm-6">
                        <label>Doors</label>
                   
                        <p>${selectedcar.doors}</p>
                   </div>

                   <div class="col-sm-6">
                        <label>Color</label>
                   
                        <p>${selectedcar.color}</p>
                   </div>
                    `
                ),
                $("#contact-details").html(
                    
                    `
                    <div class="col-sm-6">
                        <label>Name</label>

                        <p>${selectedcar.name}</p>
                    </div>
                    <div class="col-sm-6">
                        <label>Phone</label>

                        <p>${selectedcar.phone} </p>
                    </div>
                    <div class="col-sm-6">
                        <label>Mobile phone</label>
                        <p>${selectedcar.phone} </p>
                    </div>
                    <div class="col-sm-6">
                        <label>Email</label>
                        <p><a href="#">${selectedcar.mail}</a></p>
                    </div>
                    `
                )
            } else {
                console.log("Car not found")
            }
        }
    )}, 20);
})

