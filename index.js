var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {     //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
if (!browser.versions.mobile) {//判断是否是移动设备打开
    //鼠标移动效果start----------
    /**
     * Copyright (c) 2016 hustcc
     * License: MIT
     * Version: v1.0.1
     * GitHub: https://github.com/hustcc/canvas-nest.js
    **/
    !function () { function n(n, e, t) { return n.getAttribute(e) || t } function e(n) { return document.getElementsByTagName(n) } function t() { var t = e("script"), o = t.length, i = t[o - 1]; return { l: o, z: n(i, "zIndex", -1), o: n(i, "opacity", .5), c: n(i, "color", "0,0,0"), n: n(i, "count", 99) } } function o() { a = m.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, c = m.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight } function i() { r.clearRect(0, 0, a, c); var n, e, t, o, m, l; s.forEach(function (i, x) { for (i.x += i.xa, i.y += i.ya, i.xa *= i.x > a || i.x < 0 ? -1 : 1, i.ya *= i.y > c || i.y < 0 ? -1 : 1, r.fillRect(i.x - .5, i.y - .5, 1, 1), e = x + 1; e < u.length; e++)n = u[e], null !== n.x && null !== n.y && (o = i.x - n.x, m = i.y - n.y, l = o * o + m * m, l < n.max && (n === y && l >= n.max / 2 && (i.x -= .03 * o, i.y -= .03 * m), t = (n.max - l) / n.max, r.beginPath(), r.lineWidth = t / 2, r.strokeStyle = "rgba(" + d.c + "," + (t + .2) + ")", r.moveTo(i.x, i.y), r.lineTo(n.x, n.y), r.stroke())) }), x(i) } var a, c, u, m = document.createElement("canvas"), d = t(), l = "c_n" + d.l, r = m.getContext("2d"), x = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (n) { window.setTimeout(n, 1e3 / 45) }, w = Math.random, y = { x: null, y: null, max: 2e4 }; m.id = l, m.style.cssText = "position:fixed;top:0;left:0;z-index:" + d.z + ";opacity:" + d.o, e("body")[0].appendChild(m), o(), window.onresize = o, window.onmousemove = function (n) { n = n || window.event, y.x = n.clientX, y.y = n.clientY }, window.onmouseout = function () { y.x = null, y.y = null }; for (var s = [], f = 0; d.n > f; f++) { var h = w() * a, g = w() * c, v = 2 * w() - 1, p = 2 * w() - 1; s.push({ x: h, y: g, xa: v, ya: p, max: 6e3 }) } u = s.concat([y]), setTimeout(function () { i() }, 100) }();
    console.log('\n' + ' %c CPCS_log' + ' %c 鼠标移动动画已被正确加载 ' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'color: black; background: #fadfa3; padding:5px 0;');
//     /*
//      * 鼠标点击特效，canvas点击效果，第二版
//      * 原文地址：https://www.iowen.cn/canvas-click-effect-second-edition
//      */

//     /* Copyright (C) 2013 Justin Windle sketch.min.js, http://soulwire.co.uk */
//     var Sketch = function () { "use strict"; function e(e) { return "[object Array]" == Object.prototype.toString.call(e) } function t(e) { return "function" == typeof e } function n(e) { return "number" == typeof e } function o(e) { return "string" == typeof e } function r(e) { return E[e] || String.fromCharCode(e) } function i(e, t, n) { for (var o in t) (n || !e.hasOwnProperty(o)) && (e[o] = t[o]); return e } function u(e, t) { return function () { e.apply(t, arguments) } } function a(e) { var n = {}; for (var o in e) n[o] = t(e[o]) ? u(e[o], e) : e[o]; return n } function c(e) { function n(n) { t(n) && n.apply(e, [].splice.call(arguments, 1)) } function u(e) { for (_ = 0; _ < J.length; _++)G = J[_], o(G) ? O[(e ? "add" : "remove") + "EventListener"].call(O, G, k, !1) : t(G) ? k = G : O = G } function c() { L(T), T = I(c), U || (n(e.setup), U = t(e.setup), n(e.resize)), e.running && !j && (e.dt = (B = +new Date) - e.now, e.millis += e.dt, e.now = B, n(e.update), e.autoclear && K && e.clear(), n(e.draw)), j = ++j % e.interval } function l() { O = Y ? e.style : e.canvas, D = Y ? "px" : "", e.fullscreen && (e.height = w.innerHeight, e.width = w.innerWidth), O.height = e.height + D, O.width = e.width + D, e.retina && K && X && (O.height = e.height * X, O.width = e.width * X, O.style.height = e.height + "px", O.style.width = e.width + "px", e.scale(X, X)), U && n(e.resize) } function s(e, t) { return N = t.getBoundingClientRect(), e.x = e.pageX - N.left - w.scrollX, e.y = e.pageY - N.top - w.scrollY, e } function f(t, n) { return s(t, e.element), n = n || {}, n.ox = n.x || t.x, n.oy = n.y || t.y, n.x = t.x, n.y = t.y, n.dx = n.x - n.ox, n.dy = n.y - n.oy, n } function g(e) { if (e.preventDefault(), W = a(e), W.originalEvent = e, W.touches) for (M.length = W.touches.length, _ = 0; _ < W.touches.length; _++)M[_] = f(W.touches[_], M[_]); else M.length = 0, M[0] = f(W, V); return i(V, M[0], !0), W } function h(t) { for (t = g(t), q = (Q = J.indexOf(z = t.type)) - 1, e.dragging = /down|start/.test(z) ? !0 : /up|end/.test(z) ? !1 : e.dragging; q;)o(J[q]) ? n(e[J[q--]], t) : o(J[Q]) ? n(e[J[Q++]], t) : q = 0 } function p(t) { F = t.keyCode, H = "keyup" == t.type, Z[F] = Z[r(F)] = !H, n(e[t.type], t) } function v(t) { e.autopause && ("blur" == t.type ? b : C)(), n(e[t.type], t) } function C() { e.now = +new Date, e.running = !0 } function b() { e.running = !1 } function P() { (e.running ? b : C)() } function A() { K && e.clearRect(0, 0, e.width, e.height) } function S() { R = e.element.parentNode, _ = x.indexOf(e), R && R.removeChild(e.element), ~_ && x.splice(_, 1), u(!1), b() } var T, k, O, R, N, _, D, B, G, W, z, F, H, q, Q, j = 0, M = [], U = !1, X = w.devicePixelRatio, Y = e.type == m, K = e.type == d, V = { x: 0, y: 0, ox: 0, oy: 0, dx: 0, dy: 0 }, J = [e.element, h, "mousedown", "touchstart", h, "mousemove", "touchmove", h, "mouseup", "touchend", h, "click", y, p, "keydown", "keyup", w, v, "focus", "blur", l, "resize"], Z = {}; for (F in E) Z[E[F]] = !1; return i(e, { touches: M, mouse: V, keys: Z, dragging: !1, running: !1, millis: 0, now: 0 / 0, dt: 0 / 0, destroy: S, toggle: P, clear: A, start: C, stop: b }), x.push(e), e.autostart && C(), u(!0), l(), c(), e } for (var l, s, f = "E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min".split(" "), g = "__hasSketch", h = Math, d = "canvas", p = "webgl", m = "dom", y = document, w = window, x = [], v = { fullscreen: !0, autostart: !0, autoclear: !0, autopause: !0, container: y.body, interval: 1, globals: !0, retina: !1, type: d }, E = { 8: "BACKSPACE", 9: "TAB", 13: "ENTER", 16: "SHIFT", 27: "ESCAPE", 32: "SPACE", 37: "LEFT", 38: "UP", 39: "RIGHT", 40: "DOWN" }, C = { CANVAS: d, WEB_GL: p, WEBGL: p, DOM: m, instances: x, install: function (t) { if (!t[g]) { for (var o = 0; o < f.length; o++)t[f[o]] = h[f[o]]; i(t, { TWO_PI: 2 * h.PI, HALF_PI: h.PI / 2, QUATER_PI: h.PI / 4, random: function (t, o) { return e(t) ? t[~~(h.random() * t.length)] : (n(o) || (o = t || 1, t = 0), t + h.random() * (o - t)) }, lerp: function (e, t, n) { return e + n * (t - e) }, map: function (e, t, n, o, r) { return (e - t) / (n - t) * (r - o) + o } }), t[g] = !0 } }, create: function (e) { return e = i(e || {}, v), e.globals && C.install(self), l = e.element = e.element || y.createElement(e.type === m ? "div" : "canvas"), s = e.context = e.context || function () { switch (e.type) { case d: return l.getContext("2d", e); case p: return l.getContext("webgl", e) || l.getContext("experimental-webgl", e); case m: return l.canvas = l } }(), e.container.appendChild(l), C.augment(s, e) }, augment: function (e, t) { return t = i(t || {}, v), t.element = e.canvas || e, t.element.className += " sketch", i(e, t, !0), c(e) } }, b = ["ms", "moz", "webkit", "o"], P = self, A = 0, S = "AnimationFrame", T = "request" + S, k = "cancel" + S, I = P[T], L = P[k], O = 0; O < b.length && !I; O++)I = P[b[O] + "Request" + S], L = P[b[O] + "Cancel" + T]; return P[T] = I = I || function (e) { var t = +new Date, n = h.max(0, 16 - (t - A)), o = setTimeout(function () { e(t + n) }, n); return A = t + n, o }, P[k] = L = L || function (e) { clearTimeout(e) }, C }();
//     //---
//     if (document.getElementById("clickCanvas")) {
//         function Particle(x, y, radius) {
//             this.init(x, y, radius);
//         }
//         Particle.prototype = {
//             init: function (x, y, radius) {
//                 this.alive = true;
//                 this.radius = radius || 10;
//                 this.wander = 0.15;
//                 this.theta = random(TWO_PI);
//                 this.drag = 0.92;
//                 this.color = '#ffeb3b';

//                 this.x = x || 0.0;
//                 this.y = y || 0.0;
//                 this.vx = 0.0;
//                 this.vy = 0.0;
//             },
//             move: function () {
//                 this.x += this.vx;
//                 this.y += this.vy;
//                 this.vx *= this.drag;
//                 this.vy *= this.drag;
//                 this.theta += random(-0.5, 0.5) * this.wander;
//                 this.vx += sin(this.theta) * 0.1;
//                 this.vy += cos(this.theta) * 0.1;
//                 this.radius *= 0.96;
//                 this.alive = this.radius > 0.5;
//             },
//             draw: function (ctx) {
//                 ctx.beginPath();
//                 ctx.arc(this.x, this.y, this.radius, 0, TWO_PI);
//                 ctx.fillStyle = this.color;
//                 ctx.fill();
//             }
//         };
//         var MAX_PARTICLES = 50;
//         //圆点颜色库
//         var COLOURS = ["#5ee4ff", "#f44033", "#ffeb3b", "#F38630", "#FA6900", "#f403e8", "#F9D423"];
//         var particles = [];
//         var pool = [];
//         var clickparticle = Sketch.create({
//             container: document.getElementById('clickCanvas')
//         });
//         clickparticle.spawn = function (x, y) {
//             if (particles.length >= MAX_PARTICLES)
//                 pool.push(particles.shift());
//             particle = pool.length ? pool.pop() : new Particle();
//             particle.init(x, y, random(5, 20));//圆点大小范围
//             particle.wander = random(0.5, 2.0);
//             particle.color = random(COLOURS);
//             particle.drag = random(0.9, 0.99);
//             theta = random(TWO_PI);
//             force = random(1, 5);
//             particle.vx = sin(theta) * force;
//             particle.vy = cos(theta) * force;
//             particles.push(particle);
//         };
//         clickparticle.update = function () {
//             var i, particle;
//             for (i = particles.length - 1; i >= 0; i--) {
//                 particle = particles[i];
//                 if (particle.alive)
//                     particle.move();
//                 else
//                     pool.push(particles.splice(i, 1)[0]);
//             }
//         };
//         clickparticle.draw = function () {
//             clickparticle.globalCompositeOperation = 'lighter';
//             for (var i = particles.length - 1; i >= 0; i--) {
//                 particles[i].draw(clickparticle);
//             }
//         };
//         //按下时显示效果，mousedown 换成 click 为点击时显示效果（我用的 click）
//         document.addEventListener("mousedown", function (e) {
//             var max, j;
//             //排除一些元素
//             "TEXTAREA" !== e.target.nodeName && "INPUT" !== e.target.nodeName && "A" !== e.target.nodeName && "I" !== e.target.nodeName && "IMG" !== e.target.nodeName
//                 && function () {
//                     for (max = random(15, 20), j = 0; j < max; j++)
//                         clickparticle.spawn(e.clientX, e.clientY);
//                 }();
//         });
//     }
    console.log('\n' + ' %c CPCS_log' + ' %c 鼠标点击动画已被正确加载 ' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'color: black; background: #fadfa3; padding:5px 0;');

} else {
    //手机端关闭字幕(延迟性)
    window.onload = function () {
        setTimeout(function () {
            if (document.querySelector('meting-js').aplayer) {
                document.querySelector('meting-js').aplayer.lrc.hide();
                var idObject = document.getElementById('c_n4');
                if (idObject != null)
                    idObject.parentNode.removeChild(idObject);
            }
        }, 2000);
    }
    console.log('\n' + ' %c CPCS_log' + ' %c 字幕已关闭 ' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'color: black; background: #fadfa3; padding:5px 0;');

}
console.log('\n' + ' %c OneManager v20210313-1352.35' + ' %c https://github.com/qkqpttgf/OneManager-php ' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
