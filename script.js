const root=document.documentElement;
const themeBtn=document.getElementById("themeBtn");
const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");

if(localStorage.getItem("theme")==="light"){root.classList.add("light");themeBtn.textContent="☾";}
themeBtn.addEventListener("click",()=>{
  root.classList.toggle("light");
  const light=root.classList.contains("light");
  localStorage.setItem("theme",light?"light":"dark");
  themeBtn.textContent=light?"☾":"☼";
});
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
