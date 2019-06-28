# Respository Search

* yarn init
* yarn add @babel/cli -D
* yarn add @babel/preset-env -D
* "Criar aquivo na raiz chamado '.babelrc'"
    |   {
    |       "presets": ["@babel/preset-env"]
    |   }
* yarn add @babel/core -D
* yarn add webpack webpack-cli -D
* "Criar arquivo 'webpack.config.js'"
    module.exports = {
        entry: "./main.js",
        output: {
            path: __dirname,
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                }
            ],
        }
    };
* yarn add babel-loader -D
* Criar pasta "public/" para manter os arquivos do projeto que não precisam ser vistos pelo webpack
* Criar pasta "src/" para os arquivos que serão escutados pelo webpack
* Definir a entrada do webpack para a pasta "src":
    | entry: "./src/main.js",
* Definir o output do webpack para a pasta "public":
    | output: {
    |    path: __dirname+'/public',
    |    filename: 'bundle.js',
    | },
* yarn add webpack-dev-server -D
* Definir o caminho do servidor no webpack.config (propriedade 'devServer.contentbase'):
    | module.exports = {
    |    entry: "./main.js",
    |    output: {
    |        path: __dirname+'/public',
    |        filename: 'bundle.js',
    |    },
    |    devServer: {
    |        contentBase: __dirname+'/public'
    |    },
    |    module: {
    |        rules: [
    |            {
    |                test: /\.js$/,
    |                exclude: /node_modules/,
    |                use: {
    |                    loader: "babel-loader"
    |                }
    |            }
    |        ],
    |    }
    | };
* Alterar script "dev" para:
    | "dev": "webpack-dev-server --mode=development"
* Adicionar script "build":
    | "build": "webpack --mode=production"