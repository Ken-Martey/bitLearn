Router.configure({
    layoutTemplate: "masterLayout"
});

Router.route("/", function () {
        this.render("index")
    },
    {
        name: "index"
    });

// Router.route("/about", function() {
// 	this.render("about")
// },{
// 	name: "about"
// });