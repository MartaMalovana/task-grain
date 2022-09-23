function loadGrain(levels) {
    // Check data
    if(!levels || levels.length === 0) {
        console.log(0);
        return 0;
    };

    let result = 0;

    levels.map((level, index) => {
        // Skip first and last element in array
        if(index === 0 || index === (levels.length - 1)) {
            return;
        };

        let firstBorder = 0;
        let lastBorder = 0;
        // Search biggest level in array before this element
        for(let i = 0; i < index; i += 1) {
            if(levels[i] > firstBorder) {
                firstBorder = levels[i];
            };
        };
        // Search biggest level in array after this element
        for(let i = (index + 1); i < levels.length; i += 1) {
            if(levels[i] > lastBorder) {
                lastBorder = levels[i];
            };
        };
        // Check free space in current level
        if(level >= firstBorder) {
            return;
        };
        if(level >= lastBorder) {
            return;
        };
        let controlElement = firstBorder;
        if(lastBorder < firstBorder) {
            controlElement = lastBorder;
        };
        const freeSpaceInLevel = controlElement - level;
        result += freeSpaceInLevel;
    });

    console.log(result);
    return result;
};

loadGrain([4, 1, 3]); // 2
loadGrain([2, 1, 5, 2, 7, 4, 10]); // 7
loadGrain([2, 0, 1, 5, 2, 7]); // 6
loadGrain([2, 4, 2]); // 0
loadGrain([7, 4]); // 0
loadGrain([]); // 0
loadGrain([7,49,19,35,49,6,24,30,4,13,1,10]);