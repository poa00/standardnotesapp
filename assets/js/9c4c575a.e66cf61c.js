(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(140)),i=["components"],s={id:"actions",title:"Actions",sidebar_label:"Actions",description:"How to build Action components for Standard Notes.",keywords:["standard notes","docs","notes app","end-to-end encryption","build an extension","actions"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},c={unversionedId:"extensions/actions",id:"extensions/actions",isDocsHomePage:!1,title:"Actions",description:"How to build Action components for Standard Notes.",source:"@site/docs/extensions/actions.md",sourceDirName:"extensions",slug:"/extensions/actions",permalink:"/extensions/actions",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/extensions/actions.md",version:"current",lastUpdatedAt:1657548954,formattedLastUpdatedAt:"7/11/2022",sidebar_label:"Actions",frontMatter:{id:"actions",title:"Actions",sidebar_label:"Actions",description:"How to build Action components for Standard Notes.",keywords:["standard notes","docs","notes app","end-to-end encryption","build an extension","actions"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},sidebar:"mainSidebar",previous:{title:"Themes",permalink:"/extensions/themes"},next:{title:"Publishing",permalink:"/extensions/publishing"}},l=[{value:"Building an Action",id:"building-an-action",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Installing an Action",id:"installing-an-action",children:[]},{value:"Action Potential",id:"action-potential",children:[]}],d={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Actions are menu-based extensions that allow you to build simple APIs that do not require a user interface. Actions have the power to receive the working note and modify it. We use actions for our Note History extension, as well as Listed and File Attachments."),Object(r.b)("h2",{id:"building-an-action"},"Building an Action"),Object(r.b)("p",null,"Building an action-based extension can be done through any backend system of your choosing. We use Rails to build the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/standardnotes/listed"},"Listed")," extension, which allows you to create and manage a blogging publication from your notes."),Object(r.b)("p",null,"In this example, we'll recreate a simple clone of Listed."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Generate a secret installation link for the user."),Object(r.b)("p",{parentName:"li"},"The secret installation link will contain a randomly generated secret key that authenticates the user to the server. The user need only copy the resulting link into Standard Notes, and it is then remembered automatically and sent to the server with every subsequent request."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-ruby"},"author = Author.new\nsecret =  Digest::SHA256.hexdigest(SecureRandom.hex)\nsecret_url = CGI.escape(\"#{ENV['HOST']}/authors/#{author.id}/extension/?secret=#{secret}&type=sn\")\n")),Object(r.b)("p",{parentName:"li"},"Display the ",Object(r.b)("inlineCode",{parentName:"p"},"secret_url")," to the user and instruct them to install the url in Standard Notes, via the Extensions menu in the lower left corner.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Whenever the user clicks on the "Actions" menu within Standard Notes, SN will make a GET request to the user\'s secret URL. It is here that you return a JSON object that contains some metadata and applicable actions.'),Object(r.b)("p",{parentName:"li"},"Here is what Listed handles the ",Object(r.b)("inlineCode",{parentName:"p"},"extension")," endpoint that is encoded in the user's secret url:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-ruby"},'def extension\n  secret = params[:secret]\n  item_uuid = params[:item_uuid]\n\n  name = "Listed"\n  supported_types = ["Note"]\n  actions = []\n  if item_uuid\n    actions += [\n      {\n        :label => "Publish to Blog",\n        :url => "#{ENV[\'HOST\']}/authors/#{@author.id}/posts/?unlisted=false&secret=#{secret}&item_uuid=#{item_uuid}",\n        :verb => "post",\n        :context => "Item",\n        :content_types => ["Note"],\n        :access_type => "decrypted"\n      },\n      {\n        :label => "Open Blog",\n        :url => @author.username && @author.username.length > 0 ? @author.url : "#{ENV[\'HOST\']}/authors/#{@author.id}",\n        :verb => "show",\n        :context => "Item",\n        :content_types => ["Note"],\n        :access_type => "decrypted"\n      },\n      {\n        :label => "Publish to Private Link",\n        :url => "#{ENV[\'HOST\']}/authors/#{@author.id}/posts/?unlisted=true&secret=#{secret}&item_uuid=#{item_uuid}",\n        :verb => "post",\n        :context => "Item",\n        :content_types => ["Note"],\n        :access_type => "decrypted"\n      }\n    ]\n  end\n\n  post = Post.find_by_item_uuid(item_uuid)\n  if post\n    actions.push(\n    {\n      :label => "Open Private Link",\n      :url => "#{ENV[\'HOST\']}/#{post.token}",\n      :verb => "show",\n      :context => "Item",\n      :content_types => ["Note"]\n    })\n\n    actions.push(\n    {\n      :label => "Unpublish",\n      :url => "#{ENV[\'HOST\']}/authors/#{@author.id}/posts/#{post.id}/unpublish?secret=#{secret}",\n      :verb => "post",\n      :context => "Item",\n      :content_types => ["Note"]\n    })\n  end\n\n  actions.push (\n  {\n    :label => "Settings",\n    :url => "#{ENV[\'HOST\']}/authors/#{@author.id}/settings?secret=#{secret}",\n    :verb => "show",\n    :context => "Item",\n    :content_types => ["Note"]\n  }\n  )\n\n  description = "Publishes to listed.to. Requires decrypted access to publishing note."\n  render :json => {\n    :name => name,\n    :description => description,\n    :supported_types => supported_types,\n    :actions => actions,\n    :content_type => "Extension",\n    :identifier => "com.my.extension"\n  }\nend\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'When a user selects the action, your server should be ready to handle that endpoint, and in most cases expect an item. Here\'s how Listed handles the "Publish to Blog" action:'),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-ruby"},'def create\n  item_uuid = params[:item_uuid]\n  post = Post.find_by_item_uuid(item_uuid)\n  if post && post.author != @author\n    return\n  end\n\n  if !post\n    post = @author.posts.new(post_params)\n  else\n    post.update(post_params)\n  end\n\n  item = params[:items][0]\n  content = item["content"]\n\n  post.title = content["title"]\n  post.text = content["text"]\n  post.save\nend\n')))),Object(r.b)("h3",{id:"properties"},"Properties"),Object(r.b)("p",null,"Actions have the following properties:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Key"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"strong"},"label"))),Object(r.b)("td",{parentName:"tr",align:"left"},"What the UI will display for this action.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"strong"},"url"))),Object(r.b)("td",{parentName:"tr",align:"left"},"The URL that Standard Notes will make a request to when the user selects this action.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"strong"},"verb"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Instructs Standard Notes how to handle the URL. This can be one of:")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"strong"},"show"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Standard Notes will open the ",Object(r.b)("inlineCode",{parentName:"td"},"url")," in a browser.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"strong"},"post"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Standard Notes will make a POST request to the ",Object(r.b)("inlineCode",{parentName:"td"},"url")," with the current item included in the parameters.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"strong"},"get"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Standard Notes will make a GET request to the ",Object(r.b)("inlineCode",{parentName:"td"},"url")," and expect an ",Object(r.b)("inlineCode",{parentName:"td"},"Item")," in response. The item will be used to update the current working note. We use this for our Note History extension to update the current note with a previous version of it.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"strong"},"render"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Standard Notes will make a ",Object(r.b)("inlineCode",{parentName:"td"},"GET")," request to the ",Object(r.b)("inlineCode",{parentName:"td"},"url")," and expect an ",Object(r.b)("inlineCode",{parentName:"td"},"Item"),", but instead of updating the item, it will preview it in a modal. This allows a user to preview the contents of an incoming item before choosing to replace the current note with whatever is retrieved from the server. We also use this in our Note History extension.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"strong"},"context"))),Object(r.b)("td",{parentName:"tr",align:"left"},"Context should mostly be ",Object(r.b)("inlineCode",{parentName:"td"},"Item"),", which means that this action applies to a particular item, and is not just a general action. In the past, ",Object(r.b)("inlineCode",{parentName:"td"},"context")," could take on the value of ",Object(r.b)("inlineCode",{parentName:"td"},"global"),", which means it has actions available that are not related to an item. However, this functionality is unofficially deprecated, with an official deprecation coming soon.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"strong"},"content_types"))),Object(r.b)("td",{parentName:"tr",align:"left"},"The kinds of items this action applies to. Currently only 'Note' actions are supported. In the future, we might allow for actions on a ",Object(r.b)("inlineCode",{parentName:"td"},"Tag")," or other content types, but no such interface is currently available.")))),Object(r.b)("p",null,"For example, the expected response of a ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"get"))," action is:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "item": {\n    "uuid": "",\n    "content_type": "",\n    "content": "",\n    "created_at": "",\n    "updated_at": ""\n  }\n}\n')),Object(r.b)("p",null,"The payload inside the ",Object(r.b)("inlineCode",{parentName:"p"},"item")," key is the same payload structure you would see if you downloaded an encrypted backup file from the Account menu and inspected the ",Object(r.b)("inlineCode",{parentName:"p"},".txt")," file. The item needs to be in the encrypted format when it appears. We'll need to modify the client code to also accept decrypted items."),Object(r.b)("h2",{id:"installing-an-action"},"Installing an Action"),Object(r.b)("p",null,"Actions have the following URL format:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"https://host.org/my-action?type=action&name=MyAction\n")),Object(r.b)("h2",{id:"action-potential"},"Action Potential"),Object(r.b)("p",null,"There are a lot of cool things you can build with actions. For example, you can build an action that receives the current note which consists of a bunch of numbers separated by a comma, and the action can compute the average, and return the new note contents which appends the average. This is a simple use case, but can be enlarged to build more powerful abilities."),Object(r.b)("p",null,"You might even build an action that for example receives JavaScript code in the note text, runs the JavaScript, computes the result, and returns the result which is then appended to the note body in creative ways. The possibilities are almost endless."))}p.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||r;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);