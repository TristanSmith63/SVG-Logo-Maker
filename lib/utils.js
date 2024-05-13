//utils.js

// Function to validate color input
function validateColorInput(color) {
    

    return color.trim() !== '';
  }
  
  // Function to validate text input
  function validateTextInput(text) {
    
  
    return text.trim() !== '';
  }
  
  module.exports = { validateColorInput, validateTextInput };