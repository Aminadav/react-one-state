(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{73:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return i})),o.d(t,"default",(function(){return c}));var n=o(3),a=(o(0),o(106));const r={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",slug:"/"},s={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"GlobX",source:"@site/docs/gettingStarted.mdx",slug:"/",permalink:"/globx/docs/",editUrl:"https://github.com/aminadav/globx/edit/master/website/docs/gettingStarted.mdx",version:"current",sidebar_label:"Getting Started",sidebar:"someSidebar",next:{title:"Todo App",permalink:"/globx/docs/todo"}},i=[],l={toc:i};function c({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"globx"},"GlobX"),Object(a.b)("p",null,"I took the Redux todo example. (",Object(a.b)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/todos"},"https://github.com/reduxjs/redux/tree/master/examples/todos"),") cloned it and reimplemented it in GlobX (",Object(a.b)("a",{parentName:"p",href:"https://github.com/Aminadav/globx-todo"},"https://github.com/Aminadav/globx-todo"),"). I saved about 90% of the code. (I'm recommended you to inspect the code, I'm sure you will \u2764\ufe0f it)"),Object(a.b)("p",null,"GlobX makes life easier when you wish to make changes to your app, the requirements changes, or do you want to refactor. There are not lot of moving parts that are depended on each other."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Motivation:")," I like Redux, But:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"I like to write code as little as possible. I'm not too fond of reducers, action builders, connectors, and containers."),Object(a.b)("li",{parentName:"ol"},"I want full intelli-sense and type auto-complete everywhere without defining typs or adding special instructions into the code."),Object(a.b)("li",{parentName:"ol"},"I want to change the state without calling other actions, dispatching, or making any other change."),Object(a.b)("li",{parentName:"ol"},"I want to access each part of the store without changing anything in the code, and the component should use the store's property like any other JSON object. And without using or creating selectors."),Object(a.b)("li",{parentName:"ol"},"I wouldn't say I like immutable objects. I prefer to push, pull, and change arrays and objects without cloning."),Object(a.b)("li",{parentName:"ol"},"I don't like that sometimes I'm getting previous store values because of cloning, and I'm not particularly eager to fix it using useRef and similar fixes."),Object(a.b)("li",{parentName:"ol"},'In other state managers all IDE smart features like "Find all references" or "rename symbol" doesn\'t work for keys in the store. In GlobX it\'s working, so my code always have the naming I wish and I don\'t afraid to refactor.')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"How to use GlobX?")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create a new file (store.js) and call the GlobX newStore function with your initial store. And export the result."),Object(a.b)("li",{parentName:"ol"},"GlobX will create one store for your whole app. You can read any part of the store easily by importing the store.js file. This is a simple JSON file."),Object(a.b)("li",{parentName:"ol"},"You can change (and mutate) everything in the JSON store. It's updating immediately for all other JavaScript files that using th store."),Object(a.b)("li",{parentName:"ol"},"When you want to update the UI (After you change the store) and rerender the components that should be rerender (becuase they are reading the store) you have to call the GlobX function updateStore it will rerender only the components that are affected by your store changes."),Object(a.b)("li",{parentName:"ol"},"To know which components should re-render you have to use the GlobX hook useRerenderIfChange and tell it which part of the store this component is dependent on.")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/globx"},"https://www.npmjs.com/package/globx")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Why the Name GlobX?")),Object(a.b)("p",null,"It sounds to me like a Global store. One store that everything can use and change."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"What the magic?")),Object(a.b)("p",null,"No magic. The whole project is just several lines of code. It exporting 1 functions: NewStore. The store has only 2 functions: updateStore and useRerenderIfIChange. No magic. And it's working very fast. You can call updateStore as many times you want, and it will update and rerender only the affected components and  only once per executing cycle."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Where is the API documentation:")),Object(a.b)("p",null,"I'm waiting to hear feedback from the community and know that people are interested, then I will create some dev docs, and other open-source materials (tests....)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Plans for the future:")),Object(a.b)("p",null,"Add supporting for plugins that have access only to a specific path in the store."),Object(a.b)("p",null,"E.g. A plugin that lets you add toast notifications. To show a toast, you call"),Object(a.b)("p",null,'store.toasts.show("My message")'),Object(a.b)("p",null,'store.toasts.show("My message2")'),Object(a.b)("p",null,"Then you can read and see the notifications in the store.toasts.list."))}c.isMDXComponent=!0}}]);