import { test, expect } from "@jest/globals";

import {
  greetPerson,
  doubleAndAddOne,
  isLongArray,
  addItemToArray,
  addKeyValuePairToObject,
  throwErrorIfEven,
} from "./index.js";

// 👉 2.1 - greetPerson tests:

test(`Given a string "Chris", the greetPerson function returns the correct greeting string with Chris' name`, () => {
  const actual = greetPerson("Chris");
  const expected = "Greetings, Chris";

  expect(actual).toBe(expected);
});

test(`Given the string "Liz K", the greetPerson function returns the correct greeting string with Liz K's name`, () => {
  const actual = greetPerson("Liz K");
  const expected = "Greetings, Liz K";

  expect(actual).toBe(expected);
});

test(`When given a number instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(1);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});

test(`When given a boolean instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(true);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});

//👉 2.2 - Write your tests for the other functions below:
test ('doubles the number given and adds 1', ()=>{
  const actual = doubleAndAddOne(5)
  const expected = 11

  expect(actual).toBe(expected)

})

test('checks if an array is longer than 10 items', ()=> {
  const actual = isLongArray([1,2,3,4,5])
  const expected = false

  expect(actual).toBe(expected)
})

test('checks if the function adds items to an array', ()=>{
  const actual =addItemToArray([1,2,3],4)
  const expected = [1,2,3,4]

  expect(actual).toStrictEqual(expected)
})