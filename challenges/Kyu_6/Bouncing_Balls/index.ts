function bouncingBall(h: number,  bounce: number,  window: number) {
    if(!(h > bounce) || !(bounce < 1 && bounce > 0) || !(h > window)) { return -1 }

    let count = 1;
    let bounceH = h * bounce;
    while(window < bounceH) {
        count += 2;
        bounceH *= bounce;
    }

    return count;
}

console.log(bouncingBall(3.0, 0.66, 1.5), 3);
console.log(bouncingBall(30.0, 0.66, 1.5), 15);
console.log(bouncingBall(3.0, 1.0, 1.5), -1);