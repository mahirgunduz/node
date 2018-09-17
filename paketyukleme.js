const slugify  = require('slugify');


const text = 'fenerebahce ucuncu macina cıkıyor';
const slug = slugify(text);

console.log(slug);