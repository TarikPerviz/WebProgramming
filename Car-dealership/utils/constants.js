
var Constants = {
    get_api_base_url: function () {
      if(location.hostname == 'localhost'){
        return "http://localhost/WebProgramming/backend/";
      } else {
        return "https://octopus-app-aicvb.ondigitalocean.app/backend/";
      }
    }
  };