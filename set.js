function mySet() {
//var collection will hold the set
var collection = [];
 this.has = function(element) {
 return(collection.indexOf(element) !== -1);
};
//this method will return all the values in thes et
this.values = function() {
 return collection;
}
//this method will return all values in the set
this.add = function(element) {
 if(!this.has(element)) {
 collection.push(element);
 return true;
}
 return false;
};
//this method will remove an element from a set
this.remove = function(element) {
if(this.has(element)){
  index = collection.indexOf(element);
  collection.splice(index,1);
  return true
}
 return false;
};
//method that return size of the collection
 this size = function() {
 return collection.length;
};
 }
