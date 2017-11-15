Array.prototype.swapItems = function(array, indexA, indexB)
{
  var temp = array[indexA].value
  array[indexA].value = array[indexB].value
  array[indexB].value = temp
  return array
}