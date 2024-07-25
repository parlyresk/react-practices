const path = require('path');
const fs = require('fs');

const outputPath = path.resolve(__dirname, '../backend/src/main/resources');

// Ensure the output path exists
if (!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath, { recursive: true });
}

module.exports = function(env) {
    return {
        mode: "none",
        entry: path.resolve('src/index.js'),
        output: {
            path: outputPath,
            filename: 'assets/js/main.js',
            assetModuleFilename: 'assets/images/[hash][ext]'
        },
        module: {
            rules: [{
                test: /\.js/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve('config/babel.config.json')
                }
            }, {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'sass-loader'
                ]
            }, {
                test: /\.(png|gif|jp?eg|svg|ico|tif?f|bmp)/i,
                type: 'asset/resource'
            }]
        },
        devServer: {
            host: '0.0.0.0',
            port: 9090,
            liveReload: true,
            compress: true,
            hot: false,
            static: {
                directory: path.resolve('./public')
            },
            proxy: [{
                context: ['/api'],
                target: 'http://localhost:8080'
            }]
        }
    };
}
