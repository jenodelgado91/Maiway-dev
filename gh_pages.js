var ghpages = require("gh-pages");
ghpages.publish(
  "build",
  {
    branch: "master",
    repo: "https://github.com/jenodelgado91/maiway-dev",
  },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("success");
    }
  }
);
