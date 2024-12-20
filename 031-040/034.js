/* 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 
새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다. */
function solution(s) {
  var answer = "";
  let arr = [...s];

  arr.sort((a, b) => {
    let result = 0;
    if (/[A-Z]/.test(a) && !/[A-Z]/.test(b)) {
      result = 1;
    } else if (!/[A-Z]/.test(a) && /[A-Z]/.test(b)) {
      result = -1;
    } else {
      result = a.localeCompare(b) * -1;
    }
    return result;
  });

  answer = arr.join("");
  return answer;
}
