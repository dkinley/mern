function flip() {
    return Math.random() < 0.5 ? "tails" : "heads"; // returns a random number
}

function test5Heads() {
    //passing in a callback function as an argument, 'resolve' and 'reject', are reserved
    return new Promise((resolve, reject) => {
        let tries = 0;
        let heads = 0;
        
        for ( i = 0 ; i < 1000; i++ ) {
            tries === i;
            let headsTales = flip();
            console.log(`${headsTales} came up`);
            if (headsTales === "heads") {
                heads++;
                if (heads > 4) { 
                    console.log(`${headsTales} for the 5th time!`);
                    }
                } else {
                heads = 0;
                }
            }
            if (heads > 4 || tries === 1000 ) {
                resolve(`It took ${tries} flips to flip 5 "heads"`);
            } else {
                reject(`Attempts have exceeded 1000 flips.`);
            }
        });
    }
    test5Heads()
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

console.log("test");
