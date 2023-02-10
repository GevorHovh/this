function Trainer(name, surename, subject) {
    this.name = name;
    this.surename = surename;
    this.subject = subject;
}
function Sportzal(name) {
    this.name = name;
    this.trainers = [];
        this.getName = function() {
            return this.name
        }
    this.addWrestlingTrainer = function(name, surename) {
        const trainer = new Trainer(name, surename, "wrestling");
    }
    this.addWeightfilingTrainer = function(name, surename) {
        const trainer = new Trainer(name, surename, "weightfilling");
    }
}
    

let ShMVD = new Sportzal("ShMVD");
console.log(ShMVD.addWeightfilingTrainer("Xcho","Xurshudyan"));
console.log(ShMVD.addWeightfilingTrainer("Artak", "Srapyan"));
