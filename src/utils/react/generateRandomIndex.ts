import { assoc } from "../js/assoc";

// nano id 
export const generateRandomIndex = () => {
  return Math.random().toString(36).substring(2,15)
};

export const assignId = assoc('id' , generateRandomIndex());
// ==  (obj) => ({..obj,id+STRING})
//
export const generateId = <O extends object>(obj: O) => assoc('id' , generateRandomIndex())(obj); //  IT WORKS

export const generateIdNotWorkingCorrectly = <O extends object>(obj: O) => assignId(obj); //  NOT WORKING, SAME KEYS FROM generateRandomIndex ( 1 time run again) !




