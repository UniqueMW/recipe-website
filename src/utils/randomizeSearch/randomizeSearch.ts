function randomizeSearch<T>(searchArray: T[]): T {
  // get a random number in the range of array length
  const randomIndex = Math.floor(Math.random() * searchArray.length)
  // access the index in the array and retrive the value
  const itemObject = searchArray[randomIndex]
  return itemObject
}
export default randomizeSearch
