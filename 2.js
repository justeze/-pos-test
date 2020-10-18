const reccurString = (string) => {
  let splitString = string.split('');
  let searchReccur = splitString.filter((value, index) => value === value[index]);
  return searchReccur.toString()
}
console.log(`Karakter pertama yang berulang adalah ${reccurString('ABC')}`)
