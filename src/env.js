const dotenvOptions = process.env.NODE_ENV
  ? {
      path: `${__dirname}/../.env.${process.env.NODE_ENV}`,
    }
  : {};
const dotenv = require("dotenv").config(dotenvOptions);

if(process.env.NODE_ENV) {
    console.debug(`Environment: .env.${process.env.NODE_ENV}`);
} else {
    console.debug(`Environment: .env`);
}
console.debug(dotenv.parsed);
