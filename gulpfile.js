var gulp        = require("gulp");
var less        = require("gulp-less");
var bower       = require("main-bower-files");
var concat      = require("gulp-concat");
var wrap        = require("gulp-wrap");
var declare     = require("gulp-declare");
var handlebars  = require("gulp-handlebars");

var lessPath     = "./less/**/*.less";
var templatePath = "./js/templates/**/*.hbs";

gulp.task("less", function() {
  gulp.src(lessPath)
    .pipe(less())
    .pipe(gulp.dest("./css"));
});

gulp.task("templates", function(){
  gulp.src(templatePath)
    .pipe(handlebars())
    .pipe(wrap("Handlebars.template(<%= contents %>)"))
    .pipe(declare({
      namespace: "JST"
    }))
    .pipe(concat("templates.js"))
    .pipe(gulp.dest("./js/"));
});

gulp.task("compile:all",
  ["less", "templates", "bower:assets:js"]);

gulp.task("bower:assets:js", function() {
  gulp.src(bower({filter: "**/*.js"}))
    .pipe(concat("vendor.js"))
    .pipe(gulp.dest("./vendor/js"));
});

gulp.task("watch", function() {
  gulp.watch("less/*", ["less"]);
  gulp.watch(templatePath, ["templates"]);
  gulp.watch("bower.json", ["bower:assets:js"]);
});
// gulp.task('default', function() {
//    gulp.start('templates', 'less');
// });

