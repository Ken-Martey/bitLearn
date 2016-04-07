Router.configure({
    layoutTemplate: "masterLayout"
});

Router.route("/", function () {
        this.render("index")
    },
    {
        name: "index"
    });
