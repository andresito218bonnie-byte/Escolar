/* Frontend demo logic + placeholders para conectar con backend real */

document.getElementById('year').textContent = new Date().getFullYear();

// Modal controls
const modal = document.getElementById('loginModal');
const openLoginBtns = [document.getElementById('open-login'), document.getElementById('open-login-2')];
openLoginBtns.forEach(btn => btn && btn.addEventListener('click', ()=> showModal()));
document.getElementById('closeLogin').addEventListener('click', hideModal);
document.getElementById('cancelLogin').addEventListener('click', hideModal);
document.getElementById('doLogin').addEventListener('click', fakeLogin);

function showModal(){ modal.setAttribute('aria-hidden','false'); }
function hideModal(){ modal.setAttribute('aria-hidden','true'); }
function fakeLogin(){
  // Aquí conectar con /api/auth/login (POST). Esto es demo:
  const email = document.getElementById('email').value;
  alert('Demo: iniciar sesión con ' + email + '. En producción: POST /api/auth/login');
  hideModal();
}

/* TAREAS - demo front-end (placeholders) */
let tasks = [
  {id:1, title:'Tarea 1: Informe historia', due:'2025-09-30', course:'Historia', status:'Pendiente'},
  {id:2, title:'Tarea 2: Problemas álgebra', due:'2025-10-03', course:'Matemáticas', status:'Entregado'}
];

function renderTasks(){
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach(t=>{
    const el = document.createElement('div');
    el.className = 'task';
    el.innerHTML = `
      <div>
        <div style="font-weight:800">${escapeHtml(t.title)}</div>
        <div class="meta muted">${t.course} • Entrega: ${t.due} • Estado: ${t.status}</div>
      </div>
      <div class="actions">
        <label class="fake-upload" title="Subir entrega">
          📤 Subir
          <input type="file" onchange="handleUpload(event, ${t.id})">
        </label>
        <button class="tag" onclick="downloadPlaceholder(${t.id})">📥 Descargar</button>
        <button class="tag" onclick="gradePlaceholder(${t.id})">📝 Calificar</button>
      </div>
    `;
    list.appendChild(el);
  });
}

document.getElementById('createTaskBtn').addEventListener('click', simulateCreateTask);
document.getElementById('refreshTasksBtn').addEventListener('click', fetchTasks);

function fetchTasks(){
  // En producción: fetch('/api/tasks', { headers:{Authorization: 'Bearer ...'}})
  renderTasks();
  alert('Lista actualizada (demo). En producción, trae desde /api/tasks.');
}

function simulateCreateTask(){
  const id = Math.floor(Math.random()*100000);
  tasks.unshift({
    id,
    title: 'Nueva tarea (demo) #' + id,
    due: '2025-10-10',
    course: 'Lengua',
    status: 'Pendiente'
  });
  renderTasks();
}

function handleUpload(e, taskId){
  const file = e.target.files[0];
  if(!file) return;
  // En producción:
  // const fd = new FormData();
  // fd.append('file', file);
  // fetch(`/api/tasks/${taskId}/submissions`, { method:'POST', body: fd, headers:{ Authorization: 'Bearer ...' } })
  alert('Archivo seleccionado: ' + file.name + '\nEn producción aquí lo subirías al backend (S3 / storage).');
  const t = tasks.find(x=>x.id===taskId);
  if(t) t.status = 'Entregado';
  renderTasks();
}

function downloadPlaceholder(id){
  alert('Simulado: descargar archivo de la tarea ' + id + '. En producción: GET /api/tasks/:id/files (con auth).');
}
function gradePlaceholder(id){
  const grade = prompt('Asignar calificación (demo):');
  if(grade){
    alert('Calificación guardada (demo): ' + grade + '. En producción: POST /api/tasks/:id/grade');
  }
}

function escapeHtml(s){ return String(s).replace(/[&<>"]/g, (c)=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' })[c]); }

renderTasks();
