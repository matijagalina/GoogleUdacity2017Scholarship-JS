/* Programming Quiz: Build A Triangle (5-3)
*
*For this quiz, you're going to create a function called buildTriangle()
* It will accept an input (the triangle at its widest width) and will return the string representation of a triangle
* Example:
* buildTriangle(10);
*		* 
*		* * 
*		* * * 
*		* * * * 
*		* * * * * 
*		* * * * * * 
*		* * * * * * * 
*		* * * * * * * * 
*		* * * * * * * * * 
*		* * * * * * * * * *
*/

function buildTriangle(width) {
    function makeLine(length) {             // creates a line of * for a given length
        let line = "";
        for (let j = 1; j <= length; j++) {
            line += "* ";
        }
        return line + "\n";
    }
    let triangle = "";                      // variable to store a triangle made of *
    for (let i = 1; i <= width; i++) {      //loop to create number of lines equal to width of triangle
        triangle += makeLine(i);
    }
    return triangle;
}
