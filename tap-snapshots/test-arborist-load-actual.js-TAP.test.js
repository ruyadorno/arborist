/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/arborist/load-actual.js TAP bundle > loaded tree 1`] = `
Node {
  "children": Map {
    "dep" => Node {
      "bundled": true,
      "edgesIn": Set {
        Edge {
          "from": "bundle",
          "name": "dep",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/dep",
      "name": "dep",
      "realpath": "bundle/node_modules/dep",
      "top": "bundle",
    },
  },
  "edgesOut": Map {
    "dep" => Edge {
      "name": "dep",
      "spec": "",
      "to": "bundle/node_modules/dep",
      "type": "prod",
    },
  },
  "location": "",
  "name": "bundle",
  "realpath": "bundle",
  "top": "bundle",
}
`

exports[`test/arborist/load-actual.js TAP cwd is default root > loaded tree 1`] = `
Node {
  "children": Map {
    "@scope/x" => Node {
      "children": Map {
        "glob" => Node {
          "children": Map {
            "graceful-fs" => Node {
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "graceful-fs",
                  "spec": "",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "name": "graceful-fs",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "top": "root",
            },
            "inherits" => Node {
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "inherits",
                  "spec": "",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "name": "inherits",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "top": "root",
            },
            "minimatch" => Node {
              "children": Map {
                "lru-cache" => Node {
                  "edgesIn": Set {
                    Edge {
                      "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                      "name": "lru-cache",
                      "spec": "",
                      "type": "prod",
                    },
                  },
                  "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "name": "lru-cache",
                  "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "top": "root",
                },
                "sigmund" => Node {
                  "edgesIn": Set {
                    Edge {
                      "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                      "name": "sigmund",
                      "spec": "",
                      "type": "prod",
                    },
                  },
                  "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "name": "sigmund",
                  "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "top": "root",
                },
              },
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "minimatch",
                  "spec": "",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "lru-cache" => Edge {
                  "name": "lru-cache",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "type": "prod",
                },
                "once" => Edge {
                  "name": "once",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
                  "type": "prod",
                },
                "sigmund" => Edge {
                  "name": "sigmund",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "name": "minimatch",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "top": "root",
            },
            "once" => Node {
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "once",
                  "spec": "",
                  "type": "prod",
                },
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                  "name": "once",
                  "spec": "",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/once",
              "name": "once",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
              "top": "root",
            },
          },
          "edgesIn": Set {
            Edge {
              "from": "root/node_modules/@scope/x",
              "name": "glob",
              "spec": "4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => Edge {
              "name": "graceful-fs",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "type": "prod",
            },
            "inherits" => Edge {
              "name": "inherits",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "type": "prod",
            },
            "minimatch" => Edge {
              "name": "minimatch",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "type": "prod",
            },
            "once" => Edge {
              "name": "once",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
              "type": "prod",
            },
          },
          "location": "node_modules/@scope/x/node_modules/glob",
          "name": "glob",
          "realpath": "root/node_modules/@scope/x/node_modules/glob",
          "top": "root",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "root",
          "name": "@scope/x",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "root/node_modules/@scope/x",
          "name": "@scope/x",
          "spec": "",
          "type": "peer",
        },
        Edge {
          "from": "root/node_modules/foo",
          "name": "@scope/x",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "spec": "",
          "to": "root/node_modules/@scope/x",
          "type": "peer",
        },
        "@scope/y" => Edge {
          "name": "@scope/y",
          "spec": "",
          "to": "root/node_modules/@scope/y",
          "type": "optional",
        },
        "express" => Edge {
          "error": "MISSING",
          "name": "express",
          "spec": "420.69.0-nice",
          "to": null,
          "type": "peer",
        },
        "glob" => Edge {
          "name": "glob",
          "spec": "4",
          "to": "root/node_modules/@scope/x/node_modules/glob",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/x",
      "name": "@scope/x",
      "realpath": "root/node_modules/@scope/x",
      "top": "root",
    },
    "@scope/y" => Node {
      "edgesIn": Set {
        Edge {
          "from": "root",
          "name": "@scope/y",
          "spec": ">0.99.0",
          "type": "peer",
        },
        Edge {
          "from": "root/node_modules/@scope/x",
          "name": "@scope/y",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "error": "INVALID",
          "name": "foo",
          "spec": "99.x",
          "to": "root/node_modules/foo",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/y",
      "name": "@scope/y",
      "realpath": "root/node_modules/@scope/y",
      "top": "root",
    },
    "foo" => Node {
      "children": Map {
        "express" => Node {
          "edgesIn": Set {
            Edge {
              "from": "root/node_modules/foo",
              "name": "express",
              "spec": "npm:abbrev@*",
              "type": "prod",
            },
          },
          "location": "node_modules/foo/node_modules/express",
          "name": "express",
          "realpath": "root/node_modules/foo/node_modules/express",
          "top": "root",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "root",
          "name": "foo",
          "spec": "*",
          "type": "dev",
        },
        Edge {
          "error": "INVALID",
          "from": "root/node_modules/@scope/y",
          "name": "foo",
          "spec": "99.x",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "spec": "",
          "to": "root/node_modules/@scope/x",
          "type": "optional",
        },
        "express" => Edge {
          "name": "express",
          "spec": "npm:abbrev@*",
          "to": "root/node_modules/foo/node_modules/express",
          "type": "prod",
        },
      },
      "location": "node_modules/foo",
      "name": "foo",
      "realpath": "root/node_modules/foo",
      "top": "root",
    },
  },
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "spec": "1",
      "to": "root/node_modules/@scope/x",
      "type": "prod",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "spec": ">0.99.0",
      "to": "root/node_modules/@scope/y",
      "type": "peer",
    },
    "foo" => Edge {
      "name": "foo",
      "spec": "*",
      "to": "root/node_modules/foo",
      "type": "dev",
    },
    "notinstalledhere" => Edge {
      "name": "notinstalledhere",
      "spec": "",
      "to": null,
      "type": "optional",
    },
  },
  "location": "",
  "name": "root",
  "realpath": "root",
  "top": "root",
}
`

exports[`test/arborist/load-actual.js TAP deepmixedloop > loaded tree 1`] = `
Node {
  "children": Map {
    "a" => Node {
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop/node_modules/z",
          "name": "a",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "",
          "to": "deepmixedloop/node_modules/b",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "optional": true,
      "realpath": "deepmixedloop/node_modules/a",
      "top": "deepmixedloop",
    },
    "b" => Node {
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop/node_modules/a",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "spec": "",
          "to": "deepmixedloop/node_modules/c",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "optional": true,
      "realpath": "deepmixedloop/node_modules/b",
      "top": "deepmixedloop",
    },
    "c" => Node {
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop/node_modules/b",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "spec": "",
          "to": "deepmixedloop/node_modules/d",
          "type": "prod",
        },
      },
      "location": "node_modules/c",
      "name": "c",
      "optional": true,
      "realpath": "deepmixedloop/node_modules/c",
      "top": "deepmixedloop",
    },
    "d" => Node {
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop/node_modules/c",
          "name": "d",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "spec": "",
          "to": "deepmixedloop/node_modules/e",
          "type": "prod",
        },
      },
      "location": "node_modules/d",
      "name": "d",
      "optional": true,
      "realpath": "deepmixedloop/node_modules/d",
      "top": "deepmixedloop",
    },
    "e" => Node {
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop/node_modules/d",
          "name": "e",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/e",
      "name": "e",
      "optional": true,
      "realpath": "deepmixedloop/node_modules/e",
      "top": "deepmixedloop",
    },
    "i" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop",
          "name": "i",
          "spec": "",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "j" => Edge {
          "name": "j",
          "spec": "",
          "to": "deepmixedloop/node_modules/j",
          "type": "prod",
        },
      },
      "location": "node_modules/i",
      "name": "i",
      "realpath": "deepmixedloop/node_modules/i",
      "top": "deepmixedloop",
    },
    "j" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop/node_modules/i",
          "name": "j",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "k" => Edge {
          "name": "k",
          "spec": "",
          "to": "deepmixedloop/node_modules/k",
          "type": "prod",
        },
      },
      "location": "node_modules/j",
      "name": "j",
      "realpath": "deepmixedloop/node_modules/j",
      "top": "deepmixedloop",
    },
    "k" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop/node_modules/j",
          "name": "k",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/k",
      "name": "k",
      "realpath": "deepmixedloop/node_modules/k",
      "top": "deepmixedloop",
    },
    "x" => Node {
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop",
          "name": "x",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "y" => Edge {
          "name": "y",
          "spec": "",
          "to": "deepmixedloop/node_modules/y",
          "type": "prod",
        },
      },
      "location": "node_modules/x",
      "name": "x",
      "realpath": "deepmixedloop/node_modules/x",
      "top": "deepmixedloop",
    },
    "y" => Node {
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop/node_modules/x",
          "name": "y",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "z" => Edge {
          "name": "z",
          "spec": "",
          "to": "deepmixedloop/node_modules/z",
          "type": "prod",
        },
      },
      "location": "node_modules/y",
      "name": "y",
      "realpath": "deepmixedloop/node_modules/y",
      "top": "deepmixedloop",
    },
    "z" => Node {
      "edgesIn": Set {
        Edge {
          "from": "deepmixedloop/node_modules/y",
          "name": "z",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "spec": "",
          "to": "deepmixedloop/node_modules/a",
          "type": "optional",
        },
      },
      "location": "node_modules/z",
      "name": "z",
      "realpath": "deepmixedloop/node_modules/z",
      "top": "deepmixedloop",
    },
  },
  "edgesOut": Map {
    "i" => Edge {
      "name": "i",
      "spec": "",
      "to": "deepmixedloop/node_modules/i",
      "type": "dev",
    },
    "x" => Edge {
      "name": "x",
      "spec": "",
      "to": "deepmixedloop/node_modules/x",
      "type": "prod",
    },
  },
  "location": "",
  "name": "deepmixedloop",
  "realpath": "deepmixedloop",
  "top": "deepmixedloop",
}
`

exports[`test/arborist/load-actual.js TAP deeproot/root > loaded tree 1`] = `
Link {
  "location": "",
  "name": "root",
  "realpath": "root",
  "target": Object {
    "name": "root",
  },
  "top": "root",
}
`

exports[`test/arborist/load-actual.js TAP devloop > loaded tree 1`] = `
Node {
  "children": Map {
    "a" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "devloop",
          "name": "a",
          "spec": "",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "",
          "to": "devloop/node_modules/b",
          "type": "prod",
        },
        "d" => Edge {
          "name": "d",
          "spec": "",
          "to": "devloop/node_modules/d",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "realpath": "devloop/node_modules/a",
      "top": "devloop",
    },
    "b" => Node {
      "edgesIn": Set {
        Edge {
          "from": "devloop/node_modules/a",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "devloop/node_modules/d",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "realpath": "devloop/node_modules/b",
      "top": "devloop",
    },
    "c" => Node {
      "edgesIn": Set {
        Edge {
          "from": "devloop",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "spec": "",
          "to": "devloop/node_modules/d",
          "type": "prod",
        },
      },
      "location": "node_modules/c",
      "name": "c",
      "realpath": "devloop/node_modules/c",
      "top": "devloop",
    },
    "d" => Node {
      "edgesIn": Set {
        Edge {
          "from": "devloop/node_modules/a",
          "name": "d",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "devloop/node_modules/c",
          "name": "d",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "",
          "to": "devloop/node_modules/b",
          "type": "prod",
        },
      },
      "location": "node_modules/d",
      "name": "d",
      "realpath": "devloop/node_modules/d",
      "top": "devloop",
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "",
      "to": "devloop/node_modules/a",
      "type": "dev",
    },
    "c" => Edge {
      "name": "c",
      "spec": "",
      "to": "devloop/node_modules/c",
      "type": "prod",
    },
  },
  "location": "",
  "name": "devloop",
  "realpath": "devloop",
  "top": "devloop",
}
`

exports[`test/arborist/load-actual.js TAP install-types > loaded tree 1`] = `
Node {
  "children": Map {
    "abbrev" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types",
          "name": "abbrev",
          "spec": "^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/abbrev",
      "name": "abbrev",
      "realpath": "install-types/node_modules/abbrev",
      "top": "install-types",
    },
    "balanced-match" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/brace-expansion",
          "name": "balanced-match",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/balanced-match",
      "name": "balanced-match",
      "realpath": "install-types/node_modules/balanced-match",
      "top": "install-types",
    },
    "brace-expansion" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/minimatch",
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "balanced-match" => Edge {
          "name": "balanced-match",
          "spec": "^1.0.0",
          "to": "install-types/node_modules/balanced-match",
          "type": "prod",
        },
        "concat-map" => Edge {
          "name": "concat-map",
          "spec": "0.0.1",
          "to": "install-types/node_modules/concat-map",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/brace-expansion",
      "name": "brace-expansion",
      "realpath": "install-types/node_modules/brace-expansion",
      "top": "install-types",
    },
    "bundler" => Node {
      "children": Map {
        "a" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "install-types/node_modules/bundler",
              "name": "a",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "spec": "",
              "to": "install-types/node_modules/bundler/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/a",
          "name": "a",
          "realpath": "install-types/node_modules/bundler/node_modules/a",
          "top": "install-types",
        },
        "b" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "install-types/node_modules/bundler/node_modules/a",
              "name": "b",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "c" => Edge {
              "name": "c",
              "spec": "",
              "to": "install-types/node_modules/bundler/node_modules/c",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/b",
          "name": "b",
          "realpath": "install-types/node_modules/bundler/node_modules/b",
          "top": "install-types",
        },
        "c" => Node {
          "bundled": true,
          "edgesIn": Set {
            Edge {
              "from": "install-types/node_modules/bundler/node_modules/b",
              "name": "c",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "node_modules/bundler/node_modules/c",
          "name": "c",
          "realpath": "install-types/node_modules/bundler/node_modules/c",
          "top": "install-types",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "install-types",
          "name": "bundler",
          "spec": "1.2.3",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "spec": "",
          "to": "install-types/node_modules/bundler/node_modules/a",
          "type": "prod",
        },
      },
      "location": "node_modules/bundler",
      "name": "bundler",
      "realpath": "install-types/node_modules/bundler",
      "top": "install-types",
    },
    "concat-map" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/brace-expansion",
          "name": "concat-map",
          "spec": "0.0.1",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/concat-map",
      "name": "concat-map",
      "realpath": "install-types/node_modules/concat-map",
      "top": "install-types",
    },
    "fs.realpath" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/glob",
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/fs.realpath",
      "name": "fs.realpath",
      "realpath": "install-types/node_modules/fs.realpath",
      "top": "install-types",
    },
    "full-git-url" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types",
          "name": "full-git-url",
          "spec": "git+https://github.com/isaacs/abbrev-js.git",
          "type": "prod",
        },
      },
      "location": "node_modules/full-git-url",
      "name": "full-git-url",
      "realpath": "install-types/node_modules/full-git-url",
      "top": "install-types",
    },
    "ghshort" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types",
          "name": "ghshort",
          "spec": "github:isaacs/abbrev-js",
          "type": "prod",
        },
      },
      "location": "node_modules/ghshort",
      "name": "ghshort",
      "realpath": "install-types/node_modules/ghshort",
      "top": "install-types",
    },
    "ghtgz" => Node {
      "extraneous": true,
      "location": "node_modules/ghtgz",
      "name": "ghtgz",
      "realpath": "install-types/node_modules/ghtgz",
      "top": "install-types",
    },
    "glob" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/rimraf",
          "name": "glob",
          "spec": "^7.1.3",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "fs.realpath" => Edge {
          "name": "fs.realpath",
          "spec": "^1.0.0",
          "to": "install-types/node_modules/fs.realpath",
          "type": "prod",
        },
        "inflight" => Edge {
          "name": "inflight",
          "spec": "^1.0.4",
          "to": "install-types/node_modules/inflight",
          "type": "prod",
        },
        "inherits" => Edge {
          "name": "inherits",
          "spec": "2",
          "to": "install-types/node_modules/inherits",
          "type": "prod",
        },
        "minimatch" => Edge {
          "name": "minimatch",
          "spec": "^3.0.4",
          "to": "install-types/node_modules/minimatch",
          "type": "prod",
        },
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "install-types/node_modules/once",
          "type": "prod",
        },
        "path-is-absolute" => Edge {
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "to": "install-types/node_modules/path-is-absolute",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/glob",
      "name": "glob",
      "realpath": "install-types/node_modules/glob",
      "top": "install-types",
    },
    "inflight" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/glob",
          "name": "inflight",
          "spec": "^1.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "once" => Edge {
          "name": "once",
          "spec": "^1.3.0",
          "to": "install-types/node_modules/once",
          "type": "prod",
        },
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "install-types/node_modules/wrappy",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/inflight",
      "name": "inflight",
      "realpath": "install-types/node_modules/inflight",
      "top": "install-types",
    },
    "inherits" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/glob",
          "name": "inherits",
          "spec": "2",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/inherits",
      "name": "inherits",
      "realpath": "install-types/node_modules/inherits",
      "top": "install-types",
    },
    "minimatch" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/glob",
          "name": "minimatch",
          "spec": "^3.0.4",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "brace-expansion" => Edge {
          "name": "brace-expansion",
          "spec": "^1.1.7",
          "to": "install-types/node_modules/brace-expansion",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/minimatch",
      "name": "minimatch",
      "realpath": "install-types/node_modules/minimatch",
      "top": "install-types",
    },
    "old" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types",
          "name": "old",
          "spec": "npm:abbrev@^1.0.3",
          "type": "prod",
        },
      },
      "location": "node_modules/old",
      "name": "old",
      "realpath": "install-types/node_modules/old",
      "top": "install-types",
    },
    "once" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/glob",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
        Edge {
          "from": "install-types/node_modules/inflight",
          "name": "once",
          "spec": "^1.3.0",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "wrappy" => Edge {
          "name": "wrappy",
          "spec": "1",
          "to": "install-types/node_modules/wrappy",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/once",
      "name": "once",
      "realpath": "install-types/node_modules/once",
      "top": "install-types",
    },
    "path-is-absolute" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/glob",
          "name": "path-is-absolute",
          "spec": "^1.0.0",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/path-is-absolute",
      "name": "path-is-absolute",
      "realpath": "install-types/node_modules/path-is-absolute",
      "top": "install-types",
    },
    "pinned" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types",
          "name": "pinned",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/pinned",
      "name": "pinned",
      "realpath": "install-types/node_modules/pinned",
      "top": "install-types",
    },
    "reg" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types",
          "name": "reg",
          "spec": "npm:abbrev@^1.1.1",
          "type": "prod",
        },
      },
      "location": "node_modules/reg",
      "name": "reg",
      "realpath": "install-types/node_modules/reg",
      "top": "install-types",
    },
    "remote" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types",
          "name": "remote",
          "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/remote",
      "name": "remote",
      "realpath": "install-types/node_modules/remote",
      "top": "install-types",
    },
    "rimraf" => Node {
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "^7.1.3",
          "to": "install-types/node_modules/glob",
          "type": "optional",
        },
      },
      "extraneous": true,
      "location": "node_modules/rimraf",
      "name": "rimraf",
      "realpath": "install-types/node_modules/rimraf",
      "top": "install-types",
    },
    "symlink" => Link {
      "edgesIn": Set {
        Edge {
          "from": "install-types",
          "name": "symlink",
          "spec": "file:./abbrev-link-target",
          "type": "prod",
        },
      },
      "location": "node_modules/symlink",
      "name": "symlink",
      "realpath": "install-types/abbrev-link-target",
      "target": Object {
        "fsParent": "install-types",
        "name": "abbrev-link-target",
      },
      "top": "install-types",
    },
    "tarball" => Node {
      "edgesIn": Set {
        Edge {
          "error": "INVALID",
          "from": "install-types",
          "name": "tarball",
          "spec": "file:abbrev-1.1.1.tgz",
          "type": "prod",
        },
      },
      "location": "node_modules/tarball",
      "name": "tarball",
      "realpath": "install-types/node_modules/tarball",
      "top": "install-types",
    },
    "wrappy" => Node {
      "edgesIn": Set {
        Edge {
          "from": "install-types/node_modules/inflight",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "install-types/node_modules/once",
          "name": "wrappy",
          "spec": "1",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/wrappy",
      "name": "wrappy",
      "realpath": "install-types/node_modules/wrappy",
      "top": "install-types",
    },
  },
  "edgesOut": Map {
    "abbrev" => Edge {
      "name": "abbrev",
      "spec": "^1.1.1",
      "to": "install-types/node_modules/abbrev",
      "type": "prod",
    },
    "bundler" => Edge {
      "name": "bundler",
      "spec": "1.2.3",
      "to": "install-types/node_modules/bundler",
      "type": "prod",
    },
    "full-git-url" => Edge {
      "name": "full-git-url",
      "spec": "git+https://github.com/isaacs/abbrev-js.git",
      "to": "install-types/node_modules/full-git-url",
      "type": "prod",
    },
    "ghshort" => Edge {
      "name": "ghshort",
      "spec": "github:isaacs/abbrev-js",
      "to": "install-types/node_modules/ghshort",
      "type": "prod",
    },
    "old" => Edge {
      "name": "old",
      "spec": "npm:abbrev@^1.0.3",
      "to": "install-types/node_modules/old",
      "type": "prod",
    },
    "pinned" => Edge {
      "name": "pinned",
      "spec": "npm:abbrev@^1.1.1",
      "to": "install-types/node_modules/pinned",
      "type": "prod",
    },
    "reg" => Edge {
      "name": "reg",
      "spec": "npm:abbrev@^1.1.1",
      "to": "install-types/node_modules/reg",
      "type": "prod",
    },
    "remote" => Edge {
      "name": "remote",
      "spec": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "to": "install-types/node_modules/remote",
      "type": "prod",
    },
    "symlink" => Edge {
      "name": "symlink",
      "spec": "file:./abbrev-link-target",
      "to": "install-types/abbrev-link-target",
      "type": "prod",
    },
    "tarball" => Edge {
      "error": "INVALID",
      "name": "tarball",
      "spec": "file:abbrev-1.1.1.tgz",
      "to": "install-types/node_modules/tarball",
      "type": "prod",
    },
  },
  "location": "",
  "name": "install-types",
  "realpath": "install-types",
  "top": "install-types",
}
`

exports[`test/arborist/load-actual.js TAP linkedroot > loaded tree 1`] = `
Link {
  "location": "",
  "name": "linkedroot",
  "realpath": "root",
  "target": Object {
    "name": "root",
  },
  "top": "root",
}
`

exports[`test/arborist/load-actual.js TAP links-all-over > loaded tree 1`] = `
Node {
  "children": Map {
    "link-deep" => Link {
      "edgesIn": Set {
        Edge {
          "from": "links-all-over",
          "name": "link-deep",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/link-deep",
      "name": "link-deep",
      "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
      "target": Object {
        "name": "deep",
        "parent": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d",
      },
      "top": "links-all-over",
    },
    "link-link" => Link {
      "edgesIn": Set {
        Edge {
          "from": "links-all-over",
          "name": "link-link",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "links-all-over/real",
          "name": "link-link",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/link-link",
      "name": "link-link",
      "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
      "target": Object {
        "name": "deep",
        "parent": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d",
      },
      "top": "links-all-over",
    },
    "link-outside-nest" => Link {
      "edgesIn": Set {
        Edge {
          "from": "links-all-over",
          "name": "link-outside-nest",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/link-outside-nest",
      "name": "link-outside-nest",
      "realpath": "links-all-over/real",
      "target": Object {
        "fsParent": "links-all-over",
        "name": "real",
      },
      "top": "links-all-over",
    },
    "nest" => Node {
      "children": Map {
        "a" => Node {
          "children": Map {
            "b" => Node {
              "children": Map {
                "c" => Node {
                  "children": Map {
                    "d" => Node {
                      "children": Map {
                        "deep" => Node {
                          "children": Map {
                            "deep-a" => Node {
                              "edgesIn": Set {
                                Edge {
                                  "from": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
                                  "name": "deep-a",
                                  "spec": "",
                                  "type": "prod",
                                },
                              },
                              "location": "node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep/node_modules/deep-a",
                              "name": "deep-a",
                              "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep/node_modules/deep-a",
                              "top": "links-all-over",
                            },
                          },
                          "edgesIn": Set {
                            Edge {
                              "from": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d",
                              "name": "deep",
                              "spec": "",
                              "type": "prod",
                            },
                          },
                          "edgesOut": Map {
                            "a" => Edge {
                              "name": "a",
                              "spec": "",
                              "to": "links-all-over/node_modules/nest/node_modules/a",
                              "type": "prod",
                            },
                            "deep-a" => Edge {
                              "name": "deep-a",
                              "spec": "",
                              "to": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep/node_modules/deep-a",
                              "type": "prod",
                            },
                          },
                          "location": "node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
                          "name": "deep",
                          "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
                          "top": "links-all-over",
                        },
                      },
                      "edgesIn": Set {
                        Edge {
                          "from": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c",
                          "name": "d",
                          "spec": "",
                          "type": "prod",
                        },
                      },
                      "edgesOut": Map {
                        "deep" => Edge {
                          "name": "deep",
                          "spec": "",
                          "to": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
                          "type": "prod",
                        },
                      },
                      "extraneous": true,
                      "location": "node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d",
                      "name": "d",
                      "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d",
                      "top": "links-all-over",
                    },
                  },
                  "edgesOut": Map {
                    "d" => Edge {
                      "name": "d",
                      "spec": "",
                      "to": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d",
                      "type": "prod",
                    },
                  },
                  "extraneous": true,
                  "location": "node_modules/nest/node_modules/a/node_modules/b/node_modules/c",
                  "name": "c",
                  "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c",
                  "top": "links-all-over",
                },
              },
              "edgesIn": Set {
                Edge {
                  "from": "links-all-over/node_modules/nest/node_modules/a",
                  "name": "b",
                  "spec": "",
                  "type": "prod",
                },
              },
              "errors": Array [
                Object {
                  "code": "EJSONPARSE",
                  "path": "../fixtures/links-all-over/node_modules/nest/node_modules/a/node_modules/b/package.json",
                },
              ],
              "location": "node_modules/nest/node_modules/a/node_modules/b",
              "name": "b",
              "realpath": "links-all-over/node_modules/nest/node_modules/a/node_modules/b",
              "top": "links-all-over",
            },
          },
          "edgesIn": Set {
            Edge {
              "from": "links-all-over/node_modules/nest",
              "name": "a",
              "spec": "",
              "type": "prod",
            },
            Edge {
              "from": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
              "name": "a",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "spec": "",
              "to": "links-all-over/node_modules/nest/node_modules/a/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/nest/node_modules/a",
          "name": "a",
          "realpath": "links-all-over/node_modules/nest/node_modules/a",
          "top": "links-all-over",
        },
        "link-in-nest" => Link {
          "edgesIn": Set {
            Edge {
              "from": "links-all-over/node_modules/nest",
              "name": "link-in-nest",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "node_modules/nest/node_modules/link-in-nest",
          "name": "link-in-nest",
          "realpath": "links-all-over/real",
          "target": Object {
            "fsParent": "links-all-over",
            "name": "real",
          },
          "top": "links-all-over",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "links-all-over",
          "name": "nest",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "a" => Edge {
          "name": "a",
          "spec": "",
          "to": "links-all-over/node_modules/nest/node_modules/a",
          "type": "prod",
        },
        "link-in-nest" => Edge {
          "name": "link-in-nest",
          "spec": "",
          "to": "links-all-over/real",
          "type": "prod",
        },
      },
      "location": "node_modules/nest",
      "name": "nest",
      "realpath": "links-all-over/node_modules/nest",
      "top": "links-all-over",
    },
  },
  "edgesOut": Map {
    "link-deep" => Edge {
      "name": "link-deep",
      "spec": "",
      "to": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
      "type": "prod",
    },
    "link-link" => Edge {
      "name": "link-link",
      "spec": "",
      "to": "links-all-over/node_modules/nest/node_modules/a/node_modules/b/node_modules/c/node_modules/d/node_modules/deep",
      "type": "prod",
    },
    "link-outside-nest" => Edge {
      "name": "link-outside-nest",
      "spec": "",
      "to": "links-all-over/real",
      "type": "prod",
    },
    "nest" => Edge {
      "name": "nest",
      "spec": "",
      "to": "links-all-over/node_modules/nest",
      "type": "prod",
    },
  },
  "location": "",
  "name": "links-all-over",
  "realpath": "links-all-over",
  "top": "links-all-over",
}
`

exports[`test/arborist/load-actual.js TAP looking outside of cwd > loaded tree 1`] = `
Node {
  "children": Map {
    "@scope/x" => Node {
      "children": Map {
        "glob" => Node {
          "children": Map {
            "graceful-fs" => Node {
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "graceful-fs",
                  "spec": "",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "name": "graceful-fs",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "top": "root",
            },
            "inherits" => Node {
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "inherits",
                  "spec": "",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "name": "inherits",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "top": "root",
            },
            "minimatch" => Node {
              "children": Map {
                "lru-cache" => Node {
                  "edgesIn": Set {
                    Edge {
                      "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                      "name": "lru-cache",
                      "spec": "",
                      "type": "prod",
                    },
                  },
                  "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "name": "lru-cache",
                  "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "top": "root",
                },
                "sigmund" => Node {
                  "edgesIn": Set {
                    Edge {
                      "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                      "name": "sigmund",
                      "spec": "",
                      "type": "prod",
                    },
                  },
                  "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "name": "sigmund",
                  "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "top": "root",
                },
              },
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "minimatch",
                  "spec": "",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "lru-cache" => Edge {
                  "name": "lru-cache",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "type": "prod",
                },
                "once" => Edge {
                  "name": "once",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
                  "type": "prod",
                },
                "sigmund" => Edge {
                  "name": "sigmund",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "name": "minimatch",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "top": "root",
            },
            "once" => Node {
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "once",
                  "spec": "",
                  "type": "prod",
                },
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                  "name": "once",
                  "spec": "",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/once",
              "name": "once",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
              "top": "root",
            },
          },
          "edgesIn": Set {
            Edge {
              "from": "root/node_modules/@scope/x",
              "name": "glob",
              "spec": "4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => Edge {
              "name": "graceful-fs",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "type": "prod",
            },
            "inherits" => Edge {
              "name": "inherits",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "type": "prod",
            },
            "minimatch" => Edge {
              "name": "minimatch",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "type": "prod",
            },
            "once" => Edge {
              "name": "once",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
              "type": "prod",
            },
          },
          "location": "node_modules/@scope/x/node_modules/glob",
          "name": "glob",
          "realpath": "root/node_modules/@scope/x/node_modules/glob",
          "top": "root",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "root",
          "name": "@scope/x",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "root/node_modules/@scope/x",
          "name": "@scope/x",
          "spec": "",
          "type": "peer",
        },
        Edge {
          "from": "root/node_modules/foo",
          "name": "@scope/x",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "spec": "",
          "to": "root/node_modules/@scope/x",
          "type": "peer",
        },
        "@scope/y" => Edge {
          "name": "@scope/y",
          "spec": "",
          "to": "root/node_modules/@scope/y",
          "type": "optional",
        },
        "express" => Edge {
          "error": "MISSING",
          "name": "express",
          "spec": "420.69.0-nice",
          "to": null,
          "type": "peer",
        },
        "glob" => Edge {
          "name": "glob",
          "spec": "4",
          "to": "root/node_modules/@scope/x/node_modules/glob",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/x",
      "name": "@scope/x",
      "realpath": "root/node_modules/@scope/x",
      "top": "root",
    },
    "@scope/y" => Node {
      "edgesIn": Set {
        Edge {
          "from": "root",
          "name": "@scope/y",
          "spec": ">0.99.0",
          "type": "peer",
        },
        Edge {
          "from": "root/node_modules/@scope/x",
          "name": "@scope/y",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "error": "INVALID",
          "name": "foo",
          "spec": "99.x",
          "to": "root/node_modules/foo",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/y",
      "name": "@scope/y",
      "realpath": "root/node_modules/@scope/y",
      "top": "root",
    },
    "foo" => Node {
      "children": Map {
        "express" => Node {
          "edgesIn": Set {
            Edge {
              "from": "root/node_modules/foo",
              "name": "express",
              "spec": "npm:abbrev@*",
              "type": "prod",
            },
          },
          "location": "node_modules/foo/node_modules/express",
          "name": "express",
          "realpath": "root/node_modules/foo/node_modules/express",
          "top": "root",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "root",
          "name": "foo",
          "spec": "*",
          "type": "dev",
        },
        Edge {
          "error": "INVALID",
          "from": "root/node_modules/@scope/y",
          "name": "foo",
          "spec": "99.x",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "spec": "",
          "to": "root/node_modules/@scope/x",
          "type": "optional",
        },
        "express" => Edge {
          "name": "express",
          "spec": "npm:abbrev@*",
          "to": "root/node_modules/foo/node_modules/express",
          "type": "prod",
        },
      },
      "location": "node_modules/foo",
      "name": "foo",
      "realpath": "root/node_modules/foo",
      "top": "root",
    },
  },
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "spec": "1",
      "to": "root/node_modules/@scope/x",
      "type": "prod",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "spec": ">0.99.0",
      "to": "root/node_modules/@scope/y",
      "type": "peer",
    },
    "foo" => Edge {
      "name": "foo",
      "spec": "*",
      "to": "root/node_modules/foo",
      "type": "dev",
    },
    "notinstalledhere" => Edge {
      "name": "notinstalledhere",
      "spec": "",
      "to": null,
      "type": "optional",
    },
  },
  "location": "",
  "name": "root",
  "realpath": "root",
  "top": "root",
}
`

exports[`test/arborist/load-actual.js TAP mixedloop > loaded tree 1`] = `
Node {
  "children": Map {
    "a" => Node {
      "edgesIn": Set {
        Edge {
          "from": "mixedloop",
          "name": "a",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "",
          "to": "mixedloop/node_modules/b",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "optional": true,
      "realpath": "mixedloop/node_modules/a",
      "top": "mixedloop",
    },
    "b" => Node {
      "edgesIn": Set {
        Edge {
          "from": "mixedloop/node_modules/a",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "spec": "",
          "to": "mixedloop/node_modules/c",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "optional": true,
      "realpath": "mixedloop/node_modules/b",
      "top": "mixedloop",
    },
    "c" => Node {
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "from": "mixedloop",
          "name": "c",
          "spec": "",
          "type": "dev",
        },
        Edge {
          "from": "mixedloop/node_modules/b",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "spec": "",
          "to": "mixedloop/node_modules/d",
          "type": "prod",
        },
      },
      "location": "node_modules/c",
      "name": "c",
      "realpath": "mixedloop/node_modules/c",
      "top": "mixedloop",
    },
    "d" => Node {
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "from": "mixedloop/node_modules/c",
          "name": "d",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "spec": "",
          "to": "mixedloop/node_modules/e",
          "type": "prod",
        },
      },
      "location": "node_modules/d",
      "name": "d",
      "realpath": "mixedloop/node_modules/d",
      "top": "mixedloop",
    },
    "e" => Node {
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "from": "mixedloop/node_modules/d",
          "name": "e",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/e",
      "name": "e",
      "realpath": "mixedloop/node_modules/e",
      "top": "mixedloop",
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "",
      "to": "mixedloop/node_modules/a",
      "type": "optional",
    },
    "c" => Edge {
      "name": "c",
      "spec": "",
      "to": "mixedloop/node_modules/c",
      "type": "dev",
    },
  },
  "location": "",
  "name": "mixedloop",
  "realpath": "mixedloop",
  "top": "mixedloop",
}
`

exports[`test/arborist/load-actual.js TAP mixedmidway > loaded tree 1`] = `
Node {
  "children": Map {
    "a" => Node {
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway",
          "name": "a",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "",
          "to": "mixedmidway/node_modules/b",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "optional": true,
      "realpath": "mixedmidway/node_modules/a",
      "top": "mixedmidway",
    },
    "b" => Node {
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway",
          "name": "b",
          "spec": "",
          "type": "optional",
        },
        Edge {
          "from": "mixedmidway/node_modules/a",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "mixedmidway/node_modules/n",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "spec": "",
          "to": "mixedmidway/node_modules/c",
          "type": "prod",
        },
        "j" => Edge {
          "name": "j",
          "spec": "",
          "to": "mixedmidway/node_modules/j",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "optional": true,
      "realpath": "mixedmidway/node_modules/b",
      "top": "mixedmidway",
    },
    "c" => Node {
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway",
          "name": "c",
          "spec": "",
          "type": "optional",
        },
        Edge {
          "from": "mixedmidway/node_modules/b",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "mixedmidway/node_modules/k",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/c",
      "name": "c",
      "realpath": "mixedmidway/node_modules/c",
      "top": "mixedmidway",
    },
    "i" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway",
          "name": "i",
          "spec": "",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "j" => Edge {
          "name": "j",
          "spec": "",
          "to": "mixedmidway/node_modules/j",
          "type": "prod",
        },
      },
      "location": "node_modules/i",
      "name": "i",
      "realpath": "mixedmidway/node_modules/i",
      "top": "mixedmidway",
    },
    "j" => Node {
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway/node_modules/b",
          "name": "j",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "mixedmidway/node_modules/i",
          "name": "j",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "mixedmidway/node_modules/n",
          "name": "j",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "k" => Edge {
          "name": "k",
          "spec": "",
          "to": "mixedmidway/node_modules/k",
          "type": "prod",
        },
      },
      "location": "node_modules/j",
      "name": "j",
      "realpath": "mixedmidway/node_modules/j",
      "top": "mixedmidway",
    },
    "k" => Node {
      "devOptional": true,
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway",
          "name": "k",
          "spec": "",
          "type": "optional",
        },
        Edge {
          "from": "mixedmidway/node_modules/j",
          "name": "k",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "spec": "",
          "to": "mixedmidway/node_modules/c",
          "type": "prod",
        },
      },
      "location": "node_modules/k",
      "name": "k",
      "realpath": "mixedmidway/node_modules/k",
      "top": "mixedmidway",
    },
    "l" => Node {
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway",
          "name": "l",
          "spec": "",
          "type": "optional",
        },
        Edge {
          "from": "mixedmidway/node_modules/z",
          "name": "l",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "m" => Edge {
          "name": "m",
          "spec": "",
          "to": "mixedmidway/node_modules/m",
          "type": "prod",
        },
      },
      "location": "node_modules/l",
      "name": "l",
      "realpath": "mixedmidway/node_modules/l",
      "top": "mixedmidway",
    },
    "m" => Node {
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway",
          "name": "m",
          "spec": "",
          "type": "optional",
        },
        Edge {
          "from": "mixedmidway/node_modules/l",
          "name": "m",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/m",
      "name": "m",
      "realpath": "mixedmidway/node_modules/m",
      "top": "mixedmidway",
    },
    "n" => Node {
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "",
          "to": "mixedmidway/node_modules/b",
          "type": "prod",
        },
        "j" => Edge {
          "name": "j",
          "spec": "",
          "to": "mixedmidway/node_modules/j",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/n",
      "name": "n",
      "realpath": "mixedmidway/node_modules/n",
      "top": "mixedmidway",
    },
    "x" => Node {
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway",
          "name": "x",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "y" => Edge {
          "name": "y",
          "spec": "",
          "to": "mixedmidway/node_modules/y",
          "type": "prod",
        },
      },
      "location": "node_modules/x",
      "name": "x",
      "realpath": "mixedmidway/node_modules/x",
      "top": "mixedmidway",
    },
    "y" => Node {
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway",
          "name": "y",
          "spec": "",
          "type": "optional",
        },
        Edge {
          "from": "mixedmidway/node_modules/x",
          "name": "y",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "z" => Edge {
          "name": "z",
          "spec": "",
          "to": "mixedmidway/node_modules/z",
          "type": "prod",
        },
      },
      "location": "node_modules/y",
      "name": "y",
      "realpath": "mixedmidway/node_modules/y",
      "top": "mixedmidway",
    },
    "z" => Node {
      "edgesIn": Set {
        Edge {
          "from": "mixedmidway/node_modules/y",
          "name": "z",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "l" => Edge {
          "name": "l",
          "spec": "",
          "to": "mixedmidway/node_modules/l",
          "type": "prod",
        },
      },
      "location": "node_modules/z",
      "name": "z",
      "realpath": "mixedmidway/node_modules/z",
      "top": "mixedmidway",
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "",
      "to": "mixedmidway/node_modules/a",
      "type": "optional",
    },
    "b" => Edge {
      "name": "b",
      "spec": "",
      "to": "mixedmidway/node_modules/b",
      "type": "optional",
    },
    "c" => Edge {
      "name": "c",
      "spec": "",
      "to": "mixedmidway/node_modules/c",
      "type": "optional",
    },
    "i" => Edge {
      "name": "i",
      "spec": "",
      "to": "mixedmidway/node_modules/i",
      "type": "dev",
    },
    "k" => Edge {
      "name": "k",
      "spec": "",
      "to": "mixedmidway/node_modules/k",
      "type": "optional",
    },
    "l" => Edge {
      "name": "l",
      "spec": "",
      "to": "mixedmidway/node_modules/l",
      "type": "optional",
    },
    "m" => Edge {
      "name": "m",
      "spec": "",
      "to": "mixedmidway/node_modules/m",
      "type": "optional",
    },
    "x" => Edge {
      "name": "x",
      "spec": "",
      "to": "mixedmidway/node_modules/x",
      "type": "prod",
    },
    "y" => Edge {
      "name": "y",
      "spec": "",
      "to": "mixedmidway/node_modules/y",
      "type": "optional",
    },
  },
  "location": "",
  "name": "mixedmidway",
  "realpath": "mixedmidway",
  "top": "mixedmidway",
}
`

exports[`test/arborist/load-actual.js TAP noname > loaded tree 1`] = `
Node {
  "children": Map {
    "foo" => Node {
      "errors": Array [
        Object {
          "code": "ENOENT",
          "path": "../fixtures/noname/node_modules/foo/package.json",
        },
      ],
      "extraneous": true,
      "location": "node_modules/foo",
      "name": "foo",
      "realpath": "noname/node_modules/foo",
      "top": "noname",
    },
  },
  "errors": Array [
    Object {
      "code": "ENOENT",
      "path": "../fixtures/noname/package.json",
    },
  ],
  "location": "",
  "name": "noname",
  "realpath": "noname",
  "top": "noname",
}
`

exports[`test/arborist/load-actual.js TAP optionalloop > loaded tree 1`] = `
Node {
  "children": Map {
    "a" => Node {
      "edgesIn": Set {
        Edge {
          "from": "optionalloop",
          "name": "a",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "",
          "to": "optionalloop/node_modules/b",
          "type": "prod",
        },
        "d" => Edge {
          "name": "d",
          "spec": "",
          "to": "optionalloop/node_modules/d",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "optional": true,
      "realpath": "optionalloop/node_modules/a",
      "top": "optionalloop",
    },
    "b" => Node {
      "edgesIn": Set {
        Edge {
          "from": "optionalloop/node_modules/a",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "optionalloop/node_modules/d",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "realpath": "optionalloop/node_modules/b",
      "top": "optionalloop",
    },
    "c" => Node {
      "edgesIn": Set {
        Edge {
          "from": "optionalloop",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "spec": "",
          "to": "optionalloop/node_modules/d",
          "type": "prod",
        },
      },
      "location": "node_modules/c",
      "name": "c",
      "realpath": "optionalloop/node_modules/c",
      "top": "optionalloop",
    },
    "d" => Node {
      "edgesIn": Set {
        Edge {
          "from": "optionalloop/node_modules/a",
          "name": "d",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "optionalloop/node_modules/c",
          "name": "d",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "",
          "to": "optionalloop/node_modules/b",
          "type": "prod",
        },
      },
      "location": "node_modules/d",
      "name": "d",
      "realpath": "optionalloop/node_modules/d",
      "top": "optionalloop",
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "",
      "to": "optionalloop/node_modules/a",
      "type": "optional",
    },
    "c" => Edge {
      "name": "c",
      "spec": "",
      "to": "optionalloop/node_modules/c",
      "type": "prod",
    },
  },
  "location": "",
  "name": "optionalloop",
  "realpath": "optionalloop",
  "top": "optionalloop",
}
`

exports[`test/arborist/load-actual.js TAP optofdev > loaded tree 1`] = `
Node {
  "children": Map {
    "a" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "optofdev",
          "name": "a",
          "spec": "",
          "type": "dev",
        },
      },
      "edgesOut": Map {
        "b" => Edge {
          "name": "b",
          "spec": "",
          "to": "optofdev/node_modules/b",
          "type": "optional",
        },
        "d" => Edge {
          "name": "d",
          "spec": "",
          "to": "optofdev/node_modules/d",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "realpath": "optofdev/node_modules/a",
      "top": "optofdev",
    },
    "b" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "optofdev/node_modules/a",
          "name": "b",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "c" => Edge {
          "name": "c",
          "spec": "",
          "to": "optofdev/node_modules/c",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "optional": true,
      "realpath": "optofdev/node_modules/b",
      "top": "optofdev",
    },
    "c" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "optofdev/node_modules/b",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "spec": "",
          "to": "optofdev/node_modules/e",
          "type": "prod",
        },
      },
      "location": "node_modules/c",
      "name": "c",
      "optional": true,
      "realpath": "optofdev/node_modules/c",
      "top": "optofdev",
    },
    "d" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "optofdev/node_modules/a",
          "name": "d",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "e" => Edge {
          "name": "e",
          "spec": "",
          "to": "optofdev/node_modules/e",
          "type": "prod",
        },
      },
      "location": "node_modules/d",
      "name": "d",
      "realpath": "optofdev/node_modules/d",
      "top": "optofdev",
    },
    "e" => Node {
      "dev": true,
      "edgesIn": Set {
        Edge {
          "from": "optofdev/node_modules/c",
          "name": "e",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "optofdev/node_modules/d",
          "name": "e",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/e",
      "name": "e",
      "realpath": "optofdev/node_modules/e",
      "top": "optofdev",
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "",
      "to": "optofdev/node_modules/a",
      "type": "dev",
    },
  },
  "location": "",
  "name": "optofdev",
  "realpath": "optofdev",
  "top": "optofdev",
}
`

exports[`test/arborist/load-actual.js TAP other > loaded tree 1`] = `
Node {
  "children": Map {
    "glob" => Link {
      "extraneous": true,
      "location": "node_modules/glob",
      "name": "glob",
      "realpath": "root/node_modules/@scope/x/node_modules/glob",
      "target": Object {
        "name": "glob",
        "parent": "root/node_modules/@scope/x",
      },
      "top": "other",
    },
  },
  "errors": Array [
    Object {
      "code": "ENOENT",
      "path": "../fixtures/other/package.json",
    },
  ],
  "location": "",
  "name": "other",
  "realpath": "other",
  "top": "other",
}
`

exports[`test/arborist/load-actual.js TAP pnpm > loaded tree 1`] = `
Node {
  "children": Map {
    "@scope/x" => Link {
      "edgesIn": Set {
        Edge {
          "from": "pnpm",
          "name": "@scope/x",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/x",
      "name": "@scope/x",
      "realpath": "pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
      "target": Object {
        "name": "@scope/x",
        "parent": "pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0",
      },
      "top": "pnpm",
    },
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "pnpm",
          "name": "a",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "realpath": "pnpm/node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
      "target": Object {
        "name": "a",
        "parent": "pnpm/node_modules/.pnpm/registry.npmjs.org/a/1.0.0",
      },
      "top": "pnpm",
    },
  },
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "spec": "",
      "to": "pnpm/node_modules/.pnpm/registry.npmjs.org/@scope/x/1.0.0/node_modules/@scope/x",
      "type": "prod",
    },
    "a" => Edge {
      "name": "a",
      "spec": "",
      "to": "pnpm/node_modules/.pnpm/registry.npmjs.org/a/1.0.0/node_modules/a",
      "type": "prod",
    },
  },
  "location": "",
  "name": "pnpm",
  "realpath": "pnpm",
  "top": "pnpm",
}
`

exports[`test/arborist/load-actual.js TAP root > loaded tree 1`] = `
Node {
  "children": Map {
    "@scope/x" => Node {
      "children": Map {
        "glob" => Node {
          "children": Map {
            "graceful-fs" => Node {
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "graceful-fs",
                  "spec": "",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "name": "graceful-fs",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "top": "root",
            },
            "inherits" => Node {
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "inherits",
                  "spec": "",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "name": "inherits",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "top": "root",
            },
            "minimatch" => Node {
              "children": Map {
                "lru-cache" => Node {
                  "edgesIn": Set {
                    Edge {
                      "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                      "name": "lru-cache",
                      "spec": "",
                      "type": "prod",
                    },
                  },
                  "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "name": "lru-cache",
                  "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "top": "root",
                },
                "sigmund" => Node {
                  "edgesIn": Set {
                    Edge {
                      "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                      "name": "sigmund",
                      "spec": "",
                      "type": "prod",
                    },
                  },
                  "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "name": "sigmund",
                  "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "top": "root",
                },
              },
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "minimatch",
                  "spec": "",
                  "type": "prod",
                },
              },
              "edgesOut": Map {
                "lru-cache" => Edge {
                  "name": "lru-cache",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "type": "prod",
                },
                "once" => Edge {
                  "name": "once",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
                  "type": "prod",
                },
                "sigmund" => Edge {
                  "name": "sigmund",
                  "spec": "",
                  "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "name": "minimatch",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "top": "root",
            },
            "once" => Node {
              "edgesIn": Set {
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob",
                  "name": "once",
                  "spec": "",
                  "type": "prod",
                },
                Edge {
                  "from": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
                  "name": "once",
                  "spec": "",
                  "type": "prod",
                },
              },
              "location": "node_modules/@scope/x/node_modules/glob/node_modules/once",
              "name": "once",
              "realpath": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
              "top": "root",
            },
          },
          "edgesIn": Set {
            Edge {
              "from": "root/node_modules/@scope/x",
              "name": "glob",
              "spec": "4",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "graceful-fs" => Edge {
              "name": "graceful-fs",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/graceful-fs",
              "type": "prod",
            },
            "inherits" => Edge {
              "name": "inherits",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/inherits",
              "type": "prod",
            },
            "minimatch" => Edge {
              "name": "minimatch",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/minimatch",
              "type": "prod",
            },
            "once" => Edge {
              "name": "once",
              "spec": "",
              "to": "root/node_modules/@scope/x/node_modules/glob/node_modules/once",
              "type": "prod",
            },
          },
          "location": "node_modules/@scope/x/node_modules/glob",
          "name": "glob",
          "realpath": "root/node_modules/@scope/x/node_modules/glob",
          "top": "root",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "root",
          "name": "@scope/x",
          "spec": "1",
          "type": "prod",
        },
        Edge {
          "from": "root/node_modules/@scope/x",
          "name": "@scope/x",
          "spec": "",
          "type": "peer",
        },
        Edge {
          "from": "root/node_modules/foo",
          "name": "@scope/x",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "spec": "",
          "to": "root/node_modules/@scope/x",
          "type": "peer",
        },
        "@scope/y" => Edge {
          "name": "@scope/y",
          "spec": "",
          "to": "root/node_modules/@scope/y",
          "type": "optional",
        },
        "express" => Edge {
          "error": "MISSING",
          "name": "express",
          "spec": "420.69.0-nice",
          "to": null,
          "type": "peer",
        },
        "glob" => Edge {
          "name": "glob",
          "spec": "4",
          "to": "root/node_modules/@scope/x/node_modules/glob",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/x",
      "name": "@scope/x",
      "realpath": "root/node_modules/@scope/x",
      "top": "root",
    },
    "@scope/y" => Node {
      "edgesIn": Set {
        Edge {
          "from": "root",
          "name": "@scope/y",
          "spec": ">0.99.0",
          "type": "peer",
        },
        Edge {
          "from": "root/node_modules/@scope/x",
          "name": "@scope/y",
          "spec": "",
          "type": "optional",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "error": "INVALID",
          "name": "foo",
          "spec": "99.x",
          "to": "root/node_modules/foo",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/y",
      "name": "@scope/y",
      "realpath": "root/node_modules/@scope/y",
      "top": "root",
    },
    "foo" => Node {
      "children": Map {
        "express" => Node {
          "edgesIn": Set {
            Edge {
              "from": "root/node_modules/foo",
              "name": "express",
              "spec": "npm:abbrev@*",
              "type": "prod",
            },
          },
          "location": "node_modules/foo/node_modules/express",
          "name": "express",
          "realpath": "root/node_modules/foo/node_modules/express",
          "top": "root",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "root",
          "name": "foo",
          "spec": "*",
          "type": "dev",
        },
        Edge {
          "error": "INVALID",
          "from": "root/node_modules/@scope/y",
          "name": "foo",
          "spec": "99.x",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "@scope/x" => Edge {
          "name": "@scope/x",
          "spec": "",
          "to": "root/node_modules/@scope/x",
          "type": "optional",
        },
        "express" => Edge {
          "name": "express",
          "spec": "npm:abbrev@*",
          "to": "root/node_modules/foo/node_modules/express",
          "type": "prod",
        },
      },
      "location": "node_modules/foo",
      "name": "foo",
      "realpath": "root/node_modules/foo",
      "top": "root",
    },
  },
  "edgesOut": Map {
    "@scope/x" => Edge {
      "name": "@scope/x",
      "spec": "1",
      "to": "root/node_modules/@scope/x",
      "type": "prod",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "spec": ">0.99.0",
      "to": "root/node_modules/@scope/y",
      "type": "peer",
    },
    "foo" => Edge {
      "name": "foo",
      "spec": "*",
      "to": "root/node_modules/foo",
      "type": "dev",
    },
    "notinstalledhere" => Edge {
      "name": "notinstalledhere",
      "spec": "",
      "to": null,
      "type": "optional",
    },
  },
  "location": "",
  "name": "root",
  "realpath": "root",
  "top": "root",
}
`

exports[`test/arborist/load-actual.js TAP selflink > loaded tree 1`] = `
Node {
  "children": Map {
    "@scope/y" => Node {
      "edgesIn": Set {
        Edge {
          "from": "selflink",
          "name": "@scope/y",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "spec": "*",
          "to": "selflink/node_modules/foo",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/y",
      "name": "@scope/y",
      "realpath": "selflink/node_modules/@scope/y",
      "top": "selflink",
    },
    "@scope/z" => Node {
      "children": Map {
        "glob" => Link {
          "edgesIn": Set {
            Edge {
              "from": "selflink/node_modules/@scope/z",
              "name": "glob",
              "spec": "4",
              "type": "prod",
            },
          },
          "extraneous": true,
          "location": "node_modules/@scope/z/node_modules/glob",
          "name": "glob",
          "realpath": "selflink/node_modules/foo/node_modules/glob",
          "target": Object {
            "name": "glob",
            "parent": "selflink/node_modules/foo",
          },
          "top": "selflink",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "4",
          "to": "selflink/node_modules/foo/node_modules/glob",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/@scope/z",
      "name": "@scope/z",
      "realpath": "selflink/node_modules/@scope/z",
      "top": "selflink",
    },
    "foo" => Node {
      "children": Map {
        "glob" => Node {
          "children": Map {
            "graceful-fs" => Node {
              "extraneous": true,
              "location": "node_modules/foo/node_modules/glob/node_modules/graceful-fs",
              "name": "graceful-fs",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/graceful-fs",
              "top": "selflink",
            },
            "inherits" => Node {
              "extraneous": true,
              "location": "node_modules/foo/node_modules/glob/node_modules/inherits",
              "name": "inherits",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/inherits",
              "top": "selflink",
            },
            "minimatch" => Node {
              "children": Map {
                "lru-cache" => Node {
                  "extraneous": true,
                  "location": "node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "name": "lru-cache",
                  "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "top": "selflink",
                },
                "sigmund" => Node {
                  "extraneous": true,
                  "location": "node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "name": "sigmund",
                  "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "top": "selflink",
                },
              },
              "extraneous": true,
              "location": "node_modules/foo/node_modules/glob/node_modules/minimatch",
              "name": "minimatch",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/minimatch",
              "top": "selflink",
            },
            "once" => Node {
              "extraneous": true,
              "location": "node_modules/foo/node_modules/glob/node_modules/once",
              "name": "once",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/once",
              "top": "selflink",
            },
          },
          "edgesIn": Set {
            Edge {
              "from": "selflink/node_modules/foo",
              "name": "glob",
              "spec": "4",
              "type": "prod",
            },
          },
          "location": "node_modules/foo/node_modules/glob",
          "name": "glob",
          "realpath": "selflink/node_modules/foo/node_modules/glob",
          "top": "selflink",
        },
        "selflink" => Link {
          "edgesIn": Set {
            Edge {
              "from": "selflink/node_modules/foo",
              "name": "selflink",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/foo/node_modules/selflink",
          "name": "selflink",
          "realpath": "selflink",
          "target": Object {
            "name": "selflink",
          },
          "top": "selflink",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "selflink",
          "name": "foo",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "selflink/node_modules/@scope/y",
          "name": "foo",
          "spec": "*",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "4",
          "to": "selflink/node_modules/foo/node_modules/glob",
          "type": "prod",
        },
        "selflink" => Edge {
          "name": "selflink",
          "spec": "*",
          "to": "selflink",
          "type": "prod",
        },
      },
      "location": "node_modules/foo",
      "name": "foo",
      "realpath": "selflink/node_modules/foo",
      "top": "selflink",
    },
  },
  "edgesOut": Map {
    "@scope/x" => Edge {
      "error": "MISSING",
      "name": "@scope/x",
      "spec": "",
      "to": null,
      "type": "prod",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "spec": "",
      "to": "selflink/node_modules/@scope/y",
      "type": "prod",
    },
    "foo" => Edge {
      "name": "foo",
      "spec": "",
      "to": "selflink/node_modules/foo",
      "type": "prod",
    },
  },
  "location": "",
  "name": "selflink",
  "realpath": "selflink",
  "top": "selflink",
}
`

exports[`test/arborist/load-actual.js TAP shake out Link target timing issue > loaded tree 1`] = `
Node {
  "children": Map {
    "@scope/y" => Node {
      "edgesIn": Set {
        Edge {
          "from": "selflink",
          "name": "@scope/y",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "foo" => Edge {
          "name": "foo",
          "spec": "*",
          "to": "selflink/node_modules/foo",
          "type": "prod",
        },
      },
      "location": "node_modules/@scope/y",
      "name": "@scope/y",
      "realpath": "selflink/node_modules/@scope/y",
      "top": "selflink",
    },
    "@scope/z" => Node {
      "children": Map {
        "glob" => Link {
          "edgesIn": Set {
            Edge {
              "from": "selflink/node_modules/@scope/z",
              "name": "glob",
              "spec": "4",
              "type": "prod",
            },
          },
          "extraneous": true,
          "location": "node_modules/@scope/z/node_modules/glob",
          "name": "glob",
          "realpath": "selflink/node_modules/foo/node_modules/glob",
          "target": Object {
            "name": "glob",
            "parent": "selflink/node_modules/foo",
          },
          "top": "selflink",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "4",
          "to": "selflink/node_modules/foo/node_modules/glob",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/@scope/z",
      "name": "@scope/z",
      "realpath": "selflink/node_modules/@scope/z",
      "top": "selflink",
    },
    "foo" => Node {
      "children": Map {
        "glob" => Node {
          "children": Map {
            "graceful-fs" => Node {
              "extraneous": true,
              "location": "node_modules/foo/node_modules/glob/node_modules/graceful-fs",
              "name": "graceful-fs",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/graceful-fs",
              "top": "selflink",
            },
            "inherits" => Node {
              "extraneous": true,
              "location": "node_modules/foo/node_modules/glob/node_modules/inherits",
              "name": "inherits",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/inherits",
              "top": "selflink",
            },
            "minimatch" => Node {
              "children": Map {
                "lru-cache" => Node {
                  "extraneous": true,
                  "location": "node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "name": "lru-cache",
                  "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/lru-cache",
                  "top": "selflink",
                },
                "sigmund" => Node {
                  "extraneous": true,
                  "location": "node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "name": "sigmund",
                  "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/minimatch/node_modules/sigmund",
                  "top": "selflink",
                },
              },
              "extraneous": true,
              "location": "node_modules/foo/node_modules/glob/node_modules/minimatch",
              "name": "minimatch",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/minimatch",
              "top": "selflink",
            },
            "once" => Node {
              "extraneous": true,
              "location": "node_modules/foo/node_modules/glob/node_modules/once",
              "name": "once",
              "realpath": "selflink/node_modules/foo/node_modules/glob/node_modules/once",
              "top": "selflink",
            },
          },
          "edgesIn": Set {
            Edge {
              "from": "selflink/node_modules/foo",
              "name": "glob",
              "spec": "4",
              "type": "prod",
            },
          },
          "location": "node_modules/foo/node_modules/glob",
          "name": "glob",
          "realpath": "selflink/node_modules/foo/node_modules/glob",
          "top": "selflink",
        },
        "selflink" => Link {
          "edgesIn": Set {
            Edge {
              "from": "selflink/node_modules/foo",
              "name": "selflink",
              "spec": "*",
              "type": "prod",
            },
          },
          "location": "node_modules/foo/node_modules/selflink",
          "name": "selflink",
          "realpath": "selflink",
          "target": Object {
            "name": "selflink",
          },
          "top": "selflink",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "selflink",
          "name": "foo",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "selflink/node_modules/@scope/y",
          "name": "foo",
          "spec": "*",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "glob" => Edge {
          "name": "glob",
          "spec": "4",
          "to": "selflink/node_modules/foo/node_modules/glob",
          "type": "prod",
        },
        "selflink" => Edge {
          "name": "selflink",
          "spec": "*",
          "to": "selflink",
          "type": "prod",
        },
      },
      "location": "node_modules/foo",
      "name": "foo",
      "realpath": "selflink/node_modules/foo",
      "top": "selflink",
    },
  },
  "edgesOut": Map {
    "@scope/x" => Edge {
      "error": "MISSING",
      "name": "@scope/x",
      "spec": "",
      "to": null,
      "type": "prod",
    },
    "@scope/y" => Edge {
      "name": "@scope/y",
      "spec": "",
      "to": "selflink/node_modules/@scope/y",
      "type": "prod",
    },
    "foo" => Edge {
      "name": "foo",
      "spec": "",
      "to": "selflink/node_modules/foo",
      "type": "prod",
    },
  },
  "location": "",
  "name": "selflink",
  "realpath": "selflink",
  "top": "selflink",
}
`

exports[`test/arborist/load-actual.js TAP symlinked-node-modules/example > loaded tree 1`] = `
Node {
  "children": Map {
    "bar" => Link {
      "extraneous": true,
      "location": "node_modules/bar",
      "name": "bar",
      "realpath": "symlinked-node-modules/bar",
      "target": Object {
        "name": "bar",
      },
      "top": "symlinked-node-modules/example",
    },
    "foo" => Link {
      "extraneous": true,
      "location": "node_modules/foo",
      "name": "foo",
      "realpath": "symlinked-node-modules/linked-node-modules/foo",
      "target": Object {
        "name": "foo",
      },
      "top": "symlinked-node-modules/example",
    },
  },
  "location": "",
  "name": "example",
  "realpath": "symlinked-node-modules/example",
  "top": "symlinked-node-modules/example",
}
`

exports[`test/arborist/load-actual.js TAP workspace > loaded tree 1`] = `
Node {
  "children": Map {
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "workspace",
          "name": "a",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/a",
      "name": "a",
      "realpath": "workspace/packages/a",
      "target": Object {
        "fsParent": "workspace",
        "name": "a",
      },
      "top": "workspace",
    },
    "b" => Link {
      "edgesIn": Set {
        Edge {
          "from": "workspace",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "realpath": "workspace/packages/b",
      "target": Object {
        "fsParent": "workspace",
        "name": "b",
      },
      "top": "workspace",
    },
    "c" => Link {
      "edgesIn": Set {
        Edge {
          "from": "workspace",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
      },
      "location": "node_modules/c",
      "name": "c",
      "realpath": "workspace/packages/c",
      "target": Object {
        "fsParent": "workspace",
        "name": "c",
      },
      "top": "workspace",
    },
  },
  "edgesOut": Map {
    "a" => Edge {
      "name": "a",
      "spec": "",
      "to": "workspace/packages/a",
      "type": "prod",
    },
    "b" => Edge {
      "name": "b",
      "spec": "",
      "to": "workspace/packages/b",
      "type": "prod",
    },
    "c" => Edge {
      "name": "c",
      "spec": "",
      "to": "workspace/packages/c",
      "type": "prod",
    },
  },
  "location": "",
  "name": "workspace",
  "realpath": "workspace",
  "top": "workspace",
}
`

exports[`test/arborist/load-actual.js TAP workspace2 > loaded tree 1`] = `
Node {
  "children": Map {
    "b" => Node {
      "children": Map {
        "d" => Node {
          "edgesIn": Set {
            Edge {
              "from": "workspace2/node_modules/b",
              "name": "d",
              "spec": "",
              "type": "prod",
            },
          },
          "edgesOut": Map {
            "b" => Edge {
              "name": "b",
              "spec": "",
              "to": "workspace2/node_modules/b",
              "type": "prod",
            },
          },
          "location": "node_modules/b/node_modules/d",
          "name": "d",
          "realpath": "workspace2/node_modules/b/node_modules/d",
          "top": "workspace2",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "workspace2",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "workspace2/node_modules/b/node_modules/d",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "workspace2/x",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "spec": "",
          "to": "workspace2/node_modules/b/node_modules/d",
          "type": "prod",
        },
      },
      "location": "node_modules/b",
      "name": "b",
      "realpath": "workspace2/node_modules/b",
      "top": "workspace2",
    },
    "c" => Node {
      "children": Map {
        "d" => Link {
          "edgesIn": Set {
            Edge {
              "from": "workspace2/node_modules/c",
              "name": "d",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "node_modules/c/node_modules/d",
          "name": "d",
          "realpath": "workspace2/node_modules/b/node_modules/d",
          "target": Object {
            "name": "d",
            "parent": "workspace2/node_modules/b",
          },
          "top": "workspace2",
        },
        "x" => Link {
          "edgesIn": Set {
            Edge {
              "from": "workspace2/node_modules/c",
              "name": "x",
              "spec": "",
              "type": "prod",
            },
          },
          "location": "node_modules/c/node_modules/x",
          "name": "x",
          "realpath": "workspace2/x",
          "target": Object {
            "fsParent": "workspace2",
            "name": "x",
          },
          "top": "workspace2",
        },
      },
      "edgesIn": Set {
        Edge {
          "from": "workspace2",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
      },
      "edgesOut": Map {
        "d" => Edge {
          "name": "d",
          "spec": "",
          "to": "workspace2/node_modules/b/node_modules/d",
          "type": "prod",
        },
        "x" => Edge {
          "name": "x",
          "spec": "",
          "to": "workspace2/x",
          "type": "prod",
        },
      },
      "location": "node_modules/c",
      "name": "c",
      "realpath": "workspace2/node_modules/c",
      "top": "workspace2",
    },
  },
  "edgesOut": Map {
    "b" => Edge {
      "name": "b",
      "spec": "",
      "to": "workspace2/node_modules/b",
      "type": "prod",
    },
    "c" => Edge {
      "name": "c",
      "spec": "",
      "to": "workspace2/node_modules/c",
      "type": "prod",
    },
  },
  "location": "",
  "name": "workspace2",
  "realpath": "workspace2",
  "top": "workspace2",
}
`

exports[`test/arborist/load-actual.js TAP workspace3 > loaded tree 1`] = `
Node {
  "children": Map {
    "a" => Link {
      "edgesIn": Set {
        Edge {
          "from": "workspace3/app",
          "name": "a",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "workspace3/packages/b",
          "name": "a",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "workspace3/packages/c",
          "name": "a",
          "spec": "",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/a",
      "name": "a",
      "realpath": "workspace3/packages/a",
      "target": Object {
        "fsParent": "workspace3",
        "name": "a",
      },
      "top": "workspace3",
    },
    "app" => Link {
      "extraneous": true,
      "location": "node_modules/app",
      "name": "app",
      "realpath": "workspace3/app",
      "target": Object {
        "fsParent": "workspace3",
        "name": "app",
      },
      "top": "workspace3",
    },
    "b" => Link {
      "edgesIn": Set {
        Edge {
          "from": "workspace3/app",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "workspace3/packages/a",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "workspace3/packages/c",
          "name": "b",
          "spec": "",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/b",
      "name": "b",
      "realpath": "workspace3/packages/b",
      "target": Object {
        "fsParent": "workspace3",
        "name": "b",
      },
      "top": "workspace3",
    },
    "c" => Link {
      "edgesIn": Set {
        Edge {
          "from": "workspace3/app",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "workspace3/packages/a",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
        Edge {
          "from": "workspace3/packages/b",
          "name": "c",
          "spec": "",
          "type": "prod",
        },
      },
      "extraneous": true,
      "location": "node_modules/c",
      "name": "c",
      "realpath": "workspace3/packages/c",
      "target": Object {
        "fsParent": "workspace3",
        "name": "c",
      },
      "top": "workspace3",
    },
  },
  "location": "",
  "name": "workspace3",
  "realpath": "workspace3",
  "top": "workspace3",
}
`
