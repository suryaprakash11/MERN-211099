const path = require('path'); // import Node.js path module for path related operations
// create our config object
const config = {
    entry: path.join(__dirname, '/client/index.js'), // Abosolute pathto our entry file
    output: { // our output configuration
    path: path.join(__dirname, './public/'), // output path(directory/folder)
    filename: 'bundle.js' // output bundled file name
    },
    module: { // define our loaders here
    // array of rules to handle different file types
    rules: [
    {
    test: /\.(js|jsx)$/, // check for .js and .jsx files (usesRegex)
    
    loader: 'babel-loader' // use this loader for .js and .jsxfiles found
    },
    {
    // check for files ending with .css (uses Regex)
    test: /\.css$/,
    // use these loaders of .css files. 'css-loader gets runfirst and is
    
    // used to handle the imports of our css files inside ourjsx files.
    
    // The style loader then mounts our css in to the DOM
    use: ['style-loader', 'css-loader']
    }
    ]
    },
    // set the file extensions we want webpack to resolve
    resolve: {
    extensions: ['.js', '.jsx']
}
};

// export our config object.
// You may have noticed we are using es5 syntax here. This is becauseWebpack, which would be using this
// file, expects es5 syntax
module.exports = config;