$(function(){

  $.ajax("repos.json",{

    success: function(data) {
      //console.log(data)
      window.data = data;
      window.app = new App(data);
    },

    error: function() {
      console.log("failed to load gallery.json");
    }

  });

});
