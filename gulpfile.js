var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", () => {
  gulp
    .src("./styles/scss/styles.scss")
    .pipe(sass())
    .pipe(gulp.dest("./styles"));
});

gulp.task("default", () => {
  gulp.watch("./styles/scss/*.scss", ["sass"]);
});
