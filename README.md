# README

Pandabize Web Store


## Quick Start

```bash
  git clone git@github.com:db87987/pandabize.git
  cd pandabize
  gem install bundler
  bundle install
  rake db:migrate db:seed
  rails s
```

Features implemented
-----
* backend: product-variant-options relationship
* backend: api for retrieving of products/product
* draft pages: products list, product page
* logic of dependent options for product (17 wheels goes only with green rim, etc.)

To-DO list
-----
* admin panel for products managing
* order processing logic (cart, line items, order, etc.)
* prettify pages with bootstrap styling
* write tests
* deploy to heroku, or smt similar
