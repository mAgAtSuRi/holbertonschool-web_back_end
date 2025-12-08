export default function appendToEachArrayValue(array, appendString) {
  const new_array = []
  
  for (let value of array) {
	new_array.push(appendString + String(value))
  }

  return array;
}
