function addCommas(num) {
  num = num.toString();
  if (num.length > 3) {
    let numArray = [],
      cnt = -1;
    num.split("");

    for (let i = num.length - 1; i >= 0; i--) {
      cnt++;
      if (cnt > 0 && cnt % 3 === 0) {
        numArray.unshift(",");
      }
      numArray.unshift(num[i]);
    }
    return numArray.join("");
  } else {
    return num;
  }
}

export default addCommas;
