var slugify = require("slugify");

console.log(
  slugify(
    "udye dewjhdwe djhewd ewjhgdvew dhgwefd bewdjhgewfcvdb ewdtyewfd wednhgwefdw edhjgwedfwe dewdcyhewvd ewhddjhvewruydvwejhvdewyutdewqjhdn ehywutweh dhewgfcjh dgwceb dhtew ewdhewqfcd wdhfewqcweqj dwe".slice(
      0,
      61
    ),
    { lower: true, strict: true }
  )
);
