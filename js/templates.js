this["JST"] = this["JST"] || {};
this["JST"]["little_user"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<a class=\"header-username\" href=\""
    + escapeExpression(((helper = (helper = helpers.html_url || (depth0 != null ? depth0.html_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"html_url","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.login || (depth0 != null ? depth0.login : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"login","hash":{},"data":data}) : helper)))
    + "</a><img class=\"username-img\" src=\""
    + escapeExpression(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\">";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["orgs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<a href=\"#\" class=\"my-org\"><img class=\"org-img\" src=\""
    + escapeExpression(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\"></a>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["repos"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <!--start repo -->\n             <div class=\"repo\">\n              <a class=\"repo-name\" href=\""
    + escapeExpression(((helper = (helper = helpers.html_url || (depth0 != null ? depth0.html_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"html_url","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n              <div class=\"repo-updated\">Updated on "
    + escapeExpression(((helper = (helper = helpers.formatDate || (depth0 != null ? depth0.formatDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"formatDate","hash":{},"data":data}) : helper)))
    + "</div>\n\n              <div class=\"details\">\n              <div class=\"details-fork\"><span class=\"octicon octicon-git-branch\"></span> "
    + escapeExpression(((helper = (helper = helpers.forks_count || (depth0 != null ? depth0.forks_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"forks_count","hash":{},"data":data}) : helper)))
    + "</div>\n              <div class=\"details-star\"><span class=\"octicon octicon-star\"></span> "
    + escapeExpression(((helper = (helper = helpers.stargazers_count || (depth0 != null ? depth0.stargazers_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"stargazers_count","hash":{},"data":data}) : helper)))
    + "</div>\n              <div class=\"details-code\">"
    + escapeExpression(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"language","hash":{},"data":data}) : helper)))
    + "</div>\n              </div>\n              <hr class=\"repo-hr\">\n\n            </div>\n            <!--end repo-->";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["user_info"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <img class=\"user-photo\" src=\""
    + escapeExpression(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"user-name\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n          <div class=\"user-handle\">"
    + escapeExpression(((helper = (helper = helpers.login || (depth0 != null ? depth0.login : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"login","hash":{},"data":data}) : helper)))
    + "</div>\n          <hr>\n          <span class=\"octicon octicon-location\"></span> \n          <div class=\"city\">"
    + escapeExpression(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"location","hash":{},"data":data}) : helper)))
    + "</div>\n          <span class=\"octicon octicon-clock\"></span>\n          <div class=\"joined-on\">Joined on "
    + escapeExpression(((helper = (helper = helpers.formatDate || (depth0 != null ? depth0.formatDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"formatDate","hash":{},"data":data}) : helper)))
    + "</div>\n          <hr>\n          <div class=\"stats-container\">\n            <div class=\"stats followers\">\n              <a class=\"stats-num\" href=\""
    + escapeExpression(((helper = (helper = helpers.followers_url || (depth0 != null ? depth0.followers_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"followers_url","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.followers || (depth0 != null ? depth0.followers : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"followers","hash":{},"data":data}) : helper)))
    + "</a>\n              <div class=\"stats-text\">Followers</div>\n            </div>\n            <div class=\"stats starred\">\n              <a class=\"stats-num\" href=\""
    + escapeExpression(((helper = (helper = helpers.starred_url || (depth0 != null ? depth0.starred_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"starred_url","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.starredCount || (depth0 != null ? depth0.starredCount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"starredCount","hash":{},"data":data}) : helper)))
    + "</a>\n              <div class=\"stats-text\">Starred</div>\n            </div>\n            <div class=\"stats following\">\n              <a class=\"stats-num\" href=\""
    + escapeExpression(((helper = (helper = helpers.following_url || (depth0 != null ? depth0.following_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"following_url","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.following || (depth0 != null ? depth0.following : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"following","hash":{},"data":data}) : helper)))
    + "</a>\n              <div class=\"stats-text\">Following</div>\n            </div>\n          </div>\n          <hr>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["user_info_jd"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <img class=\"user-photo\" src=\""
    + escapeExpression(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"user-name\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n          <div class=\"user-handle\">"
    + escapeExpression(((helper = (helper = helpers.login || (depth0 != null ? depth0.login : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"login","hash":{},"data":data}) : helper)))
    + "</div>\n          <hr>\n          <span class=\"octicon octicon-organization\"></span>\n          <div class=\"company\">"
    + escapeExpression(((helper = (helper = helpers.company || (depth0 != null ? depth0.company : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"company","hash":{},"data":data}) : helper)))
    + "</div>\n          <span class=\"octicon octicon-location\"></span> \n          <div class=\"city\">"
    + escapeExpression(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"location","hash":{},"data":data}) : helper)))
    + "</div>\n          <span class=\"octicon octicon-link\"></span>\n          <div class=\"uilink\"><a href=\"#\">"
    + escapeExpression(((helper = (helper = helpers.blog || (depth0 != null ? depth0.blog : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"blog","hash":{},"data":data}) : helper)))
    + "</a></div>\n          <span class=\"octicon octicon-clock\"></span>\n          <div class=\"joined-on\">Joined on "
    + escapeExpression(((helper = (helper = helpers.formatDate || (depth0 != null ? depth0.formatDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"formatDate","hash":{},"data":data}) : helper)))
    + "</div>\n          <hr>\n          <div class=\"stats-container\">\n            <div class=\"stats followers\">\n              <a class=\"stats-num\" href=\""
    + escapeExpression(((helper = (helper = helpers.followers_url || (depth0 != null ? depth0.followers_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"followers_url","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.followers || (depth0 != null ? depth0.followers : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"followers","hash":{},"data":data}) : helper)))
    + "</a>\n              <div class=\"stats-text\">Followers</div>\n            </div>\n            <div class=\"stats starred\">\n              <a class=\"stats-num\" href=\""
    + escapeExpression(((helper = (helper = helpers.starred_url || (depth0 != null ? depth0.starred_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"starred_url","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.starredCount || (depth0 != null ? depth0.starredCount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"starredCount","hash":{},"data":data}) : helper)))
    + "</a>\n              <div class=\"stats-text\">Starred</div>\n            </div>\n            <div class=\"stats following\">\n              <a class=\"stats-num\" href=\""
    + escapeExpression(((helper = (helper = helpers.following_url || (depth0 != null ? depth0.following_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"following_url","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.following || (depth0 != null ? depth0.following : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"following","hash":{},"data":data}) : helper)))
    + "</a>\n              <div class=\"stats-text\">Following</div>\n            </div>\n          </div>\n          <hr>";
},"useData":true});