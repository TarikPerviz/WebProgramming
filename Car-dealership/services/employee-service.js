let EmployeeService = {
    loadTeam: function () {
      RestClient.get('employees', function (response) {
        
        let data = response;
  
        const teamContainer = document.getElementById('team-population');
        teamContainer.innerHTML = '';
  
        if (Array.isArray(data.data)) {
          data.data.forEach(team => {
            
            const teamHtml = `
              <div class="col-md-3 col-sm-6">
                <div class="trainer-item">
                  <div class="image-thumb">
                    <img src="${team.image}" alt="">
                  </div>
                  <div class="down-content">
                    <span>${team.role_name}</span>
                    <h4>${team.name}</h4>
                    <p></p>
                    <ul class="social-icons">
                      <li><a href="https://facebook.com"><i class="fa fa-facebook"></i></a></li>
                      <li><a href="https://twitter.com"><i class="fa fa-twitter"></i></a></li>
                      <li><a href="https://linkedin.com"><i class="fa fa-linkedin"></i></a></li>
                      <li><a href="https://behance.com"><i class="fa fa-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>`;
            teamContainer.innerHTML += teamHtml;
          });
        } else {
          console.error("Expected an array but got:", data);
        }
      });
    }
  }
  