var App = (function() {

  function App() {
    
    // var repos = data.repos;
    // var orgs = data.orgs;
    // var starred = data.starred;
    // var user = data.user;
    this.renderRepos();
    this.renderUserInfo();
    this.renderOrgs();
  }

  App.prototype = {

    renderRepos: function() {
      //uses data: repos
      //set jq element to variable
      var repoWrapper = $(".repo-wrapper");
      //empty contents of div just because
      repoWrapper.empty();
      //reverse order from newest to oldest
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
      //uses data: user & starred
      //set jq element to variable
      var userWrapper = $(".user-info");
      //empty contents of div just because
      userWrapper.empty();
      //for each object
      _.each(user, function(data) {
        //get raw date
        var rawDate = data.created_at;
        //convert to moment date
        var mDate = moment(rawDate).format('MMM. d, YYYY');
        //add altered date as property on data object
        data.formatDate = mDate;
        //get length of starred array, add to data
        data.starredCount = starred.length;
        //put data in div
        userWrapper.append( JST.user_info(data) );
     });
    },

    renderOrgs: function() {
      var orgWrapper = $(".org-logos");
      orgWrapper.empty();
      _.each(orgs, function(data) {
        orgWrapper.append( JST.orgs(data) );
      });  

    
    }



  }

  return App;

})();

$(function(){

  app = new App();


});