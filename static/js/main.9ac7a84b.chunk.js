(this.webpackJsonpantawa=this.webpackJsonpantawa||[]).push([[0],{44:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c(13),a=c.n(i),n=c(3),r=c(2),l=c(10),o=(c(44),c.p+"static/media/logo.6d8fc0c4.svg"),j=(c(20),c(0)),d=function(){return Object(j.jsx)(n.b,{exact:!0,to:"/",children:Object(j.jsx)("img",{src:o,alt:""})})},b=function(){var e=Object(l.b)((function(e){return e.userData}));console.log(e);var t=Object(l.b)((function(e){return e.isLogin}));return console.log(t),Object(j.jsxs)("ul",{className:"header__ul",children:[Object(j.jsx)("li",{className:"header__li",children:Object(j.jsx)(n.b,{exact:!0,to:"/usados",activeClassName:"a_active",children:"Usados"})}),Object(j.jsx)("li",{className:"header__li",children:Object(j.jsx)(n.b,{exact:!0,to:"2",activeClassName:"a_active",children:"Financiaci\xf3n"})}),Object(j.jsxs)("li",{className:"header__li",children:[Object(j.jsx)(n.b,{exact:!0,to:"/buscar-auto",activeClassName:"a_active",children:"Mas"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(n.b,{exact:!0,to:"/buscar-autos",activeClassName:"a_active",children:"Autos"})}),Object(j.jsx)("li",{children:Object(j.jsx)(n.b,{exact:!0,to:"/buscar-autos",activeClassName:"a_active",children:"Motos"})})]})]}),Object(j.jsx)("li",{className:"header__li",children:Object(j.jsx)(n.b,{exact:!0,to:"4",activeClassName:"a_active",children:"Vende tu auto"})}),t?Object(j.jsxs)("li",{className:"isLoginName",children:[" Bienvenido ",Object(j.jsx)("br",{})," ",e.nombre," ",e.Apellido]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("li",{className:"header__li",children:Object(j.jsx)(n.b,{exact:!0,to:"/register",activeClassName:"a_active",children:"Registrate"})}),Object(j.jsx)("li",{className:"i",children:Object(j.jsx)(n.b,{exact:!0,to:"/login",activeClassName:"a_active",className:"user",children:Object(j.jsx)("box-icon",{name:"user"})})})]})]})},h=function(){return Object(j.jsx)(s.Fragment,{children:Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)(d,{}),Object(j.jsx)(b,{})]})})},x=c.p+"static/media/auto.dc49e16e.png",u=c(7),O=function(){var e="http://localhost:5000/marcas",t=Object(s.useState)([]),c=Object(u.a)(t,2),i=c[0],a=c[1];return Object(s.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsx)(s.Fragment,{children:i.map((function(e,t){return Object(j.jsx)("option",{value:e.id,children:e.marca},t)}))})},m=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),c=t[0],i=t[1],a="http://localhost:5000/marcas";return Object(s.useEffect)((function(){fetch(a).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsx)(s.Fragment,{children:c.map((function(e,t){return Object(j.jsx)("option",{value:e.id=5,children:e.modelos[10]},t)}))})},_=function(){return Object(j.jsxs)("div",{class:"banner",children:[Object(j.jsx)("img",{src:x,alt:""}),Object(j.jsx)("h1",{class:"banner__slogan",children:"Encuentra el auto de tus sue\xf1os"})]})},p=function(){return Object(j.jsx)(s.Fragment,{children:Object(j.jsxs)("div",{className:"form1",children:[Object(j.jsxs)("div",{className:"form1__option",children:[Object(j.jsx)("button",{children:"Todos"}),Object(j.jsx)("button",{children:"Nuevos"}),Object(j.jsx)("button",{children:"Usados"})]}),Object(j.jsxs)("form",{action:"#",className:"form1__filtro",children:[Object(j.jsxs)("div",{className:"form1__buscar",children:[Object(j.jsx)("input",{type:"text",placeholder:"Buscar auto",className:"form1__buscar__frm-buscar"}),Object(j.jsxs)("select",{name:"marca",id:"marca",children:[Object(j.jsx)("option",{value:"0",children:"Escoge tu marca"}),Object(j.jsx)(O,{})]}),Object(j.jsxs)("select",{name:"modelo",id:"modelo",children:[Object(j.jsx)("option",{value:"0",children:"Escoge tu modelo"}),Object(j.jsx)(m,{})]})]}),Object(j.jsxs)("div",{className:"form1__periodo",children:[Object(j.jsx)("label",{for:"anio",children:"A\xf1o"}),Object(j.jsx)("input",{className:"form1__periodo__num",type:"number",placeholder:"Desde"}),Object(j.jsx)("input",{className:"form1__periodo__num",type:"number",placeholder:"Hasta"}),Object(j.jsx)("label",{for:"rango",className:"form1__periodo__espacio",children:"Rango de precio S/."}),Object(j.jsx)("input",{type:"range",name:"rango",id:"rango",min:"10000",max:"500000",step:"5000"}),Object(j.jsx)(n.b,{exact:!0,to:"/buscar-auto",children:Object(j.jsx)("button",{children:"BUSCAR"})})]})]})]})})},v=function(){return Object(j.jsxs)("main",{children:[Object(j.jsx)(_,{}),Object(j.jsx)(p,{})]})},g=function(){return Object(j.jsx)("main",{children:Object(j.jsx)("h2",{children:"Este es el login"})})};function f(e){var t=e.TituloBox;return Object(j.jsx)("div",{className:"Wrapper__LoginBox",children:Object(j.jsxs)("div",{className:"LoginBox",children:[Object(j.jsx)("h1",{children:t}),e.children]})})}var N=c.p+"static/media/register_1.cb5a1525.png",E=c.p+"static/media/register_2.c6d06a27.png",y=c.p+"static/media/register_3.e7f7b059.png";function R(){return Object(j.jsxs)("div",{className:"RightRegister",children:[Object(j.jsx)("h3",{children:"\xbfPor qu\xe9 registrarse?"}),Object(j.jsxs)("div",{className:"RightRegister__txtImg",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:N,alt:N}),Object(j.jsx)("p",{children:"Transacciones seguras y entrega de veh\xedculos en el menor tiempo posible"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Contacto directo con vendedores de tu localidad"}),Object(j.jsx)("img",{src:E,alt:E})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:y,alt:y}),Object(j.jsx)("p",{children:"Variedad de modelos y marcas a tu disposici\xf3n"})]})]})]})}var A=c(14),C=c(8);function F(e){var t=e.TextoBtn;return Object(j.jsx)("button",{className:"Button__LogReg",children:t})}var S=c(33),w=c.n(S);function B(){var e=Object(s.useState)({nombre:"",Apellido:"",email:"","contrase\xf1a":"",dni:"",celular:""}),t=Object(u.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)({}),l=Object(u.a)(a,2),o=l[0],d=l[1],b=Object(s.useState)(!1),h=Object(u.a)(b,2),x=h[0],O=h[1],m=Object(r.f)(),_=function(e){var t=e.target,s=t.name,a=t.value;i(Object(C.a)(Object(C.a)({},c),{},Object(A.a)({},s,a)))};Object(s.useEffect)((function(){0==Object.keys(o).length&&x&&(w.a.post("http://localhost:5000/vendedores",c).then((function(){console.log("Enviado a la base de datos")})),alert("Registro exitoso"),setTimeout((function(){m.push("/")}),1e3))}),[o]);var p=function(e){var t={};return e.nombre||(t.nombre="Es obligatorio ingresar su nombre"),e.Apellido||(t.Apellido="Es obligatorio ingresar su apellido"),e.email?/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(e.email)||(t.email="No es un correo v\xe1lido"):t.email="Es obligatorio ingresar su correo",e.contrase\u00f1a?e.contrase\u00f1a.length<4?t.contrase\u00f1a="La contrase\xf1a no puede tener menor de 4 caract\xe9res":e.contrase\u00f1a.length>10&&(t.contrase\u00f1a="La contrase\xf1a no puede tener mayor de 10  caract\xe9res"):t.contrase\u00f1a="Es obligatorio ingresar su contrase\xf1a",e.dni?(e.dni.length<8||e.dni.length>8)&&(t.dni="DNI inv\xe1lido"):t.dni="Es obligatorio ingresar su dni",e.celular?(e.celular.length<9||e.celular.length>9)&&(t.celular="N\xfamero de celular inv\xe1lido"):t.celular="Es obligatorio ingresar su celular",t};return Object(j.jsxs)("form",{className:"FormRegister",onSubmit:function(e){e.preventDefault(),d(p(c)),O(!0)},children:[Object(j.jsxs)("div",{className:"FormRegister__2row inputHigh",children:[Object(j.jsxs)("div",{className:"FormRegister__divHigh",children:[Object(j.jsx)("input",{type:"text",name:"nombre",placeholder:"Nombre",value:c.nombre,onChange:_}),Object(j.jsx)("p",{children:o.nombre})]}),Object(j.jsxs)("div",{className:"FormRegister__divHigh",children:[Object(j.jsx)("input",{type:"text",name:"Apellido",placeholder:"Apellido",value:c.Apellido,onChange:_}),Object(j.jsx)("p",{children:o.Apellido})]})]}),Object(j.jsxs)("div",{className:"FormRegister__1row inputHigh FormRegister__divHigh",children:[Object(j.jsx)("input",{type:"text",name:"email",placeholder:"Correo Electr\xf3nico",value:c.email,onChange:_}),Object(j.jsx)("p",{children:o.email})]}),Object(j.jsxs)("div",{className:"FormRegister__1row inputHigh FormRegister__divHigh",children:[Object(j.jsx)("input",{type:"password",name:"contrase\xf1a",placeholder:"Contrase\xf1a",value:c.contrase\u00f1a,onChange:_}),Object(j.jsx)("p",{children:o.contrase\u00f1a})]}),Object(j.jsxs)("div",{className:"FormRegister__2row inputHigh",children:[Object(j.jsxs)("div",{className:"FormRegister__divHigh",children:[Object(j.jsx)("input",{type:"number",name:"dni",placeholder:"DNI",value:c.dni,onChange:_}),Object(j.jsx)("p",{children:o.dni})]}),Object(j.jsxs)("div",{className:"FormRegister__divHigh",children:[Object(j.jsx)("input",{type:"number",name:"celular",placeholder:"Celular",value:c.celular,onChange:_}),Object(j.jsx)("p",{children:o.celular})]})]}),Object(j.jsxs)("div",{className:"FormRegister__check",children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox"})," Acepto las Pol\xedticas de privacidad de Antawa"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox"})," Acepto los T\xe9rminos y condiciones de Antawa"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox"})," Autorizo el uso de mis datos para Fines adicionales."]})]}),Object(j.jsx)("div",{children:Object(j.jsx)(F,{TextoBtn:"Registrar"})}),Object(j.jsx)("div",{className:"LoginBox__text",children:Object(j.jsxs)("h5",{children:["\xbfYa tienes una cuenta? ",Object(j.jsx)("span",{children:Object(j.jsx)(n.b,{to:"/login",children:"Ingresa"})})," "]})})]})}var L=function(){return Object(j.jsx)("main",{children:Object(j.jsxs)("div",{className:"Register__Wrapper",children:[Object(j.jsx)("div",{className:"Register__BoxWrapper",children:Object(j.jsx)(f,{TituloBox:"Reg\xedstrate",children:Object(j.jsx)(B,{})})}),Object(j.jsx)(R,{})]})})},T=function(){return Object(j.jsx)("main",{children:Object(j.jsx)("h3",{children:"Pagina de usados"})})};var D=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),c=t[0],i=t[1],a="http://localhost:5000/ofertas";return Object(s.useEffect)((function(){fetch(a).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsx)(s.Fragment,{children:c.map((function(e,t){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"container__img",children:Object(j.jsx)("img",{src:e.photos[0]})}),Object(j.jsxs)("div",{className:"container__card",children:[Object(j.jsxs)("div",{className:"container__card__titulo",children:[Object(j.jsx)("div",{className:"container__card__titulo__anio",children:e.a\u00f1omodelo}),Object(j.jsxs)("h3",{className:"container__card__titulo__marca",children:[e.marca," ",e.modelo]})]}),Object(j.jsx)("div",{className:"container__card__tipo",children:e.transmision}),Object(j.jsxs)("div",{className:"container__card__precio",children:[Object(j.jsx)("div",{children:Object(j.jsx)("box-icon",{type:"solid",name:"no-entry",color:"white"})}),Object(j.jsx)("div",{className:"container__card__precio__precio1",children:"$ 1,200"})," |",Object(j.jsxs)("h3",{className:"container__card__precio__precio2",children:["$ ",e.preciodolares]})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"container__card__kilometros",children:[Object(j.jsx)("div",{children:Object(j.jsx)("box-icon",{type:"solid",name:"ev-station",color:"white"})}),Object(j.jsxs)("div",{children:[e.kilometraje," Kilometros"]})]}),Object(j.jsxs)("div",{className:"container__card__color",children:[Object(j.jsx)("div",{children:Object(j.jsx)("box-icon",{name:"color-fill",color:"white"})}),Object(j.jsxs)("div",{children:["Exterior ",e.color]})]}),Object(j.jsxs)("div",{className:"container__card__descripcion",children:[Object(j.jsx)("div",{children:Object(j.jsx)("box-icon",{name:"taxi",color:"white"})}),Object(j.jsx)("div",{children:e.descripcion})]})]})]},t)}))})},H=function(){var e="http://localhost:5000/categorias",t=Object(s.useState)([]),c=Object(u.a)(t,2),i=c[0],a=c[1];return Object(s.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsx)(s.Fragment,{children:i.map((function(e,t){return Object(j.jsx)("option",{value:e.id,children:e.categoria},t)}))})},k=function(){return Object(j.jsxs)("div",{className:"main_buscar_auto",children:[Object(j.jsx)("div",{className:"filtro",children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"filtro__titulo",children:[Object(j.jsx)("div",{children:"Ubicaci\xf3n"}),Object(j.jsx)("div",{children:Object(j.jsxs)("select",{className:"filtro__titulo__selects",children:[Object(j.jsx)("option",{value:"0",children:"--Seleccione--"}),Object(j.jsx)("option",{value:"1",selected:!0,children:"Lima"})]})})]}),Object(j.jsxs)("div",{className:"filtro__titulo",children:[Object(j.jsx)("div",{children:"Marca"}),Object(j.jsx)("div",{children:Object(j.jsxs)("select",{id:"modelo",className:"filtro__titulo__selects",children:[Object(j.jsx)("option",{value:"0",children:"Escoge tu marca"}),Object(j.jsx)(O,{})]})})]}),Object(j.jsxs)("div",{className:"filtro__titulo",children:[Object(j.jsx)("div",{children:"Modelo"}),Object(j.jsx)("div",{children:Object(j.jsxs)("select",{className:"filtro__titulo__selects",children:[Object(j.jsx)("option",{value:"0",children:"Escoge tu modelo"}),Object(j.jsx)(m,{})]})})]}),Object(j.jsxs)("div",{className:"filtro__titulo",children:[Object(j.jsx)("div",{children:"A\xf1o"}),Object(j.jsx)("div",{children:Object(j.jsxs)("select",{className:"filtro__titulo__selects",children:[Object(j.jsx)("option",{value:"0",children:"Desde"}),Object(j.jsx)("option",{value:"2010",children:"2010"}),Object(j.jsx)("option",{value:"2019",children:"2019"}),Object(j.jsx)("option",{value:"2020",children:"2020"}),Object(j.jsx)("option",{value:"2021",children:"2021"}),Object(j.jsx)("option",{value:"2022",children:"2022"})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("select",{className:"filtro__titulo__selects",children:[Object(j.jsx)("option",{value:"0",children:"Hasta"}),Object(j.jsx)("option",{value:"2010",children:"2010"}),Object(j.jsx)("option",{value:"2019",children:"2019"}),Object(j.jsx)("option",{value:"2020",children:"2020"}),Object(j.jsx)("option",{value:"2021",children:"2021"}),Object(j.jsx)("option",{value:"2022",children:"2022"})]})})]}),Object(j.jsxs)("div",{className:"filtro__titulo",children:[Object(j.jsx)("div",{children:"Categoria"}),Object(j.jsx)("div",{children:Object(j.jsxs)("select",{className:"filtro__titulo__selects",children:[Object(j.jsx)("option",{value:"0",children:"Escoge tu Categoria"}),Object(j.jsx)(H,{})]})})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"filtro__titulo",children:[Object(j.jsx)("div",{children:"Precio"}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",className:"filtro__titulo__inputs",placeholder:"S/. 10000"})}),Object(j.jsx)("div",{children:"a"}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",className:"filtro__titulo__inputs",placeholder:"S/. 500000"})})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"filtro__titulo",children:[Object(j.jsx)("div",{children:"Kilometraje"}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",className:"filtro__titulo__inputs",placeholder:"0"})}),Object(j.jsx)("div",{children:"a"}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",className:"filtro__titulo__inputs",placeholder:"200.000"})})]}),Object(j.jsx)("div",{className:"filtro__filtrar",children:Object(j.jsx)("button",{children:"BUSCAR"})})]})}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(D,{})})]})},I=c(34),U={isLogin:!1,userData:{}};var z=Object(I.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(C.a)(Object(C.a)({},e),{},{userData:t.payload});case"SET_LOGIN":return Object(C.a)(Object(C.a)({},e),{},{isLogin:t.payload});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),M=z;var P=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(l.a,{store:M,children:Object(j.jsxs)(n.a,{children:[Object(j.jsx)(h,{}),Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",component:v}),Object(j.jsx)(r.a,{exact:!0,path:"/buscar-auto",component:k}),Object(j.jsx)(r.a,{exact:!0,path:"/usados",component:T}),Object(j.jsx)(r.a,{exact:!0,path:"/login",component:g}),Object(j.jsx)(r.a,{exact:!0,path:"/register",component:L}),Object(j.jsx)(r.a,{exact:!0,path:"/contactform",component:T})]})]})})})};a.a.render(Object(j.jsx)(P,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.9ac7a84b.chunk.js.map