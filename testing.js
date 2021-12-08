function capitalize (string) {
    return `${string.slice(0,1).toUpperCase()}${string.slice(1)}`;
}

function reverseString (line) {
    return line.split('').reverse().join('');
}

let calculator = {
    add (a, b) { return a + b; },
    subtract (a, b) { return a - b; },
    divide (a, b) {
        if (b === 0) throw new Error("divide per zero error");
        return a / b;
    },
    multiply (a, b) { return a * b; },
};

function caesarCipher(message, key) {
    key = key % 26;
    if(key === 0 || key === -0) return message;

    let encodedMessage = '';
    for(let i = 0; i < message.length; i++) {
        if(/[a-zA-Z]/.test(message[i])) {
            let encodedNum = nextKeyCode(message[i], key);
            encodedMessage += String.fromCharCode(encodedNum);
        } else {
            encodedMessage += message[i];
        }
    }

    return encodedMessage;
}

function nextKeyCode (char, key) {
    let encodedNum = char.charCodeAt(0) + key;

    if( isLowerCase(char) && encodedNum > 122) {
        encodedNum -= 26;
    }

    if( isLowerCase(char) && encodedNum < 97) {
        encodedNum += 26;
    }

    if( isUpperCase(char) && encodedNum > 90) {
        encodedNum -= 26;
    }

    if( isUpperCase(char) && encodedNum < 65) {
        encodedNum += 26;
    }

    return encodedNum;
}

function isLowerCase (char) {
    return char === char.toLowerCase();
}

function isUpperCase (char) {
    return char === char.toUpperCase();
}

function analyzeArray (array) {
    if(array.length < 1) return;

    const total = array.reduce( (acc, num) => acc += num, 0);
    const length = array.length;
    const min = Math.min.apply(null, array);
    const max = Math.max.apply(null, array);

    return {
        average: total/length,
        min,
        max,
        length
    };
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
};