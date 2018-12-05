# nhtai-random

Get Hentai Image From Konachan

## usage

```javascript
const Nhtai-random = require('nhtai-random')

async function run () {
  const pic = await Nhtai-random.getImage({ tags: ['futanari'] })
  console.log(`here's your random hentai! ${pic}`)
}

run().catch(console.error)
```

## documentation

`getImage(options)`
* `options`
* * `tags` array `(default [])`

note: tags are based on `konachan.com` tags
