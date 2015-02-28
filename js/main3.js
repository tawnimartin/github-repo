var Github = (function() {

  // https://api.github.com/users/jisaacks/repos
  // https://api.github.com/users/jisaacks
  // https://api.github.com/users/jisaacks/starred
  // https://api.github.com/users/jisaacks/orgs

  function Github(user) {
    this.username = user;

    var apiBase = "https://api.github.com/users/";

    this.endpoints = {
      repos: apiBase + this.username + "/repos",
      user: apiBase + this.username,
      orgs: apiBase + this.username + "/orgs",
      starred: apiBase + this.username + "/starred?per_page=100",
    }
  }

  Github.prototype = {
    hitApi: function(url, cb) {
      $.ajax(url, {
        success: function(data) {
          cb(data);
        },
        error: function() {
          console.log("Error loading", url);
        }
      });
    },

    repos: function(cb) {
      this.hitApi(this.endpoints.repos, cb);
    },

    orgs: function(cb) {
      this.hitApi(this.endpoints.orgs, cb);
    },

    starred: function(cb) {
      this.hitApi(this.endpoints.starred, cb);
    },

    user: function(cb) {
      this.hitApi(this.endpoints.user, cb);
    },

    loadAll: function(cb) {
      // calls callback with hash of data like below
      // {
      //   repos: //repo data,
      //   user: //user data,
      //   starred: //starred data,
      //   orgs: //org data
      // }
      var dataGroups = {};

      var afterCB = _.after(4, cb);

      // 1 getting repos
      github.repos(function(data){
        dataGroups.repos = data;
        afterCB(dataGroups);
      });

      // 2 getting orgs
      github.orgs(function(data){
        dataGroups.orgs = data;
        afterCB(dataGroups);
      });

      // 3 getting user
      github.user(function(data){
        dataGroups.user = data;
        afterCB(dataGroups);
      });

      // 4 getting starred
      github.starred(function(data){
        dataGroups.starred = data;
        afterCB(dataGroups);
      });
    }

  }

  return Github

})();

