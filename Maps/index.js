let map = new Map([
  ["a", 10],
  ["b", 20],
]);

// print Map
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

//Add values in map
map.set("c", 30);

// check if value is exist in the map
map.has("a");

// delete particular value in map

map.delete("b");

// get size of map
map.size();

// All value are clear are clear methds
map.clear();
