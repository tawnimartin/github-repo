function dataHasLoaded(data){

var App = (function() {
   
    App.data = data;
    var repos = data.repos;
    var orgs = data.orgs;
    var starred = data.starred;
    var user = data.user;
  
  function App() {

    this.renderRepos();
    this.renderUserInfo();
    this.renderLittleUser();
    this.renderOrgs();
  }

  App.prototype = {

    renderRepos: function() {
      //set jq element to variable
      var repoWrapper = $(".repo-wrapper");
      //empty contents of div
      repoWrapper.empty();
      //order newest to oldest, opposite their default order
      var sortedRepos = repos.reverse();
      //for each object
      _.each(sortedRepos, function(data) {
        //get raw date
        var rawDate = data.pushed_at;
        //convert to moment date
        var mDate = moment(rawDate).format('MMM. d, YYYY');
        //add altered date as property on data object
        data.formatDate = mDate;
        //put data in div
        repoWrapper.append( JST.repos(data) );
     });

    },

    renderUserInfo: function() {
      //set jq element to variable
      var userWrapper = $(".user-info");
      //empty contents of div
      userWrapper.empty();
      //get raw date
      var rawDate = user.created_at;
      //convert to moment date
      var mDate = moment(rawDate).format('MMM. d, YYYY');
      //add altered date as property on data object
      user.formatDate = mDate;
      //get length of starred array, add to data object for use
      user.starredCount = starred.length;
      //different layout for jd
      if (selectedPerson === "jisaacks") {
        userWrapper.append( JST.user_info_jd(user) );
      } else {
        userWrapper.append( JST.user_info(user) );
      }
    },

    renderLittleUser: function() {
      //set jq element to variable
      var luWrapper = $(".little-user-wrapper");
      //empty contents of div
      luWrapper.empty();
      //put data in div
      luWrapper.append( JST.little_user(user) );
    },

    renderOrgs: function() {
      //our jq element
      var orgWrapper = $(".org-logos");
      //empty first
      orgWrapper.empty();
      //I originally didn't have anything in orgs
      if (orgs.length === 0) {
        orgWrapper.append( JST.orgs(orgs) );
        $(".org-title").text("");//no title

      } else {
        //If one does have orgs
        $(".org-title").text("Organizations");
        _.each(orgs, function(data) {
          orgWrapper.append( JST.orgs(data) );
        });  
      }
    }
  }
  return App;

})();

$(function(){

  app = new App();

});
}

var person = prompt("Please enter github username", "tawnimartin");
  if (person != null) {
    var selectedPerson = person;
  } 

var github = new Github(selectedPerson);
github.loadAll(dataHasLoaded);
