(this.webpackJsonpantawa=this.webpackJsonpantawa||[]).push([[0],{44:function(e,c,t){},67:function(e,c,t){"use strict";t.r(c);var a=t(1),i=t(15),s=t.n(i),n=t(4),r=t(3),o=t(8),l=(t(44),t.p+"static/media/logo.6d8fc0c4.svg"),d=(t(22),t(0)),j=function(){return Object(d.jsx)(n.b,{exact:!0,to:"/",children:Object(d.jsx)("img",{src:l,alt:""})})},b=function(){var e=Object(o.c)((function(e){return e.userData}));console.log(e);var c=Object(o.c)((function(e){return e.isLogin}));return console.log(c),Object(d.jsxs)("ul",{className:"header__ul",children:[Object(d.jsx)("li",{className:"header__li",children:Object(d.jsx)(n.b,{exact:!0,to:"/buscar-auto?search=0&brand=0&model=0&year_from=0&year_to=0&price=0",activeClassName:"a_active",children:"Catalogo"})}),Object(d.jsx)("li",{className:"header__li",children:Object(d.jsx)(n.b,{exact:!0,to:"/vende",activeClassName:"a_active",children:"Vende tu auto"})}),c?Object(d.jsxs)("li",{className:"isLoginName",children:[" Bienvenido: ",Object(d.jsx)("br",{})," ",e.nombre," ",e.Apellido]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("li",{className:"header__li",children:Object(d.jsx)(n.b,{exact:!0,to:"/register",activeClassName:"a_active",children:"Registrate"})}),Object(d.jsx)("li",{className:"i",children:Object(d.jsx)(n.b,{exact:!0,to:"/login",activeClassName:"a_active",className:"user",children:Object(d.jsx)("box-icon",{name:"user"})})})]})]})},u=function(){return Object(d.jsx)(a.Fragment,{children:Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)(j,{}),Object(d.jsx)(b,{})]})})},_=t(2),O=t(5),h=t.p+"static/media/auto.dc49e16e.png",x=t(12),m=t.n(x),p=m.a.create({baseURL:"http://localhost:5000/"}),v=function(){return Object(d.jsxs)("div",{class:"banner",children:[Object(d.jsx)("img",{src:h,alt:""}),Object(d.jsx)("h1",{class:"banner__slogan",children:"Encuentra el auto de tus sue\xf1os"})]})},f=function(e){var c=e.marcas,t=e.onSubmit,i=void 0===t?function(){}:t,s=Object(a.useState)([]),n=Object(O.a)(s,2),r=n[0],o=n[1],l=Object(a.useState)({search:"",brand:"",model:"",year_from:"",year_to:"",price:""}),j=Object(O.a)(l,2),b=j[0],u=j[1];return Object(a.useEffect)((function(){o(c.filter((function(e){return e.id==b.brand})))}),[b.brand]),Object(a.useEffect)((function(){var e=new URLSearchParams;e.set("search",b.search),e.set("brand",b.brand),e.set("model",b.model),e.set("year_from",b.year_from),e.set("year_to",b.year_to),e.set("price",b.price),window.history.replaceState({},"","".concat(window.location.pathname,"?").concat(e))}),[b]),Object(d.jsx)(a.Fragment,{children:Object(d.jsxs)("div",{className:"form1",children:[Object(d.jsxs)("div",{className:"form1__option",children:[Object(d.jsx)("button",{children:"Todos"}),Object(d.jsx)("button",{children:"Nuevos"}),Object(d.jsx)("button",{children:"Usados"})]}),Object(d.jsxs)("form",{className:"form1__filtro",onSubmit:function(e){e.preventDefault(),i(b)},children:[Object(d.jsxs)("div",{className:"form1__buscar",children:[Object(d.jsx)("input",{type:"text",placeholder:"Buscar auto",className:"form1__buscar__frm-buscar",value:b.search,onChange:function(e){return u((function(c){return Object(_.a)(Object(_.a)({},c),{},{search:e.target.value})}))}}),Object(d.jsxs)("select",{name:"marca",id:"marca",value:b.brand,onChange:function(e){u((function(c){return Object(_.a)(Object(_.a)({},c),{},{brand:e.target.value})}))},children:[Object(d.jsx)("option",{value:"",children:"Escoge tu marca"}),c.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.marca},e.id)}))]}),Object(d.jsxs)("select",{name:"modelo",id:"modelo",disabled:!b.brand.length,onChange:function(e){u((function(c){return Object(_.a)(Object(_.a)({},c),{},{model:e.target.value})}))},children:[Object(d.jsx)("option",{value:"0",children:"Escoge tu modelo"}),!!r.length&&r[0].modelos.map((function(e,c){return Object(d.jsx)("option",{value:e,children:e},c)}))]})]}),Object(d.jsxs)("div",{className:"form1__periodo",children:[Object(d.jsx)("label",{for:"anio",children:"A\xf1o"}),Object(d.jsx)("input",{className:"form1__periodo__num",type:"date",placeholder:"Desde",onChange:function(e){u((function(c){return Object(_.a)(Object(_.a)({},c),{},{year_from:e.target.value})}))}}),Object(d.jsx)("input",{className:"form1__periodo__num",type:"date",placeholder:"Hasta",onChange:function(e){u((function(c){return Object(_.a)(Object(_.a)({},c),{},{year_to:e.target.value})}))}}),Object(d.jsx)("label",{for:"rango",className:"form1__periodo__espacio",children:"Rango de precio S/."}),Object(d.jsx)("input",{type:"range",name:"rango",id:"rango",min:"10000",max:"500000",step:"5000",onChange:function(e){u((function(c){return Object(_.a)(Object(_.a)({},c),{},{price:e.target.value})}))}}),Object(d.jsx)("button",{disabled:!(b.search.length&&b.brand.length&&b.model.length&&b.year_from.length&&b.year_to.length&&b.price.length),children:"BUSCAR"})]})]})]})})},g=function(){var e=Object(r.f)(),c=Object(o.b)(),t=Object(o.c)((function(e){return e.car.cars}));return Object(a.useEffect)((function(){p.get("/marcas").then((function(e){var t=e.data;c({type:"SET_CARS",payload:t})})).catch((function(e){return console.log(e)}))}),[]),Object(d.jsxs)("main",{children:[Object(d.jsx)(v,{}),Object(d.jsx)(f,{marcas:t,onSubmit:function(c){e.push({pathname:"/buscar-auto",search:window.location.search})}})]})};function N(e){var c=e.TituloBox;return Object(d.jsx)("div",{className:"Wrapper__LoginBox",children:Object(d.jsxs)("div",{className:"LoginBox",children:[Object(d.jsx)("h1",{children:c}),e.children]})})}var y=t(11);function S(e){var c=e.TextoBtn;return Object(d.jsx)("button",{className:"Button__LogReg",children:c})}function w(){var e=Object(a.useState)({email:"",password:""}),c=Object(O.a)(e,2),t=c[0],i=c[1],s=Object(r.f)(),l=Object(o.b)(),j=function(e){var c=e.target,a=c.name,s=c.value;i(Object(_.a)(Object(_.a)({},t),{},Object(y.a)({},a,s)))};return Object(d.jsx)("div",{className:"LoginBox__form",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();m.a.get("http://localhost:5000/vendedores/").then((function(c){return function(e,c){console.log(e),console.log(c.email.value),console.log(c.password.value);var t=e.find((function(e){return e.email==c.email.value&&e.contrase\u00f1a==c.password.value}));t?(alert("Ingeso correcto!"),l({type:"SET_LOGIN",payload:!0}),l({type:"SET_USER",payload:t}),s.push("/")):alert("Cuenta no existe")}(c.data,e.target)}))},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Email"}),Object(d.jsx)("input",{name:"email",type:"text",className:"inputEmail",placeholder:"Correo electr\xf3nico",required:!0,value:t.email,onChange:j})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Contrase\xf1a"}),Object(d.jsx)("input",{name:"password",type:"password",className:"inputPassword",placeholder:"Contrase\xf1a",required:!0,value:t.password,onChange:j})]}),Object(d.jsx)("div",{children:Object(d.jsx)(S,{TextoBtn:"Ingresar"})}),Object(d.jsxs)("div",{className:"LoginBox__text",children:[Object(d.jsx)("h5",{children:"\xbfOlvidaste tu contrase\xf1a?"}),Object(d.jsxs)("h5",{children:["Si no rese parte de Antawa, ",Object(d.jsx)(n.b,{to:"/register",children:"registrate"})]})]})]})})}var C=function(){return Object(d.jsx)("main",{children:Object(d.jsx)(N,{TituloBox:"Ingresa tu cuenta",children:Object(d.jsx)(w,{})})})},E=t.p+"static/media/register_1.cb5a1525.png",R=t.p+"static/media/register_2.c6d06a27.png",A=t.p+"static/media/register_3.e7f7b059.png";function T(){return Object(d.jsxs)("div",{className:"RightRegister",children:[Object(d.jsx)("h3",{children:"\xbfPor qu\xe9 registrarse?"}),Object(d.jsxs)("div",{className:"RightRegister__txtImg",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:E,alt:E}),Object(d.jsx)("p",{children:"Transacciones seguras y entrega de veh\xedculos en el menor tiempo posible"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Contacto directo con vendedores de tu localidad"}),Object(d.jsx)("img",{src:R,alt:R})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:A,alt:A}),Object(d.jsx)("p",{children:"Variedad de modelos y marcas a tu disposici\xf3n"})]})]})]})}function L(){var e=Object(a.useState)({nombre:"",Apellido:"",email:"","contrase\xf1a":"",dni:"",celular:""}),c=Object(O.a)(e,2),t=c[0],i=c[1],s=Object(a.useState)({}),o=Object(O.a)(s,2),l=o[0],j=o[1],b=Object(a.useState)(!1),u=Object(O.a)(b,2),h=u[0],x=u[1],p=Object(r.f)(),v=function(e){var c=e.target,a=c.name,s=c.value;i(Object(_.a)(Object(_.a)({},t),{},Object(y.a)({},a,s)))};Object(a.useEffect)((function(){0==Object.keys(l).length&&h&&(m.a.post("http://localhost:5000/vendedores",t).then((function(){console.log("Enviado a la base de datos")})),alert("Registro exitoso"),setTimeout((function(){p.push("/")}),1e3))}),[l]);var f=function(e){var c={};return e.nombre||(c.nombre="Es obligatorio ingresar su nombre"),e.Apellido||(c.Apellido="Es obligatorio ingresar su apellido"),e.email?/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(e.email)||(c.email="No es un correo v\xe1lido"):c.email="Es obligatorio ingresar su correo",e.contrase\u00f1a?e.contrase\u00f1a.length<4?c.contrase\u00f1a="La contrase\xf1a no puede tener menor de 4 caract\xe9res":e.contrase\u00f1a.length>10&&(c.contrase\u00f1a="La contrase\xf1a no puede tener mayor de 10  caract\xe9res"):c.contrase\u00f1a="Es obligatorio ingresar su contrase\xf1a",e.dni?(e.dni.length<8||e.dni.length>8)&&(c.dni="DNI inv\xe1lido"):c.dni="Es obligatorio ingresar su dni",e.celular?(e.celular.length<9||e.celular.length>9)&&(c.celular="N\xfamero de celular inv\xe1lido"):c.celular="Es obligatorio ingresar su celular",c};return Object(d.jsxs)("form",{className:"FormRegister",onSubmit:function(e){e.preventDefault(),j(f(t)),x(!0)},children:[Object(d.jsxs)("div",{className:"FormRegister__2row inputHigh",children:[Object(d.jsxs)("div",{className:"FormRegister__divHigh",children:[Object(d.jsx)("input",{type:"text",name:"nombre",placeholder:"Nombre",value:t.nombre,onChange:v}),Object(d.jsx)("p",{children:l.nombre})]}),Object(d.jsxs)("div",{className:"FormRegister__divHigh",children:[Object(d.jsx)("input",{type:"text",name:"Apellido",placeholder:"Apellido",value:t.Apellido,onChange:v}),Object(d.jsx)("p",{children:l.Apellido})]})]}),Object(d.jsxs)("div",{className:"FormRegister__1row inputHigh FormRegister__divHigh",children:[Object(d.jsx)("input",{type:"text",name:"email",placeholder:"Correo Electr\xf3nico",value:t.email,onChange:v}),Object(d.jsx)("p",{children:l.email})]}),Object(d.jsxs)("div",{className:"FormRegister__1row inputHigh FormRegister__divHigh",children:[Object(d.jsx)("input",{type:"password",name:"contrase\xf1a",placeholder:"Contrase\xf1a",value:t.contrase\u00f1a,onChange:v}),Object(d.jsx)("p",{children:l.contrase\u00f1a})]}),Object(d.jsxs)("div",{className:"FormRegister__2row inputHigh",children:[Object(d.jsxs)("div",{className:"FormRegister__divHigh",children:[Object(d.jsx)("input",{type:"number",name:"dni",placeholder:"DNI",value:t.dni,onChange:v}),Object(d.jsx)("p",{children:l.dni})]}),Object(d.jsxs)("div",{className:"FormRegister__divHigh",children:[Object(d.jsx)("input",{type:"number",name:"celular",placeholder:"Celular",value:t.celular,onChange:v}),Object(d.jsx)("p",{children:l.celular})]})]}),Object(d.jsxs)("div",{className:"FormRegister__check",children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"checkbox"})," Acepto las Pol\xedticas de privacidad de Antawa"]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"checkbox"})," Acepto los T\xe9rminos y condiciones de Antawa"]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"checkbox"})," Autorizo el uso de mis datos para Fines adicionales."]})]}),Object(d.jsx)("div",{children:Object(d.jsx)(S,{TextoBtn:"Registrar"})}),Object(d.jsx)("div",{className:"LoginBox__text",children:Object(d.jsxs)("h5",{children:["\xbfYa tienes una cuenta? ",Object(d.jsx)("span",{children:Object(d.jsx)(n.b,{to:"/login",children:"Ingresa"})})," "]})})]})}var F=function(){return Object(d.jsx)("main",{children:Object(d.jsxs)("div",{className:"Register__Wrapper",children:[Object(d.jsx)("div",{className:"Register__BoxWrapper",children:Object(d.jsx)(N,{TituloBox:"Reg\xedstrate",children:Object(d.jsx)(L,{})})}),Object(d.jsx)(T,{})]})})},B=function(){return Object(d.jsx)("main",{children:Object(d.jsx)("h3",{children:"Pagina de usados"})})};var D=function(){var e="http://localhost:5000/categorias",c=Object(a.useState)([]),t=Object(O.a)(c,2),i=t[0],s=t[1];return Object(a.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return s(e)})).catch((function(e){return console.log(e)}))}),[]),Object(d.jsx)(a.Fragment,{children:i.map((function(e,c){return Object(d.jsx)("option",{value:e.id,children:e.categoria},c)}))})};function I(e){e.idVendedor;var c=e.descripcion,t=(e.idMarca,e.marca),a=e.modelo,i=(e.categoria,e.a\u00f1omfabricacion,e.a\u00f1omodelo),s=e.kilometraje,r=e.transmision,o=(e.combustible,e.cilindrada,e.numeropuertas,e.color),l=e.preciodolares,j=(e.autonuevo,e.region,e.photos);e.id;return Object(d.jsxs)("div",{className:"car-component",children:[Object(d.jsx)(n.b,{exact:!0,to:"/detalle",children:Object(d.jsx)("div",{className:"container__img",children:Object(d.jsx)("img",{src:j[0]})})}),Object(d.jsxs)("div",{className:"container__card",children:[Object(d.jsxs)("div",{className:"container__card__titulo",children:[Object(d.jsx)("div",{className:"container__card__titulo__anio",children:i}),Object(d.jsxs)("h3",{className:"container__card__titulo__marca",children:[t," ",a]})]}),Object(d.jsx)("div",{className:"container__card__tipo",children:r}),Object(d.jsxs)("div",{className:"container__card__precio",children:[Object(d.jsx)("div",{children:Object(d.jsx)("box-icon",{type:"solid",name:"no-entry",color:"white"})}),Object(d.jsx)("div",{className:"container__card__precio__precio1",children:"$ 1,200"})," |",Object(d.jsxs)("h3",{className:"container__card__precio__precio2",children:["$ ",l]})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"container__card__kilometros",children:[Object(d.jsx)("div",{children:Object(d.jsx)("box-icon",{type:"solid",name:"ev-station",color:"white"})}),Object(d.jsxs)("div",{children:[s," Kilometros"]})]}),Object(d.jsxs)("div",{className:"container__card__color",children:[Object(d.jsx)("div",{children:Object(d.jsx)("box-icon",{name:"color-fill",color:"white"})}),Object(d.jsxs)("div",{children:["Exterior ",o]})]}),Object(d.jsxs)("div",{className:"container__card__descripcion",children:[Object(d.jsx)("div",{children:Object(d.jsx)("box-icon",{name:"taxi",color:"white"})}),Object(d.jsx)("div",{children:c})]})]})]})}var H=function(){Object(o.c)((function(e){return e.car.cars_offers}));var e=Object(a.useState)(null),c=Object(O.a)(e,2),t=c[0],i=c[1],s=Object(a.useState)([]),n=Object(O.a)(s,2),r=n[0],l=n[1],j=Object(a.useState)({ubication:"",search:"",brand:"",model:"",year_from:"",year_to:"",price:""}),b=Object(O.a)(j,2),u=b[0],h=b[1],x=Object(o.c)((function(e){return e.car.cars})),m=Object(a.useState)([]),v=Object(O.a)(m,2),f=v[0],g=v[1];function N(e){console.log("aca se envio la busqueda con las variables",e),p.get("/ofertas").then((function(e){var c=e.data;l(c)}))}return Object(a.useEffect)((function(){if(!t){var e=window.location.search,c=new URLSearchParams(e);i(c)}t&&(N(t),h((function(e){return Object(_.a)(Object(_.a)({},e),{},{search:t.get("search"),brand:t.get("brand"),model:t.get("model"),year_from:t.get("year_from"),year_to:t.get("year_to"),price:t.get("price")})})))}),[t]),Object(a.useEffect)((function(){g(x.filter((function(e){return e.id==u.brand})))}),[u.brand]),Object(a.useEffect)((function(){var e=window.location.search,c=new URLSearchParams(e);c.set("search",u.search),c.set("brand",u.brand),c.set("model",u.model),c.set("year_from",u.year_from),c.set("year_to",u.year_to),c.set("price",u.price),window.history.replaceState({},"","".concat(window.location.pathname,"?").concat(c))}),[u]),Object(d.jsxs)("div",{className:"main_buscar_auto",children:[Object(d.jsx)("div",{className:"filtro",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N(t)},children:[Object(d.jsxs)("div",{className:"filtro__titulo",children:[Object(d.jsx)("div",{children:"Ubicaci\xf3n"}),Object(d.jsx)("div",{children:Object(d.jsxs)("select",{className:"filtro__titulo__selects",children:[Object(d.jsx)("option",{value:"0",children:"--Seleccione--"}),Object(d.jsx)("option",{value:"1",selected:!0,children:"Lima"})]})})]}),Object(d.jsxs)("div",{className:"filtro__titulo",children:[Object(d.jsx)("div",{children:"Marca"}),Object(d.jsx)("div",{children:Object(d.jsxs)("select",{id:"modelo",className:"filtro__titulo__selects",value:u.brand,onChange:function(e){h((function(c){return Object(_.a)(Object(_.a)({},c),{},{brand:e.target.value})}))},children:[Object(d.jsx)("option",{value:"0",children:"Escoge tu marca"}),x.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.marca},e.id)}))]})})]}),Object(d.jsxs)("div",{className:"filtro__titulo",children:[Object(d.jsx)("div",{children:"Modelo"}),Object(d.jsx)("div",{children:Object(d.jsxs)("select",{className:"filtro__titulo__selects",disabled:!u.brand.length,onChange:function(e){h((function(c){return Object(_.a)(Object(_.a)({},c),{},{model:e.target.value})}))},children:[Object(d.jsx)("option",{value:"0",children:"Escoge tu modelo"}),!!f.length&&f[0].modelos.map((function(e,c){return Object(d.jsx)("option",{value:e,children:e},c)}))]})})]}),Object(d.jsxs)("div",{className:"filtro__titulo",children:[Object(d.jsx)("div",{children:"A\xf1o"}),Object(d.jsx)("div",{children:Object(d.jsxs)("select",{className:"filtro__titulo__selects",children:[Object(d.jsx)("option",{value:"0",children:"Desde"}),Object(d.jsx)("option",{value:"2010",children:"2010"}),Object(d.jsx)("option",{value:"2019",children:"2019"}),Object(d.jsx)("option",{value:"2020",children:"2020"}),Object(d.jsx)("option",{value:"2021",children:"2021"}),Object(d.jsx)("option",{value:"2022",children:"2022"})]})}),Object(d.jsx)("div",{children:Object(d.jsxs)("select",{className:"filtro__titulo__selects",children:[Object(d.jsx)("option",{value:"0",children:"Hasta"}),Object(d.jsx)("option",{value:"2010",children:"2010"}),Object(d.jsx)("option",{value:"2019",children:"2019"}),Object(d.jsx)("option",{value:"2020",children:"2020"}),Object(d.jsx)("option",{value:"2021",children:"2021"}),Object(d.jsx)("option",{value:"2022",children:"2022"})]})})]}),Object(d.jsxs)("div",{className:"filtro__titulo",children:[Object(d.jsx)("div",{children:"Categoria"}),Object(d.jsx)("div",{children:Object(d.jsxs)("select",{className:"filtro__titulo__selects",children:[Object(d.jsx)("option",{value:"0",children:"Escoge tu Categoria"}),Object(d.jsx)(D,{})]})})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"filtro__titulo",children:[Object(d.jsx)("div",{children:"Precio"}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",className:"filtro__titulo__inputs",placeholder:"S/. 10000"})}),Object(d.jsx)("div",{children:"a"}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",className:"filtro__titulo__inputs",placeholder:"S/. 500000"})})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"filtro__titulo",children:[Object(d.jsx)("div",{children:"Kilometraje"}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",className:"filtro__titulo__inputs",placeholder:"0"})}),Object(d.jsx)("div",{children:"a"}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",className:"filtro__titulo__inputs",placeholder:"200.000"})})]}),Object(d.jsx)("div",{className:"filtro__filtrar",children:Object(d.jsx)("button",{children:"BUSCAR"})})]})}),Object(d.jsx)("div",{className:"container",children:r.map((function(e){return Object(d.jsx)(I,Object(_.a)({},e))}))})]})},U=t.p+"static/media/card.64a74fcf.png",k=function(){return Object(d.jsxs)("div",{className:"det-main",children:[Object(d.jsxs)("div",{className:"div1",children:[Object(d.jsxs)("div",{className:"div1__slider",children:[Object(d.jsxs)("div",{className:"div1__slider__filtro",children:[Object(d.jsx)("div",{className:"btn1",children:"Exterior"}),Object(d.jsx)("div",{className:"btn2",children:"Interior"})]}),Object(d.jsx)("div",{className:"div1__slider__imagen",children:Object(d.jsx)("img",{src:U,alt:""})})]}),Object(d.jsxs)("div",{className:"div1__frm",children:[Object(d.jsxs)("div",{className:"div1__frm__filtro",children:[Object(d.jsx)("div",{className:"btn1",children:"Mensaje"}),Object(d.jsx)("div",{className:"btn2",children:"Telefono"})]}),Object(d.jsxs)("div",{className:"div1__frm__card",children:[Object(d.jsx)("h2",{children:"Contacta al Vendedor"}),Object(d.jsxs)("form",{action:"",children:[Object(d.jsx)("div",{className:"inputs",children:Object(d.jsx)("input",{type:"text",placeholder:"Nombre"})}),Object(d.jsx)("div",{className:"inputs",children:Object(d.jsx)("input",{type:"text",placeholder:"Correo"})}),Object(d.jsx)("div",{className:"inputs",children:Object(d.jsx)("input",{type:"text",placeholder:"Celular"})}),Object(d.jsx)("div",{className:"inputs",children:Object(d.jsx)("textarea",{placeholder:"Descripcion",children:" "})}),Object(d.jsx)("div",{className:"inputs",children:Object(d.jsx)("button",{className:"btn",children:"CONTACTAR"})})]})]})]})]}),Object(d.jsxs)("div",{className:"descripcion",children:[Object(d.jsxs)("div",{className:"descripcion__vehiculo",children:[Object(d.jsx)("h2",{children:"Descripcion del Vehiculo"}),Object(d.jsx)("div",{className:"descripcion__vehiculo__inputs",children:Object(d.jsx)("textarea",{name:"",id:"",cols:"30",rows:"10",children:"descripci\xf3n del veh\xedculo detallado"})})]}),Object(d.jsxs)("div",{className:"descripcion__carac",children:[Object(d.jsxs)("div",{className:"descripcion__carac__division",children:[Object(d.jsx)("div",{className:"descripcion__carac__division__titulo",children:"Marca"}),Object(d.jsx)("div",{className:"descripcion__carac__division__inputs",children:Object(d.jsx)("input",{type:"text",value:"Volkswagen",readOnly:!0})})]}),Object(d.jsxs)("div",{className:"descripcion__carac__division",children:[Object(d.jsx)("div",{className:"descripcion__carac__division__titulo",children:"Modelo"}),Object(d.jsx)("div",{className:"descripcion__carac__division__inputs",children:Object(d.jsx)("input",{type:"text",value:"PASSAT CC",readOnly:!0})})]}),Object(d.jsxs)("div",{className:"descripcion__carac__division",children:[Object(d.jsx)("div",{className:"descripcion__carac__division__titulo",children:"Categoria"}),Object(d.jsx)("div",{className:"descripcion__carac__division__inputs",children:Object(d.jsx)("input",{type:"text",value:"Sedan",readOnly:!0})})]}),Object(d.jsxs)("div",{className:"descripcion__carac__division",children:[Object(d.jsx)("div",{className:"descripcion__carac__division__titulo",children:"A\xf1o Modelo"}),Object(d.jsx)("div",{className:"descripcion__carac__division__inputs",children:Object(d.jsx)("input",{type:"text",value:"2012",readOnly:!0})})]})]}),Object(d.jsxs)("div",{className:"descripccion__carac",children:[Object(d.jsxs)("div",{className:"descripcion__carac__division",children:[Object(d.jsx)("div",{className:"descripcion__carac__division__titulo",children:"Kilometraje"}),Object(d.jsx)("div",{className:"descripcion__carac__division__inputs",children:Object(d.jsx)("input",{type:"text",value:"80000",readOnly:!0})})]}),Object(d.jsxs)("div",{className:"descripcion__carac__division",children:[Object(d.jsx)("div",{className:"descripcion__carac__division__titulo",children:"Transimision"}),Object(d.jsx)("div",{className:"descripcion__carac__division__inputs",children:Object(d.jsx)("input",{type:"text",value:"Automatica",readOnly:!0})})]}),Object(d.jsxs)("div",{className:"descripcion__carac__division",children:[Object(d.jsx)("div",{className:"descripcion__carac__division__titulo",children:"Combustible"}),Object(d.jsx)("div",{className:"descripcion__carac__division__inputs",children:Object(d.jsx)("input",{type:"text",value:"Gasolina",readOnly:!0})})]}),Object(d.jsxs)("div",{className:"descripcion__carac__division",children:[Object(d.jsx)("div",{className:"descripcion__carac__division__titulo",children:"Color"}),Object(d.jsx)("div",{className:"descripcion__carac__division__inputs",children:Object(d.jsx)("input",{type:"text",value:"Negro",readOnly:!0})})]})]})]})]})},P={isLogin:!1,userData:{}};var V={cars:[],cars_offers:[]};var M=t(21),q=Object(M.a)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"SET_USER":return Object(_.a)(Object(_.a)({},e),{},{userData:c.payload});case"SET_LOGIN":return Object(_.a)(Object(_.a)({},e),{},{isLogin:c.payload});default:return e}},car:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"SET_CARS_OFFERS":return Object(_.a)(Object(_.a)({},e),{},{cars_offers:c.payload});case"SET_CARS":return Object(_.a)(Object(_.a)({},e),{},{cars:c.payload});default:return e}}}),z=Object(M.b)(q,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var W=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(o.a,{store:z,children:Object(d.jsxs)(n.a,{children:[Object(d.jsx)(u,{}),Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{exact:!0,path:"/",component:g}),Object(d.jsx)(r.a,{exact:!0,path:"/ANTAWA",component:g}),Object(d.jsx)(r.a,{exact:!0,path:"/buscar-auto",component:H}),Object(d.jsx)(r.a,{exact:!0,path:"/detalle",component:k}),Object(d.jsx)(r.a,{exact:!0,path:"/contactform",component:B}),Object(d.jsx)(r.a,{exact:!0,path:"/usados",component:B}),Object(d.jsx)(r.a,{exact:!0,path:"/login",component:C}),Object(d.jsx)(r.a,{exact:!0,path:"/register",component:F}),Object(d.jsx)(r.a,{exact:!0,path:"/contactform",component:B})]})]})})})};s.a.render(Object(d.jsx)(W,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.a2691398.chunk.js.map