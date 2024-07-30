import {greet} from './greet.js';
import {yes} from './greet.js';
import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from "figlet";

figlet("Hey Tallent!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
// import greet from './greet.js'
let name = "Tsakane";
// name = "Lihle";
console.log(greet(name));
console.log(yes('Tallent'));
const styledMessage = chalk.bgWhite.black(greet('Xola'));
console.log(styledMessage)
console.log(chalk.bgRed.whiteBright)
console.log(chalk.bgBlue.white(cowsay.say({
    text : "hello world!"
})));
