let NumMove = 0;

const winComb = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]

let arrayMove = [[0, 0]];

let arrayTable = [2, 2, 2, 2, 2, 2, 2, 2, 2]

function turnXorO(index) {
    const xo = ['img\\o.png', 'img\\x.png']
    if (NumMove % 2 === 0) {
        arrayTable[index] = 1
        return xo[1]
    }else {
        arrayTable[index] = 0
        return xo[0]
    }
}

function whoWin() {
    for (let i = 0; i < winComb.length; i++) {
        if (arrayTable[winComb[i][0]] === arrayTable[winComb[i][1]] && arrayTable[winComb[i][0]] === arrayTable[winComb[i][2]]) {
            if (arrayTable[winComb[i][0]] === 1) {
                return "X won"
            }
            else if (arrayTable[winComb[i][0]] === 0) {
                return "O won"
            }
        }
    }
    if (arrayTable.every((item)=>{return item < 2})){
        return "Draw"
    }
}

function create(index) {
    let turn = "O"
    if (NumMove % 2 === 0) {
        turn = "X"
    }
    NumMove++
    arrayMove.push([NumMove, index])
    tr = NumMove + ". place: line " + Math.round((index / 3)+ 1) + " column " + ((index % 3)+ 1) + ". Move made "+ turn ;
    return tr;
}
