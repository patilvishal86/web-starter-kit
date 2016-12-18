import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod'
import chalk from 'chalk';

process.env.NODE_ENV='production';
/*eslint-disable no-console */
console.log(chalk.blue("Running Build for production"));

webpack(webpackConfig).run((err,status) =>{
    if(err){
        console.log(chalk.red('Errror occured while Running build!!'));
        return 1;
    }
    console.log(chalk.blue("Success Build for production"+status ));

    return 0;
});
