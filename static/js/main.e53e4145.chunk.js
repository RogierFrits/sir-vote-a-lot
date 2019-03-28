(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{257:function(e,t,n){e.exports=n(583)},582:function(e,t,n){},583:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"createAnswer",function(){return L});var r={};n.r(r),n.d(r,"setQuestionText",function(){return F}),n.d(r,"createQuestionOption",function(){return G}),n.d(r,"setQuestionOption",function(){return J}),n.d(r,"removeQuestionOption",function(){return H});var o={};n.r(o),n.d(o,"questionTextSelector",function(){return $}),n.d(o,"questionOptionsSelector",function(){return ee});var i={};n.r(i),n.d(i,"answersAmountSelector",function(){return oe}),n.d(i,"answerChartDataSelector",function(){return ie});var s={};n.r(s),n.d(s,"setError",function(){return Te}),n.d(s,"clearError",function(){return je});var c={};n.r(c),n.d(c,"errorInfoSelector",function(){return Qe});var u=n(1),l=n.n(u),p=n(25),m=n.n(p),d=n(26),O=n(10),f=n.n(O),E=n(22),b=n(28),h=n.n(b),v=n(55),w=n(56),x=n(60),g=n(57),T=n(61),j=n(40),y=n.n(j),q=n(134),Q=n.n(q),S=n(219),I=n.n(S),A=n(220),D=n.n(A),_=n(218),N=n.n(_),C=n(21),P=n(23),R="answer/CREATE_ANSWER",L=function(e){return{type:R,payload:{questionOptionId:e,created:Date.now()}}},k=n(64),M=Object(C.b)({answers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return[].concat(Object(k.a)(e),[t.payload]);default:return e}}}),K=n(216),U=n.n(K),V="question/SET_QUESTION_TEXT",X="question/CREATE_QUESTION_OPTION",W="question/SET_QUESTION_OPTION",B="question/REMOVE_QUESTION_OPTION",F=function(e){return{type:V,payload:{questionText:e}}},G=function(e){return{type:X,payload:{id:U()(),questionOptionText:e,created:Date.now(),modified:null}}},J=function(e,t){return{type:W,payload:{id:e,questionOptionText:t,modified:Date.now()}}},H=function(e){return{type:B,payload:{id:e}}},Y=n(43),z=Object(C.b)({questionText:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return t.payload.questionText;default:return e}},questionOptions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:var n=Object(k.a)(e);return n.push(t.payload),n;case W:var a=t.payload.id,r=Object(k.a)(e),o=r.map(function(e){return e.id}).indexOf(a);if(-1===o)return e;var i=r[o],s=Object(Y.a)({},i,t.payload);return r[o]=s,r;case B:var c=t.payload.id,u=Object(k.a)(e),l=u.map(function(e){return e.id}).indexOf(c);return-1===l?e:(u.splice(l,1),u);default:return e}}}),Z=function(e){return e.question},$=Object(P.a)(Z,function(e){return e.questionText}),ee=Object(P.a)(Z,function(e){return e.questionOptions}),te=80,ne=10,ae=z,re=Object(P.a)(function(e){return e.answer},function(e){return e.answers}),oe=Object(P.a)(re,function(e){return e.length}),ie=Object(P.a)(o.questionOptionsSelector,re,function(e,t){return e.map(function(e){var n,a,r=e.id,o=e.questionOptionText;return{questionOptionText:(n=o,a=8,n.length<=a?n:"".concat(n.substr(0,a-3),"...")),amount:t.filter(function(e){return e.questionOptionId===r}).length}})}),se=M,ce=n(217),ue=n.n(ce),le=Object(E.withStyles)({root:{margin:"10px 0"}})(function(e){var t=e.classes;return l.a.createElement(ue.a,{light:!0,variant:"middle",classes:t})}),pe=n(4),me=n.n(pe),de={root:{height:"100%"},placeholder:{textAlign:"center"}},Oe=function(e){var t=e.minimumAnswerOptions,n=e.classes;return l.a.createElement(f.a,{className:me()(n.root,n.placeholder),container:!0,direction:"column",justify:"center",alignItems:"center"},l.a.createElement(h.a,null,"To vote, please define your question and at least ".concat(t," answer options.")))};Oe.defaultProps={classes:{},minimumAnswerOptions:2};var fe=Object(E.withStyles)(de)(Oe),Ee=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(x.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={selectedQuestionOptionId:""},n.handleChange=function(e){var t=e.target.value;n.setState({selectedQuestionOptionId:t})},n.submitAnswer=function(){(0,n.props.createAnswer)(n.state.selectedQuestionOptionId),n.setState({selectedQuestionOptionId:""})},n}return Object(T.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.state.selectedQuestionOptionId,t=this.props,n=t.questionText,a=t.classes,r=t.questionOptions,o=t.minimumOptionsToVote;return!n||r.length<o?l.a.createElement(fe,{minimumAnswerOptions:o}):l.a.createElement(f.a,{className:a.root,container:!0,direction:"column",justify:"space-between"},l.a.createElement(f.a,{container:!0,item:!0,direction:"column"},n,l.a.createElement(le,null),l.a.createElement(Q.a,{component:"fieldset"},l.a.createElement(N.a,{name:"answer-options",value:e,onChange:this.handleChange},r.map(function(e){var t=e.id,n=e.questionOptionText;return l.a.createElement(I.a,{key:t,value:t,control:l.a.createElement(D.a,null),label:n})})))),l.a.createElement(f.a,{item:!0},l.a.createElement(le,null),l.a.createElement(f.a,{container:!0,item:!0,justify:"flex-end",alignItems:"center",direction:"row",wrap:"nowrap"},l.a.createElement(y.a,{disabled:!e,variant:"outlined",onClick:this.submitAnswer},"Vote"))))}}]),t}(u.Component);Ee.defaultProps={minimumOptionsToVote:2,questionText:"",questionOptions:[],createAnswer:function(){}};var be=Object(P.b)({questionText:o.questionTextSelector,questionOptions:o.questionOptionsSelector}),he={createAnswer:a.createAnswer},ve=Object(C.c)(Object(E.withStyles)(de),Object(d.b)(be,he))(Ee),we="global/PURGE_STATE",xe="error/SET_ERROR",ge="error/CLEAR_ERROR",Te=function(e,t){return{type:xe,payload:{id:e,message:t}}},je=function(e){return{type:ge,payload:{id:e}}},ye=n(72),qe=Object(C.b)({errorInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(Y.a)({},e,Object(ye.a)({},t.payload.id,t.payload));case ge:return Object(Y.a)({},e,Object(ye.a)({},t.payload.id,void 0));default:return e}}}),Qe=Object(P.a)(function(e){return e.error},function(e){return e.errorInfo}),Se=qe,Ie=n(221),Ae=n.n(Ie),De=function(e){var t=Object(Y.a)({},e);return delete t.classes,delete t.maxLength,delete t.errorMessage,l.a.createElement(u.Fragment,null,l.a.createElement(Ae.a,Object.assign({error:!!e.errorMessage,fullWidth:!0,inputProps:{maxLength:e.maxLength},InputProps:{classes:{root:e.classes.input}},InputLabelProps:{classes:{root:e.classes.label}},variant:"outlined"},t)),l.a.createElement(h.a,{variant:"caption",color:"error"},e.errorMessage))};De.defaultProps={errorMessage:null};var _e=Object(E.withStyles)({input:{height:36},label:{transform:"translate(14px, 10px) scale(1)"}})(De),Ne=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(x.a)(this,Object(g.a)(t).call(this,e))).state={questionOptionText:e.questionOptionText},n}return Object(T.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this,t=this.state.questionOptionText,n=this.props,a=n.id,r=n.maxQuestionOptionTextLength,o=n.onDelete,i=n.onEdit,s=n.classes,c=n.clearError,u=n.errorMessage;return l.a.createElement(f.a,{className:s.root,container:!0,justify:"space-between",alignItems:"center",direction:"row",wrap:"nowrap",spacing:8},l.a.createElement(f.a,{item:!0},l.a.createElement(_e,{key:a,id:a,errorMessage:u,value:t,maxLength:r,onChange:function(t){var n=t.target.value;e.setState({questionOptionText:n},c)},onBlur:function(e){var t=e.target.value;i(a,t)}})),l.a.createElement(f.a,{item:!0},l.a.createElement(y.a,{variant:"outlined",onClick:o},"Del")))}}]),t}(u.Component);Ne.defaultProps={classes:{},questionOptionText:"",maxQuestionOptionTextLength:te,onDelete:function(){},onEdit:function(){},clearError:function(){},errorMessage:null};var Ce=Object(E.withStyles)({root:{marginBottom:5}})(Ne),Pe=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(x.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={newQuestionOptionText:""},n.isDuplicateQuestionOptionText=function(e,t){return!!n.props.questionOptions.filter(function(e){return e.id!==t}).find(function(t){return t.questionOptionText===e})},n.editQuestionOption=function(e,t){var a=n.props,r=a.setQuestionOption,o=a.setError,i=a.clearError;n.isDuplicateQuestionOptionText(t,e)?o(e,"The provided option is not unique."):(i(e),r(e,t))},n.submitQuestionOption=function(){var e=n.props,t=e.createQuestionOption,a=e.setError,r=e.clearError,o=n.state.newQuestionOptionText;o&&(n.isDuplicateQuestionOptionText(o)?a("newQuestionOption","The provided option is not unique."):(r("newQuestionOption"),t(o),n.setState({newQuestionOptionText:""})))},n}return Object(T.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.maxQuestionOptionTextLength,a=t.maxQuestionOptions,r=t.questionOptions,o=t.removeQuestionOption,i=t.clearError,s=t.errorInfo,c=this.state.newQuestionOptionText,p=r.length>=a;return l.a.createElement(u.Fragment,null,r.map(function(t){var n=t.id,a=t.questionOptionText;return l.a.createElement(Ce,{key:n,id:n,questionOptionText:a,onEdit:e.editQuestionOption,onDelete:function(){return o(n)},clearError:function(){return i(n)},errorMessage:s[n]?s[n].message:null})}),l.a.createElement(f.a,{container:!0,justify:"space-between",alignItems:"center",direction:"row",wrap:"nowrap",spacing:8},l.a.createElement(f.a,{item:!0},l.a.createElement(_e,{errorMessage:s.newQuestionOption?s.newQuestionOption.message:null,disabled:p,value:c,label:"Type an answer",placeholder:"3.14",maxLength:n,onChange:function(t){var n=t.target.value;e.setState({newQuestionOptionText:n},function(){i("newQuestionOption")})}})),l.a.createElement(f.a,{item:!0},l.a.createElement(y.a,{variant:"outlined",onClick:this.submitQuestionOption,disabled:p},"Add"))))}}]),t}(u.Component);Pe.defaultProps={createQuestionOption:function(){},setQuestionOption:function(){},removeQuestionOption:function(){},setError:function(){},clearError:function(){},errorInfo:{},maxQuestionOptions:ne,maxQuestionOptionTextLength:te,questionOptions:[]};var Re=Object(P.b)({questionOptions:o.questionOptionsSelector,errorInfo:c.errorInfoSelector}),Le={createQuestionOption:r.createQuestionOption,setQuestionOption:r.setQuestionOption,removeQuestionOption:r.removeQuestionOption,setError:s.setError,clearError:s.clearError},ke=Object(C.c)(Object(d.b)(Re,Le))(Pe),Me=function(e){var t=e.setQuestionText,n=e.questionText;return l.a.createElement(_e,{value:n,label:"Your question",placeholder:"What is the value of pi?",maxLength:te,onChange:function(e){var n=e.target.value;t(n)}})};Me.defaultProps={questionText:"",setQuestionText:function(){}};var Ke=Object(P.b)({questionText:o.questionTextSelector}),Ue={setQuestionText:r.setQuestionText},Ve=Object(d.b)(Ke,Ue)(Me),Xe=function(e){var t=e.classes,n=e.questionOptions,a=e.maxQuestionOptions,r=e.purgeState;return l.a.createElement(f.a,{className:t.root,container:!0,direction:"column",justify:"space-between"},l.a.createElement(f.a,{container:!0,item:!0,direction:"column"},l.a.createElement(Ve,null),l.a.createElement(le,null),l.a.createElement(ke,null)),l.a.createElement(f.a,{item:!0},l.a.createElement(le,null),l.a.createElement(f.a,{container:!0,item:!0,justify:"space-between",alignItems:"center",direction:"row",wrap:"nowrap"},l.a.createElement(f.a,{item:!0},l.a.createElement(h.a,null,"".concat(n.length,"/").concat(a," possible answers"))),l.a.createElement(y.a,{variant:"outlined",onClick:r},"Reset"))))};Xe.defaultProps={maxQuestionOptions:ne,questionOptions:[],purgeState:function(){}};var We=Object(P.b)({questionOptions:o.questionOptionsSelector}),Be={purgeState:function(){return{type:we}}},Fe=Object(C.c)(Object(E.withStyles)({root:{height:"100%"}}),Object(d.b)(We,Be))(Xe),Ge=n(44),Je=function(e){var t=e.width,n=e.height,a=e.data,r=e.margin,o=e.xAxisDataKey,i=e.barDataKey;return l.a.createElement("div",{style:{width:t,height:n}},l.a.createElement(Ge.c,null,l.a.createElement(Ge.b,{data:a,margin:r},l.a.createElement(Ge.e,{dataKey:o}),l.a.createElement(Ge.f,null),l.a.createElement(Ge.d,null),l.a.createElement(Ge.a,{dataKey:i,fill:"#8884d8"}))))};Je.defaultProps={height:250,width:"100%",data:[],margin:{},xAxisDataKey:"name",barDataKey:"amount"};var He=Je,Ye={root:{height:"100%"},placeholder:{textAlign:"center"}},ze=function(e){var t=e.classes;return l.a.createElement(f.a,{className:me()(t.root,t.placeholder),container:!0,direction:"column",justify:"center",alignItems:"center"},l.a.createElement(h.a,null,"Waiting for votes to come in..."))};ze.defaultProps={classes:{}};var Ze=Object(E.withStyles)(Ye)(ze),$e=function(e){var t=e.classes,n=e.questionText,a=e.answersAmount,r=e.answerChartData;return a?l.a.createElement(f.a,{className:t.root,container:!0,direction:"column",justify:"space-between"},l.a.createElement(f.a,{container:!0,item:!0,direction:"column"},n,l.a.createElement(le,null),l.a.createElement(He,{data:r,xAxisDataKey:"questionOptionText",barDataKey:"amount",margin:{left:-20,right:5,bottom:5}})),l.a.createElement(f.a,{item:!0},l.a.createElement(f.a,{container:!0,item:!0,justify:"flex-start",alignItems:"center",direction:"row"},l.a.createElement(f.a,{item:!0},"Total votes: ".concat(a))))):l.a.createElement(Ze,null)};$e.defaultProps={questionText:"",answersAmount:0,answerChartData:[]};var et=Object(P.b)({questionText:o.questionTextSelector,answersAmount:i.answersAmountSelector,answerChartData:i.answerChartDataSelector}),tt=Object(C.c)(Object(E.withStyles)(Ye),Object(d.b)(et))($e),nt=Object(E.withStyles)({root:{flexGrow:1},headerText:{margin:10},box:{padding:10,minHeight:300,border:"1px solid black"}})(function(e){var t=e.classes;return l.a.createElement(u.Fragment,null,l.a.createElement(h.a,{className:t.headerText,variant:"h2"},"Sir Vote-a-lot"),l.a.createElement("div",{className:t.root},l.a.createElement(f.a,{container:!0},l.a.createElement(f.a,{className:t.box,item:!0,xs:12,sm:4},l.a.createElement(Fe,null)),l.a.createElement(f.a,{className:t.box,item:!0,xs:12,sm:4},l.a.createElement(ve,null)),l.a.createElement(f.a,{className:t.box,item:!0,xs:12,sm:4},l.a.createElement(tt,null)))))}),at=function(e){var t=e.store;return l.a.createElement(d.a,{store:t},l.a.createElement(nt,null))},rt=Object(C.b)({question:ae,answer:se,error:Se}),ot=function(e,t){return t.type===we?rt({},t):rt(e,t)},it=Object(C.d)(ot,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n(582);m.a.render(l.a.createElement(at,{store:it}),document.getElementById("root"))}},[[257,1,2]]]);
//# sourceMappingURL=main.e53e4145.chunk.js.map