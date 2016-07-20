var one = [1, 9, 3, 3,5,2,3, 4, 6, 8, 4, 5];
var two = [5,2,3,7, 9, 3, 3, 4, 6, 8, 4, 5];
function findCommonSubsequence (arrOne, arrTwo) {
    var result = [];
    for (var i = 0; i < arrOne.length; i++) {
        for (var j = 0; j < arrTwo.length; j++) {
            if (arrOne[i] == arrTwo[j]) {
                if ((i + 1 < arrOne.length) && (j + 1 < arrTwo.length) && (arrOne[i + 1] == arrTwo[j + 1])) {
                    var lastLength = 2; //always start with 2 since checked and only a sequence if 2 or more
                    var lastSeq = arrOne[i] + ',' + arrOne[i + 1];
                    while ((i + lastLength < arrOne.length) && (j + lastLength < arrTwo.length) && (arrOne[i + lastLength] == arrTwo[j + lastLength])) {
                        lastSeq = lastSeq + ',' + arrOne[i + lastLength];
                        lastLength++;
                    }
                    if (result.length >= 1) {
                        if (((i == result[result.length - 1].idxone) && (j > (result[result.length - 1].idxtwo + result[result.length - 1].seqLength))) ||
                            (i >= result[result.length - 1].idxone + result[result.length - 1].seqLength)) {
                                result.push({ idxone: i, idxtwo: j, seqLength: lastLength, seq: lastSeq });
                                j = j + (lastLength);
                        }
                    }
                    else {
                        result.push({ idxone: i, idxtwo: j, seqLength: lastLength, seq: lastSeq });
                        j = j + (lastLength);
                    }
                }
            }
        }
    }
    return result;
};
console.log(findCommonSubsequence(one, two));
//will print array with 3 objs, matching seq's "9,3,3", "5,2,3" & "4,6,8,4,5" 
