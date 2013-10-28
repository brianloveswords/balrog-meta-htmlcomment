module.exports = function extract(contents) {
  if (Buffer.isBuffer(contents))
    contents = contents.toString('utf8')

  const lines = contents.split(/\n|\r/)

  var started, done;

  const meta = lines.reduce(function (meta, line) {
    if (done)
      return meta

    line = line.trim()

    if (line.indexOf('<!--') == 0) {
      started = true
      return meta
    }

    if (line.indexOf('-->') == 0) {
      done = true
      return meta
    }

    if (!started)
      return meta

    return assignKeyValuePair(line.split(/\s*:\s*/), meta)
  }, {})

  return fixTags(meta);
}

function fixTags(meta) {
  if (!meta.tags)
    return meta

  meta.tags = meta.tags.split(/\s*,\s*/)
  return meta
}


function assignKeyValuePair(pair, obj) {
  obj = obj || {}
  obj[pair[0]] = pair[1]
  return obj
}
