// This is also found at https://replit.com/@dwolverton/SpecializedSurefootedOperation#submissions.ts

interface Submission {
  name: string;
  score: number;
  passed: boolean;
}

let submissions: Submission[] = [
  { name: "Jane", score: 95, passed: true },
  { name: "Joe", score: 77, passed: true },
  { name: "Jack", score: 59, passed: false },
  { name: "Jill", score: 88, passed: true }
];
console.log(submissions);

function addSubmission(newArr: Submission[], newName: string, newScore: number): void {
  const submission: Submission = {
    name: newName,
    score: newScore,
    passed: true
  }
  newArr.push(submission);

  if (submission.score >= 60) {
    submission.passed = true;
  } else {
    submission.passed = false;
  }
}

addSubmission(submissions, "Demo", 70);
console.log(submissions);


function deleteSubmissionByIndex(array: Submission[], index: number): void {
  array.splice(index, 1);
}

deleteSubmissionByIndex(submissions, 4);
console.log(submissions);

let findSubmissionByName = function(arr: Submission[], name: string): Submission|undefined {
  return arr.find(submission => submission.name === name);
}
let item = findSubmissionByName(submissions, 'Jane');
console.log(item)