
var Constants = {
    get_api_base_url: function () {
      if(location.hostname == 'localhost'){
        return "http://localhost/WebProgramming/backend/";
      } else {
        return "http://octopus-app-aicvb.ondigitalocean.app/backend/";
      }
    }
  };