(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,a,t){e.exports={Overlay:"Modal_Overlay__1_GXV",Modal:"Modal_Modal__3eHA1"}},22:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__2IocM"}},23:function(e,a,t){e.exports={Button:"Button_Button__4Cce0"}},25:function(e,a,t){e.exports={Spinner:"Spinner_Spinner__2lTji"}},27:function(e,a,t){e.exports=t(72)},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(21),c=t.n(o),l=t(11),i=t(3),m=t(4),s=t(6),u=t(5),g=t(7),h=t(8),p=t.n(h),f=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={inputValue:""},t.handleSubmit=function(e){e.preventDefault(),""!==t.state.inputValue&&(t.props.onSubmit(t.state.inputValue),t.setState({inputValue:""}))},t.handleChange=function(e){t.setState({inputValue:e.target.value})},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:p.a.Searchbar},r.a.createElement("form",{className:p.a.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:p.a.SearchFormButton},r.a.createElement("span",{className:p.a.SearchFormButtonLabel},"Search")),r.a.createElement("input",{className:p.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})))}}]),a}(n.Component),y=t(9),I=t.n(y),b=function(e){var a=e.url,t=e.largeImageUrl,n=e.onOpenImage;return r.a.createElement("li",{className:I.a.ImageGalleryItem},r.a.createElement("img",{src:a,alt:t,className:I.a.ImageGalleryItemImage,onClick:n}))},d=t(22),v=t.n(d),S=function(e){var a=e.images,t=e.openImage;return r.a.createElement("ul",{className:v.a.ImageGallery},a.map((function(e){var a=e.id,n=e.webformatURL,o=e.largeImageURL;return r.a.createElement(b,{key:a,url:n,largeImageUrl:o,onOpenImage:t})})))},_=t(23),O=t.n(_),E=function(e){var a=e.onFetchImages;return r.a.createElement("button",{className:O.a.Button,type:"button",onClick:a},"Load more")},k=t(24),F=t.n(k),C=t(25),j=t.n(C),B=function(){return r.a.createElement("div",{className:j.a.Spinner},r.a.createElement(F.a,{type:"Oval",color:"#00BFFF",height:40,width:40}))},w=t(10),L=t.n(w),G=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).closeImageByClickEsc=function(e){27===e.keyCode&&t.props.onCloseLargeImage()},t.closeImageByClickOnOverloy=function(e){e.target===e.currentTarget&&t.props.onCloseLargeImage()},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keyup",this.closeImageByClickEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keyup",this.closeImageByClickEsc)}},{key:"render",value:function(){var e=this.props.url;return r.a.createElement("div",{className:L.a.Overlay,onClick:this.closeImageByClickOnOverloy},r.a.createElement("div",{className:L.a.Modal},r.a.createElement("img",{src:e,alt:""})))}}]),a}(n.Component),N=t(26),x=t.n(N),U=t(1),M=t.n(U),Q=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t="14154163-50f1b5a2e44fb9aa2c654ef49";return x.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(a,"&key=").concat(t,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))};Q.propTypes={searchQuery:M.a.string.isRequired,page:M.a.number.isRequired};var V=Q,A=(t(70),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={images:[],largeImageUrl:"",searchQuery:"",page:1,loading:!1,visibleOverlay:!1},t.pageScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},t.closeLargeImage=function(){t.setState({visibleOverlay:!1,largeImageUrl:""})},t.fetchImages=function(){var e=t.state,a=e.searchQuery,n=e.page;t.setState({loading:!0}),V(a,n).then((function(e){return t.setState((function(a){return{images:[].concat(Object(l.a)(a.images),Object(l.a)(e)),page:a.page+1}}))})).catch((function(e){return t.setState({error:e})})).finally((function(){return t.setState({loading:!1})}))},t.handleSearchFormSubmit=function(e){t.setState({searchQuery:e,images:[],page:1})},t.openLargeImage=function(e){var a=e.target.alt;t.setState({visibleOverlay:!0,largeImageUrl:a})},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,a){var t=a.searchQuery,n=this.state.searchQuery;a.images.length!==this.state.images.length&&this.pageScroll(),t!==n&&""!==n&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.largeImageUrl,n=e.loading,o=e.visibleOverlay;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{onSubmit:this.handleSearchFormSubmit}),a.length>0&&r.a.createElement(S,{images:a,openImage:this.openLargeImage}),n&&r.a.createElement(B,null),a.length>0&&!n&&r.a.createElement(E,{onFetchImages:this.fetchImages}),o&&r.a.createElement(G,{url:t,onCloseLargeImage:this.closeLargeImage}))}}]),a}(n.Component));t(71);c.a.render(r.a.createElement(A,null),document.getElementById("root"))},8:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__3MYO8",SearchForm:"Searchbar_SearchForm__1mA8y",SearchFormButton:"Searchbar_SearchFormButton__ZS2dq",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1oxtb",SearchFormInput:"Searchbar_SearchFormInput__3Xtz8"}},9:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2Xg8D",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2D2BR"}}},[[27,1,2]]]);
//# sourceMappingURL=main.e161781c.chunk.js.map