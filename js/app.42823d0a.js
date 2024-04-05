(function(){"use strict";var a={2680:function(a,e,t){var s=t(5130),l=t(6768),n=t(144),r=(t(4114),t.p+"img/ricco.962e3c88.png"),o=t(1387),c=t(4232),i=t(8355);const u=i.A.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"938c9ed1eb9ec0d4ee00c02de50214cf",language:"ko-KR"}}),d={getList:a=>u.get(`movie/${a}`),getDetail:a=>u.get(`movie/${a}`,{params:{append_to_response:"videos, images"}}),getCredits:a=>u.get(`movie/${a}/credits`),getSearch:a=>u.get("search/movie",{params:{query:a}})},v=a=>`https://image.tmdb.org/t/p/w500/${a}`,p=a=>`https://image.tmdb.org/t/p/w200/${a}`,m=a=>`https://image.tmdb.org/t/p/original/${a}`,g=a=>((0,l.Qi)("data-v-43aa2199"),a=a(),(0,l.jt)(),a),f={class:"container"},k={class:"card my-3 rounded-3 shadow"},_=["src","alt"],h={class:"card-body"},b={class:"card-title fw-bold"},y={class:"card-text ms-1"},L=g((()=>(0,l.Lk)("i",{class:"bi bi-star-fill text-warning"},null,-1))),w={class:"card-text ms-1 mt-2"};var C={__name:"MovieCard",props:{data:Object},setup(a){const e=a;return(a,t)=>{const s=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)("div",f,[(0,l.Lk)("div",k,[(0,l.bF)(s,{to:{name:"Detail",params:{id:e.data.id}}},{default:(0,l.k6)((()=>[(0,l.Lk)("img",{src:(0,n.R1)(v)(e.data.poster_path),alt:e.data.title,class:"card-img-top rounded-top-3 shadow img-fluid"},null,8,_)])),_:1},8,["to"]),(0,l.Lk)("div",h,[(0,l.Lk)("div",b,(0,c.v_)(e.data.title),1),(0,l.Lk)("div",y,[L,(0,l.eW)(" "+(0,c.v_)(e.data.vote_average?.toFixed(1)),1)]),(0,l.Lk)("div",w,(0,c.v_)(e.data.release_date),1)])])])}}},x=t(1241);const E=(0,x.A)(C,[["__scopeId","data-v-43aa2199"]]);var X=E;const R={class:"container"},K={class:"ms-4"},I={class:"ms-2"};var F={__name:"TheHome",setup(a){const e=(0,n.KR)([]),t=["현재상영작","인기작","최고등급","개봉예정"],s=["now_playing","popular","top_rated","upcoming"],r=async()=>{const[a,t,s,l]=await Promise.all([d.getList("now_playing"),d.getList("popular"),d.getList("top_rated"),d.getList("upcoming")]).catch((a=>{console.log(a)}));e.value=[a,t,s,l].map((a=>a.data.results))};return r(),(a,r)=>{const o=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)("div",R,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.value,((a,e)=>((0,l.uX)(),(0,l.CE)("div",{class:"row",key:a},[(0,l.Lk)("div",K,[(0,l.eW)((0,c.v_)(t[e])+" ",1),(0,l.Lk)("span",I,[(0,l.bF)(o,{to:{name:"List",params:{path:s[e]}}},{default:(0,l.k6)((()=>[(0,l.eW)("more..")])),_:2},1032,["to"])])]),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(a,((a,e)=>((0,l.uX)(),(0,l.CE)("div",{class:"col-lg-2",key:a.id},[e<6?((0,l.uX)(),(0,l.Wv)((0,n.R1)(X),{key:0,data:a},null,8,["data"])):(0,l.Q3)("",!0)])))),128))])))),128))])}}};const j=(0,x.A)(F,[["__scopeId","data-v-1773cc98"]]);var O=j;const S={class:"container"},A={class:"ms-4"},W={class:"row"};var $={__name:"MovieList",setup(a){const e=(0,o.lq)(),t=(0,n.KR)(""),s=(0,n.KR)({});(0,l.wB)((()=>e.params.path),(a=>{r(a),i(a)}));const r=async a=>{const{data:e}=await d.getList(a).catch((a=>{console.log(a)}));s.value=e.results,i(a)},i=a=>{"now_playing"==a?t.value="현재상영작":"popular"==a?t.value="인기작":"top_rated"==a?t.value="최고등급":"upcoming"==a&&(t.value="개봉예정")};return r(e.params.path),(a,e)=>((0,l.uX)(),(0,l.CE)("div",S,[(0,l.Lk)("div",A,(0,c.v_)(t.value),1),(0,l.Lk)("div",W,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.value,(a=>((0,l.uX)(),(0,l.CE)("div",{class:"col-md-2",key:a.id},[(0,l.bF)((0,n.R1)(X),{data:a},null,8,["data"])])))),128))])]))}};const Q=(0,x.A)($,[["__scopeId","data-v-32e47362"]]);var D=Q;const T={class:"container"},M={class:"card my-3 rounded-3 shadow border-0"},P=["href","title"],q=["src","alt"],H={class:"card-body"},V={class:"card-title fw-bold text-center"},B={class:"card-text ms-1"},U={class:"card-text ms-1"};var G={__name:"CreditCard",props:{data:Object},setup(a){const e=a,s=a=>"https://www.google.com/search?q="+a,r=a=>"Directing"===a?"감독":"",o=a=>{a.target.src=t(1120)};return(a,t)=>((0,l.uX)(),(0,l.CE)("div",T,[(0,l.Lk)("div",M,[(0,l.Lk)("a",{href:s(e.data.name),target:"blank",title:e.data.name},[(0,l.Lk)("img",{src:(0,n.R1)(p)(e.data.profile_path),alt:e.data.name,onError:o,class:"card-img-top rounded-top-3 shadow img-fluid"},null,40,q)],8,P),(0,l.Lk)("div",H,[(0,l.Lk)("div",V,(0,c.v_)(e.data.name),1),(0,l.Lk)("div",B,(0,c.v_)(e.data.character),1),(0,l.Lk)("div",U,(0,c.v_)(r(e.data.known_for_department)),1)])])]))}};const J=(0,x.A)(G,[["__scopeId","data-v-4af0e7ce"]]);var z=J;const N={class:"container"},Y={class:"area"},Z=["src"];var aa={__name:"VideoCard",props:{videoKey:String},setup(a){const e=a;return(a,t)=>((0,l.uX)(),(0,l.CE)("div",N,[(0,l.Lk)("div",Y,[(0,l.Lk)("iframe",{class:"video img-fluid",src:`https://www.youtube.com/embed/${e.videoKey}?autoplay=0&controls=0`,allow:"autoplay"},null,8,Z)])]))}};const ea=(0,x.A)(aa,[["__scopeId","data-v-a7cbf24c"]]);var ta=ea;const sa=a=>((0,l.Qi)("data-v-54fb6f2a"),a=a(),(0,l.jt)(),a),la={class:"container-fluid"},na={class:"row justify-content-center"},ra={class:"col-lg-4 d-flex justify-content-center align-items-center"},oa=["src","alt"],ca={class:"col-lg-7 text-white"},ia=sa((()=>(0,l.Lk)("div",{class:"btn btn-primary py-1",onclick:"history.back();"},"이전",-1))),ua={class:"my-3"},da={class:"me-3"},va=sa((()=>(0,l.Lk)("span",{class:"me-1"},[(0,l.Lk)("i",{class:"bi bi-star-fill text-warning"})],-1))),pa={class:"me-3"},ma={class:"ms-2"},ga={class:"my-3"},fa={key:0,class:"area"},ka=["src"],_a={key:0,class:"row"},ha={class:"row"},ba={key:0,class:"col-lg-2"};var ya={__name:"MovieDetail",setup(a){(0,s.$9)((a=>({"32cb9cfc":g.value})));const e=(0,n.KR)({}),t=(0,n.KR)({}),r=(0,n.KR)([]),i=(0,n.KR)({}),u=(0,n.KR)({}),p=(0,o.lq)(),g=(0,n.KR)(""),f=(0,n.KR)(""),k=async()=>{const[a,s]=await Promise.all([d.getDetail(p.params.id),d.getCredits(p.params.id)]).catch((a=>{console.log(a)}));e.value=a.data,i.value=s.data,t.value=a.data.videos.results,f.value=`(${a.data.original_title})`,g.value="url('"+m(a.data.backdrop_path)+"')",u.value=s.data.cast.find((a=>"Directing"===a.known_for_department));for(let e=1;e<a.data.videos.results.length;e++)r.value.push(a.data.videos.results[e])};return k(),(a,s)=>((0,l.uX)(),(0,l.CE)("div",la,[(0,l.Lk)("div",na,[(0,l.Lk)("div",ra,[(0,l.Lk)("img",{src:(0,n.R1)(v)(e.value.poster_path),alt:e.value.title,class:"img-fluid rounded-3"},null,8,oa)]),(0,l.Lk)("div",ca,[ia,(0,l.Lk)("h2",ua,(0,c.v_)(e.value.title)+" "+(0,c.v_)(f.value),1),(0,l.Lk)("h5",null,[(0,l.Lk)("span",da,(0,c.v_)(e.value.release_date),1),va,(0,l.Lk)("span",pa,(0,c.v_)(e.value.vote_average?.toFixed(1)),1),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.value.genres,(a=>((0,l.uX)(),(0,l.CE)("span",{key:a,class:"mx-1"},(0,c.v_)(a.name),1)))),128)),(0,l.Lk)("span",ma,(0,c.v_)(e.value.runtime)+"분",1),(0,l.Lk)("div",ga,(0,c.v_)(e.value.overview),1)]),t.value.length>0&&t.value[0]?((0,l.uX)(),(0,l.CE)("div",fa,[(0,l.Lk)("iframe",{class:"video",src:`https://www.youtube.com/embed/${t.value[0].key}?autoplay=0&controls=0`,allow:"autoplay"},null,8,ka)])):(0,l.Q3)("",!0)])]),r.value.length?((0,l.uX)(),(0,l.CE)("div",_a,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(r.value,((a,e)=>((0,l.uX)(),(0,l.CE)("div",{class:"col-lg-3",key:e},[e<4?((0,l.uX)(),(0,l.Wv)((0,n.R1)(ta),{key:0,videoKey:a.key},null,8,["videoKey"])):(0,l.Q3)("",!0)])))),128))])):(0,l.Q3)("",!0),(0,l.Lk)("div",ha,[u.value?((0,l.uX)(),(0,l.CE)("div",ba,[(0,l.bF)((0,n.R1)(z),{data:u.value},null,8,["data"])])):(0,l.Q3)("",!0),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(i.value.cast,((a,e)=>((0,l.uX)(),(0,l.CE)("div",{key:e,class:"col-lg-2"},[e<18?((0,l.uX)(),(0,l.Wv)((0,n.R1)(z),{key:0,data:a},null,8,["data"])):(0,l.Q3)("",!0)])))),128))])]))}};const La=(0,x.A)(ya,[["__scopeId","data-v-54fb6f2a"]]);var wa=La;const Ca={class:"container-fluid"},xa={class:"row"},Ea={class:"col-12 text-center mb-4"};var Xa={__name:"TheSearch",setup(a){const e=(0,n.KR)(""),t=(0,n.KR)({});(0,l.sV)((()=>{localStorage.getItem("searchInput")&&(e.value=localStorage.getItem("searchInput"),r()),document.getElementById("input").focus()}));const r=async()=>{if(!e.value)return;const{data:a}=await d.getSearch(e.value).catch((a=>{console.log(a)}));t.value=a.results,localStorage.setItem("searchInput",e.value),e.value=""};return(a,o)=>((0,l.uX)(),(0,l.CE)("div",Ca,[(0,l.Lk)("div",xa,[(0,l.Lk)("div",Ea,[(0,l.bo)((0,l.Lk)("input",{type:"text",id:"input",placeholder:"영화제목을 입력해 주세요",autocomplete:"off","onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),onKeyup:(0,s.jR)(r,["enter"])},null,544),[[s.Jo,e.value]])]),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(t.value,(a=>((0,l.uX)(),(0,l.CE)("div",{class:"col-2",key:a.id},[(0,l.bF)((0,n.R1)(X),{data:a},null,8,["data"])])))),128))])]))}};const Ra=(0,x.A)(Xa,[["__scopeId","data-v-5b0d2fc0"]]);var Ka=Ra;const Ia=[{path:"/",name:"Home",component:O},{path:"/list/:path",name:"List",component:D},{path:"/detail/:id",name:"Detail",component:wa},{path:"/search",name:"Search",component:Ka}],Fa=(0,o.aE)({history:(0,o.LA)(),routes:Ia}),ja=a=>((0,l.Qi)("data-v-08fe5982"),a=a(),(0,l.jt)(),a),Oa={class:"navbar navbar-expand bg-primary text-white py-1"},Sa={class:"container-fluid"},Aa=ja((()=>(0,l.Lk)("img",{src:r,class:"navbar-brand rounded-circle"},null,-1))),Wa={class:"collapse navbar-collapse"},$a={class:"navbar-nav"},Qa={class:"nav-item mx-3"},Da={class:"nav-item mx-3"},Ta={class:"nav-item mx-3"},Ma={class:"nav-item mx-3"},Pa={class:"nav-item mx-3"};var qa={__name:"TheHeader",setup(a){const e=()=>{localStorage.clear(),Fa.push("/search")};return(a,t)=>{const s=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)("div",Oa,[(0,l.Lk)("div",Sa,[Aa,(0,l.Lk)("div",Wa,[(0,l.Lk)("ul",$a,[(0,l.Lk)("li",Qa,[(0,l.bF)(s,{to:"/",class:"item text-white"},{default:(0,l.k6)((()=>[(0,l.eW)("Home")])),_:1})]),(0,l.Lk)("li",Da,[(0,l.bF)(s,{to:{name:"List",params:{path:"now_playing"}},class:"item text-white"},{default:(0,l.k6)((()=>[(0,l.eW)("현재상영작")])),_:1})]),(0,l.Lk)("li",Ta,[(0,l.bF)(s,{to:{name:"List",params:{path:"popular"}},class:"item text-white"},{default:(0,l.k6)((()=>[(0,l.eW)("인기작")])),_:1})]),(0,l.Lk)("li",Ma,[(0,l.bF)(s,{to:{name:"List",params:{path:"top_rated"}},class:"item text-white"},{default:(0,l.k6)((()=>[(0,l.eW)("최고등급")])),_:1})]),(0,l.Lk)("li",Pa,[(0,l.bF)(s,{to:{name:"List",params:{path:"upcoming"}},class:"item text-white"},{default:(0,l.k6)((()=>[(0,l.eW)("개봉예정")])),_:1})]),(0,l.Lk)("li",{class:"nav-item mx-3"},[(0,l.Lk)("a",{class:"item text-white",onClick:e},"검색")])])])])])}}};const Ha=(0,x.A)(qa,[["__scopeId","data-v-08fe5982"]]);var Va=Ha;const Ba={class:"text-center my-5"};function Ua(a,e){return(0,l.uX)(),(0,l.CE)("div",Ba," © 2024. RICCO inc. all rights reserved ")}const Ga={},Ja=(0,x.A)(Ga,[["render",Ua],["__scopeId","data-v-8729c8ea"]]);var za=Ja;const Na={class:"fixed-top"};var Ya={__name:"TheGround",setup(a){return(a,e)=>{const t=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.CE)("div",null,[(0,l.Lk)("div",Na,[(0,l.bF)((0,n.R1)(Va))]),(0,l.Lk)("div",null,[(0,l.bF)(t)]),(0,l.Lk)("div",null,["Detail"!==a.$route.name?((0,l.uX)(),(0,l.Wv)((0,n.R1)(za),{key:0})):(0,l.Q3)("",!0)])])}}};const Za=Ya;var ae=Za,ee={__name:"App",setup(a){return(a,e)=>((0,l.uX)(),(0,l.CE)("div",null,[(0,l.bF)((0,n.R1)(ae))]))}};const te=ee;var se=te;(0,s.Ef)(se).use(Fa).mount("#app")},1120:function(a,e,t){a.exports=t.p+"img/profile.da12102e.jpg"}},e={};function t(s){var l=e[s];if(void 0!==l)return l.exports;var n=e[s]={exports:{}};return a[s].call(n.exports,n,n.exports,t),n.exports}t.m=a,function(){var a=[];t.O=function(e,s,l,n){if(!s){var r=1/0;for(u=0;u<a.length;u++){s=a[u][0],l=a[u][1],n=a[u][2];for(var o=!0,c=0;c<s.length;c++)(!1&n||r>=n)&&Object.keys(t.O).every((function(a){return t.O[a](s[c])}))?s.splice(c--,1):(o=!1,n<r&&(r=n));if(o){a.splice(u--,1);var i=l();void 0!==i&&(e=i)}}return e}n=n||0;for(var u=a.length;u>0&&a[u-1][2]>n;u--)a[u]=a[u-1];a[u]=[s,l,n]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var s in e)t.o(e,s)&&!t.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:e[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var a={524:0};t.O.j=function(e){return 0===a[e]};var e=function(e,s){var l,n,r=s[0],o=s[1],c=s[2],i=0;if(r.some((function(e){return 0!==a[e]}))){for(l in o)t.o(o,l)&&(t.m[l]=o[l]);if(c)var u=c(t)}for(e&&e(s);i<r.length;i++)n=r[i],t.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return t.O(u)},s=self["webpackChunkricco_movie"]=self["webpackChunkricco_movie"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=t.O(void 0,[504],(function(){return t(2680)}));s=t.O(s)})();
//# sourceMappingURL=app.42823d0a.js.map