var Castle = function (name) {
    this.name = name;
    this.build = function () {
        console.log(this.name);
    };
}

const instance1 = new Castle("Winterfell");
const instance2 = new Castle("Harrenhall");
instance1.build = function () { console.log("Moat Cailin"); }
instance1.build();
instance2.build();