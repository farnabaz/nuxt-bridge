import {joinURL} from 'ufo'
export default function() {
  const { nuxt } = this
  const versionBase = nuxt.options.generate.staticAssets.versionBase
    let generate = null
    nuxt.hook('generate:before', _generator => {
      generate = _generator
    })
    nuxt.hook('generate:page', page => {
      if (page.route.endsWith('payload.js')) {
        page.path = page.route
      } else {
        generate.routes.push({
          route: joinURL(versionBase, page.route, 'payload.js')
        })
      }
    })
}