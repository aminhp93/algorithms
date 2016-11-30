function HashTable() {
    this.table = new Array(26)
}

HashTable.prototype.buildLinks = function() {


}


HashTable.prototype.linkBuilt = function() {

}

HashTable.prototype.simpleHash = function() {

}

HashTable.prototype.betterHash = function() {

}

HashTable.prototype.simplePut = function() {

}

HashTable.prototype.linkPut = function() {

}

HashTable.prototype.showDistribution = function() {

}

var names = ["Tony", "Tori", "Kate", "Kyle", "Thomas", "Dale",
    "David", "Daisy", "Andy", "Albert", "Dane", "Shane", "Lane",
    "Janet", "Katelyn", "Janet", "Vivian", "Joe"
];
var simpleHashTable = new HashTable();
for (var i = 0; i < names.length; i++) {
    simpleHashTable.simplePut(names[i]);
}
simpleHashTable.showDistribution();
var betterHashTable = new HashTable();
for (var i = 0; i < names.length; i++) {
    betterHashTable.linkPut(names[i]);
}
betterHashTable.showDistribution();
