(this.webpackJsonpantawa=this.webpackJsonpantawa||[]).push([[0],{21:function(e,c,t){},28:function(e,c,t){"use strict";t.r(c);var s=t(1),i=t(14),n=t.n(i),a=t(3),l=t(2),r=(t(21),t.p+"static/media/logo.6d8fc0c4.svg"),j=(t(12),t(0)),o=function(){return Object(j.jsx)(a.b,{exact:!0,to:"/",children:Object(j.jsx)("img",{src:r,alt:""})})},d=function(){return Object(j.jsxs)("ul",{className:"header__ul",children:[Object(j.jsx)("li",{className:"header__li",children:Object(j.jsx)(a.b,{exact:!0,to:"/usados",activeClassName:"a_active",children:"Usados"})}),Object(j.jsx)("li",{className:"header__li",children:Object(j.jsx)(a.b,{exact:!0,to:"2",activeClassName:"a_active",children:"Financiaci\xf3n"})}),Object(j.jsxs)("li",{className:"header__li",children:[Object(j.jsx)(a.b,{exact:!0,to:"/buscar-auto",activeClassName:"a_active",children:"Mas"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{exact:!0,to:"/buscar-autos",activeClassName:"a_active",children:"Autos"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{exact:!0,to:"/buscar-autos",activeClassName:"a_active",children:"Motos"})})]})]}),Object(j.jsx)("li",{className:"header__li",children:Object(j.jsx)(a.b,{exact:!0,to:"4",activeClassName:"a_active",children:"Vende tu auto"})}),Object(j.jsx)("li",{className:"header__li",children:Object(j.jsx)(a.b,{exact:!0,to:"5",activeClassName:"a_active",children:"Registrate"})}),Object(j.jsx)("li",{className:"i",children:Object(j.jsx)(a.b,{exact:!0,to:"/login",activeClassName:"a_active",className:"user",children:Object(j.jsx)("box-icon",{name:"user"})})})]})},b=function(){return Object(j.jsx)(s.Fragment,{children:Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)(o,{}),Object(j.jsx)(d,{})]})})},x=t.p+"static/media/auto.dc49e16e.png",h=t(6),u=function(){var e="http://localhost:5000/marcas",c=Object(s.useState)([]),t=Object(h.a)(c,2),i=t[0],n=t[1];return Object(s.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsx)(s.Fragment,{children:i.map((function(e,c){return Object(j.jsx)("option",{value:e.id,children:e.marca},c)}))})},O=function(){var e=Object(s.useState)([]),c=Object(h.a)(e,2),t=c[0],i=c[1],n="http://localhost:5000/marcas";return Object(s.useEffect)((function(){fetch(n).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsx)(s.Fragment,{children:t.map((function(e,c){return Object(j.jsx)("option",{value:e.id=5,children:e.modelos[10]},c)}))})},_=function(){return Object(j.jsxs)("div",{class:"banner",children:[Object(j.jsx)("img",{src:x,alt:""}),Object(j.jsx)("h1",{class:"banner__slogan",children:"Encuentra el auto de tus sue\xf1os"})]})},m=function(){return Object(j.jsx)(s.Fragment,{children:Object(j.jsxs)("div",{className:"form1",children:[Object(j.jsxs)("div",{className:"form1__option",children:[Object(j.jsx)("button",{children:"Todos"}),Object(j.jsx)("button",{children:"Nuevos"}),Object(j.jsx)("button",{children:"Usados"})]}),Object(j.jsxs)("form",{action:"#",className:"form1__filtro",children:[Object(j.jsxs)("div",{className:"form1__buscar",children:[Object(j.jsx)("input",{type:"text",placeholder:"Buscar auto",className:"form1__buscar__frm-buscar"}),Object(j.jsxs)("select",{name:"marca",id:"marca",children:[Object(j.jsx)("option",{value:"0",children:"Escoge tu marca"}),Object(j.jsx)(u,{})]}),Object(j.jsxs)("select",{name:"modelo",id:"modelo",children:[Object(j.jsx)("option",{value:"0",children:"Escoge tu modelo"}),Object(j.jsx)(O,{})]})]}),Object(j.jsxs)("div",{className:"form1__periodo",children:[Object(j.jsx)("label",{for:"anio",children:"A\xf1o"}),Object(j.jsx)("input",{className:"form1__periodo__num",type:"number",placeholder:"Desde"}),Object(j.jsx)("input",{className:"form1__periodo__num",type:"number",placeholder:"Hasta"}),Object(j.jsx)("label",{for:"rango",className:"form1__periodo__espacio",children:"Rango de precio S/."}),Object(j.jsx)("input",{type:"range",name:"rango",id:"rango",min:"10000",max:"500000",step:"5000"}),Object(j.jsx)(a.b,{exact:!0,to:"/buscar-auto",children:Object(j.jsx)("button",{children:"BUSCAR"})})]})]})]})})},v=function(){return Object(j.jsxs)("main",{children:[Object(j.jsx)(_,{}),Object(j.jsx)(m,{})]})},p=function(){return Object(j.jsx)("main",{children:Object(j.jsx)("h2",{children:"Este es el login"})})},f=function(){return Object(j.jsx)("main",{children:Object(j.jsx)("h3",{children:"Pagina de usados"})})};var N=function(){var e=Object(s.useState)([]),c=Object(h.a)(e,2),t=c[0],i=c[1],n="http://localhost:5000/ofertas";return Object(s.useEffect)((function(){fetch(n).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsx)(s.Fragment,{children:t.map((function(e,c){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"container__img",children:Object(j.jsx)("img",{src:e.photos[0]})}),Object(j.jsxs)("div",{className:"container__card",children:[Object(j.jsxs)("div",{className:"container__card__titulo",children:[Object(j.jsx)("div",{className:"container__card__titulo__anio",children:e.a\u00f1omodelo}),Object(j.jsxs)("h3",{className:"container__card__titulo__marca",children:[e.marca," ",e.modelo]})]}),Object(j.jsx)("div",{className:"container__card__tipo",children:e.transmision}),Object(j.jsxs)("div",{className:"container__card__precio",children:[Object(j.jsx)("div",{children:Object(j.jsx)("box-icon",{type:"solid",name:"no-entry",color:"white"})}),Object(j.jsx)("div",{className:"container__card__precio__precio1",children:"$ 1,200"})," |",Object(j.jsxs)("h3",{className:"container__card__precio__precio2",children:["$ ",e.preciodolares]})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"container__card__kilometros",children:[Object(j.jsx)("div",{children:Object(j.jsx)("box-icon",{type:"solid",name:"ev-station",color:"white"})}),Object(j.jsxs)("div",{children:[e.kilometraje," Kilometros"]})]}),Object(j.jsxs)("div",{className:"container__card__color",children:[Object(j.jsx)("div",{children:Object(j.jsx)("box-icon",{name:"color-fill",color:"white"})}),Object(j.jsxs)("div",{children:["Exterior ",e.color]})]}),Object(j.jsxs)("div",{className:"container__card__descripcion",children:[Object(j.jsx)("div",{children:Object(j.jsx)("box-icon",{name:"taxi",color:"white"})}),Object(j.jsx)("div",{children:e.descripcion})]})]})]},c)}))})},g=function(){var e="http://localhost:5000/categorias",c=Object(s.useState)([]),t=Object(h.a)(c,2),i=t[0],n=t[1];return Object(s.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsx)(s.Fragment,{children:i.map((function(e,c){return Object(j.jsx)("option",{value:e.id,children:e.categoria},c)}))})},y=function(){return Object(j.jsxs)("div",{className:"main_buscar_auto",children:[Object(j.jsx)("div",{className:"filtro",children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"filtro__titulo",children:[Object(j.jsx)("div",{children:"Ubicaci\xf3n"}),Object(j.jsx)("div",{children:Object(j.jsxs)("select",{className:"filtro__titulo__selects",children:[Object(j.jsx)("option",{value:"0",children:"--Seleccione--"}),Object(j.jsx)("option",{value:"1",selected:!0,children:"Lima"})]})})]}),Object(j.jsxs)("div",{className:"filtro__titulo",children:[Object(j.jsx)("div",{children:"Marca"}),Object(j.jsx)("div",{children:Object(j.jsxs)("select",{id:"modelo",className:"filtro__titulo__selects",children:[Object(j.jsx)("option",{value:"0",children:"Escoge tu marca"}),Object(j.jsx)(u,{})]})})]}),Object(j.jsxs)("div",{className:"filtro__titulo",children:[Object(j.jsx)("div",{children:"Modelo"}),Object(j.jsx)("div",{children:Object(j.jsxs)("select",{className:"filtro__titulo__selects",children:[Object(j.jsx)("option",{value:"0",children:"Escoge tu modelo"}),Object(j.jsx)(O,{})]})})]}),Object(j.jsxs)("div",{className:"filtro__titulo",children:[Object(j.jsx)("div",{children:"A\xf1o"}),Object(j.jsx)("div",{children:Object(j.jsxs)("select",{className:"filtro__titulo__selects",children:[Object(j.jsx)("option",{value:"0",children:"Desde"}),Object(j.jsx)("option",{value:"2010",children:"2010"}),Object(j.jsx)("option",{value:"2019",children:"2019"}),Object(j.jsx)("option",{value:"2020",children:"2020"}),Object(j.jsx)("option",{value:"2021",children:"2021"}),Object(j.jsx)("option",{value:"2022",children:"2022"})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("select",{className:"filtro__titulo__selects",children:[Object(j.jsx)("option",{value:"0",children:"Hasta"}),Object(j.jsx)("option",{value:"2010",children:"2010"}),Object(j.jsx)("option",{value:"2019",children:"2019"}),Object(j.jsx)("option",{value:"2020",children:"2020"}),Object(j.jsx)("option",{value:"2021",children:"2021"}),Object(j.jsx)("option",{value:"2022",children:"2022"})]})})]}),Object(j.jsxs)("div",{className:"filtro__titulo",children:[Object(j.jsx)("div",{children:"Categoria"}),Object(j.jsx)("div",{children:Object(j.jsx)("select",{className:"filtro__titulo__selects",children:Object(j.jsx)(g,{})})})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"filtro__titulo",children:[Object(j.jsx)("div",{children:"Precio"}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",className:"filtro__titulo__inputs",placeholder:"S/. 10000"})}),Object(j.jsx)("div",{children:"a"}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",className:"filtro__titulo__inputs",placeholder:"S/. 500000"})})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"filtro__titulo",children:[Object(j.jsx)("div",{children:"Kilometraje"}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",className:"filtro__titulo__inputs",placeholder:"0"})}),Object(j.jsx)("div",{children:"a"}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",className:"filtro__titulo__inputs",placeholder:"200.000"})})]}),Object(j.jsx)("div",{className:"filtro__filtrar",children:Object(j.jsx)("button",{children:"BUSCAR"})})]})}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(N,{})})]})};var E=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(a.a,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",component:v}),Object(j.jsx)(l.a,{exact:!0,path:"/buscar-auto",component:y}),Object(j.jsx)(l.a,{exact:!0,path:"/usados",component:f}),Object(j.jsx)(l.a,{exact:!0,path:"/login",component:p})]})]})})};n.a.render(Object(j.jsx)(E,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.1aee1fd4.chunk.js.map