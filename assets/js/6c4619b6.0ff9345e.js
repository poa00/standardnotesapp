(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),r=(n(0),n(140)),i=["components"],c={slug:"import-backups",id:"import-backups",title:"How to import a backup without being signed in",sidebar_label:"Import backups",description:"How to import a backup in the Standard Notes web and desktop app without being signed in.",keywords:["standard notes","docs","notes app","end-to-end encryption","web","desktop","import backups","backups","import","data","account"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},p={unversionedId:"troubleshooting/import-backups",id:"troubleshooting/import-backups",isDocsHomePage:!1,title:"How to import a backup without being signed in",description:"How to import a backup in the Standard Notes web and desktop app without being signed in.",source:"@site/docs/troubleshooting/import-backups.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/import-backups",permalink:"/troubleshooting/import-backups",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/troubleshooting/import-backups.md",version:"current",lastUpdatedAt:1657548954,formattedLastUpdatedAt:"7/11/2022",sidebar_label:"Import backups",frontMatter:{slug:"import-backups",id:"import-backups",title:"How to import a backup without being signed in",sidebar_label:"Import backups",description:"How to import a backup in the Standard Notes web and desktop app without being signed in.",keywords:["standard notes","docs","notes app","end-to-end encryption","web","desktop","import backups","backups","import","data","account"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},sidebar:"secondSidebar",previous:{title:"How do I reset the app?",permalink:"/troubleshooting/reset-apps"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Clear your account",id:"clear-your-account",children:[]},{value:"Reimport backup",id:"reimport-backup",children:[]}],u={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,i);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"We are aware of issues with importing backups belonging to another account when that account is still registered, such as when you are ",Object(r.b)("a",{parentName:"p",href:"https://standardnotes.com/help/7/how-can-i-change-my-account-email"},"changing your account email"),". If you are signed in to your new account, some tags are duplicated and are not properly assigned to notes and a significant number of notes, tags and/or editors are not imported. We are working on a fix. As a temporary workaround, you can import the backup while signed out of the app before signing in to the new account. Then, when you sign in, choose to merge local data (this is an option that is on by default)."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"For the best experience, use a backup that was exported from the ",Object(r.b)("a",{parentName:"p",href:"https://app.standardnotes.org"},"web")," or desktop app. A backup that was generated from ",Object(r.b)("a",{parentName:"p",href:"https://standardnotes.com/help/27/how-do-i-enable-dropbox-google-drive-or-onedrive-backups"},"CloudLink")," may not work as well."))),Object(r.b)("h2",{id:"clear-your-account"},"Clear your account"),Object(r.b)("p",null,"If you are trying to change your sync account email from an old email to a new email and tried to import a backup but encountered the issues described above, then you probably want to clear your ",Object(r.b)("strong",{parentName:"p"},"new")," account before reimporting the backup. Please ",Object(r.b)("strong",{parentName:"p"},"do not")," clear your ",Object(r.b)("strong",{parentName:"p"},"old")," account until your backup has been successfully imported in your new account."),Object(r.b)("p",null,"There are two ways to clear your account: delete everything using the free Batch Manager extension or use the ",Object(r.b)("a",{parentName:"p",href:"https://standardnotes.com/reset"},"reset tool"),". The reset tool ensures that your new account is completely empty before you reimport your backup."),Object(r.b)("h2",{id:"reimport-backup"},"Reimport backup"),Object(r.b)("p",null,"After clearing your new account, please download a backup from your old account and import it into your new account while merging local data:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open the ",Object(r.b)("a",{parentName:"p",href:"https://app.standardnotes.org"},"web app")," or desktop app.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Export an encrypted or decrypted backup from your old account via the ",Object(r.b)("strong",{parentName:"p"},"Account")," menu at the bottom left corner of the app.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"After you have an export downloaded on your computer, click ",Object(r.b)("strong",{parentName:"p"},"Sign Out"),", then click ",Object(r.b)("strong",{parentName:"p"},"Clear session data"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click on the\xa0",Object(r.b)("strong",{parentName:"p"},"Account"),"\xa0menu. Without signing in, click on\xa0",Object(r.b)("strong",{parentName:"p"},"Import Backup"),"\xa0to import your backup into the app. If you are importing an encrypted backup, enter your previous password when prompted.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Sign in to your new account with Merge local data ",Object(r.b)("strong",{parentName:"p"},"on")," (this is on by default)."),Object(r.b)("p",{parentName:"li"},"a. If you cleared your new account using the Batch Manager, then you can sign in to your new account. Click on\xa0",Object(r.b)("strong",{parentName:"p"},"Sign In"),",\xa0enter your account's credentials, and make sure the\xa0",Object(r.b)("strong",{parentName:"p"},"Merge local data"),"\xa0option is selected before clicking on ",Object(r.b)("strong",{parentName:"p"},"Sign In")," again."),Object(r.b)("p",{parentName:"li"},"b. If you cleared your account using the ",Object(r.b)("a",{parentName:"p",href:"https://standardnotes.com/reset"},"reset tool"),", then you need to register your new account again. Click on\xa0",Object(r.b)("strong",{parentName:"p"},"Register"),", enter your email and password, confirm the password, and make sure the\xa0",Object(r.b)("strong",{parentName:"p"},"Merge local data"),"\xa0option is selected before clicking on ",Object(r.b)("strong",{parentName:"p"},"Register")," again.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"After signing in, verify that all your notes, tags, and other items were properly imported into your account."))))}b.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=u(n),l=o,m=b["".concat(i,".").concat(l)]||b[l]||d[l]||r;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);