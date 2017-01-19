const path = require('path');

module.exports = {
  title: 'Isolated Button, FTW',
  components: './src/*.js',
  updateWebpackConfig(webpackConfig) {
   // Your source files folder or array of folders, should not include node_modules
   const dir = path.join(__dirname, 'src');
   webpackConfig.module.loaders.push(
     // Babel loader will use your project’s .babelrc
     { loader: 'babel', test: /\.jsx?$/, include: dir }
   );
   return webpackConfig;
 },
};
