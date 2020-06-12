// const url_ = Deno.args[0];
// const res = await fetch(url_);
import ky from 'https://deno.land/x/ky/index.js';
const res = await ky.get('https://fireship.io');

console.log(res.body);