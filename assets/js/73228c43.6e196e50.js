(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(141)),l=["components"],o={title:"Smart Views",sidebar_label:"Smart Views",description:"How to use the Standard Notes Smart Views.",keywords:["standard notes","docs","notes app","end-to-end encryption","tags","views","filters"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},b={unversionedId:"usage/tags",id:"usage/tags",isDocsHomePage:!1,title:"Smart Views",description:"How to use the Standard Notes Smart Views.",source:"@site/docs/usage/tags.md",sourceDirName:"usage",slug:"/usage/tags",permalink:"/usage/tags",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/usage/tags.md",version:"current",lastUpdatedAt:1657039008,formattedLastUpdatedAt:"7/5/2022",sidebar_label:"Smart Views",frontMatter:{title:"Smart Views",sidebar_label:"Smart Views",description:"How to use the Standard Notes Smart Views.",keywords:["standard notes","docs","notes app","end-to-end encryption","tags","views","filters"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Creating A Smart View",id:"creating-a-smart-view",children:[]},{value:"Understanding The Smart View Syntax",id:"understanding-the-smart-view-syntax",children:[]},{value:"More Examples",id:"more-examples",children:[{value:"Compound Predicates",id:"compound-predicates",children:[]}]},{value:"Attributes",id:"attributes",children:[]},{value:"Operators",id:"operators",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,l);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Questions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"How do I view a list of untagged notes (and create other dynamic filters)?")),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,'\u201cSmart Views" are user-made dynamic folders that organize your notes according to predefined filters.'),Object(i.b)("p",null,"For example, suppose you wanted to see a list of all notes whose title starts with \u201cFoo\u201d. You can do this by creating a smart tag."),Object(i.b)("h2",{id:"creating-a-smart-view"},"Creating A Smart View"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a new folder by clicking the + icon.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Copy and paste the following Smart View syntax, as the folder name:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},'!["Foo Notes", "title", "startsWith", "Foo"]]\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Press enter on your keyboard."))),Object(i.b)("p",null,'At this point, you should see an item called "Foo notes" under ',Object(i.b)("strong",{parentName:"p"},"Views"),". You can select this item to view a list of your notes that start with \u201cFoo\u201d."),Object(i.b)("h2",{id:"understanding-the-smart-view-syntax"},"Understanding The Smart View Syntax"),Object(i.b)("p",null,"Smart Views can be used to construct any kind of simple query. The components of the smart tag syntax are as follows:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"!"),": Indicates the start of a Smart View"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"[...]"),": A JSON array"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The first item in the JSON array is the display label."),Object(i.b)("li",{parentName:"ul"},"The second item is the note attribute you are targeting."),Object(i.b)("li",{parentName:"ul"},"The third is the comparison operator."),Object(i.b)("li",{parentName:"ul"},"And the last is the expected value.")),Object(i.b)("h2",{id:"more-examples"},"More Examples"),Object(i.b)("p",null,"Show all notes that have tags that start with the letter b:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'!["B-tags", "tags", "includes", ["title", "startsWith", "b"]]\n')),Object(i.b)("p",null,"Show all notes that have tags ",Object(i.b)("inlineCode",{parentName:"p"},"Blog")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Ideas"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'!["Blog or Ideas", "tags", "includes", ["title", "in", ["Blog", "Ideas"]]]\n')),Object(i.b)("p",null,"Show notes that are pinned:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'!["Pinned", "pinned", "=", true]\n')),Object(i.b)("p",null,"Show notes that are not pinned:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'!["Not Pinned", "pinned", "=", false]\n')),Object(i.b)("p",null,"Show notes that have been updated within the last day:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'!["Last Day", "updated_at", ">", "1.days.ago"]\n')),Object(i.b)("p",null,"Show notes whose text has more than 500 characters:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'!["Long", "text.length", ">", 500]\n')),Object(i.b)("h3",{id:"compound-predicates"},"Compound Predicates"),Object(i.b)("p",null,"You can use compound and/or predicates to combine multiple queries. For example, to show all notes that are pinned and locked:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'!["Pinned & Locked", "ignored", "and", [["pinned", "=", true], ["locked", "=", true]]]\n')),Object(i.b)("p",null,"Show all notes that are protected or pinned:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'!["Protected or Pinned", "ignored", "or", [["content.protected", "=", true], ["pinned", "=", true]]]\n')),Object(i.b)("p",null,"Show all notes that have tags ",Object(i.b)("inlineCode",{parentName:"p"},"Blog")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Ideas"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'!["Blog Scheduled or Published", "ignored", "or", [["tags", "includes", ["title", "=", "Blog"]], ["tags", "includes", ["title", "=", "Ideas"]]]]\n')),Object(i.b)("p",null,"You can also use the not predicate to negate an expression. For example, to show all notes that do not have the ",Object(i.b)("inlineCode",{parentName:"p"},"Unread")," tag:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'!["Read", "tags", "not", ["tags", "includes", ["title", "=", "Unread"]]]\n')),Object(i.b)("p",null,"The not predicate can be combined with the compound operators. For example, to show all notes that have the Blog tag but not the Ideas one:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'!["Blog Unpublished", "ignored", "and", [["tags", "includes", ["title", "=", "Blog"]], ["", "not", ["tags", "includes", ["title", "=", "Ideas"]]]]]\n')),Object(i.b)("h2",{id:"attributes"},"Attributes"),Object(i.b)("p",null,"Here are a list of note attributes that can be queried:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"title")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"title.length")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"text")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"text.length")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tags")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"updated_at")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"created_at")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pinned")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"content.protected"))),Object(i.b)("p",null,"If constructing a filter that queries tags, you can use the following tag attributes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"title")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"title.length")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"updated_at")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"created_at"))),Object(i.b)("p",null,"Note that Smart Views always query notes, and so the query you're building refers to notes firstmost. You reference tags by referring to a note's tags:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'!["B-tags", "tags", "includes", ["title", "startsWith", "b"]]\n')),Object(i.b)("p",null,"Get all notes whose tags includes a title that starts with the letter b."),Object(i.b)("h2",{id:"operators"},"Operators"),Object(i.b)("p",null,"Here are a list of operators that can be used to construct filters. The operator is typically the third parameter in the filter syntax."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"=")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},">")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},">=")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<=")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"startsWith")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"in"),' ("whether a value is in a list of values")'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"includes"),' ("includes sub filter")'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"matches")," (regex pattern)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"and")," (for compound filters)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"or")," (for compound filters)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"not")," (negates the expected value, attribute is ignored)")))}p.isMDXComponent=!0},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);