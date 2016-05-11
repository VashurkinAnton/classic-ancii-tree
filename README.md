# Install 

With npm do:
```
npm install classic-ancii-tree
```

# Example

```
var CAT = require('classic-ancii-tree');
var ast = {
  "label": "1/a/bb/",
  "nodes": [
    {
      "label": "eee/",
      "nodes": [
        {
          "label": "1111/",
          "nodes": [
            {
              "label": "file-1.ext",
              "nodes": [],
              "color": "green"
            }
          ],
          "color": "green"
        },
        {
          "label": "file-2.ext",
          "nodes": [
          	{
          	  "label": "sub",
          	  "nodes": [],
          	  "color": "green"
          	}
          ],
          "color": "green"
        },
        {
          "label": "file-3.ext <2mb>",
          "nodes": [],
          "color": "red"
        },
        {
          "label": "file-4.ext <2mb>",
          "nodes": [],
          "color": "green"
        }
      ],
      "color": "red"
    },
    {
      "label": "ggg/",
      "nodes": [
        {
          "label": "file-5.ext",
          "nodes": [],
          "color": "green"
        }
      ],
      "color": "green"
    }
  ],
  "color": "red"
};
```
output
```
1/a/bb/
├─ eee/
│  ├─ 1111/
│  │  └─ file-1.ext
│  ├─ file-2.ext
│  │  └─ sub
│  ├─ file-3.ext <2mb>
│  └─ file-4.ext <2mb>
└─ ggg/
   └─ file-5.ext
```

# Methods

var CAT = require('classic-ancii-tree');

## CAT(obj)

Return a string representation of obj with unicode pipe characters like how unix tree looks.

obj should be a tree of nested objects with 'label', 'nodes' and 'color' fields. 'label' is a string of text to display at a node level, 'nodes' is an array of the descendents of the current node and 'color' is a string of ancii color from ```chalk```

If a node is a string, that string will be used as the 'label' and an empty array of 'nodes' will be used.

# License

MIT. See license in license file (LICENSE.md).