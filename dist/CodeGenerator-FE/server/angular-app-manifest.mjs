
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-ICKBICJN.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2QZQQG6E.js",
      "chunk-AKWOM4FG.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-REAIRM2M.js",
      "chunk-FZF4RZXG.js"
    ],
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LFVOMY5W.js",
      "chunk-AKWOM4FG.js",
      "chunk-FZF4RZXG.js"
    ],
    "route": "/code-type"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6GAHQXD2.js",
      "chunk-AKWOM4FG.js",
      "chunk-FZF4RZXG.js"
    ],
    "route": "/code-type-attribute"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FKRP32XP.js",
      "chunk-AKWOM4FG.js",
      "chunk-FZF4RZXG.js"
    ],
    "route": "/code-type-main"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PK7QKCCV.js",
      "chunk-AKWOM4FG.js",
      "chunk-FZF4RZXG.js"
    ],
    "route": "/code-details"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A2OIJIYB.js",
      "chunk-FZF4RZXG.js"
    ],
    "route": "/code-settings"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WC722KUP.js",
      "chunk-AKWOM4FG.js",
      "chunk-FZF4RZXG.js"
    ],
    "route": "/code-sequence"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NKHYSBGL.js",
      "chunk-AKWOM4FG.js",
      "chunk-FZF4RZXG.js"
    ],
    "route": "/code-generation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HZQ5DEXF.js"
    ],
    "route": "/settings"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 700, hash: 'e2034b2a12dba672c8bf573c7104beba1f71f80858fab441bcade73077f9de76', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1240, hash: '11d8b8b5c52c9f4cff4707e77bff028daa46b764ce72a9403dd87ac0d9a954fe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3743, hash: '9202c978c94e187f05933851a5b8f3268f61aa111f6d9ffde38b1994715064b1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
