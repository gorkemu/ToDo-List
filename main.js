(()=>{"use strict";function e(){document.getElementById("add-todo-form-container").style.display=""}function t(){document.getElementById("add-todo-form").reset(),document.getElementById("add-todo-form-container").style.display="none"}let n=[];function d(){const e=document.querySelector("#title").value,t=document.querySelector("#description").value,d=document.querySelector("#duedate").value,o=document.querySelector("#priority").value,c=((e,t,n)=>({title:e,description:t,dueDate:n}))(e,t,d);n.push(c),function(e,t,n,d){const o=document.querySelector(".todo"),c=document.createElement("div");c.classList.add("new-todo"),o.appendChild(c);const l=document.createElement("div");l.textContent=e,c.appendChild(l);const u=document.createElement("div");u.textContent=t,c.appendChild(u);const i=document.createElement("div");i.textContent=n,c.appendChild(i);const r=document.createElement("div");r.textContent=d,c.appendChild(r);const a=document.createElement("button");a.textContent="Edit",a.classList.add("edit-todo-button"),c.appendChild(a);const m=document.createElement("button");m.textContent="Delete",m.classList.add("delete-todo-button"),c.appendChild(m)}(e,t,d,o)}document.querySelector(".add-todo-button").addEventListener("click",e),document.querySelector(".cancel-button").addEventListener("click",t),document.querySelector(".add-button").addEventListener("click",d),document.querySelectorAll(".delete-todo-button"),document.querySelectorAll(".edit-todo-button")})();