# balrog-meta-htmlcomment
[![Build Status](https://secure.travis-ci.org/brianloveswords/balrog-meta-htmlcomment.png?branch=master)](http://travis-ci.org/brianloveswords/balrog-meta-htmlcomment)

Extract metadata from files by looking at a leading comment!

## Example

**Input:**

```markdown
<!--
  title: How to eat food
  author: @brianloveswords
  sandwich: grilled cheese & tomato
  tags: pizza, taco, burrito
  date: 2013-10-28
-->

# How to eat food
Step 1: eat it up
Step 2: awesome
```

**Output:**

```js
{
  title: 'How to eat food',
  author: 'Brian J Brennan',
  sandwich: 'grilled cheese & tomato',
  tags: [ 'pizza', 'taco', 'burrito' ],
  date: '2013-10-28'
}
```

## Install

TODO: talk about balrog integration

```bash
$ npm install balrog-meta-htmlcomment
```

## Usage

TODO: talk about balrog usage

```js
var extract = require('balrog-meta-htmlcomment')
```

### extract(content)

`content` should be either a string or a buffer. If it is a buffer, it will be converted to a string with `.toString('utf8')`.

It's expected that the first non-whitspace string in `content` is `<!--` on its own line. Every line after that will be treated like a `<key>:<value>` pair. Any whitespace at the beginning and end of the line will be trimmed, as well as any whitespace before and after the “:”.

A “tags” key will be represented in the metadata as an array, using the comma character (and any leading/trailing whitespace) as the separator to split the string. So something like `tags: hey, you, guys` would be represented as `['hey', 'you', 'guys']`.

## License

Simplified BSD License
