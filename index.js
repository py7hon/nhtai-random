const request = require('request-promise-native')
const cheerio = require('cheerio')
const { assert } = require('chai')

async function getImage(options) {
  if (options === undefined) options = {}
  assert.isObject(options, `'options' must be an object`)
  let { tags } = options
  if (tags === undefined) tags = []
  assert.isArray(tags, `'tags' option must be an array`)
  if (!/order:/.test(tags.join(','))) {
    tags.push('order:random')
  }
  const galleryUrl = 'https://konachan.com/post?tags=' + encodeURIComponent(tags.join(' '))
  const body = await request(galleryUrl)
  const $ = cheerio.load(body)
  const entries = $('#post-list-posts li').length
  if (entries === 0) throw new Error(`no corresponding picture was found`)
  return $('#post-list-posts .directlink').attr('href')
}

module.exports = { getImage }