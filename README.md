WEBPACK & TYPESCRIPT BUILD (Net Ninja)

1) tsc --init;
2) tsconfig.json => { "compilerOptions": { "target": "es6" }, { "module": "es2015" } };
3) npm init; (go through the questions);
4) npm install webpack webpack-cli ts-loader -D;
5) npm install typescript -D;
6) create src & public folder with the related index files;
7) create webpack.config.js;

8) fill out webpack.config.js with the following:

    const path = require('path');
    
    module.exports = {
        mode: development,
        devtool: 'eval-source-map',
        entry: './src/index.ts',
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    include: [path.resolve(__dirname, 'src')],
                    use: 'ts-loader',
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public'),
        },
    };

9) index.ts => console.log('hello');
10) package.json => { "scripts": { "build": "webpack" } };
11) npm run build;
12) npm install webpack-dev-server -D;
13) package.json => { "scripts": { "serve": "webpack-dev-server" } };
14) npm run serve;
15) tsconfig.json => uncomment { "sourceMap": true };
16) npm run build;


* GIT COMMANDS

1) git init;
2) git add .;
3) git commit -m "description message";
4) create new repo on github;
5) 