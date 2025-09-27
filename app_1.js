// Campus Digital - Advanced Educational Platform
// Enterprise-grade JavaScript with AI integration

class CampusDigital {
    constructor() {
        this.currentUser = null;
        this.currentView = 'dashboard';
        this.isAuthenticated = false;
        this.notifications = [];
        this.messages = [];
        this.aiAssistant = null;
        this.classroomSession = null;
        this.whiteboard = null;
        this.charts = {};
        
        // Initialize application data
        this.initializeData();
        
        // Start application
        this.init();
    }

    initializeData() {
        // Load data from the provided JSON
        this.institutionData = {
            "nombre": "Colegio San Martín de Porres",
            "direccion": "Av. Educación 123, Bogotá, Colombia",
            "telefono": "+57 1 234-5678",
            "email": "info@colegiosanmartin.edu.co",
            "website": "www.colegiosanmartin.edu.co",
            "logo": "https://ui-avatars.com/api/?name=CSM&background=3b82f6&color=fff&size=100",
            "tipo": "Privado",
            "niveles": ["Preescolar", "Primaria", "Secundaria", "Media"],
            "estudiantesTotal": 1250,
            "profesoresTotal": 85,
            "añoFundacion": 1985
        };

        this.userData = {
            "id": "USR001",
            "nombre": "María",
            "apellidos": "González Rodríguez",
            "email": "maria.gonzalez@colegiosanmartin.edu.co",
            "rol": "estudiante",
            "grado": "11°",
            "seccion": "A",
            "codigo": "2025001",
            "fechaNacimiento": "2007-03-15",
            "telefono": "+57 300 123-4567",
            "direccion": "Calle 45 #23-67, Bogotá",
            "acudiente": "Patricia Rodríguez",
            "avatar": "https://ui-avatars.com/api/?name=Maria+Gonzalez&background=3b82f6&color=fff&size=100",
            "biografia": "Estudiante destacada en matemáticas y ciencias. Aspira a estudiar Ingeniería Biomédica.",
            "fechaIngreso": "2020-02-01",
            "promedio": 8.7,
            "ranking": 15,
            "totalLogros": 23,
            "puntosgamificacion": 4250,
            "nivel": "Oro",
            "nivelProximo": "Platino",
            "progreso": 67
        };

        this.professors = [
            {
                "id": "PROF001",
                "nombre": "Carlos López",
                "materias": ["Matemáticas", "Estadística"],
                "experiencia": 12,
                "educacion": "Magíster en Matemáticas - Universidad Nacional",
                "especializacion": "Cálculo y Álgebra",
                "email": "carlos.lopez@colegiosanmartin.edu.co",
                "avatar": "https://ui-avatars.com/api/?name=Carlos+Lopez&background=ef4444&color=fff&size=80",
                "calificacion": 4.8
            },
            {
                "id": "PROF002",
                "nombre": "Ana García",
                "materias": ["Historia", "Geografía", "Cívica"],
                "experiencia": 15,
                "educacion": "Licenciada en Historia - Pontificia Universidad Javeriana",
                "especializacion": "Historia de Colombia",
                "email": "ana.garcia@colegiosanmartin.edu.co",
                "avatar": "https://ui-avatars.com/api/?name=Ana+Garcia&background=10b981&color=fff&size=80",
                "calificacion": 4.9
            },
            {
                "id": "PROF003",
                "nombre": "Luis Martín",
                "materias": ["Física", "Química", "Ciencias Naturales"],
                "experiencia": 10,
                "educacion": "Ingeniero Químico - Universidad de los Andes",
                "especializacion": "Energías Renovables",
                "email": "luis.martin@colegiosanmartin.edu.co",
                "avatar": "https://ui-avatars.com/api/?name=Luis+Martin&background=f59e0b&color=fff&size=80",
                "calificacion": 4.7
            }
        ];

        this.subjects = [
            {
                "id": "MAT001",
                "nombre": "Matemáticas",
                "codigo": "MAT-11A",
                "nivel": "11°",
                "profesor": "Carlos López",
                "horario": "L,M,Mi,J,V 08:00-09:30",
                "aula": "201",
                "creditos": 5,
                "descripcion": "Cálculo diferencial e integral, estadística y probabilidad",
                "color": "#3b82f6",
                "estudiantes": 28,
                "promedio": 7.8,
                "temas": [
                    {"nombre": "Límites y continuidad", "semanas": 3, "completado": 100},
                    {"nombre": "Derivadas", "semanas": 4, "completado": 75},
                    {"nombre": "Aplicaciones de derivadas", "semanas": 3, "completado": 25},
                    {"nombre": "Integrales", "semanas": 4, "completado": 0}
                ]
            },
            {
                "id": "HIS001",
                "nombre": "Historia de Colombia",
                "codigo": "HIS-11A",
                "nivel": "11°",
                "profesor": "Ana García",
                "horario": "M,J 09:45-11:15",
                "aula": "105",
                "creditos": 3,
                "descripcion": "Proceso histórico de Colombia desde la época precolombina hasta la actualidad",
                "color": "#ef4444"
            },
            {
                "id": "CIE001",
                "nombre": "Ciencias Naturales",
                "codigo": "CIE-11A",
                "nivel": "11°",
                "profesor": "Luis Martín",
                "horario": "L,Mi,V 11:30-13:00",
                "aula": "Lab-01",
                "creditos": 4,
                "descripcion": "Física, química y biología aplicada con énfasis en energías renovables",
                "color": "#10b981"
            }
        ];

        this.assignments = [
            {
                "id": "TAR001",
                "titulo": "Análisis de Funciones Cuadráticas",
                "materia": "Matemáticas",
                "profesor": "Carlos López",
                "descripcion": "Analizar 10 funciones cuadráticas, encontrar vértice, raíces y graficar",
                "fechaCreacion": "2025-09-20T10:00:00",
                "fechaVencimiento": "2025-09-27T23:59:00",
                "fechaEntrega": null,
                "estado": "pendiente",
                "prioridad": "alta",
                "puntaje": 100,
                "calificacion": null,
                "intentos": 3,
                "tiempoEstimado": "3 horas",
                "progreso": 60,
                "subtareas": [
                    {"descripcion": "Ejercicios 1-3: Hallar vértice", "completada": true},
                    {"descripcion": "Ejercicios 4-6: Encontrar raíces", "completada": true},
                    {"descripcion": "Ejercicios 7-10: Graficar funciones", "completada": false}
                ]
            },
            {
                "id": "TAR002",
                "titulo": "Ensayo: Causas de la Independencia",
                "materia": "Historia de Colombia",
                "profesor": "Ana García",
                "descripcion": "Ensayo de 1500 palabras analizando las causas políticas, económicas y sociales de la independencia de Colombia",
                "fechaCreacion": "2025-09-18T09:00:00",
                "fechaVencimiento": "2025-10-02T23:59:00",
                "estado": "en_progreso",
                "prioridad": "media",
                "puntaje": 100,
                "progreso": 45
            }
        ];

        this.analytics = {
            "tiempoEnPlataforma": {
                "diario": 145,
                "semanal": 890,
                "mensual": 3650
            },
            "rendimientoPorMateria": [
                {"materia": "Matemáticas", "promedio": 8.9, "tendencia": "subiendo"},
                {"materia": "Historia", "promedio": 8.4, "tendencia": "estable"},
                {"materia": "Ciencias", "promedio": 9.1, "tendencia": "subiendo"}
            ],
            "prediccionRendimiento": {
                "siguientePeriodo": 8.8,
                "confianza": 85,
                "factoresRiesgo": ["Carga académica alta en octubre"],
                "recomendaciones": ["Reforzar estudio en historia", "Mantener nivel en matemáticas"]
            }
        };

        this.messagesData = [
            {
                "id": "MSG001",
                "remitente": "Carlos López",
                "destinatario": "María González",
                "asunto": "Recordatorio Examen",
                "mensaje": "Recuerda que el examen de derivadas es mañana. Repasa los ejercicios que hicimos en clase.",
                "fecha": "2025-09-26T14:30:00",
                "leido": false,
                "tipo": "academico",
                "prioridad": "media",
                "avatar": "https://ui-avatars.com/api/?name=Carlos+Lopez&background=ef4444&color=fff&size=40"
            },
            {
                "id": "MSG002",
                "remitente": "Ana Morales",
                "destinatario": "María González",
                "mensaje": "¿Podemos estudiar juntas para historia? Tengo dudas sobre las causas económicas",
                "fecha": "2025-09-26T16:45:00",
                "leido": false,
                "tipo": "estudiante",
                "avatar": "https://ui-avatars.com/api/?name=Ana+Morales&background=10b981&color=fff&size=40"
            }
        ];
    }

    init() {
        this.showSplashScreen();
        this.setupEventListeners();
        this.initializeAI();
        
        // Simulate loading time
        setTimeout(() => {
            this.hideSplashScreen();
            this.showLoginScreen();
        }, 3000);
    }

    showSplashScreen() {
        document.getElementById('splash-screen').classList.remove('hidden');
    }

    hideSplashScreen() {
        document.getElementById('splash-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('splash-screen').classList.add('hidden');
        }, 500);
    }

    showLoginScreen() {
        document.getElementById('login-screen').classList.remove('hidden');
    }

    setupEventListeners() {
        // Login form
        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        // 2FA form
        document.getElementById('twofa-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handle2FA();
        });

        // Password toggle
        document.getElementById('toggle-password').addEventListener('click', () => {
            this.togglePassword();
        });

        // 2FA digit inputs
        const twofaDigits = document.querySelectorAll('.twofa-digit');
        twofaDigits.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                this.handle2FAInput(e, index);
            });
            input.addEventListener('keydown', (e) => {
                this.handle2FAKeydown(e, index);
            });
        });

        // Onboarding navigation
        document.getElementById('next-step').addEventListener('click', () => {
            this.nextOnboardingStep();
        });

        document.getElementById('prev-step').addEventListener('click', () => {
            this.prevOnboardingStep();
        });

        // Sidebar menu
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const view = e.currentTarget.dataset.view;
                if (view) {
                    this.switchView(view);
                }
            });
        });

        // Sidebar toggle
        document.getElementById('sidebar-toggle').addEventListener('click', () => {
            this.toggleSidebar();
        });

        // Mobile menu toggle
        document.getElementById('mobile-menu-toggle').addEventListener('click', () => {
            this.toggleMobileSidebar();
        });

        // User menu
        document.getElementById('user-menu').addEventListener('click', () => {
            this.toggleUserMenu();
        });

        // Quick actions
        document.getElementById('ai-assistant-btn').addEventListener('click', () => {
            this.toggleAIChat();
        });

        document.getElementById('notifications-btn').addEventListener('click', () => {
            this.toggleNotifications();
        });

        document.getElementById('theme-toggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Global search
        document.getElementById('global-search').addEventListener('input', (e) => {
            this.handleGlobalSearch(e.target.value);
        });

        // AI Chat
        document.getElementById('ai-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendAIMessage();
            }
        });

        document.getElementById('ai-send').addEventListener('click', () => {
            this.sendAIMessage();
        });

        document.getElementById('close-ai-chat').addEventListener('click', () => {
            this.toggleAIChat();
        });

        // Virtual classroom
        document.getElementById('join-random-class').addEventListener('click', () => {
            this.joinVirtualClass();
        });

        document.querySelectorAll('.join-class-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const room = e.target.dataset.room;
                this.joinSpecificClass(room);
            });
        });

        document.getElementById('leave-class').addEventListener('click', () => {
            this.leaveClass();
        });

        // Classroom controls
        document.getElementById('mute-btn').addEventListener('click', () => {
            this.toggleMute();
        });

        document.getElementById('video-btn').addEventListener('click', () => {
            this.toggleVideo();
        });

        document.getElementById('screen-share-btn').addEventListener('click', () => {
            this.toggleScreenShare();
        });

        document.getElementById('raise-hand-btn').addEventListener('click', () => {
            this.raiseHand();
        });

        document.getElementById('record-btn').addEventListener('click', () => {
            this.toggleRecording();
        });

        // Chat in classroom
        document.getElementById('chat-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendChatMessage();
            }
        });

        document.getElementById('send-message').addEventListener('click', () => {
            this.sendChatMessage();
        });

        // Whiteboard tools
        document.querySelectorAll('.tool-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectWhiteboardTool(e.target.dataset.tool);
            });
        });

        // Logout
        document.getElementById('logout-btn').addEventListener('click', () => {
            this.logout();
        });

        document.getElementById('logout-dropdown').addEventListener('click', () => {
            this.logout();
        });

        // Dashboard actions
        document.getElementById('view-all-tasks').addEventListener('click', () => {
            this.switchView('assignments');
        });

        document.getElementById('view-calendar').addEventListener('click', () => {
            this.switchView('calendar');
        });

        document.getElementById('view-all-messages').addEventListener('click', () => {
            this.switchView('messages');
        });

        // AI suggestions
        document.querySelectorAll('.suggestion-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleAISuggestion(e.target.textContent);
            });
        });

        // Classroom tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchClassroomTab(e.target.dataset.tab);
            });
        });
    }

    handleLogin() {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // Simulate login validation
        if (email && password) {
            this.showLoadingOverlay('Verificando credenciales...');
            
            setTimeout(() => {
                this.hideLoadingOverlay();
                document.getElementById('login-screen').classList.add('hidden');
                document.getElementById('twofa-screen').classList.remove('hidden');
                this.showToast('Código de verificación enviado a tu dispositivo', 'success');
            }, 1500);
        } else {
            this.showToast('Por favor completa todos los campos', 'error');
        }
    }

    handle2FA() {
        const digits = Array.from(document.querySelectorAll('.twofa-digit')).map(input => input.value);
        const code = digits.join('');
        
        if (code.length === 6) {
            this.showLoadingOverlay('Verificando código...');
            
            setTimeout(() => {
                this.hideLoadingOverlay();
                this.currentUser = this.userData;
                this.isAuthenticated = true;
                document.getElementById('twofa-screen').classList.add('hidden');
                this.startOnboarding();
            }, 1000);
        } else {
            this.showToast('Por favor ingresa el código completo', 'error');
            this.shakeElement(document.querySelector('.twofa-inputs'));
        }
    }

    togglePassword() {
        const passwordInput = document.getElementById('login-password');
        const toggleBtn = document.getElementById('toggle-password');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleBtn.textContent = '🙈';
        } else {
            passwordInput.type = 'password';
            toggleBtn.textContent = '👁️';
        }
    }

    handle2FAInput(event, index) {
        const input = event.target;
        const value = input.value;
        
        if (value && index < 5) {
            // Move to next input
            const nextInput = document.querySelectorAll('.twofa-digit')[index + 1];
            nextInput.focus();
        }
        
        // Auto-submit if all fields filled
        const allInputs = document.querySelectorAll('.twofa-digit');
        const allFilled = Array.from(allInputs).every(inp => inp.value.length === 1);
        if (allFilled) {
            setTimeout(() => this.handle2FA(), 300);
        }
    }

    handle2FAKeydown(event, index) {
        if (event.key === 'Backspace' && !event.target.value && index > 0) {
            // Move to previous input on backspace
            const prevInput = document.querySelectorAll('.twofa-digit')[index - 1];
            prevInput.focus();
        }
    }

    startOnboarding() {
        document.getElementById('onboarding-screen').classList.remove('hidden');
        this.currentOnboardingStep = 1;
        this.showOnboardingStep(1);
    }

    showOnboardingStep(step) {
        const content = document.getElementById('onboarding-content');
        const progress = document.getElementById('onboarding-progress');
        const currentStepSpan = document.getElementById('current-step');
        const prevBtn = document.getElementById('prev-step');
        const nextBtn = document.getElementById('next-step');
        
        // Update progress
        progress.style.width = `${(step / 4) * 100}%`;
        currentStepSpan.textContent = step;
        
        // Show/hide navigation buttons
        prevBtn.style.visibility = step === 1 ? 'hidden' : 'visible';
        nextBtn.textContent = step === 4 ? 'Comenzar' : 'Siguiente';
        
        // Generate step content
        const steps = {
            1: {
                title: '¡Bienvenida a Campus Digital! 🎉',
                content: `
                    <div style="text-align: center;">
                        <img src="${this.userData.avatar}" alt="Avatar" style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 20px;">
                        <h2>Hola ${this.userData.nombre}!</h2>
                        <p>Estamos emocionados de tenerte en nuestra plataforma educativa más avanzada. Aquí podrás acceder a:</p>
                        <ul style="text-align: left; max-width: 400px; margin: 0 auto;">
                            <li>🏫 Clases virtuales interactivas</li>
                            <li>📚 Biblioteca digital completa</li>
                            <li>🤖 Asistente IA personalizado</li>
                            <li>📊 Analytics de rendimiento</li>
                            <li>🏆 Sistema de gamificación</li>
                        </ul>
                    </div>
                `
            },
            2: {
                title: 'Personaliza tu experiencia 🎨',
                content: `
                    <h2>Configura tu perfil</h2>
                    <div class="form-group">
                        <label class="form-label">Foto de perfil</label>
                        <div style="display: flex; align-items: center; gap: 16px;">
                            <img src="${this.userData.avatar}" alt="Avatar" style="width: 60px; height: 60px; border-radius: 50%;">
                            <button class="btn btn--outline">Cambiar foto</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Biografía</label>
                        <textarea class="form-control" rows="3" placeholder="Cuéntanos sobre ti...">${this.userData.biografia}</textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Objetivos académicos</label>
                        <select class="form-control">
                            <option>Mejorar promedio general</option>
                            <option>Preparación universitaria</option>
                            <option>Desarrollo de habilidades específicas</option>
                        </select>
                    </div>
                `
            },
            3: {
                title: 'Conoce tu asistente IA 🤖',
                content: `
                    <div style="text-align: center;">
                        <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto; font-size: 2rem;">🤖</div>
                        <h2>Conoce a tu Asistente IA</h2>
                        <p>Tu asistente personal está aquí para ayudarte 24/7 con:</p>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 24px 0;">
                            <div style="padding: 16px; background: var(--color-bg-1); border-radius: 8px;">
                                <strong>📚 Explicaciones</strong><br>
                                <small>Conceptos complejos simplificados</small>
                            </div>
                            <div style="padding: 16px; background: var(--color-bg-2); border-radius: 8px;">
                                <strong>📝 Tareas</strong><br>
                                <small>Revisión y feedback inteligente</small>
                            </div>
                            <div style="padding: 16px; background: var(--color-bg-3); border-radius: 8px;">
                                <strong>📊 Analytics</strong><br>
                                <small>Análisis de tu rendimiento</small>
                            </div>
                            <div style="padding: 16px; background: var(--color-bg-4); border-radius: 8px;">
                                <strong>📅 Planificación</strong><br>
                                <small>Estrategias de estudio personalizadas</small>
                            </div>
                        </div>
                        <button class="btn btn--primary" onclick="campusDigital.testAI()">Probar Asistente IA</button>
                    </div>
                `
            },
            4: {
                title: '¡Todo listo para comenzar! 🚀',
                content: `
                    <div style="text-align: center;">
                        <h2>¡Configuración completada!</h2>
                        <p>Tu plataforma está lista. Aquí tienes algunos consejos para empezar:</p>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 24px 0;">
                            <div style="padding: 20px; border: 2px solid var(--color-primary); border-radius: 12px;">
                                <div style="font-size: 2rem; margin-bottom: 8px;">📊</div>
                                <strong>Dashboard</strong><br>
                                <small>Tu centro de control principal</small>
                            </div>
                            <div style="padding: 20px; border: 2px solid var(--color-success); border-radius: 12px;">
                                <div style="font-size: 2rem; margin-bottom: 8px;">📹</div>
                                <strong>Aulas Virtuales</strong><br>
                                <small>Clases interactivas en tiempo real</small>
                            </div>
                            <div style="padding: 20px; border: 2px solid var(--color-warning); border-radius: 12px;">
                                <div style="font-size: 2rem; margin-bottom: 8px;">🤖</div>
                                <strong>IA Assistant</strong><br>
                                <small>Ayuda disponible 24/7</small>
                            </div>
                        </div>
                        <div style="background: var(--color-bg-1); padding: 16px; border-radius: 8px; margin: 20px 0;">
                            <strong>💡 Tip:</strong> Presiona Alt + A en cualquier momento para abrir el asistente IA
                        </div>
                    </div>
                `
            }
        };
        
        const stepData = steps[step];
        content.innerHTML = `
            <h1>${stepData.title}</h1>
            ${stepData.content}
        `;
    }

    nextOnboardingStep() {
        if (this.currentOnboardingStep < 4) {
            this.currentOnboardingStep++;
            this.showOnboardingStep(this.currentOnboardingStep);
        } else {
            this.finishOnboarding();
        }
    }

    prevOnboardingStep() {
        if (this.currentOnboardingStep > 1) {
            this.currentOnboardingStep--;
            this.showOnboardingStep(this.currentOnboardingStep);
        }
    }

    finishOnboarding() {
        document.getElementById('onboarding-screen').classList.add('hidden');
        document.getElementById('main-app').classList.remove('hidden');
        
        this.showToast('¡Bienvenida a Campus Digital! 🎉', 'success');
        this.initializeDashboard();
        this.startRealTimeUpdates();
        
        // Show quick tutorial overlay
        setTimeout(() => {
            this.showQuickTutorial();
        }, 1000);
    }

    showQuickTutorial() {
        const tutorial = [
            { element: '#ai-assistant-btn', text: 'Accede al Asistente IA desde aquí 🤖' },
            { element: '#notifications-btn', text: 'Revisa tus notificaciones importantes 🔔' },
            { element: '#global-search', text: 'Busca cualquier cosa con nuestro buscador inteligente 🔍' },
            { element: '.menu-item[data-view="virtual-classroom"]', text: 'Únete a clases virtuales interactivas 📹' }
        ];
        
        this.showTutorialStep(tutorial, 0);
    }

    showTutorialStep(tutorial, index) {
        if (index >= tutorial.length) return;
        
        const step = tutorial[index];
        const element = document.querySelector(step.element);
        
        if (element) {
            const tooltip = this.createTooltip(step.text);
            this.positionTooltip(tooltip, element);
            
            setTimeout(() => {
                tooltip.remove();
                this.showTutorialStep(tutorial, index + 1);
            }, 3000);
        }
    }

    createTooltip(text) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tutorial-tooltip';
        tooltip.innerHTML = `
            <div style="
                position: fixed;
                background: var(--color-text);
                color: white;
                padding: 12px 16px;
                border-radius: 8px;
                font-size: 14px;
                max-width: 250px;
                z-index: 10003;
                box-shadow: var(--shadow-lg);
                animation: fadeIn 0.3s ease-out;
            ">${text}</div>
        `;
        document.body.appendChild(tooltip);
        return tooltip;
    }

    positionTooltip(tooltip, target) {
        const rect = target.getBoundingClientRect();
        const tooltipDiv = tooltip.firstElementChild;
        
        tooltipDiv.style.left = `${rect.left + rect.width / 2}px`;
        tooltipDiv.style.top = `${rect.bottom + 10}px`;
        tooltipDiv.style.transform = 'translateX(-50%)';
    }

    switchView(viewName) {
        // Hide all views
        document.querySelectorAll('.view').forEach(view => {
            view.classList.add('hidden');
        });
        
        // Show target view
        document.getElementById(`${viewName}-view`).classList.remove('hidden');
        
        // Update active menu item
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`.menu-item[data-view="${viewName}"]`).classList.add('active');
        
        // Update breadcrumb
        document.getElementById('breadcrumb').textContent = this.getViewTitle(viewName);
        
        // Load view content
        this.loadViewContent(viewName);
        this.currentView = viewName;
    }

    getViewTitle(viewName) {
        const titles = {
            'dashboard': 'Dashboard',
            'virtual-classroom': 'Aulas Virtuales',
            'assignments': 'Tareas',
            'exams': 'Exámenes',
            'grades': 'Calificaciones',
            'calendar': 'Calendario',
            'library': 'Biblioteca',
            'messages': 'Mensajes',
            'forums': 'Foros',
            'achievements': 'Logros',
            'analytics': 'Analytics IA',
            'settings': 'Configuración'
        };
        return titles[viewName] || 'Campus Digital';
    }

    loadViewContent(viewName) {
        switch (viewName) {
            case 'assignments':
                this.loadAssignmentsView();
                break;
            case 'exams':
                this.loadExamsView();
                break;
            case 'grades':
                this.loadGradesView();
                break;
            case 'calendar':
                this.loadCalendarView();
                break;
            case 'library':
                this.loadLibraryView();
                break;
            case 'messages':
                this.loadMessagesView();
                break;
            case 'forums':
                this.loadForumsView();
                break;
            case 'achievements':
                this.loadAchievementsView();
                break;
            case 'analytics':
                this.loadAnalyticsView();
                break;
            case 'settings':
                this.loadSettingsView();
                break;
        }
    }

    loadAssignmentsView() {
        const view = document.getElementById('assignments-view');
        view.innerHTML = `
            <div class="assignments-header">
                <h1>📝 Gestión de Tareas</h1>
                <div class="assignments-actions">
                    <select class="form-control" id="assignment-filter">
                        <option value="all">Todas las tareas</option>
                        <option value="pendiente">Pendientes</option>
                        <option value="en_progreso">En progreso</option>
                        <option value="completada">Completadas</option>
                    </select>
                    <select class="form-control" id="subject-filter">
                        <option value="all">Todas las materias</option>
                        ${this.subjects.map(s => `<option value="${s.id}">${s.nombre}</option>`).join('')}
                    </select>
                </div>
            </div>
            
            <div class="assignments-stats">
                <div class="stat-card">
                    <div class="stat-icon">⏰</div>
                    <div class="stat-content">
                        <h3>${this.assignments.filter(a => a.estado === 'pendiente').length}</h3>
                        <p>Tareas Pendientes</p>
                        <span class="stat-change">Vence hoy: 1</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">📝</div>
                    <div class="stat-content">
                        <h3>${this.assignments.filter(a => a.estado === 'en_progreso').length}</h3>
                        <p>En Progreso</p>
                        <span class="stat-change positive">Progreso promedio: 52%</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">✅</div>
                    <div class="stat-content">
                        <h3>12</h3>
                        <p>Completadas</p>
                        <span class="stat-change positive">Este mes</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">📊</div>
                    <div class="stat-content">
                        <h3>8.6</h3>
                        <p>Promedio Tareas</p>
                        <span class="stat-change positive">+0.4 este mes</span>
                    </div>
                </div>
            </div>
            
            <div class="assignments-grid" id="assignments-grid">
                ${this.renderAssignments()}
            </div>
        `;
        
        // Add event listeners for filters
        document.getElementById('assignment-filter').addEventListener('change', (e) => {
            this.filterAssignments(e.target.value, document.getElementById('subject-filter').value);
        });
        
        document.getElementById('subject-filter').addEventListener('change', (e) => {
            this.filterAssignments(document.getElementById('assignment-filter').value, e.target.value);
        });
    }

    renderAssignments() {
        return this.assignments.map(assignment => `
            <div class="assignment-card ${assignment.prioridad}" data-id="${assignment.id}">
                <div class="assignment-header">
                    <div class="assignment-priority ${assignment.prioridad}"></div>
                    <div class="assignment-info">
                        <h3>${assignment.titulo}</h3>
                        <p class="assignment-subject">${assignment.materia} • ${assignment.profesor}</p>
                        <p class="assignment-description">${assignment.descripcion}</p>
                    </div>
                    <div class="assignment-status">
                        <span class="status status--${assignment.estado === 'pendiente' ? 'warning' : assignment.estado === 'completada' ? 'success' : 'info'}">
                            ${assignment.estado === 'pendiente' ? 'Pendiente' : assignment.estado === 'completada' ? 'Completada' : 'En Progreso'}
                        </span>
                    </div>
                </div>
                
                <div class="assignment-progress">
                    <div class="progress-info">
                        <span>Progreso: ${assignment.progreso}%</span>
                        <span class="due-date">Vence: ${this.formatDate(assignment.fechaVencimiento)}</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${assignment.progreso}%"></div>
                    </div>
                </div>
                
                ${assignment.subtareas ? `
                    <div class="assignment-subtasks">
                        <h4>Subtareas:</h4>
                        ${assignment.subtareas.map(subtask => `
                            <div class="subtask ${subtask.completada ? 'completed' : ''}">
                                <input type="checkbox" ${subtask.completada ? 'checked' : ''} onchange="campusDigital.toggleSubtask('${assignment.id}', '${subtask.descripcion}')">
                                <span>${subtask.descripcion}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                
                <div class="assignment-actions">
                    ${assignment.estado !== 'completada' ? `
                        <button class="btn btn--primary btn--sm" onclick="campusDigital.continueAssignment('${assignment.id}')">
                            ${assignment.progreso > 0 ? 'Continuar' : 'Comenzar'}
                        </button>
                    ` : `
                        <button class="btn btn--outline btn--sm" onclick="campusDigital.reviewAssignment('${assignment.id}')">Ver Calificación</button>
                    `}
                    <button class="btn btn--outline btn--sm" onclick="campusDigital.getAIHelp('${assignment.id}')">🤖 Ayuda IA</button>
                    <button class="btn btn--outline btn--sm" onclick="campusDigital.downloadResources('${assignment.id}')">📎 Recursos</button>
                </div>
            </div>
        `).join('');
    }

    filterAssignments(statusFilter, subjectFilter) {
        let filteredAssignments = this.assignments;
        
        if (statusFilter !== 'all') {
            filteredAssignments = filteredAssignments.filter(a => a.estado === statusFilter);
        }
        
        if (subjectFilter !== 'all') {
            filteredAssignments = filteredAssignments.filter(a => {
                const subject = this.subjects.find(s => s.nombre === a.materia);
                return subject && subject.id === subjectFilter;
            });
        }
        
        document.getElementById('assignments-grid').innerHTML = filteredAssignments.map(assignment => 
            this.renderAssignmentCard(assignment)
        ).join('');
    }

    renderAssignmentCard(assignment) {
        // Similar to renderAssignments but for single assignment
        return `<div class="assignment-card">${assignment.titulo}</div>`;
    }

    continueAssignment(assignmentId) {
        const assignment = this.assignments.find(a => a.id === assignmentId);
        if (assignment) {
            this.showToast(`Continuando con: ${assignment.titulo}`, 'info');
            // Simulate opening assignment workspace
            this.openAssignmentWorkspace(assignment);
        }
    }

    openAssignmentWorkspace(assignment) {
        // Create assignment workspace modal
        const modal = document.createElement('div');
        modal.className = 'assignment-workspace-modal';
        modal.innerHTML = `
            <div class="workspace-content">
                <div class="workspace-header">
                    <h2>${assignment.titulo}</h2>
                    <button class="workspace-close" onclick="this.parentElement.parentElement.parentElement.remove()">✖️</button>
                </div>
                <div class="workspace-body">
                    <div class="workspace-sidebar">
                        <div class="assignment-details">
                            <h4>Detalles de la Tarea</h4>
                            <p><strong>Materia:</strong> ${assignment.materia}</p>
                            <p><strong>Profesor:</strong> ${assignment.profesor}</p>
                            <p><strong>Vence:</strong> ${this.formatDate(assignment.fechaVencimiento)}</p>
                            <p><strong>Puntaje:</strong> ${assignment.puntaje} pts</p>
                            <p><strong>Tiempo estimado:</strong> ${assignment.tiempoEstimado}</p>
                        </div>
                        <div class="ai-suggestions">
                            <h4>🤖 Sugerencias IA</h4>
                            <div class="suggestion-item">
                                <p>💡 Te recomiendo empezar por los ejercicios más simples</p>
                            </div>
                            <div class="suggestion-item">
                                <p>📚 Revisa el capítulo 5 del libro de texto</p>
                            </div>
                        </div>
                    </div>
                    <div class="workspace-main">
                        <div class="editor-toolbar">
                            <button class="tool-btn">📄</button>
                            <button class="tool-btn">🖼️</button>
                            <button class="tool-btn">📊</button>
                            <button class="tool-btn">🧮</button>
                            <button class="tool-btn">💾</button>
                        </div>
                        <textarea class="assignment-editor" placeholder="Comienza a trabajar en tu tarea aquí..."></textarea>
                        <div class="workspace-actions">
                            <button class="btn btn--outline">💾 Guardar Borrador</button>
                            <button class="btn btn--primary">📤 Enviar Tarea</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;
        
        modal.querySelector('.workspace-content').style.cssText = `
            background: var(--color-surface);
            width: 90%;
            height: 80%;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        `;
        
        document.body.appendChild(modal);
    }

    toggleSubtask(assignmentId, subtaskDescription) {
        const assignment = this.assignments.find(a => a.id === assignmentId);
        if (assignment && assignment.subtareas) {
            const subtask = assignment.subtareas.find(s => s.descripcion === subtaskDescription);
            if (subtask) {
                subtask.completada = !subtask.completada;
                
                // Update progress
                const completedCount = assignment.subtareas.filter(s => s.completada).length;
                assignment.progreso = Math.round((completedCount / assignment.subtareas.length) * 100);
                
                // Refresh view
                this.loadAssignmentsView();
                
                this.showToast(
                    subtask.completada ? 'Subtarea completada ✅' : 'Subtarea marcada como pendiente',
                    subtask.completada ? 'success' : 'info'
                );
            }
        }
    }

    getAIHelp(assignmentId) {
        const assignment = this.assignments.find(a => a.id === assignmentId);
        if (assignment) {
            this.toggleAIChat();
            setTimeout(() => {
                this.addAIMessage(`¡Hola! Veo que necesitas ayuda con "${assignment.titulo}". Esta tarea de ${assignment.materia} requiere análisis de funciones cuadráticas. Te puedo ayudar con:

📐 Explicación paso a paso de cómo encontrar el vértice
📊 Métodos para hallar las raíces
📈 Técnicas de graficación
💡 Ejemplos similares resueltos

¿Con cuál tema específico te gustaría que empecemos?`);
            }, 500);
        }
    }

    initializeDashboard() {
        this.createPerformanceChart();
        this.updateDashboardStats();
        this.loadRecentActivity();
    }

    createPerformanceChart() {
        const ctx = document.getElementById('performance-chart').getContext('2d');
        
        this.charts.performance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'],
                datasets: [{
                    label: 'Matemáticas',
                    data: [7.5, 8.0, 8.2, 8.5, 8.8, 9.0, 8.9],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'Historia',
                    data: [8.0, 7.8, 8.2, 8.1, 8.3, 8.5, 8.4],
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'Ciencias',
                    data: [8.5, 8.7, 8.9, 9.0, 9.2, 9.1, 9.1],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 20
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 7,
                        max: 10,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                },
                elements: {
                    point: {
                        radius: 4,
                        hoverRadius: 8
                    }
                }
            }
        });
    }

    updateDashboardStats() {
        // Update stats with real-time data
        const stats = document.querySelectorAll('.stat-card');
        stats.forEach(stat => {
            const icon = stat.querySelector('.stat-icon');
            if (icon) {
                // Add subtle animation to stat cards
                setTimeout(() => {
                    stat.style.transform = 'translateY(-2px)';
                    setTimeout(() => {
                        stat.style.transform = 'translateY(0)';
                    }, 200);
                }, Math.random() * 1000);
            }
        });
    }

    loadRecentActivity() {
        // Simulate recent activity updates
        const activities = [
            "Nueva tarea disponible en Matemáticas",
            "Calificación publicada para Historia",
            "Recordatorio: Examen mañana",
            "Nuevo material en Biblioteca"
        ];
        
        activities.forEach((activity, index) => {
            setTimeout(() => {
                this.addNotification(activity, 'info');
            }, (index + 1) * 2000);
        });
    }

    joinVirtualClass() {
        this.showLoadingOverlay('Conectando al aula virtual...');
        
        setTimeout(() => {
            this.hideLoadingOverlay();
            this.enterVirtualClassroom();
        }, 2000);
    }

    joinSpecificClass(room) {
        this.showLoadingOverlay(`Uniéndose a ${room}...`);
        
        setTimeout(() => {
            this.hideLoadingOverlay();
            this.enterVirtualClassroom(room);
        }, 1500);
    }

    enterVirtualClassroom(room = 'math-derivatives') {
        document.getElementById('classroom-interface').classList.remove('hidden');
        this.classroomSession = {
            room: room,
            startTime: Date.now(),
            isActive: true
        };
        this.initializeWhiteboard();
        this.startClassTimer();
        this.simulateClassroomActivity();
        
        this.showToast('Te has unido al aula virtual exitosamente', 'success');
    }

    initializeWhiteboard() {
        const canvas = document.getElementById('whiteboard');
        const ctx = canvas.getContext('2d');
        
        this.whiteboard = {
            canvas: canvas,
            ctx: ctx,
            isDrawing: false,
            currentTool: 'pen',
            currentColor: '#000000'
        };
        
        // Set canvas size
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        // Add drawing event listeners
        canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
        canvas.addEventListener('mousemove', (e) => this.draw(e));
        canvas.addEventListener('mouseup', () => this.stopDrawing());
        canvas.addEventListener('mouseout', () => this.stopDrawing());
        
        // Touch events for mobile
        canvas.addEventListener('touchstart', (e) => this.startDrawing(e));
        canvas.addEventListener('touchmove', (e) => this.draw(e));
        canvas.addEventListener('touchend', () => this.stopDrawing());
    }

    startDrawing(e) {
        this.whiteboard.isDrawing = true;
        const rect = this.whiteboard.canvas.getBoundingClientRect();
        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        const y = (e.clientY || e.touches[0].clientY) - rect.top;
        
        this.whiteboard.ctx.beginPath();
        this.whiteboard.ctx.moveTo(x, y);
    }

    draw(e) {
        if (!this.whiteboard.isDrawing) return;
        
        const rect = this.whiteboard.canvas.getBoundingClientRect();
        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        const y = (e.clientY || e.touches[0].clientY) - rect.top;
        
        this.whiteboard.ctx.lineWidth = 2;
        this.whiteboard.ctx.lineCap = 'round';
        this.whiteboard.ctx.strokeStyle = this.whiteboard.currentColor;
        
        if (this.whiteboard.currentTool === 'eraser') {
            this.whiteboard.ctx.globalCompositeOperation = 'destination-out';
            this.whiteboard.ctx.lineWidth = 20;
        } else {
            this.whiteboard.ctx.globalCompositeOperation = 'source-over';
        }
        
        this.whiteboard.ctx.lineTo(x, y);
        this.whiteboard.ctx.stroke();
        this.whiteboard.ctx.beginPath();
        this.whiteboard.ctx.moveTo(x, y);
    }

    stopDrawing() {
        this.whiteboard.isDrawing = false;
        this.whiteboard.ctx.beginPath();
    }

    selectWhiteboardTool(tool) {
        this.whiteboard.currentTool = tool;
        
        // Update active tool button
        document.querySelectorAll('.tool-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tool="${tool}"]`).classList.add('active');
        
        // Update cursor
        const cursor = tool === 'pen' ? 'crosshair' : tool === 'eraser' ? 'grab' : 'default';
        this.whiteboard.canvas.style.cursor = cursor;
    }

    startClassTimer() {
        let seconds = 15 * 60 + 32; // 15:32
        const timerElement = document.getElementById('class-timer');
        
        this.classTimer = setInterval(() => {
            seconds++;
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }, 1000);
    }

    simulateClassroomActivity() {
        // Simulate periodic chat messages
        const messages = [
            { user: 'Ana M', message: '¿Podría explicar otra vez el ejemplo 3?' },
            { user: 'Carlos S', message: 'Entendido profesor, gracias!' },
            { user: 'Prof. López', message: 'Ahora vamos a resolver el ejercicio 5' },
            { user: 'María L', message: 'Una pregunta sobre la fórmula...' }
        ];
        
        let messageIndex = 0;
        this.chatInterval = setInterval(() => {
            if (messageIndex < messages.length) {
                this.addChatMessage(messages[messageIndex].user, messages[messageIndex].message);
                messageIndex++;
            }
        }, 10000);
    }

    addChatMessage(user, message) {
        const chatMessages = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message';
        messageDiv.innerHTML = `<strong>${user}:</strong> ${message}`;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    sendChatMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        
        if (message) {
            this.addChatMessage('Tú', message);
            input.value = '';
            
            // Simulate teacher response
            setTimeout(() => {
                const responses = [
                    'Excelente pregunta, María',
                    'Te responderé después de terminar este ejemplo',
                    'Puedes usar la función de levantar la mano',
                    'Lo revisaremos en la siguiente diapositiva'
                ];
                const response = responses[Math.floor(Math.random() * responses.length)];
                this.addChatMessage('Prof. López', response);
            }, 2000);
        }
    }

    toggleMute() {
        const btn = document.getElementById('mute-btn');
        const isMuted = btn.classList.toggle('muted');
        
        btn.innerHTML = isMuted ? '🔇' : '🎤';
        btn.style.background = isMuted ? '#ef4444' : '';
        
        this.showToast(isMuted ? 'Micrófono silenciado' : 'Micrófono activado', 'info');
    }

    toggleVideo() {
        const btn = document.getElementById('video-btn');
        const isOff = btn.classList.toggle('video-off');
        
        btn.innerHTML = isOff ? '📹❌' : '📹';
        btn.style.background = isOff ? '#ef4444' : '';
        
        this.showToast(isOff ? 'Cámara apagada' : 'Cámara activada', 'info');
    }

    toggleScreenShare() {
        const btn = document.getElementById('screen-share-btn');
        const isSharing = btn.classList.toggle('sharing');
        
        btn.style.background = isSharing ? '#10b981' : '';
        
        this.showToast(isSharing ? 'Compartiendo pantalla' : 'Detuvo compartir pantalla', 'info');
    }

    raiseHand() {
        const btn = document.getElementById('raise-hand-btn');
        const isRaised = btn.classList.toggle('hand-raised');
        
        btn.style.background = isRaised ? '#f59e0b' : '';
        
        this.showToast(isRaised ? 'Mano levantada ✋' : 'Mano bajada', 'info');
        
        if (isRaised) {
            setTimeout(() => {
                this.addChatMessage('Sistema', 'María González ha levantado la mano');
            }, 500);
        }
    }

    toggleRecording() {
        const btn = document.getElementById('record-btn');
        const isRecording = btn.classList.toggle('recording');
        
        btn.innerHTML = isRecording ? '⏹️' : '🔴';
        btn.style.background = isRecording ? '#ef4444' : '';
        
        this.showToast(isRecording ? 'Grabación iniciada' : 'Grabación detenida', 'info');
    }

    leaveClass() {
        if (confirm('¿Estás segura de que quieres salir de la clase?')) {
            // Clear intervals
            if (this.classTimer) {
                clearInterval(this.classTimer);
                this.classTimer = null;
            }
            if (this.chatInterval) {
                clearInterval(this.chatInterval);
                this.chatInterval = null;
            }
            
            // Reset classroom session
            this.classroomSession = null;
            
            // Hide classroom interface
            document.getElementById('classroom-interface').classList.add('hidden');
            
            // Show virtual classroom view or dashboard
            if (this.currentView === 'virtual-classroom') {
                document.getElementById('virtual-classroom-view').classList.remove('hidden');
            } else {
                this.switchView('virtual-classroom');
            }
            
            this.showToast('Has salido del aula virtual', 'info');
        }
    }

    switchClassroomTab(tab) {
        // Update active tab
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
        
        // Show corresponding content
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });
        document.getElementById(tab).classList.add('active');
    }

    initializeAI() {
        this.aiAssistant = {
            context: [],
            personality: 'friendly_teacher',
            knowledge: {
                subjects: this.subjects,
                user: this.userData,
                assignments: this.assignments
            }
        };
    }

    toggleAIChat() {
        const aiChat = document.getElementById('ai-chat');
        aiChat.classList.toggle('hidden');
        
        if (!aiChat.classList.contains('hidden')) {
            document.getElementById('ai-input').focus();
        }
    }

    sendAIMessage() {
        const input = document.getElementById('ai-input');
        const message = input.value.trim();
        
        if (message) {
            this.addUserMessage(message);
            input.value = '';
            
            // Generate AI response
            setTimeout(() => {
                const response = this.generateAIResponse(message);
                this.addAIMessage(response);
            }, 1000);
        }
    }

    addUserMessage(message) {
        const chatMessages = document.getElementById('ai-chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'user-message';
        messageDiv.innerHTML = `
            <div style="display: flex; justify-content: flex-end; gap: 8px; margin: 12px 0;">
                <div style="background: var(--color-primary); color: white; padding: 12px; border-radius: 12px 12px 4px 12px; max-width: 80%; font-size: 14px;">
                    ${message}
                </div>
                <img src="${this.userData.avatar}" alt="Tú" style="width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;">
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    addAIMessage(message) {
        const chatMessages = document.getElementById('ai-chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'ai-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">🤖</div>
            <div class="message-content">${message}</div>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    generateAIResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Context-aware responses based on current view and user data
        if (message.includes('derivada') || message.includes('matematicas')) {
            return `¡Excelente pregunta sobre derivadas! 📐 

Veo que tienes una tarea pendiente sobre análisis de funciones cuadráticas. Las derivadas son fundamentales para:

🎯 **Encontrar el vértice**: f'(x) = 0 te da el punto crítico
📊 **Analizar crecimiento**: f'(x) > 0 → creciente, f'(x) < 0 → decreciente  
📈 **Optimización**: Máximos y mínimos locales

¿Te gustaría que revisemos paso a paso algún ejercicio específico de tu tarea?`;
        }
        
        if (message.includes('progreso') || message.includes('calificacion')) {
            return `📊 **Tu rendimiento académico actual:**

🏆 **Promedio general**: 8.7 (¡Excelente!)
📈 **Tendencia**: Subiendo en Matemáticas y Ciencias
⚠️ **Área de oportunidad**: Historia (8.4)

**🤖 Análisis IA:**
- Tu fuerte son las ciencias exactas
- Recomiendo más práctica en análisis histórico
- Mantén el ritmo en Matemáticas

**📅 Predicción**: Con tu dedicación actual, podrías alcanzar 8.8 el próximo período.

¿Quieres un plan personalizado para mejorar en Historia?`;
        }
        
        if (message.includes('plan') || message.includes('estudio')) {
            return `📚 **Plan de Estudio Personalizado IA** 

Basado en tu perfil y rendimiento, te recomiendo:

**🗓️ Rutina Diaria Optimizada:**
• 07:00-08:00: Repaso matemáticas (tu horario pico)
• 15:00-16:00: Lectura historia (mejor retención)
• 19:00-20:00: Práctica ciencias

**📊 Prioridades esta semana:**
1. **Alta**: Terminar análisis funciones (vence hoy)
2. **Media**: Avanzar ensayo historia
3. **Baja**: Preparar proyecto ciencias

**🎯 Técnicas recomendadas:**
- Pomodoro (25min trabajo + 5min descanso)
- Mapas mentales para historia
- Práctica activa en matemáticas

¿Quieres que adapte el plan según tu horario específico?`;
        }
        
        if (message.includes('ayuda') || message.includes('explicar')) {
            return `¡Por supuesto! Estoy aquí para ayudarte 24/7 💪

**🎓 Puedo ayudarte con:**
• Explicaciones paso a paso
• Resolución de ejercicios
• Estrategias de estudio
• Análisis de tu rendimiento
• Planificación académica
• Preparación para exámenes

**💡 Modos de explicación disponibles:**
- Básico (conceptos simples)
- Intermedio (aplicaciones)  
- Avanzado (análisis profundo)
- Visual (con diagramas)

Solo dime el tema específico y cómo te gustaría que te lo explique. ¡Soy tu tutor personal inteligente!

¿En qué materia necesitas ayuda ahora?`;
        }
        
        // Default intelligent response
        return `Entiendo tu pregunta sobre "${userMessage}". 🤔

Como tu asistente educativo, estoy analizando tu contexto:
- Estudiante de 11° grado
- Fortaleza en ciencias exactas
- Actualmente con ${this.assignments.filter(a => a.estado === 'pendiente').length} tareas pendientes

**¿Te ayudo con algo específico?**
• 📚 Explicar conceptos difíciles
• 📝 Revisar tareas pendientes  
• 📊 Analizar tu rendimiento
• 📅 Planificar estudios
• 🎯 Estrategias de examen

Solo pregúntame y profundizaré en lo que necesites. ¡Estoy aquí para potenciar tu aprendizaje! 🚀`;
    }

    handleAISuggestion(suggestion) {
        document.getElementById('ai-input').value = suggestion;
        this.sendAIMessage();
    }

    testAI() {
        this.toggleAIChat();
        setTimeout(() => {
            this.addAIMessage(`¡Hola ${this.userData.nombre}! 🤖✨ 

Soy tu asistente IA personalizado. He analizado tu perfil y veo que:

📊 **Tu perfil académico:**
- Excelente en Matemáticas (8.9 promedio)
- Ranking #15 en tu clase
- Nivel Oro con 4,250 puntos

🎯 **Puedo ayudarte con:**
• Explicar conceptos complejos de forma simple
• Crear planes de estudio personalizados  
• Analizar tu rendimiento y predecir resultados
• Generar práctica adicional en tus áreas débiles

¡Pregúntame cualquier cosa sobre tus materias o simplemente di "ayuda" para ver todas mis funciones!`);
        }, 500);
    }

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('collapsed');
    }

    toggleMobileSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open');
    }

    toggleUserMenu() {
        const dropdown = document.getElementById('user-menu-dropdown');
        dropdown.classList.toggle('hidden');
    }

    toggleNotifications() {
        const panel = document.getElementById('notifications-panel');
        
        if (panel.classList.contains('hidden')) {
            this.loadNotifications();
        }
        
        panel.classList.toggle('hidden');
    }

    loadNotifications() {
        const content = document.querySelector('.notifications-content');
        
        const notifications = [
            {
                icon: '📝',
                title: 'Nueva tarea disponible',
                message: 'Prof. Carlos López ha asignado "Análisis de Integrales"',
                time: 'Hace 2 horas',
                type: 'assignment'
            },
            {
                icon: '📊',
                title: 'Calificación publicada',
                message: 'Tu ensayo de Historia recibió 8.5/10',
                time: 'Hace 4 horas',
                type: 'grade'
            },
            {
                icon: '🔔',
                title: 'Recordatorio de examen',
                message: 'Examen de Matemáticas mañana a las 8:00 AM',
                time: 'Hace 6 horas',
                type: 'reminder'
            },
            {
                icon: '🏆',
                title: 'Nuevo logro desbloqueado',
                message: '¡Has obtenido "Estudiante Constante"!',
                time: 'Ayer',
                type: 'achievement'
            }
        ];
        
        content.innerHTML = notifications.map(notif => `
            <div class="notification-item ${notif.type}">
                <div class="notification-icon">${notif.icon}</div>
                <div class="notification-content">
                    <h4>${notif.title}</h4>
                    <p>${notif.message}</p>
                    <span class="notification-time">${notif.time}</span>
                </div>
            </div>
        `).join('');
    }

    addNotification(message, type = 'info') {
        this.notifications.push({
            id: Date.now(),
            message,
            type,
            timestamp: new Date()
        });
        
        // Update notification badge
        const badge = document.querySelector('.notification-dot');
        if (badge) {
            badge.style.display = 'block';
        }
    }

    toggleTheme() {
        const body = document.body;
        const isDark = body.dataset.colorScheme === 'dark';
        
        body.dataset.colorScheme = isDark ? 'light' : 'dark';
        
        const themeBtn = document.getElementById('theme-toggle');
        themeBtn.textContent = isDark ? '🌞' : '🌙';
        
        this.showToast(`Tema ${isDark ? 'claro' : 'oscuro'} activado`, 'info');
    }

    handleGlobalSearch(query) {
        if (query.length < 2) return;
        
        // Simulate intelligent search
        const searchResults = this.performIntelligentSearch(query);
        this.showSearchResults(searchResults);
    }

    performIntelligentSearch(query) {
        const results = [];
        const q = query.toLowerCase();
        
        // Search in subjects
        this.subjects.forEach(subject => {
            if (subject.nombre.toLowerCase().includes(q) || 
                subject.descripcion.toLowerCase().includes(q)) {
                results.push({
                    type: 'subject',
                    title: subject.nombre,
                    description: subject.descripcion,
                    action: () => this.openSubject(subject.id)
                });
            }
        });
        
        // Search in assignments
        this.assignments.forEach(assignment => {
            if (assignment.titulo.toLowerCase().includes(q) ||
                assignment.descripcion.toLowerCase().includes(q)) {
                results.push({
                    type: 'assignment',
                    title: assignment.titulo,
                    description: `${assignment.materia} - ${assignment.estado}`,
                    action: () => this.openAssignment(assignment.id)
                });
            }
        });
        
        // Search in professors
        this.professors.forEach(prof => {
            if (prof.nombre.toLowerCase().includes(q) ||
                prof.materias.some(m => m.toLowerCase().includes(q))) {
                results.push({
                    type: 'professor',
                    title: prof.nombre,
                    description: prof.materias.join(', '),
                    action: () => this.openProfessorProfile(prof.id)
                });
            }
        });
        
        return results.slice(0, 8); // Limit results
    }

    showSearchResults(results) {
        let dropdown = document.querySelector('.search-results-dropdown');
        
        if (!dropdown) {
            dropdown = document.createElement('div');
            dropdown.className = 'search-results-dropdown';
            dropdown.style.cssText = `
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: var(--color-surface);
                border: 1px solid var(--color-border);
                border-radius: 8px;
                box-shadow: var(--shadow-lg);
                max-height: 400px;
                overflow-y: auto;
                z-index: 1000;
                margin-top: 4px;
            `;
            document.querySelector('.search-container').appendChild(dropdown);
        }
        
        if (results.length === 0) {
            dropdown.innerHTML = `
                <div style="padding: 16px; text-align: center; color: var(--color-text-secondary);">
                    No se encontraron resultados
                </div>
            `;
        } else {
            dropdown.innerHTML = results.map(result => `
                <div class="search-result-item" style="padding: 12px 16px; border-bottom: 1px solid var(--color-border); cursor: pointer; transition: background 0.2s;" 
                     onmouseover="this.style.background='var(--color-secondary)'" 
                     onmouseout="this.style.background='transparent'"
                     onclick="campusDigital.executeSearchAction('${result.type}', '${result.title}')">
                    <div style="font-weight: 500; margin-bottom: 4px;">${result.title}</div>
                    <div style="font-size: 12px; color: var(--color-text-secondary);">${result.description}</div>
                </div>
            `).join('');
        }
        
        dropdown.style.display = 'block';
        
        // Hide dropdown when clicking outside
        setTimeout(() => {
            document.addEventListener('click', function hideDropdown(e) {
                if (!dropdown.contains(e.target) && !document.querySelector('.search-input').contains(e.target)) {
                    dropdown.style.display = 'none';
                    document.removeEventListener('click', hideDropdown);
                }
            });
        }, 0);
    }

    startRealTimeUpdates() {
        // Simulate real-time notifications
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every 30 seconds
                const notifications = [
                    'Nuevo mensaje de Prof. García',
                    'Actualización en el foro de Matemáticas',
                    'Recordatorio: Tarea vence en 2 horas',
                    'Compañero solicita ayuda de estudio'
                ];
                
                const randomNotif = notifications[Math.floor(Math.random() * notifications.length)];
                this.addNotification(randomNotif, 'info');
            }
        }, 30000);
        
        // Update online status
        setInterval(() => {
            this.updateServerStatus();
        }, 60000);
    }

    updateServerStatus() {
        const statusEl = document.querySelector('.server-status span');
        const uptime = (99.97 + Math.random() * 0.02).toFixed(2);
        statusEl.textContent = `Conectado - ${uptime}% uptime`;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleDateString('es-ES', options);
    }

    showLoadingOverlay(text = 'Cargando...') {
        const overlay = document.getElementById('loading-overlay');
        document.getElementById('loading-text').textContent = text;
        overlay.classList.remove('hidden');
    }

    hideLoadingOverlay() {
        document.getElementById('loading-overlay').classList.add('hidden');
    }

    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        toast.innerHTML = `
            ${message}
            <button class="toast-close" onclick="this.parentElement.remove()">✖️</button>
        `;
        
        container.appendChild(toast);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (toast.parentElement) {
                toast.remove();
            }
        }, 5000);
    }

    shakeElement(element) {
        element.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            element.style.animation = '';
        }, 500);
    }

    logout() {
        if (confirm('¿Estás segura de que quieres cerrar sesión?')) {
            this.showLoadingOverlay('Cerrando sesión...');
            
            setTimeout(() => {
                // Reset application state
                this.currentUser = null;
                this.isAuthenticated = false;
                
                // Clear intervals
                if (this.classTimer) clearInterval(this.classTimer);
                if (this.chatInterval) clearInterval(this.chatInterval);
                
                // Reset UI
                document.getElementById('main-app').classList.add('hidden');
                document.getElementById('login-screen').classList.remove('hidden');
                
                this.hideLoadingOverlay();
                this.showToast('Sesión cerrada exitosamente', 'success');
            }, 1000);
        }
    }

    // Additional utility methods for complete functionality
    loadAnalyticsView() {
        const view = document.getElementById('analytics-view');
        view.innerHTML = `
            <div class="analytics-dashboard">
                <h1>📊 Analytics e Inteligencia Artificial</h1>
                
                <div class="analytics-overview">
                    <div class="analytics-card">
                        <h3>🎯 Predicción de Rendimiento</h3>
                        <div class="prediction-result">
                            <div class="prediction-score">8.8</div>
                            <div class="prediction-confidence">85% confianza</div>
                            <p>Proyección para el próximo período académico</p>
                        </div>
                    </div>
                    
                    <div class="analytics-card">
                        <h3>📈 Tendencias de Aprendizaje</h3>
                        <canvas id="learning-trends-chart" style="position: relative; height: 200px;"></canvas>
                    </div>
                    
                    <div class="analytics-card">
                        <h3>🧠 Patrones de Estudio</h3>
                        <div class="study-patterns">
                            <div class="pattern-item">
                                <span class="pattern-icon">⏰</span>
                                <span>Mejor rendimiento: 7-9 AM</span>
                            </div>
                            <div class="pattern-item">
                                <span class="pattern-icon">📚</span>
                                <span>Materia favorita: Matemáticas</span>
                            </div>
                            <div class="pattern-item">
                                <span class="pattern-icon">🎯</span>
                                <span>Estilo: Aprendizaje visual</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="ai-recommendations-detailed">
                    <h3>🤖 Recomendaciones Personalizadas IA</h3>
                    <div class="recommendation-cards">
                        ${this.renderDetailedRecommendations()}
                    </div>
                </div>
            </div>
        `;
        
        this.createLearningTrendsChart();
    }

    renderDetailedRecommendations() {
        const recommendations = [
            {
                type: 'study_schedule',
                title: 'Optimizar Horario de Estudio',
                description: 'Basado en tu rendimiento, te recomiendo estudiar matemáticas entre 7-9 AM cuando tu concentración es máxima.',
                priority: 'high',
                impact: '+12% rendimiento estimado'
            },
            {
                type: 'subject_focus',
                title: 'Reforzar Historia',
                description: 'Tu promedio en historia (8.4) está por debajo de tu potencial. Dedica 30min extra diarios.',
                priority: 'medium',
                impact: '+0.6 puntos en promedio'
            },
            {
                type: 'learning_method',
                title: 'Técnica de Mapas Mentales',
                description: 'Tu perfil visual se beneficiaría de usar mapas mentales para conceptos complejos.',
                priority: 'low',
                impact: '+15% retención'
            }
        ];
        
        return recommendations.map(rec => `
            <div class="recommendation-card ${rec.priority}">
                <div class="rec-header">
                    <h4>${rec.title}</h4>
                    <span class="priority-badge ${rec.priority}">${rec.priority === 'high' ? 'Alta' : rec.priority === 'medium' ? 'Media' : 'Baja'}</span>
                </div>
                <p>${rec.description}</p>
                <div class="rec-impact">
                    <strong>Impacto estimado:</strong> ${rec.impact}
                </div>
                <button class="btn btn--primary btn--sm" onclick="campusDigital.implementRecommendation('${rec.type}')">
                    Implementar
                </button>
            </div>
        `).join('');
    }

    createLearningTrendsChart() {
        const ctx = document.getElementById('learning-trends-chart').getContext('2d');
        
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Comprensión', 'Memoria', 'Aplicación', 'Análisis', 'Síntesis', 'Evaluación'],
                datasets: [{
                    label: 'Tu Perfil',
                    data: [85, 78, 92, 88, 75, 82],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    pointBackgroundColor: '#3b82f6'
                }, {
                    label: 'Promedio Clase',
                    data: [75, 80, 78, 72, 70, 76],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    pointBackgroundColor: '#10b981'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    // Stub methods for missing functionality
    loadExamsView() {
        const view = document.getElementById('exams-view');
        view.innerHTML = `
            <h1>📋 Sistema de Exámenes</h1>
            <p>Vista de exámenes en desarrollo...</p>
        `;
    }

    loadGradesView() {
        const view = document.getElementById('grades-view');
        view.innerHTML = `
            <h1>📈 Calificaciones y Reportes</h1>
            <p>Vista de calificaciones en desarrollo...</p>
        `;
    }

    loadCalendarView() {
        const view = document.getElementById('calendar-view');
        view.innerHTML = `
            <h1>📅 Calendario Académico Inteligente</h1>
            <p>Vista de calendario en desarrollo...</p>
        `;
    }

    loadLibraryView() {
        const view = document.getElementById('library-view');
        view.innerHTML = `
            <h1>📚 Biblioteca Digital</h1>
            <p>Vista de biblioteca en desarrollo...</p>
        `;
    }

    loadMessagesView() {
        const view = document.getElementById('messages-view');
        view.innerHTML = `
            <h1>💬 Centro de Comunicaciones</h1>
            <p>Vista de mensajes en desarrollo...</p>
        `;
    }

    loadForumsView() {
        const view = document.getElementById('forums-view');
        view.innerHTML = `
            <h1>🗣️ Foros de Discusión</h1>
            <p>Vista de foros en desarrollo...</p>
        `;
    }

    loadAchievementsView() {
        const view = document.getElementById('achievements-view');
        view.innerHTML = `
            <h1>🏆 Sistema de Logros</h1>
            <p>Vista de logros en desarrollo...</p>
        `;
    }

    loadSettingsView() {
        const view = document.getElementById('settings-view');
        view.innerHTML = `
            <h1>⚙️ Configuración Avanzada</h1>
            <p>Vista de configuración en desarrollo...</p>
        `;
    }

    // Close any open dropdowns when clicking outside
    handleOutsideClick(event) {
        const userMenu = document.getElementById('user-menu-dropdown');
        const notifications = document.getElementById('notifications-panel');
        
        if (userMenu && !userMenu.contains(event.target) && !document.getElementById('user-menu').contains(event.target)) {
            userMenu.classList.add('hidden');
        }
        
        if (notifications && !notifications.contains(event.target) && !document.getElementById('notifications-btn').contains(event.target)) {
            notifications.classList.add('hidden');
        }
    }
}

// Global keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === 'a') {
        e.preventDefault();
        if (window.campusDigital) {
            window.campusDigital.toggleAIChat();
        }
    }
    
    if (e.key === 'Escape') {
        // Close any open modals or panels
        document.querySelectorAll('.hidden').forEach(el => {
            if (el.classList.contains('ai-chat', 'notifications-panel')) {
                el.classList.add('hidden');
            }
        });
    }
});

// Click outside handler
document.addEventListener('click', (event) => {
    if (window.campusDigital) {
        window.campusDigital.handleOutsideClick(event);
    }
});

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.campusDigital = new CampusDigital();
});

// Service Worker registration for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export for testing and external access
window.CampusDigital = CampusDigital;