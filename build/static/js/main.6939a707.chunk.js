(this["webpackJsonpreact-social"]=this["webpackJsonpreact-social"]||[]).push([[0],{107:function(e,t,s){},108:function(e,t,s){},109:function(e,t,s){},110:function(e,t,s){},111:function(e,t,s){},112:function(e,t,s){},113:function(e,t,s){},114:function(e,t,s){},115:function(e,t,s){},116:function(e,t,s){},117:function(e,t,s){},118:function(e,t,s){},123:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),r=s(62),n=s.n(r),i=(s(76),s(137)),o=s(138),l=s(139),j=s(140),u=s(17),d=s(5),b=s(42),p=s(32),m=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"FOLLOW":return Object(p.a)(Object(p.a)({},e),{},{user:Object(p.a)(Object(p.a)({},e.user),{},{followings:[].concat(Object(b.a)(e.user.followings),[t.payload])})});case"UNFOLLOW":return Object(p.a)(Object(p.a)({},e),{},{user:Object(p.a)(Object(p.a)({},e.user),{},{followings:e.user.followings.filter((function(e){return e!==t.payload}))})});default:return e}},h=s(0),O={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},x=Object(a.createContext)(O),f=function(e){var t=e.children,s=Object(a.useReducer)(m,O),c=Object(d.a)(s,2),r=c[0],n=c[1];return Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r.user))}),[r.user]),Object(h.jsx)(x.Provider,{value:{user:r.user,isFetching:r.isFetching,error:r.error,dispatch:n},children:t})};function g(){var e=Object(a.useContext)(x).user,t="https://sociallite-backend.herokuapp.com/images/";return Object(h.jsxs)("div",{className:"topbarContainer",children:[Object(h.jsx)("div",{className:"topbarLeft",children:Object(h.jsx)(u.b,{to:"/",style:{textDecoration:"none"},children:Object(h.jsx)("span",{className:"logo",children:"Sociallite"})})}),Object(h.jsx)("div",{className:"topbarCenter",children:Object(h.jsxs)("div",{className:"searchbar",children:[Object(h.jsx)(i.a,{className:"searchIcon"}),Object(h.jsx)("input",{placeholder:"Search for friend, post or video",className:"searchInput"})]})}),Object(h.jsxs)("div",{className:"topbarRight",children:[Object(h.jsxs)("div",{className:"topbarLinks",children:[Object(h.jsx)("span",{className:"topbarLink",children:"Homepage"}),Object(h.jsx)("span",{className:"topbarLink",children:"Timeline"})]}),Object(h.jsxs)("div",{className:"topbarIcons",children:[Object(h.jsxs)("div",{className:"topbarIconItem",children:[Object(h.jsx)(o.a,{}),Object(h.jsx)("span",{className:"topbarIconBadge",children:"1"})]}),Object(h.jsxs)("div",{className:"topbarIconItem",children:[Object(h.jsx)(u.b,{to:"/messenger",style:{color:"white"},children:Object(h.jsx)(l.a,{})}),Object(h.jsx)("span",{className:"topbarIconBadge",children:"2"})]}),Object(h.jsxs)("div",{className:"topbarIconItem",children:[Object(h.jsx)(j.a,{}),Object(h.jsx)("span",{className:"topbarIconBadge",children:"1"})]})]}),Object(h.jsx)(u.b,{to:"/profile/".concat(e.username),children:Object(h.jsx)("img",{src:e.profilePicture?t+e.profilePicture:t+"person/noAvatar.png",alt:"",className:"topbarImg"})})]})]})}s(85);var v=s(141),N=s(142),I=s(143),k=s(144),w=s(145),y=s(146),L=s(147),C=s(148),S=[{id:1,profilePicture:"person/1.jpeg",username:"Akshay Kumar"},{id:2,profilePicture:"person/2.jpeg",username:"Manoj Bajpayee"},{id:3,profilePicture:"person/3.jpeg",username:"Salman Khan"},{id:4,profilePicture:"person/4.jpeg",username:"Katrina Kaif"},{id:5,profilePicture:"person/5.jpeg",username:"Vicky Kaushal"},{id:6,profilePicture:"person/6.jpeg",username:"Chunky Pandey"},{id:7,profilePicture:"person/7.jpeg",username:"Govinda"},{id:8,profilePicture:"person/8.jpeg",username:"Amir Khan"},{id:9,profilePicture:"person/9.jpeg",username:"Disha Patani"},{id:10,profilePicture:"person/10.jpeg",username:"Kiara Advani"}];s(86);function P(e){var t=e.user;return Object(h.jsxs)("li",{className:"sidebarFriend",children:[Object(h.jsx)("img",{className:"sidebarFriendImg",src:"https://sociallite-backend.herokuapp.com/images/"+t.profilePicture,alt:""}),Object(h.jsx)("span",{className:"sidebarFriendName",children:t.username})]})}function F(){return Object(h.jsx)("div",{className:"sidebar",children:Object(h.jsxs)("div",{className:"sidebarWrapper",children:[Object(h.jsxs)("ul",{className:"sidebarList",children:[Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(v.a,{className:"sidebarIcon"}),Object(h.jsx)("span",{className:"sidebarListItemText",children:Object(h.jsx)(u.b,{to:"/",style:{textDecoration:"none",color:"black"},children:"Feed"})})]}),Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(l.a,{className:"sidebarIcon"}),Object(h.jsx)("span",{className:"sidebarListItemText",children:Object(h.jsx)(u.b,{to:"/messenger",style:{textDecoration:"none",color:"black"},children:"Chats"})})]}),Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(N.a,{className:"sidebarIcon"}),Object(h.jsx)("span",{className:"sidebarListItemText",children:"Videos"})]}),Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(I.a,{className:"sidebarIcon"}),Object(h.jsx)("span",{className:"sidebarListItemText",children:"Groups"})]}),Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(k.a,{className:"sidebarIcon"}),Object(h.jsx)("span",{className:"sidebarListItemText",children:"Bookmarks"})]}),Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(w.a,{className:"sidebarIcon"}),Object(h.jsx)("span",{className:"sidebarListItemText",children:"Questions"})]}),Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(y.a,{className:"sidebarIcon"}),Object(h.jsx)("span",{className:"sidebarListItemText",children:"Jobs"})]}),Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(L.a,{className:"sidebarIcon"}),Object(h.jsx)("span",{className:"sidebarListItemText",children:"Events"})]}),Object(h.jsxs)("li",{className:"sidebarListItem",children:[Object(h.jsx)(C.a,{className:"sidebarIcon"}),Object(h.jsx)("span",{className:"sidebarListItemText",children:"Courses"})]})]}),Object(h.jsx)("button",{className:"sidebarButton",children:"Show More"}),Object(h.jsx)("hr",{className:"sidebarHr"}),Object(h.jsx)("ul",{className:"sidebarFriendList",children:S.map((function(e){return Object(h.jsx)(P,{user:e},e.id)}))})]})})}var _=s(3),T=s.n(_),B=s(7),R=(s(88),s(149)),A=s(4),E=s.n(A),U=s(48);function D(e){var t=e.post,s=Object(a.useState)(t.likes.length),c=Object(d.a)(s,2),r=c[0],n=c[1],i=Object(a.useState)(!1),o=Object(d.a)(i,2),l=o[0],j=o[1],b=Object(a.useState)({}),p=Object(d.a)(b,2),m=p[0],O=p[1],f="https://sociallite-backend.herokuapp.com/images/",g="https://sociallite-backend.herokuapp.com/api",v=Object(a.useContext)(x).user;Object(a.useEffect)((function(){j(t.likes.includes(v._id))}),[v._id,t.likes]),Object(a.useEffect)((function(){(function(){var e=Object(B.a)(T.a.mark((function e(){var s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat(g,"/users?userId=").concat(t.userId));case 2:s=e.sent,O(s.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[g,t.userId]);var N=function(){try{E.a.put(g+"/posts/"+t._id+"/like",{userId:v._id})}catch(e){}n(l?r-1:r+1),j(!l)};return Object(h.jsx)("div",{className:"post",children:Object(h.jsxs)("div",{className:"postWrapper",children:[Object(h.jsxs)("div",{className:"postTop",children:[Object(h.jsxs)("div",{className:"postTopLeft",children:[Object(h.jsx)(u.b,{to:"/profile/".concat(m.username),children:Object(h.jsx)("img",{className:"postProfileImg",src:m.profilePicture?f+m.profilePicture:f+"person/noAvatar.png",alt:""})}),Object(h.jsx)("span",{className:"postUsername",children:m.username}),Object(h.jsx)("span",{className:"postDate",children:Object(U.a)(t.createdAt)})]}),Object(h.jsx)("div",{className:"postTopRight",children:Object(h.jsx)(R.a,{})})]}),Object(h.jsxs)("div",{className:"postCenter",children:[Object(h.jsx)("span",{className:"postText",children:null===t||void 0===t?void 0:t.desc}),Object(h.jsx)("img",{className:"postImg",src:f+t.img,alt:""})]}),Object(h.jsxs)("div",{className:"postBottom",children:[Object(h.jsxs)("div",{className:"postBottomLeft",children:[Object(h.jsx)("img",{className:"likeIcon",src:"".concat(f,"like.png"),onClick:N,alt:""}),Object(h.jsx)("img",{className:"likeIcon",src:"".concat(f,"heart.png"),onClick:N,alt:""}),Object(h.jsxs)("span",{className:"postLikeCounter",children:[r," people like it"]})]}),Object(h.jsx)("div",{className:"postBottomRight",children:Object(h.jsxs)("span",{className:"postCommentText",children:[t.comment," comments"]})})]})]})})}s(107);var W=s(150),K=s(151),M=s(152),G=s(153),V=s(154);function q(){var e=Object(a.useContext)(x).user,t="https://sociallite-backend.herokuapp.com/images/",s="https://sociallite-backend.herokuapp.com/api",c=Object(a.useRef)(),r=Object(a.useState)(null),n=Object(d.a)(r,2),i=n[0],o=n[1],l=function(){var t=Object(B.a)(T.a.mark((function t(a){var r,n,o;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),r={userId:e._id,desc:c.current.value},!i){t.next=16;break}return n=new FormData,o=Date.now()+i.name,n.append("name",o),n.append("file",i),r.img=o,console.log(r),t.prev=9,t.next=12,E.a.post(s+"/upload",n);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(9);case 16:return t.prev=16,t.next=19,E.a.post(s+"/posts",r);case 19:window.location.reload(),t.next=24;break;case 22:t.prev=22,t.t1=t.catch(16);case 24:case"end":return t.stop()}}),t,null,[[9,14],[16,22]])})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"share",children:Object(h.jsxs)("div",{className:"shareWrapper",children:[Object(h.jsxs)("div",{className:"shareTop",children:[Object(h.jsx)("img",{className:"shareProfileImg",src:e.profilePicture?t+e.profilePicture:t+"person/noAvatar.png",alt:""}),Object(h.jsx)("input",{placeholder:"What's in your mind "+e.username+"?",className:"shareInput",ref:c})]}),Object(h.jsx)("hr",{className:"shareHr"}),i&&Object(h.jsxs)("div",{className:"shareImgContainer",children:[Object(h.jsx)("img",{className:"shareImg",src:URL.createObjectURL(i),alt:""}),Object(h.jsx)(W.a,{className:"shareCancelImg",onClick:function(){return o(null)}})]}),Object(h.jsxs)("form",{className:"shareBottom",onSubmit:l,children:[Object(h.jsxs)("div",{className:"shareOptions",children:[Object(h.jsxs)("label",{htmlFor:"file",className:"shareOption",children:[Object(h.jsx)(K.a,{htmlColor:"tomato",className:"shareIcon"}),Object(h.jsx)("span",{className:"shareOptionText",children:"Photo or Video"}),Object(h.jsx)("input",{style:{display:"none"},type:"file",id:"file",accept:".png,.jpeg,.jpg",onChange:function(e){return o(e.target.files[0])}})]}),Object(h.jsxs)("div",{className:"shareOption",children:[Object(h.jsx)(M.a,{htmlColor:"blue",className:"shareIcon"}),Object(h.jsx)("span",{className:"shareOptionText",children:"Tag"})]}),Object(h.jsxs)("div",{className:"shareOption",children:[Object(h.jsx)(G.a,{htmlColor:"green",className:"shareIcon"}),Object(h.jsx)("span",{className:"shareOptionText",children:"Location"})]}),Object(h.jsxs)("div",{className:"shareOption",children:[Object(h.jsx)(V.a,{htmlColor:"goldenrod",className:"shareIcon"}),Object(h.jsx)("span",{className:"shareOptionText",children:"Feelings"})]})]}),Object(h.jsx)("button",{className:"shareButton",type:"submit",children:"Share"})]})]})})}s(108);function J(e){var t=e.username,s=Object(a.useState)([]),c=Object(d.a)(s,2),r=c[0],n=c[1],i=Object(a.useContext)(x).user,o="https://sociallite-backend.herokuapp.com/api";return Object(a.useEffect)((function(){(function(){var e=Object(B.a)(T.a.mark((function e(){var s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,E.a.get(o+"/posts/profile/"+t);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,E.a.get(o+"/posts/timeline/"+i._id);case 8:e.t0=e.sent;case 9:s=e.t0,n(s.data.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,i._id,o]),Object(h.jsx)("div",{className:"feed",children:Object(h.jsxs)("div",{className:"feedWrapper",children:[(!t||t===i.username)&&Object(h.jsx)(q,{}),r.map((function(e){return Object(h.jsx)(D,{post:e},e._id)}))]})})}s(109),s(110);function H(e){var t=e.user;return Object(h.jsxs)("li",{className:"rightbarFriend",children:[Object(h.jsxs)("div",{className:"rightbarProfileImgContainer",children:[Object(h.jsx)("img",{className:"rightbarProfileImg",src:"https://sociallite-backend.herokuapp.com/images/"+t.profilePicture,alt:""}),Object(h.jsx)("span",{className:"rightbarOnline"})]}),Object(h.jsx)("span",{className:"rightbarUsername",children:t.username})]})}var z=s(155),Q=s(156);function X(e){var t=e.user,s="https://sociallite-backend.herokuapp.com/images/",c="https://sociallite-backend.herokuapp.com/api",r=Object(a.useState)([]),n=Object(d.a)(r,2),i=n[0],o=n[1],l=Object(a.useContext)(x),j=l.user,b=l.dispatch,p=Object(a.useState)(j.followings.includes(null===t||void 0===t?void 0:t.id)),m=Object(d.a)(p,2),O=m[0],f=m[1];Object(a.useEffect)((function(){(function(){var e=Object(B.a)(T.a.mark((function e(){var s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get(c+"/users/friends/"+t._id);case 3:s=e.sent,o(s.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[c,t]);var g=function(){var e=Object(B.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!O){e.next=7;break}return e.next=4,E.a.put("".concat(c,"/users/").concat(t._id,"/unfollow"),{userId:j._id});case 4:b({type:"UNFOLLOW",payload:t._id}),e.next=12;break;case 7:return e.next=9,E.a.post("".concat(c,"/conversations"),{senderId:j._id,receiverId:t._id});case 9:return e.next=11,E.a.put("".concat(c,"/users/").concat(t._id,"/follow"),{userId:j._id});case 11:b({type:"FOLLOW",payload:t._id});case 12:f(!O),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(0);case 17:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),v=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"birthdayContainer",children:[Object(h.jsx)("img",{className:"birthdayImg",src:"assets/gift.png",alt:""}),Object(h.jsxs)("span",{className:"birthdayText",children:[Object(h.jsx)("b",{children:"Prakhar Bansal"})," and ",Object(h.jsx)("b",{children:"3 other friends"})," have a birhday today."]})]}),Object(h.jsx)("img",{className:"rightbarAd",src:"assets/noCover.png",alt:""}),Object(h.jsx)("h4",{className:"rightbarTitle",children:"Online Friends"}),Object(h.jsx)("ul",{className:"rightbarFriendList",children:S.map((function(e){return Object(h.jsx)(H,{user:e},e.id)}))})]})},N=function(){return Object(h.jsxs)(h.Fragment,{children:[t.username!==j.username&&Object(h.jsxs)("button",{className:"rightbarFollowButton",onClick:g,children:[O?"Unfollow":"Follow",O?Object(h.jsx)(z.a,{}):Object(h.jsx)(Q.a,{})]}),Object(h.jsx)("h4",{className:"rightbarTitle",children:"User information"}),Object(h.jsxs)("div",{className:"rightbarInfo",children:[Object(h.jsxs)("div",{className:"rightbarInfoItem",children:[Object(h.jsx)("span",{className:"rightbarInfoKey",children:"City:"}),Object(h.jsx)("span",{className:"rightbarInfoValue",children:t.city})]}),Object(h.jsxs)("div",{className:"rightbarInfoItem",children:[Object(h.jsx)("span",{className:"rightbarInfoKey",children:"From:"}),Object(h.jsx)("span",{className:"rightbarInfoValue",children:t.from})]}),Object(h.jsxs)("div",{className:"rightbarInfoItem",children:[Object(h.jsx)("span",{className:"rightbarInfoKey",children:"Relationship:"}),Object(h.jsx)("span",{className:"rightbarInfoValue",children:1===t.relationship?"Single":1===t.relationship?"Married":"-"})]})]}),Object(h.jsx)("h4",{className:"rightbarTitle",children:"User friends"}),Object(h.jsx)("div",{className:"rightbarFollowings",children:i.map((function(e){return Object(h.jsx)(u.b,{to:"/profile/"+e.username,style:{textDecoration:"none"},children:Object(h.jsxs)("div",{className:"rightbarFollowing",children:[Object(h.jsx)("img",{src:e.profilePicture?s+e.profilePicture:s+"person/noAvatar.png",alt:"",className:"rightbarFollowingImg"}),Object(h.jsx)("span",{className:"rightbarFollowingName",children:e.username})]})})}))})]})};return Object(h.jsx)("div",{className:"rightbar",children:Object(h.jsx)("div",{className:"rightbarWrapper",children:t?Object(h.jsx)(N,{}):Object(h.jsx)(v,{})})})}s(111);function Y(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{}),Object(h.jsxs)("div",{className:"homeContainer",children:[Object(h.jsx)(F,{}),Object(h.jsx)(J,{}),Object(h.jsx)(X,{})]})]})}s(112);var Z=function(){var e=Object(B.a)(T.a.mark((function e(t,s){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://sociallite-backend.herokuapp.com/api",s({type:"LOGIN_START"}),e.prev=2,e.next=5,E.a.post("https://sociallite-backend.herokuapp.com/api/auth/login",t);case 5:a=e.sent,s({type:"LOGIN_SUCCESS",payload:a.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),s({type:"LOGIN_FAILURE",payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,s){return e.apply(this,arguments)}}(),$=s(157);function ee(){var e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useContext)(x),c=s.isFetching,r=s.dispatch;return Object(h.jsx)("div",{className:"login",children:Object(h.jsxs)("div",{className:"loginWrapper",children:[Object(h.jsxs)("div",{className:"loginLeft",children:[Object(h.jsx)("h3",{className:"loginLogo",children:"Sociallite"}),Object(h.jsx)("span",{className:"loginDesc",children:"Connect with friends and the world around you on Sociallite."})]}),Object(h.jsx)("div",{className:"loginRight",children:Object(h.jsxs)("form",{className:"loginBox",onSubmit:function(s){s.preventDefault(),Z({email:e.current.value,password:t.current.value},r)},children:[Object(h.jsx)("input",{placeholder:"Email",type:"email",required:!0,className:"loginInput",ref:e}),Object(h.jsx)("input",{placeholder:"Password",type:"password",required:!0,minLength:"6",className:"loginInput",ref:t}),Object(h.jsx)("button",{className:"loginButton",type:"submit",disabled:c,children:c?Object(h.jsx)($.a,{color:"white",size:"20px"}):"Log In"}),Object(h.jsx)("span",{className:"loginForgot",children:"Forgot Password?"}),Object(h.jsx)("button",{className:"loginRegisterButton",children:c?Object(h.jsx)($.a,{color:"white",size:"20px"}):"Create a New Account"})]})})]})})}s(113);var te=s(6);function se(){var e="https://sociallite-backend.herokuapp.com/images/",t=Object(a.useState)({}),s=Object(d.a)(t,2),c=s[0],r=s[1],n=Object(te.h)().username,i="https://sociallite-backend.herokuapp.com/api";return Object(a.useEffect)((function(){(function(){var e=Object(B.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat(i,"/users?username=").concat(n));case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i,n]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{}),Object(h.jsxs)("div",{className:"profile",children:[Object(h.jsx)(F,{}),Object(h.jsxs)("div",{className:"profileRight",children:[Object(h.jsxs)("div",{className:"profileRightTop",children:[Object(h.jsxs)("div",{className:"profileCover",children:[Object(h.jsx)("img",{className:"profileCoverImg",src:c.coverPicture?e+c.coverPicture:e+"person/noCover.png",alt:""}),Object(h.jsx)("img",{className:"profileUserImg",src:c.profilePicture?e+c.profilePicture:e+"person/noAvatar.png",alt:""})]}),Object(h.jsxs)("div",{className:"profileInfo",children:[Object(h.jsx)("h4",{className:"profileInfoName",children:c.username}),Object(h.jsx)("span",{className:"profileInfoDesc",children:c.desc})]})]}),Object(h.jsxs)("div",{className:"profileRightBottom",children:[Object(h.jsx)(J,{username:n}),Object(h.jsx)(X,{user:c})]})]})]})]})}s(114);function ae(){var e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useRef)(),c=Object(a.useRef)(),r=Object(te.g)(),n=function(){var a=Object(B.a)(T.a.mark((function a(n){var i;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),c.current.value===s.current.value){a.next=5;break}c.current.setCustomValidity("Passwords don't match!"),a.next=15;break;case 5:return i={username:e.current.value,email:t.current.value,password:s.current.value},a.prev=6,a.next=9,E.a.post("https://sociallite-backend.herokuapp.com/api/auth/register",i);case 9:r.push("/login"),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(6),console.log(a.t0);case 15:case"end":return a.stop()}}),a,null,[[6,12]])})));return function(e){return a.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"login",children:Object(h.jsxs)("div",{className:"loginWrapper",children:[Object(h.jsxs)("div",{className:"loginLeft",children:[Object(h.jsx)("h3",{className:"loginLogo",children:"Sociallite"}),Object(h.jsx)("span",{className:"loginDesc",children:"Connect with friends and the world around you on Sociallite."})]}),Object(h.jsx)("div",{className:"loginRight",children:Object(h.jsxs)("form",{className:"loginBox",onSubmit:n,children:[Object(h.jsx)("input",{placeholder:"Username",required:!0,ref:e,className:"loginInput"}),Object(h.jsx)("input",{placeholder:"Email",required:!0,ref:t,className:"loginInput",type:"email"}),Object(h.jsx)("input",{placeholder:"Password",required:!0,ref:s,className:"loginInput",type:"password",minLength:"6"}),Object(h.jsx)("input",{placeholder:"Password Again",required:!0,ref:c,className:"loginInput",type:"password"}),Object(h.jsx)("button",{className:"loginButton",type:"submit",children:"Sign Up"}),Object(h.jsx)(u.b,{to:"/login",style:{textAlign:"center"},children:Object(h.jsx)("button",{className:"loginRegisterButton",children:"Log into Account"})})]})})]})})}s(115),s(116);function ce(e){var t=e.conversation,s=e.currentUser,c=Object(a.useState)(null),r=Object(d.a)(c,2),n=r[0],i=r[1],o="https://sociallite-backend.herokuapp.com/images/",l="https://sociallite-backend.herokuapp.com/api";return Object(a.useEffect)((function(){var e=t.members.find((function(e){return e!==s._id}));(function(){var t=Object(B.a)(T.a.mark((function t(){var s;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E()(l+"/users?userId="+e);case 3:s=t.sent,i(s.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[s,t,n,l]),Object(h.jsxs)("div",{className:"conversation",children:[Object(h.jsx)("img",{className:"conversationImg",src:(null===n||void 0===n?void 0:n.profilePicture)?o+n.profilePicture:o+"person/noAvatar.png",alt:""}),Object(h.jsx)("span",{className:"conversationName",children:null===n||void 0===n?void 0:n.username})]})}s(117);function re(e){var t=e.message,s=e.own;return Object(h.jsxs)("div",{className:s?"message own":"message",children:[Object(h.jsxs)("div",{className:"messageTop",children:[Object(h.jsx)("img",{className:"messageImg",src:"https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:""}),Object(h.jsx)("p",{className:"messageText",children:t.text})]}),Object(h.jsx)("div",{className:"messageBottom",children:Object(U.a)(t.createdAt)})]})}s(118);function ne(e){var t=e.onlineUsers,s=e.currentId,c=e.setCurrentChat,r=Object(a.useState)([]),n=Object(d.a)(r,2),i=n[0],o=n[1],l=Object(a.useState)([]),j=Object(d.a)(l,2),u=j[0],b=j[1],p="https://sociallite-backend.herokuapp.com/images/",m="https://sociallite-backend.herokuapp.com/api";Object(a.useEffect)((function(){(function(){var e=Object(B.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(m+"/users/friends/"+s);case 2:t=e.sent,o(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m,s]),Object(a.useEffect)((function(){b(i.filter((function(e){return t.includes(e._id)})))}),[i,t]);var O=function(){var e=Object(B.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat(m,"/conversations/find/").concat(s,"/").concat(t._id));case 3:a=e.sent,c(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"chatOnline",children:u.map((function(e){return Object(h.jsxs)("div",{className:"chatOnlineFriend",onClick:function(){return O(e)},children:[Object(h.jsxs)("div",{className:"chatOnlineImgContainer",children:[Object(h.jsx)("img",{className:"chatOnlineImg",src:(null===e||void 0===e?void 0:e.profilePicture)?p+e.profilePicture:p+"person/noAvatar.png",alt:""}),Object(h.jsx)("div",{className:"chatOnlineBadge"})]}),Object(h.jsx)("span",{className:"chatOnlineName",children:null===e||void 0===e?void 0:e.username})]})}))})}var ie=s(70);function oe(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(null),n=Object(d.a)(r,2),i=n[0],o=n[1],l=Object(a.useState)([]),j=Object(d.a)(l,2),u=j[0],p=j[1],m=Object(a.useState)(""),O=Object(d.a)(m,2),f=O[0],v=O[1],N=Object(a.useState)(null),I=Object(d.a)(N,2),k=I[0],w=I[1],y=Object(a.useState)([]),L=Object(d.a)(y,2),C=L[0],S=L[1],P=Object(a.useRef)(),F=Object(a.useContext)(x).user,_=Object(a.useRef)(),R="https://sociallite-backend.herokuapp.com/api";Object(a.useEffect)((function(){P.current=Object(ie.a)("https://sociallite-socket.herokuapp.com"),P.current.on("getMessage",(function(e){w({sender:e.senderId,text:e.text,createdAt:Date.now()})}))}),[]),Object(a.useEffect)((function(){k&&(null===i||void 0===i?void 0:i.members.includes(k.sender))&&p((function(e){return[].concat(Object(b.a)(e),[k])}))}),[k,i]),Object(a.useEffect)((function(){P.current.emit("addUser",F._id),P.current.on("getUsers",(function(e){S(F.followings.filter((function(t){return e.some((function(e){return e.userId===t}))})))}))}),[F]),Object(a.useEffect)((function(){(function(){var e=Object(B.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get(R+"/conversations/"+F._id);case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[R,F._id]),Object(a.useEffect)((function(){(function(){var e=Object(B.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get(R+"/messages/"+(null===i||void 0===i?void 0:i._id));case 3:t=e.sent,p(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[R,i]);var A=function(){var e=Object(B.a)(T.a.mark((function e(t){var s,a,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={sender:F._id,text:f,conversationId:i._id},a=i.members.find((function(e){return e!==F._id})),P.current.emit("sendMessage",{senderId:F._id,receiverId:a,text:f}),e.prev=4,e.next=7,E.a.post(R+"/messages",s);case 7:c=e.sent,p([].concat(Object(b.a)(u),[c.data])),v(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e;null===(e=_.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[u]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{}),Object(h.jsxs)("div",{className:"messenger",children:[Object(h.jsx)("div",{className:"chatMenu",children:Object(h.jsxs)("div",{className:"chatMenuWrapper",children:[Object(h.jsx)("input",{placeholder:"Search for friends",className:"chatMenuInput"}),s.map((function(e){return Object(h.jsx)("div",{onClick:function(){return o(e)},children:Object(h.jsx)(ce,{conversation:e,currentUser:F})})}))]})}),Object(h.jsx)("div",{className:"chatBox",children:Object(h.jsx)("div",{className:"chatBoxWrapper",children:i?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"chatBoxTop",children:u.map((function(e){return Object(h.jsx)("div",{ref:_,children:Object(h.jsx)(re,{message:e,own:e.sender===F._id})})}))}),Object(h.jsxs)("div",{className:"chatBoxBottom",children:[Object(h.jsx)("textarea",{className:"chatMessageInput",placeholder:"write something...",onChange:function(e){return v(e.target.value)},value:f}),Object(h.jsx)("button",{className:"chatSubmitButton",onClick:A,children:"Send"})]})]}):Object(h.jsx)("span",{className:"noConversationText",children:"Open a conversation to start a chat."})})}),Object(h.jsx)("div",{className:"chatOnline",children:Object(h.jsx)("div",{className:"chatOnlineWrapper",children:Object(h.jsx)(ne,{onlineUsers:C,currentId:F._id,setCurrentChat:o})})})]})]})}var le=function(){var e=Object(a.useContext)(x).user;return Object(h.jsx)(u.a,{children:Object(h.jsxs)(te.d,{children:[Object(h.jsx)(te.b,{exact:!0,path:"/",children:e?Object(h.jsx)(Y,{}):Object(h.jsx)(ae,{})}),Object(h.jsx)(te.b,{path:"/login",children:e?Object(h.jsx)(te.a,{to:"/"}):Object(h.jsx)(ee,{})}),Object(h.jsx)(te.b,{path:"/register",children:e?Object(h.jsx)(te.a,{to:"/"}):Object(h.jsx)(ae,{})}),Object(h.jsx)(te.b,{path:"/messenger",children:e?Object(h.jsx)(oe,{}):Object(h.jsx)(te.a,{to:"/"})}),Object(h.jsx)(te.b,{path:"/profile/:username",children:Object(h.jsx)(se,{})})]})})};n.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(f,{children:Object(h.jsx)(le,{})})}),document.getElementById("root"))},76:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){},88:function(e,t,s){}},[[123,1,2]]]);
//# sourceMappingURL=main.6939a707.chunk.js.map