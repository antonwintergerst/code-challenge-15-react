import React from 'react'

export default function swapArrayElements(array, indexA, indexB) {
  var temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
  return array
};