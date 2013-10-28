const test = require('tap').test
const extract = require('..')

test('html comment frontmatter', function (t) {
  const meta = extract(load('test1.md'))

  t.same(meta.title, 'How to eat food', 'title should match')
  t.same(meta.tags, ['pizza', 'taco', 'burrito'], 'tags should match')
  t.same(meta.sandwich, 'grilled cheese & tomato', 'sandwich should match')
  t.same(meta.author, 'Brian J Brennan', 'author should match')
  t.end()
})

const path = require('path'); const fs = require('fs')
function load(file) {
  return fs.readFileSync(path.join(__dirname, file))
}
