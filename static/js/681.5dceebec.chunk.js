"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[681],{681:function(n,e,t){t.r(e);var c=t(885),r=t(791),i=t(871),o=t(933),u=t(15),a=t(184);e.default=function(){var n=(0,i.UO)().movieId,e=(0,r.useState)([]),t=(0,c.Z)(e,2),s=t[0],h=t[1];return(0,r.useEffect)((function(){(0,o.P7)(n).then((function(n){return h(n.results)}))}),[n]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{children:s.length?s.map((function(n){var e=n.id,t=n.author,c=n.content;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{className:u.Z.Title,children:["Author: ",t]}),(0,a.jsx)("p",{className:u.Z.Content,children:c})]},e)})):(0,a.jsx)("p",{className:u.Z.Title,children:"We don`t have any reviews for this movie"})})})}},933:function(n,e,t){t.d(e,{P7:function(){return a},Rx:function(){return o},S0:function(){return u},V0:function(){return r},bp:function(){return i}});var c="6e6385f58666428924c228f464131223";function r(){return fetch("".concat("https://api.themoviedb.org/3/trending/movie/day","?api_key=").concat(c)).then((function(n){return n.json()}))}function i(n){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(n,"&language=en-US&page=1&include_adult=false")).then((function(n){return n.json()}))}function o(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(c,"&language=en-US")).then((function(n){return n.json()}))}function u(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(c,"&language=en-US")).then((function(n){return n.json()}))}function a(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1")).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=681.5dceebec.chunk.js.map