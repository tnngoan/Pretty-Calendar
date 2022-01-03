export default function getRandomKey(arr) {
  let newArr = [...Array(arr.length).keys()];
  for (let i = newArr.length - 1; i >= 0; i--) {
    const random = Math.floor(Math.random() * newArr.length);
    [newArr[random], newArr[i]] = [newArr[i], newArr[random]];
  }
  return newArr;
}
