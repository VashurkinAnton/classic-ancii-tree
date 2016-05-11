var CAT = require('./index.js');
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

console.log(CAT(ast));