module.exports = Phrase;

// Adds 'reverse' to all strings (!!!changes native String object!!!).
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;

    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    }

    // Returns the letters in the content.
    // For example:
    //  new Phrase("Hello, world!").letters() === "Helloworld"
    this.letters = function letters() {
    const lettersRegEx = /[a-z]/gi;
        return (this.content.match(lettersRegEx) || []).join("");
    }

    // Returns true for a palindrome, false otherwise.
    this.palindrome = function palindrome() {
        if (this.processedContent()) {
            return this.processedContent() === this.processedContent().reverse();
        } else {
            return false;
        }
    }
}
