const checkWin = (matrix, btnContent) => {    
    console.log(`[CHECK WIN]`);
    console.log(matrix, btnContent);
    
    // row wins
    const isRow1Win = 
        matrix[0][0] == btnContent && 
        matrix[0][1] == btnContent && 
        matrix[0][2] == btnContent ? true : false;
    const isRow2Win = 
        matrix[1][0] == btnContent && 
        matrix[1][1] == btnContent && 
        matrix[1][2] == btnContent ? true : false;
    const isRow3Win = 
        matrix[2][0] == btnContent && 
        matrix[2][1] == btnContent && 
        matrix[2][2] == btnContent ? true : false;
    
    // column wins    
    const isCow1Win = 
        matrix[0][0] == btnContent && 
        matrix[1][0] == btnContent && 
        matrix[2][0] == btnContent ? true : false;
    const isCow2Win = 
        matrix[0][1] == btnContent && 
        matrix[1][1] == btnContent && 
        matrix[2][1] == btnContent ? true : false;
    const isCow3Win = 
        matrix[0][2] == btnContent && 
        matrix[1][2] == btnContent && 
        matrix[2][2] == btnContent ? true : false;
    
    // diagonal wins    
    const isDiag1Win = 
        matrix[0][0] == btnContent && 
        matrix[1][1] == btnContent && 
        matrix[2][2] == btnContent ? true : false;
    const isDiag2Win = 
        matrix[0][2] == btnContent && 
        matrix[1][1] == btnContent && 
        matrix[2][0] == btnContent ? true : false;

    if (
        isRow1Win || isRow2Win || isRow3Win ||
        isCow1Win || isCow2Win || isCow3Win ||
        isDiag1Win || isDiag2Win 
    ) {
        return true;
    } 
};

export default checkWin;