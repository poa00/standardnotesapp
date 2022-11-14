(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),a=(n(0),n(139)),i=["components"],l={id:"local-setup",title:"Local Setup",sidebar_label:"Local Setup",description:"How to set up a development environment to build a Standard Notes extension.",keywords:["standard notes","docs","notes app","end-to-end encryption","build an extension","local setup"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},s={unversionedId:"extensions/local-setup",id:"extensions/local-setup",isDocsHomePage:!1,title:"Local Setup",description:"How to set up a development environment to build a Standard Notes extension.",source:"@site/docs/extensions/local-setup.md",sourceDirName:"extensions",slug:"/extensions/local-setup",permalink:"/extensions/local-setup",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/extensions/local-setup.md",version:"current",lastUpdatedAt:1668448897,formattedLastUpdatedAt:"11/14/2022",sidebar_label:"Local Setup",frontMatter:{id:"local-setup",title:"Local Setup",sidebar_label:"Local Setup",description:"How to set up a development environment to build a Standard Notes extension.",keywords:["standard notes","docs","notes app","end-to-end encryption","build an extension","local setup"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},sidebar:"mainSidebar",previous:{title:"How to use the Standard Notes StyleKit",permalink:"/extensions/stylekit"},next:{title:"Themes",permalink:"/extensions/themes"}},c=[{value:"Steps",id:"steps",children:[{value:"Themes",id:"themes",children:[]},{value:"Publishing",id:"publishing",children:[]}]}],p={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,i);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"These instructions describe how to run an extension in a local environment."),Object(a.b)("p",null,"Installing an extension inside Standard Notes consists of two main components:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A JSON file that describes the extension, and includes metadata such as the extension's current version, description, hosted URL, and download URL."),Object(a.b)("li",{parentName:"ul"},"The source code for the extension.")),Object(a.b)("p",null,"To get your extension running locally, both of these components must be hosted on a local web server. In this guide, we'll use the command line server ",Object(a.b)("inlineCode",{parentName:"p"},"http-server"),"."),Object(a.b)("h2",{id:"steps"},"Steps"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Install http-server:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-bash"}," npm install -g http-server\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In your extension's root directory, run the following command to begin hosting your local server:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-bash"},"http-server -p 8001 --cors\n")),Object(a.b)("p",{parentName:"li"},"The ",Object(a.b)("inlineCode",{parentName:"p"},"--cors")," option allows the Standard Notes app to load your extension via cross-origin resource sharing (required).")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In your extension's root directory, create a file called ",Object(a.b)("inlineCode",{parentName:"p"},"ext.json"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Place, at minimum, the following key/value pairs. For the full listing of keys, see the ",Object(a.b)("a",{parentName:"p",href:"/extensions/publishing"},"Publishing guide"),"."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "identifier": "org.yourdomain.my-extension",\n  "name": "My Extension",\n  "content_type": "SN|Component",\n  "area": "editor-editor",\n  "version": "1.0.0",\n  "url": "http://localhost:8001"\n}\n')),Object(a.b)("p",{parentName:"li"},"The ",Object(a.b)("inlineCode",{parentName:"p"},"url")," should point to where your extension's index.html is hosted on your local server.\nThe ",Object(a.b)("inlineCode",{parentName:"p"},"area")," describes what kind of extension this will be. A list of valid values can be found in the ",Object(a.b)("a",{parentName:"p",href:"/extensions/publishing"},"Publishing guide"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In your browser, open http://localhost:8001/ext.json and make sure you see the JSON file content from above.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Copy the ",Object(a.b)("inlineCode",{parentName:"p"},"url")," from the JSON content and open it in your browser. Here, you should see your actual extension running. Your server will look for an ",Object(a.b)("inlineCode",{parentName:"p"},"index.html")," file by default."),Object(a.b)("p",{parentName:"li"},"If your main HTML file is called something different, or is not located in the root directory, simply change the ",Object(a.b)("inlineCode",{parentName:"p"},"url")," value in the JSON file to reflect this location. For example:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-bash"},'url: "http://localhost:8001/dist/index.html"\n'))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"At this point, your extension is ready to be installed. Open ",Object(a.b)("strong",{parentName:"p"},"Standard Notes"),", and click on ",Object(a.b)("strong",{parentName:"p"},"Extensions")," in the lower left corner of the app.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In the bottom right of the ",Object(a.b)("strong",{parentName:"p"},"Extensions")," window, click ",Object(a.b)("strong",{parentName:"p"},"Import Extension"),". In the Extension Link field, enter the URL of your ext.json file. In this case, it will be ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:8001/ext.json"),". Then press enter.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"You should see a message that your extension was successfully installed. You can now scroll up in the ",Object(a.b)("strong",{parentName:"p"},"Extensions")," window, and click ",Object(a.b)("strong",{parentName:"p"},"Activate")," next to your extension to run it. If it is an editor, Editors can be activated via the ",Object(a.b)("strong",{parentName:"p"},"Editor menu")," in the note panel, under the note title."))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"themes"},"Themes"),Object(a.b)("p",null,"If you're creating a theme, you would follow the same instructions, and for ",Object(a.b)("inlineCode",{parentName:"p"},"area"),' in the JSON file, use "themes", and for the URL, it should link directly to your css file, i.e ',Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:8001/theme.css"),"."),Object(a.b)("h3",{id:"publishing"},"Publishing"),Object(a.b)("p",null,"Once you're ready to ship your extension in a production environment, check out the ",Object(a.b)("a",{parentName:"p",href:"/extensions/publishing"},"Publishing guide")," to learn more about configuring your extension to autoupdate and be installed in an offline environment."))}b.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=o,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);