function newRoadSystem(roadRegister) {
    const summary = [];
    for (let n = 0; n < roadRegister.length; n++) {
        summary[n] = {s: 0, e: 0};
    }

    for (let i = 0; i < roadRegister.length; i++) {
        for (let j = 0; j < roadRegister[i].length; j++) {
            if (i === j && roadRegister[i][j]) return false;
            if (roadRegister[i][j]) {
                summary[i].s++;
                summary[j].e++;
            }
        }
    }
    
    console.log('summary -> ', JSON.stringify(summary));
    // const result = summary.filter(counter => (counter && counter % 2 != 0));
    const result = summary.filter(counter => counter.s != counter.e);
    console.log('result -> ', JSON.stringify(result));
    
    return !result.length;
}
