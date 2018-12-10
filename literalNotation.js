const color = 'red';
const red = '#ff0000';
const blue = '#0000ff';
const fields = ['firstName', 'lastName', 'phoneNumber'];

// Object
const COLORS = {red, blue}; // The same as {red: red, blue: blue}
const props = {fields}; // The same as {fields : fields}

// Function
const canvasDimensions = function(width, initialheight){
    const height = initialheight * 9 /16;
    return {
        width,
        height
    };
}

// Class
const Car = {
    color, 
    drive(){
        return 'Vroom!';
    },

    /* The same as below
    drive : function(){
        return 'Vroom!'
    }
    */
    
    getColor() {
        return this.color;
    }
}