// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);      
}

for (let i = 0; i <= 10 ; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10 ; j++) {
    //    console.log(`Inner loop value: ${j}`);
      console.log(i + "*" + j + " = " + i*j);
    }
}

let myArr = ["flash", "superman", "batman"];

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);       
}

// break and continue

for (let i = 1; i < 21; i++) {
    if(i == 5) {
        console.log("DETECTED 5");
        break;
    }
    console.log(`Value of i is: ${i}`);   
}


for (let i = 1; i < 21; i++) {
    if(i == 5) {
        console.log("DETECTED 5");
        continue;
    }
    console.log(`Value of i is: ${i}`);   
}