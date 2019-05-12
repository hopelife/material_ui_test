(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"2gMf":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/basics/getting-started/setup",function(){var e=t("pt3T");return{page:e.default||e}}])},pt3T:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",function(){return c});var a=t("qNsG"),o=t("q1tI"),r=t.n(o),s=t("6qfE"),m=t("5Yp1"),c=(t("lTDM"),{title:"Getting Started",courseId:"basics",lessonId:"getting-started",stepId:"setup",question:{answers:["Error No Page Found","404 - This page could not be found","Hello Next.js","Hello World"],correctAnswer:"404 - This page could not be found"}});n.default=function(e){var n=e.components,t=Object(a.a)(e,["components"]);return r.a.createElement(s.MDXTag,{name:"wrapper",Layout:function(e){var n=e.children;return r.a.createElement(m.a,{meta:c},n)},layoutProps:t,components:n},r.a.createElement(s.MDXTag,{name:"h2",components:n},"Setup"),r.a.createElement(s.MDXTag,{name:"p",components:n},"Next.js works with Windows, Mac and Linux alike. You only need to have Node.js installed on your system to begin building Next.js applications."),r.a.createElement(s.MDXTag,{name:"p",components:n},"Besides that you need to have a text editor to write code, and a Terminal application to invoke some commands."),r.a.createElement(s.MDXTag,{name:"blockquote",components:n},r.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"blockquote"},"If you are on Windows, try to use PowerShell.\nNext.js works with any shell or terminal, but we'll be using some UNIX-specific commands in this guide.\nWe recommend using PowerShell to make it easy to follow along.")),r.a.createElement(s.MDXTag,{name:"p",components:n},"To start, create a sample project by running the following commands:"),r.a.createElement(s.MDXTag,{name:"pre",components:n},r.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"mkdir hello-next\ncd hello-next\nnpm init -y\nnpm install --save react react-dom next\nmkdir pages\n")),r.a.createElement(s.MDXTag,{name:"p",components:n},'Then open the "package.json" in the hello-next directory and add the following NPM script.'),r.a.createElement(s.MDXTag,{name:"pre",components:n},r.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json",metaString:""}},'{\n  "scripts": {\n    "dev": "next",\n    "build": "next build",\n    "start": "next start"\n  }\n}\n')),r.a.createElement(s.MDXTag,{name:"p",components:n},"Now everything is ready. Run the following command to start the dev server:"),r.a.createElement(s.MDXTag,{name:"pre",components:n},r.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"npm run dev\n")),r.a.createElement(s.MDXTag,{name:"p",components:n},"Then open ",r.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://localhost:3000/"}},"http://localhost:3000")," from your favourite browser."),r.a.createElement(s.MDXTag,{name:"p",components:n},"What's the output you see on the screen?"))}}},[["2gMf",1,0]]]);