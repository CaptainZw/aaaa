const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 模式 webpack4.x之后新增的
  mode: "development",
  // 入口
  entry: "./src/index.js",
  // 出口 最终生成dist目录，开发阶段不需要配置
  module: {
    rules: [
      {
        test: /.jsx?$/, // 匹配.js结尾或是.jsx结尾的文件
        exclude: /(node_modules|bower_components)/, // 第三方的我不管
        use: {
          loader: "babel-loader" // 使用babel-loader转换
          // options: {
          //   presets: ["@babel/preset-react"] // 把jsx转成浏览器能识别的es5的代码
          // }
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|ttf|woff|woff2|)$/,
        use: [{
          loader: 'url-loader' // creates style nodes from JS strings
        }]
      }
    ]
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"]
  },
  devServer:{
    historyApiFallback: true,
    proxy:{
      /**
      '/':{
        // target:'http://127.0.0.1:3000/', //发送给真正的服务器
        // pathRewrite: {'^/api' : ''},
        secure: false // 设置支持https协议的代理
      },
       */
      '/v2':{
        target:'http://api.douban.com/',
        pathRewrite: { '^/api': '' },
        changeOrigin:true, // 更改域，让它能够访问真正的主机地址
        secure: false // 设置支持https协议的代理
      }
    }
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })]
};
