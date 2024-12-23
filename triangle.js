function triangle(char, num) {
    let result = [];

    for (let i = 1; i <= num ; i++) {

        let line = '';

        for (let j = 0; j < i; j++) {
            line += char;
        }
        result.push(line);

    }
    
    return result.join('\n');
}
