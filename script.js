const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/~`"; // Define the symbols you want to include
const symbolCount = symbols.length;
function customEncode(input) {
    let encoded = '';
    for (let char of input) {
        if (char >= 'A' && char <= 'Z') {
            // Shift uppercase letters
            encoded += String.fromCharCode((char.charCodeAt(0) - 65 + 1) % 26 + 65);
        } else if (char >= 'a' && char <= 'z') {
            // Shift lowercase letters
            encoded += String.fromCharCode((char.charCodeAt(0) - 97 + 1) % 26 + 97);
        } else if (char >= '0' && char <= '9') {
            // Shift numbers
            encoded += String.fromCharCode((char.charCodeAt(0) - 48 + 1) % 10 + 48);
        } else if (symbols.includes(char)) {
            // Shift symbols
            const index = symbols.indexOf(char);
            encoded += symbols[(index + 1) % symbolCount];
        } else {
            // Non-alphabetic and non-numeric characters remain unchanged
            encoded += char;
        }
    }
    return encoded;
}

function customDecode(input) {
    let decoded = '';
    for (let char of input) {
        if (char >= 'A' && char <= 'Z') {
            // Shift uppercase letters back
            decoded += String.fromCharCode((char.charCodeAt(0) - 65 - 1 + 26) % 26 + 65);
        } else if (char >= 'a' && char <= 'z') {
            // Shift lowercase letters back
            decoded += String.fromCharCode((char.charCodeAt(0) - 97 - 1 + 26) % 26 + 97);
        } else if (char >= '0' && char <= '9') {
            // Shift numbers back
            decoded += String.fromCharCode((char.charCodeAt(0) - 48 - 1 + 10) % 10 + 48);
        } else if (symbols.includes(char)) {
            // Shift symbols back
            const index = symbols.indexOf(char);
            decoded += symbols[(index - 1 + symbolCount) % symbolCount];
        } else {
            // Non-alphabetic and non-numeric characters remain unchanged
            decoded += char;
        }
    }
    return decoded;
}


function encodeMessage() {
    const input = document.getElementById('encodeInput').value;
    const encodedOutput = customEncode(input);
    document.getElementById('encodedOutput').innerText = encodedOutput;
}

function decodeMessage() {
    const input = document.getElementById('decodeInput').value;
    const decodedOutput = customDecode(input);
    document.getElementById('decodedOutput').innerText = decodedOutput;
}
