var Utils={
    init_spapp : function(){
        var app = $.spapp({
            defaultView: "#home",
            templateDir: "./pages/"
        });
        app.run();
    },
    set_to_localstorage: function(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
      },
      get_from_localstorage: function(key) {
        return JSON.parse(window.localStorage.getItem(key));
      },
      logout: function() {
        window.localStorage.clear();
        window.location = "login";
      },
}