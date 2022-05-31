function escalera(row) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < i + 1; j++) {
            row = row + '*';
        }
        console.log(row)
    }
}

escalera(5);