let set = new Set([10, 20, 30, 40]);

// apply operations

set.add(10);
set.add(40);
set.add(60);

// remove item
set.delete(20);

// check value
set.has(30);

// Print sets
for (let item of set) {
  console.log(item);
}

//remove  oll elements
set.clear();
