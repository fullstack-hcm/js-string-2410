let status = '1';

/**
if (temp == 1) {
    console.log(`temp eq 1`)
} else {
    console.log(`temp != 1`);
}
 */
if (status === 0) {
    console.log(`inactive`);
} else if (status == 1) {
    console.log(`active`);
} else {
    console.log(`block`);
}

switch (Number(status)) {
    case 0:
        console.log(`switch 0`);
        break;

    case 1:
        console.log(`switch 1`);
        break;

    default:
        break;
}

status == 1 ? console.log(`eq 1`) : console.log(`!eq 1`);

status != 1 && console.log(`==1`);

let temp3 = status != 1 && 2;
console.log(temp3) // expect: 2

/**
 * falsy:
 * null undefiend '' 0
 * false
 */
let temp2 = undefined;

if (!temp2) {
    return;
} else {
    // something
}

// compare state
/**
 * ==, ||, &&
 * >, >=, <, <=
 */

 /**
  * & | ^ ~ >> <<
  * 32 bit
  */

  console.log(5 & 1);
  /**
   * 0101
   * 0001
   * 0001
   * ----
   * 1
   */