(this["webpackJsonp@uiw/react-markdown-editor"]=this["webpackJsonp@uiw/react-markdown-editor"]||[]).push([[191],{236:function(a,e){!function(a){var e=a.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(e,"addSupport",{value:function(e,n){"string"==typeof e&&(e=[e]),e.forEach((function(e){!function(e,n){var t="doc-comment",r=a.languages[e];if(r){var o=r[t];if(!o){o=(r=a.languages.insertBefore(e,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[t]}if(o instanceof RegExp&&(o=r[t]={pattern:o}),Array.isArray(o))for(var i=0,s=o.length;i<s;i++)o[i]instanceof RegExp&&(o[i]={pattern:o[i]}),n(o[i]);else n(o)}}(e,(function(a){a.inside||(a.inside={}),a.inside.rest=n}))}))}}),e.addSupport(["java","javascript","php"],e)}(Prism)}}]);
//# sourceMappingURL=191.09455559.chunk.js.map