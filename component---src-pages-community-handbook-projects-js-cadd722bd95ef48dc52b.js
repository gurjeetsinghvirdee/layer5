"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[13],{70722:function(e,t,n){var r=n(67294),a=n(71082);const l=n(64423).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-42m33g-0"})(["\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);t.Z=function(e){let{contents:t}=e;const{0:n,1:i}=(0,r.useState)(null);return(0,r.useEffect)((()=>{const e=window.location.pathname;i(e)}),[]),r.createElement(l,null,r.createElement("div",{className:"intra-page"},r.createElement("ul",null,t.map((e=>r.createElement("li",{key:e.id,className:"list"},r.createElement(a.Link,{to:""+n+e.link,key:e.id,activeClassName:"active"},e.text)))))))}},35089:function(e,t,n){n.r(t),n.d(t,{Head:function(){return k},default:function(){return b}});var r=n(67294),a=n(17875),l=n(37242),i=n(96712),c=n(58131),s=n(71426),o=n(91532),m=n(52249),h=n(64817),u=n(50549),p=n(64916),d=n(72606),E=n(90075),f=n(31992),y=n(71082),g=n(70722);const v=[{id:0,link:"#Layer5",text:"Layer5"},{id:1,link:"#Meshery",text:"Meshery"},{id:2,link:"#Service Mesh Performance",text:"Service Mesh Performance"},{id:3,link:"#Service Mesh Patterns",text:" Service Mesh Patterns"}];var M=()=>r.createElement(d.U,null,r.createElement("div",{className:"page-header-section"},r.createElement("h1",null,"Projects")),r.createElement(E.Z,null),r.createElement("div",{className:"page-section"},r.createElement(l.W2,null,r.createElement("div",{className:"content"},r.createElement("p",null,r.createElement("a",{id:"Layer5"}," ",r.createElement("h3",null,r.createElement("a",{href:"https://layer5.io/"},r.createElement("img",{className:"project-title-icon",src:c.Z,alt:"Layer5"}),"  Layer5"," "))," ")),r.createElement("p",null,"Its cloud nativecommunity represents the largest collection of service Mesh projects. Emerging projects like Nighthawk"," ",r.createElement("img",{className:"project-description-icon",src:s.Z,alt:"Nighthawk Icon"})," , community with"," ",r.createElement(y.Link,{to:"/community/meshmates"},r.createElement("img",{className:"project-description-icon",src:o.Z,alt:"MeshMate icon"})," MeshMates "),", catch-all org, “home base”.",r.createElement("br",null),r.createElement("ul",null,r.createElement("li",null,r.createElement("h4",null,r.createElement("a",{href:"https://layer5.io/"},"Layer5 :"))," "),r.createElement("p",null,"Layer5 is the official website of the Layer5 community showing an overview of the Layer5 projects. The different service mesh landscapes, resources to learn about service mesh, and communities. ",r.createElement("br",null)),r.createElement("li",null,r.createElement("h4",null,r.createElement("a",{href:"https://layer5.io/projects/image-hub"},"Image-Hub :"))," "),r.createElement("p",null,"Image Hub is a sample application written to run on Consul for exploring WebAssembly modules used as Envoy filters are written in Rust. These modules can be used to implement multi-tenancy or to implement per-user rate-limiting in your application's endpoints. This application was first demonstrated at DockerCon 2020. ",r.createElement("br",null)),r.createElement("li",null,r.createElement("h4",null,r.createElement("a",{href:"https://layer5.io/projects/nighthawk"},"Nighthawk :"))," "),r.createElement("p",null,"This Is a Layer 7 (HTTP/HTTPS/HTTP2) performance characterization tool. Nighthawk is Envoy’s load generator and is written in C++. Meshery integrates Nighthawk as one of (currently) three choices of load generators for characterizing and managing the performance of service meshes and their workloads. ",r.createElement("br",null)))),r.createElement("p",null,r.createElement("a",{id:"Meshery"}," ",r.createElement("h3",null,r.createElement("a",{href:"https://layer5.io/cloud-native-management/meshery"},r.createElement("img",{className:"project-title-icon",src:i.Z,alt:"Meshery"}),"  Meshery"))," ")),r.createElement("p",null,"Meshery and its components Meshery Operator"," ",r.createElement("img",{className:"project-description-icon",src:u.Z,alt:"Meshery Operator Icon"})," and MeshSync"," ",r.createElement("img",{className:"project-description-icon",src:p.Z,alt:"MeshSync icon"}),r.createElement("ul",null,r.createElement("li",null,r.createElement("h4",null,r.createElement("a",{href:"https://layer5.io/cloud-native-management/meshery"},"Meshery"))," "),r.createElement("p",null,"It is a cloud native management plane offering lifecycle management of more types of service meshes than any other tool available today. Meshery facilitates adopting, configuring, operating, and managing the performance of different service meshes and incorporates the collection and display of metrics from applications running on top of any service mesh.",r.createElement("br",null)," "),r.createElement("li",null,r.createElement("h4",null,r.createElement("a",{href:"https://meshery.io/"},"Meshery.io :"))," "),r.createElement("p",null,"Website for Meshery, the cloud native manager. ",r.createElement("br",null)),r.createElement("li",null,r.createElement("h4",null,r.createElement("a",{href:"https://layer5.io/cloud-native-management/meshery/meshery-operator"},"Meshery-operator :"))," "),r.createElement("p",null,"Meshery Operator is the multi-service mesh operator and implementation of MeshSync. ",r.createElement("br",null)),r.createElement("li",null,r.createElement("h4",null,r.createElement("a",{href:"https://layer5.io/docker-extension-meshery"},"Meshery-docker-extension :"))," "),r.createElement("p",null,"The Docker Extension for Meshery extends Docker Desktop’s position as the cloud native developer’s go-to Kubernetes environment with easy access to the next layer of cloud native infrastructure: service meshes. ",r.createElement("br",null)))),r.createElement("a",{id:"Service Mesh Performance"},r.createElement("p",null,r.createElement("h3",null,r.createElement("a",{href:"https://smp-spec.io/"},r.createElement("img",{className:"project-title-icon",alt:"service mesh performance",src:h.Z}),"  Service Mesh Performance"," ")))),r.createElement("p",null,r.createElement("a",{href:"https://layer5.io/projects/service-mesh-performance"},"The Service Mesh Performance (SMP)")," ","is a vendor-neutral specification for capturing details of environment and infrastructure details, service mesh and it’s configuration, service/application details, and bundling of statistical analysis of the result. ",r.createElement("br",null)),r.createElement("p",null,r.createElement("a",{id:"Service Mesh Patterns"}," ",r.createElement("h3",null,r.createElement("a",{href:"https://github.com/service-mesh-patterns/service-mesh-patterns"},r.createElement("img",{className:"project-title-icon",alt:"service mesh patterns",src:m.Z})," ","  Service Mesh Patterns"," "))," ")),r.createElement("p",null,"A collection of curated patterns of service mesh use cases compatible with Meshery. ",r.createElement("br",null))),r.createElement(f.Z,null)),r.createElement(g.Z,{contents:v})));var b=()=>r.createElement(r.Fragment,null,r.createElement(M,null));const k=()=>r.createElement(a.Z,{title:"Projects",description:"Layer5 Projects: Layer5, Meshery, Service Mesh Performance and NightHawk"})}}]);
//# sourceMappingURL=component---src-pages-community-handbook-projects-js-cadd722bd95ef48dc52b.js.map