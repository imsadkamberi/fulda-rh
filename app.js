const T={
sq:{"n.home":"Home","n.serv":"Shërbimet","n.about":"Rreth Nesh","n.contact":"Kontakt",
"h.title":"Fellgat e juaja<br>në duar të sigurta","h.text":"Shërbime profesionale për fellga, goma dhe CNC punime. Siguri në rrugë, çdo ditë.","h.btn":"Shikoni shërbimet",
"i.1t":"25+ vite përvojë","i.1d":"Përvojë e gjatë në industrinë automobilistike.","i.2t":"Precizion & cilësi","i.2d":"CNC punime të sakta me rezultate të qëndrueshme.","i.3t":"Për çdo automjet","i.3d":"Goma dhe fellga për makina, moto, kamionë dhe traktorë.",
"m.title":"Lokacioni","s.title":"Çfarë ofrojmë ne?",
"s.1t":"Riparim i Fellgave","s.1d":"Riparim profesional pa dallime apo dobësi.","s.2t":"CNC + Lyerje","s.2d":"CNC dhe lyerje me profesionalizëm.","s.3t":"Shitje Goma","s.3d":"Për çdo lloj automjeti, moto, kamion, traktor.","s.4t":"Shitje Fellga","s.4d":"Të çdo modeli dhe madhësie.",
"a.title":"Rreth Kompanisë","a.text":"Fulda-RH është një kompani e specializuar në CNC punime për fellgat, duke ofruar shërbime të avancuara dhe të personalizuara për çdo klient. Me përvojë të gjatë në industrinë automobilistike dhe teknologjinë më moderne, garantojmë precizion, cilësi të lartë dhe rezultate të qëndrueshme.",
"st.1":"Vite Eksperiencë","st.2":"Goma të Shitura","st.3":"CNC Punime","st.4":"Fellga të Riparuara","c.title":"Kontakti","c.phone":"Telefon","f":"Të gjitha të drejtat e rezervuara."},
mk:{"n.home":"Почетна","n.serv":"Услуги","n.about":"За нас","n.contact":"Контакт",
"h.title":"Вашите фелни<br>во сигурни раце","h.text":"Професионални услуги за фелни, гуми и CNC обработка. Безбедност на патот, секој ден.","h.btn":"Погледнете ги услугите",
"i.1t":"25+ години искуство","i.1d":"Долгогодишно искуство во автомобилската индустрија.","i.2t":"Прецизност и квалитет","i.2d":"Прецизна CNC обработка со стабилни резултати.","i.3t":"За секое возило","i.3d":"Гуми и фелни за автомобили, мотори, камиони и трактори.",
"m.title":"Локација","s.title":"Што нудиме?",
"s.1t":"Поправка на фелни","s.1d":"Професионална поправка без разлики или слабости.","s.2t":"CNC + Лакирање","s.2d":"CNC обработка и лакирање со професионалност.","s.3t":"Продажба на гуми","s.3d":"За секој вид возило, мотор, камион, трактор.","s.4t":"Продажба на фелни","s.4d":"За секој модел и големина.",
"a.title":"За компанијата","a.text":"Fulda-RH е компанија специјализирана за CNC обработка на фелни, која нуди напредни и персонализирани услуги за секој клиент. Со долгогодишно искуство во автомобилската индустрија и најмодерна технологија, гарантираме прецизност, висок квалитет и стабилни резултати.",
"st.1":"Години искуство","st.2":"Продадени гуми","st.3":"CNC обработки","st.4":"Поправени фелни","c.title":"Контакт","c.phone":"Телефон","f":"Сите права се задржани."},
en:{"n.home":"Home","n.serv":"Services","n.about":"About Us","n.contact":"Contact",
"h.title":"Your wheels<br>in safe hands","h.text":"Professional services for rims, tires and CNC work. Safety on the road, every day.","h.btn":"See our services",
"i.1t":"25+ years of experience","i.1d":"Long experience in the automotive industry.","i.2t":"Precision & quality","i.2d":"Accurate CNC work with consistent results.","i.3t":"For every vehicle","i.3d":"Tires and rims for cars, motorcycles, trucks and tractors.",
"m.title":"Location","s.title":"What do we offer?",
"s.1t":"Rim Repair","s.1d":"Professional rim repair with no visible flaws or weak spots.","s.2t":"CNC + Painting","s.2d":"CNC machining and painting done professionally.","s.3t":"Tire Sales","s.3d":"For every vehicle: car, moto, truck, tractor.","s.4t":"Rim Sales","s.4d":"For every model and size.",
"a.title":"About the Company","a.text":"Fulda-RH is a company specialised in CNC machining of rims, offering advanced and personalised services for every client. With long experience in the automotive industry and modern technology, we guarantee precision, high quality and consistent results.",
"st.1":"Years of Experience","st.2":"Tires Sold","st.3":"CNC Jobs","st.4":"Rims Repaired","c.title":"Contact","c.phone":"Phone","f":"All rights reserved."}};
const P='fill="none" stroke="#ff6a00" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"';
const IC={
wheel:`<svg viewBox="0 0 48 48" ${P}><circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="4"/><path d="M24 6v14M24 28v14M6 24h14M28 24h14M11 11l10 10M27 27l10 10M37 11L27 21M21 27L11 37"/></svg>`,
cnc:`<svg viewBox="0 0 48 48" ${P}><rect x="6" y="5" width="36" height="6" rx="2"/><rect x="17" y="11" width="14" height="8" rx="1.5"/><path d="M24 19v7M21 26h6l-3 5zM24 35v7M16 34l-5 7M32 34l5 7M9 30l-4 3M39 30l4 3"/></svg>`,
tire:`<svg viewBox="0 0 48 48" ${P}><rect x="8" y="8" width="32" height="9" rx="4"/><rect x="8" y="19" width="32" height="9" rx="4"/><rect x="8" y="30" width="32" height="9" rx="4"/></svg>`,
rim:`<svg viewBox="0 0 48 48" ${P}><circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="11"/><path d="M24 13v22M13 24h22M16 16l16 16M32 16L16 32"/></svg>`};
const pages=[['home','index.html','n.home'],['serv','sherbimet.html','n.serv'],['about','rreth-nesh.html','n.about'],['contact','kontakt.html','n.contact']];
const cur=document.body.dataset.page,S=localStorage;
let lang=S.getItem('fl')||'sq',theme=S.getItem('ft')||'dark';
const logo=`<a class="logo" href="index.html"><svg viewBox="0 0 40 40" fill="none" stroke="#ff6a00" stroke-width="3" stroke-linecap="round"><circle cx="20" cy="20" r="16"/><circle cx="20" cy="20" r="4.5"/><path d="M20 4v11.5M20 24.5V36M4 20h11.5M24.5 20H36M9 9l8 8M23 23l8 8M31 9l-8 8M17 23l-8 8" stroke-width="2"/></svg><span>FULDA <b>R-H</b> CNC</span></a>`;
document.body.insertAdjacentHTML('afterbegin',`<header><div class="bar">${logo}<nav id="nv">${pages.map(p=>`<a href="${p[1]}" data-i="${p[2]}" class="${p[0]==cur?'on':''}"></a>`).join('')}</nav><div class="ctl">${['sq','mk','en'].map(l=>`<button data-l="${l}">${l=='mk'?'МК':l.toUpperCase()}</button>`).join('')}<button id="th" title="Dark / Light"></button><button id="bg">☰</button></div></div></header>`);
document.body.insertAdjacentHTML('beforeend','<footer>© 2026 Fulda R-H. <span data-i="f"></span></footer>');
document.querySelectorAll('[data-ic]').forEach(e=>e.innerHTML=IC[e.dataset.ic]);
function apply(){
 const d=T[lang];
 document.querySelectorAll('[data-i]').forEach(e=>e.innerHTML=d[e.dataset.i]);
 document.querySelectorAll('[data-l]').forEach(b=>b.classList.toggle('on',b.dataset.l==lang));
 document.documentElement.lang=lang;
 document.documentElement.dataset.theme=theme;
 document.getElementById('th').textContent=theme=='dark'?'☀️':'🌙';
 const pg=pages.find(p=>p[0]==cur);
 document.title=d[pg[2]]+' | Fulda R-H CNC';
}
document.querySelectorAll('[data-l]').forEach(b=>b.onclick=()=>{lang=b.dataset.l;S.setItem('fl',lang);apply()});
document.getElementById('th').onclick=()=>{theme=theme=='dark'?'light':'dark';S.setItem('ft',theme);apply()};
document.getElementById('bg').onclick=()=>document.getElementById('nv').classList.toggle('open');
apply();
