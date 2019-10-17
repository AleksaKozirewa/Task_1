var path = require('path'); 

module.exports = { 
entry: 'C:/Git/Task1/src/script.js', 
output: { 
filename: 'bundle.js', 
path: path.resolve(__dirname, 'dist') 
} 
};