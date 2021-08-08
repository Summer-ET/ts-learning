for (let i = 1; i <= 5; i ++) {
    //create a num array and get the value from 'for' cycle
    let arrNum: number[] = new Array(i);
    //and the init index number of array start from '0'
    for (let j = 0; j < i; j ++) {
        arrNum[j] = j + 1;
    }
    console.log(arrNum);
}