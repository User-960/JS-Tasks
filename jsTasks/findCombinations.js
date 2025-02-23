function findCombinations(numbers, target) {
    const result = [];

    function backtrack(startIndex, currentCombination, currentSum) {
        if (currentSum === target) {
            result.push([...currentCombination]);
            return;
        }
        if (currentSum > target) {
            return;
        }

        for (let i = startIndex; i < numbers.length; i++) {
            currentCombination.push(numbers[i]);
            backtrack(i + 1, currentCombination, currentSum + numbers[i]);
            currentCombination.pop();
        }
    }

    backtrack(0, [], 0);
    
    return result.length > 0 ? result : false;
}

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];
const numbers2 = [3, 1, 5, 11, 14, 9, 67, 2];
const numbers3 = [44, 1, 5, 12, 56, 34, 22, 4];
const numbers4 = [7, 2, 5, 13, 11, 21, 4, 1];
const numbers5 = [4, 9, 11, 33, 1, 2, 12, 6];
const target1 = 5;
const target2 = 11;
const target3 = 99;
const target4 = 45;
const target5 = 1000;
console.log(findCombinations(numbers1, target1));
console.log(findCombinations(numbers2, target2));
console.log(findCombinations(numbers3, target3));
console.log(findCombinations(numbers4, target4));
console.log(findCombinations(numbers5, target5));