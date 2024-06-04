let CarServiceAjax = {
    loadCars: function() {
        RestClient.get('cars', function(response) {
            
            let data;
            data = response;
            const carsContainer = document.getElementById('cars-container');
            carsContainer.innerHTML = '';

            if (Array.isArray(data.data)) {
                data.data.forEach(car => {
                    const carHtml = `
                    <div class="col-lg-4 col-md-6 mb-4 car-description" id="${car.id}">
                        <div class="card h-100">
                            <img src="${car.img_dir}" class="card-img-top" alt="${car.brand} ${car.model}">
                            <div class="card-body">
                                <h5 class="card-title">${car.brand} ${car.model}</h5>
                                <p class="card-text">Price: $${car.price}</p>
                                <p class="card-text">${car.mileage} - ${car.engine_size} - ${car.gearbox}</p>
                                <a href="#car-details" class="btn btn-primary" onclick="CarServiceAjax.loadCarDetails(${car.id})">View Details</a>
                            </div>
                        </div>
                    </div>`;
                    carsContainer.innerHTML += carHtml;
                });
            } else {
                console.error("Expected an array but got:", data);
            }
        });
    },
    loadCarDetails: function(carID) {
        RestClient.get('cars', function(response) {
            
            let data;
            data = response;
                

            const selectedCar = data.data.find(car => car.id === parseInt(carID));

            if (selectedCar) {
                $(".cta-content").html(
                    `
                    <h2 id="car-title"><small><del id="car-prev-price">${selectedCar.previous_price}</del></small> <em id="car-price">${selectedCar.price}</em></h2>
                    <p>Featured offer!</p>
                    `
                ),
                $(".carousel-inner").html(
                    `
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="${selectedCar.img_dir}" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="${selectedCar.img_dir}" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="${selectedCar.img_dir}" alt="Third slide">
                    </div>
                    `
                ),
                $("#specs-details").html(
                    `
                    <div class="col-sm-6">
                        <label>Type</label>
                        <p>${selectedCar.vehicle_type}</p>
                    </div>
                    <div class="col-sm-6">
                        <label>Make</label>
                        <p>${selectedCar.brand}</p>
                    </div>
                    <div class="col-sm-6">
                        <label>Model</label>
                        <p>${selectedCar.model}</p>
                    </div>
                    <div class="col-sm-6">
                        <label>First registration</label>
                        <p>${selectedCar.registration}</p>
                    </div>
                    <div class="col-sm-6">
                        <label>Mileage</label>
                        <p>${selectedCar.mileage}</p>
                    </div>
                    <div class="col-sm-6">
                        <label>Fuel</label>
                        <p>${selectedCar.fuel}</p>
                    </div>
                    <div class="col-sm-6">
                        <label>Engine size</label>
                        <p>${selectedCar.engine_size}</p>
                    </div>
                    <div class="col-sm-6">
                        <label>Power</label>
                        <p>${selectedCar.power}</p>
                    </div>
                    <div class="col-sm-6">
                        <label>Gearbox</label>
                        <p>${selectedCar.gearbox}</p>
                    </div>
                    <div class="col-sm-6">
                        <label>Number of seats</label>
                        <p>${selectedCar.seats}</p>
                    </div>
                    <div class="col-sm-6">
                        <label>Doors</label>
                        <p>${selectedCar.doors}</p>
                    </div>
                    <div class="col-sm-6">
                        <label>Color</label>
                        <p>${selectedCar.color}</p>
                    </div>
                    `
                ),
                $("#contact-details").html(
                    `
                    <div class="col-sm-6">
                        <label>Name</label>
                        <p>${selectedCar.dealer_name}</p>
                    </div>
                    <div class="col-sm-6">
                        <label>Phone</label>
                        <p>${selectedCar.dealer_phone} </p>
                    </div>
                    <div class="col-sm-6">
                        <label>Mobile phone</label>
                        <p>${selectedCar.dealer_phone} </p>
                    </div>
                    <div class="col-sm-6">
                        <label>Email</label>
                        <p><a href="#">${selectedCar.dealer_email}</a></p>
                    </div>
                    `
                );
            } else {
                console.log("Car not found");
            }
        });
    }
};
