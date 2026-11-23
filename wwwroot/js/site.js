// Centre Laser Les Oliviers Luxury Aesthetic Clinic - Interactive Core & Diagnostic Engine

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Scroll Listener
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            nav?.classList.add('nav-scrolled');
        } else {
            nav?.classList.remove('nav-scrolled');
        }
    });

    // 2. Mobile Menu Handler
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 3. Initialize Before / After Comparison Sliders
    initBeforeAfterSliders();

    // 4. Initialize Interactive Skin Diagnostic Engine
    initDiagnosticEngine();

    // 5. Reservation Form Client-Side Submission (Both form IDs)
    const handleBookingSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.innerText : '';

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerText = 'Confirmation en cours...';
        }

        const formData = new FormData(form);
        const fullName = formData.get('FullName') || 'Cher(e) patient(e)';
        const treatmentName = formData.get('TreatmentName') || 'Consultation Dermatologique';

        setTimeout(() => {
            showToast(`Merci ${fullName}. Votre demande de rendez-vous pour « ${treatmentName} » a été enregistrée avec succès ! Notre conciergerie vous recontactera très rapidement.`, 'success');
            closeReservationModal();
            form.reset();

            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerText = originalText;
            }
        }, 500);
    };

    const reservationForm = document.getElementById('reservationForm');
    reservationForm?.addEventListener('submit', handleBookingSubmit);

    const publicBookingForm = document.getElementById('publicBookingForm');
    publicBookingForm?.addEventListener('submit', handleBookingSubmit);

    // 6. Contact Inquiry Form -> Envoi direct vers WhatsApp (+216 21 040 266)
    const contactForm = document.getElementById('contactInquiryForm');
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();

        const fullName = document.getElementById('contactFullName')?.value.trim() || 'Patient';
        const phone = document.getElementById('contactPhone')?.value.trim() || 'Non spécifié';
        const email = document.getElementById('contactEmail')?.value.trim() || 'Non spécifié';
        const treatment = document.getElementById('contactTreatment')?.value || 'Consultation Laser';
        const message = document.getElementById('contactMessage')?.value.trim() || 'Demande de renseignements.';

        // Format clean WhatsApp message for Centre Laser Les Oliviers Concierge
        const whatsappText = `✨ *Nouvelle Demande de Contact - Centre Laser Les Oliviers*\n\n` +
            `👤 *Nom & Prénom :* ${fullName}\n` +
            `📞 *Téléphone :* ${phone}\n` +
            `✉️ *Email :* ${email}\n` +
            `🔬 *Soin Laser / Sujet :* ${treatment}\n` +
            `💬 *Message :* ${message}\n\n` +
            `_Envoyé depuis le formulaire contact Centre Laser Les Oliviers_`;

        const encodedText = encodeURIComponent(whatsappText);
        const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        // Deep link: on mobile opens native WhatsApp directly, on desktop opens WhatsApp Web
        const whatsappUrl = isMobile 
            ? `https://api.whatsapp.com/send?phone=21621040266&text=${encodedText}` 
            : `https://web.whatsapp.com/send?phone=21621040266&text=${encodedText}`;

        if (typeof showToast === 'function') {
            showToast('Redirection vers WhatsApp avec votre message...', 'success');
        }

        window.open(whatsappUrl, '_blank');
        contactForm.reset();
    });

    // 7. Ensure Floating VIP Concierge exists on all pages
    ensureFloatingConcierge();
});

function ensureFloatingConcierge() {
    if (document.querySelector('.floating-concierge-container')) return;
    const widget = document.createElement('div');
    widget.className = 'fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3.5 floating-concierge-container';
    widget.innerHTML = `
        <a href="https://wa.me/21697448396" target="_blank" rel="noopener noreferrer"
           class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 border border-[#C5A059] hover:border-[#DFBA73] group relative"
           aria-label="WhatsApp Direct" title="WhatsApp Direct">
            <svg class="w-6 h-6 sm:w-7 sm:h-7 fill-[#25D366]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span class="absolute right-16 px-3 py-1.5 bg-black text-white text-[11px] font-label-caps uppercase tracking-wider whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-[#C5A059]/60 hidden sm:block">
                WhatsApp Direct
            </span>
        </a>
        <button onclick="openReservationModal()" type="button"
                class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 border border-[#C5A059] hover:border-[#DFBA73] group relative cursor-pointer"
                aria-label="Réserver en Ligne" title="Réserver en Ligne">
            <span class="material-symbols-outlined text-2xl sm:text-[26px] text-[#DFBA73]">calendar_month</span>
            <span class="absolute right-16 px-3 py-1.5 bg-black text-white text-[11px] font-label-caps uppercase tracking-wider whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-[#C5A059]/60 hidden sm:block">
                Réserver en Ligne
            </span>
        </button>
    `;
    document.body.appendChild(widget);
}

// Mobile Menu Drawer Control
function toggleMobileMenu() {
    const drawer = document.getElementById('mobileMenuDrawer');
    const backdrop = document.getElementById('mobileMenuBackdrop');
    if (!drawer || !backdrop) return;

    const isOpen = !drawer.classList.contains('translate-x-full');
    if (isOpen) {
        drawer.classList.add('translate-x-full');
        backdrop.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
    } else {
        drawer.classList.remove('translate-x-full');
        backdrop.classList.remove('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'hidden';
    }
}

// Interactive Before / After Image Slider
function initBeforeAfterSliders() {
    const containers = document.querySelectorAll('.ba-container');
    
    function syncImageWidths() {
        containers.forEach(container => {
            const afterImgTag = container.querySelector('.ba-after-img img');
            if (afterImgTag) {
                afterImgTag.style.width = container.offsetWidth + 'px';
                afterImgTag.style.height = container.offsetHeight + 'px';
            }
        });
    }

    window.syncImageWidths = syncImageWidths;
    syncImageWidths();
    window.addEventListener('resize', syncImageWidths);
    window.addEventListener('load', syncImageWidths);

    containers.forEach(container => {
        const handle = container.querySelector('.ba-slider-handle');
        const afterImg = container.querySelector('.ba-after-img');
        if (!handle || !afterImg) return;

        let isDragging = false;

        function updateSlider(x) {
            const rect = container.getBoundingClientRect();
            let position = ((x - rect.left) / rect.width) * 100;
            if (position < 2) position = 2;
            if (position > 98) position = 98;

            handle.style.left = `${position}%`;
            afterImg.style.width = `${position}%`;
        }

        handle.addEventListener('mousedown', (e) => {
            isDragging = true;
            baDraggingActive = true;
            e.preventDefault();
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
            setTimeout(() => { baDraggingActive = false; }, 80);
        });
        window.addEventListener('mousemove', (e) => {
            if (isDragging) updateSlider(e.clientX);
        });

        handle.addEventListener('touchstart', (e) => {
            isDragging = true;
            baDraggingActive = true;
        }, { passive: true });

        window.addEventListener('touchend', () => {
            isDragging = false;
            setTimeout(() => { baDraggingActive = false; }, 80);
        });
        window.addEventListener('touchmove', (e) => {
            if (isDragging && e.touches[0]) updateSlider(e.touches[0].clientX);
        }, { passive: true });

        // Click anywhere on container to move slider
        container.addEventListener('click', (e) => {
            if (e.target !== handle && !handle.contains(e.target)) {
                updateSlider(e.clientX);
            }
        });
    });
}

// =========================================================================
// 7. Fullscreen Clinical Lightbox Engine (Avant / Après En Grand Format)
// =========================================================================

const baCases = [
    {
        id: 0,
        title: "Rajeunissement & Tenseur Cutané",
        subtitle: "Protocole Laser CO2 Fractionné & Radiofréquence",
        category: "Visage & Rides",
        beforeImg: "images/r2.png",
        afterImg: "images/r1.png",
        desc: "Lissage des ridules d'expression et remise en tension progressive du bas du visage.",
        sessions: "3 séances espacées de 6 semaines",
        result: "Grain de peau affiné, fermeté retrouvée et rides péri-orales estompées."
    },
    {
        id: 1,
        title: "Mélasma & Taches Pigmentaires",
        subtitle: "Protocole Laser Q-Switched & Peeling Médical",
        category: "Taches & Teint",
        beforeImg: "images/before_after/melasma_compare_before.jpg",
        afterImg: "images/before_after/melasma_compare_after.jpg",
        desc: "Atténuation spectaculaire des plaques de mélasma récalcitrant et unification du teint.",
        sessions: "4 séances médicales",
        result: "Dépigmentation contrôlée et teint uniforme sans effet rebond."
    },
    {
        id: 2,
        title: "Cicatrices d'Acné & Lissage Cutané",
        subtitle: "Resurfaçage Laser CO2 Ablatif de Haute Précision",
        category: "Cicatrices & Texture",
        beforeImg: "images/before_after/acne_dr_before.jpg",
        afterImg: "images/before_after/acne_dr_after.jpg",
        desc: "Comblement naturel des cicatrices atrophiques et relissage épidermique durable.",
        sessions: "3 séances de relissage",
        result: "Régénération profonde du collagène et surface cutanée visiblement lissée."
    },
    {
        id: 3,
        title: "Remodelage Abdominal & Silhouette",
        subtitle: "Ultrasons Focalisés (HIFU) & Radiofréquence Médicale",
        category: "Corps & Silhouette",
        beforeImg: "images/r4.png",
        afterImg: "images/r5.png",
        desc: "Resserrement des fibres cutanées relâchées au niveau de l'abdomen post-grossesse ou amincissement.",
        sessions: "2 séances ciblées",
        result: "Raffermissement cutané durable et silhouette redéfinie."
    }
];

let currentBaIndex = 0;
let currentBaMode = 'slider';
let baDraggingActive = false;

function ensureBaLightboxExists() {
    if (document.getElementById('baLightboxModal')) return;

    const modalHtml = `
    <div id="baLightboxModal" class="fixed inset-0 z-[100] hidden opacity-0 transition-opacity duration-200 flex items-center justify-center p-2 sm:p-4 bg-black/95 backdrop-blur-md" onclick="if(event.target===this) closeBaLightbox();">
        <div class="relative w-full max-w-2xl bg-black border border-[#C5A059]/40 shadow-2xl overflow-hidden flex flex-col text-white my-auto">
            
            <!-- Top Gold Line -->
            <div class="h-1 bg-gradient-to-r from-transparent via-[#DFBA73] to-transparent w-full"></div>

            <!-- Minimal Header: Just Title, Tabs & Close -->
            <div class="px-3 sm:px-4 py-2 sm:py-2.5 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between gap-2">
                <div class="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
                    <span id="lbCounter" class="text-[#DFBA73] font-label-caps text-[11px] sm:text-xs font-bold uppercase tracking-wider shrink-0">Cas 1 / 6</span>
                    <span class="text-neutral-600 font-bold shrink-0">&bull;</span>
                    <h3 id="lbTitle" class="font-headline-md text-xs sm:text-base font-bold text-white tracking-wide truncate"></h3>
                </div>

                <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <div class="inline-flex bg-neutral-900 border border-neutral-700 p-0.5 font-label-caps text-[10px] uppercase font-bold tracking-wider">
                        <button id="lbTabSlider" onclick="setBaLightboxMode('slider')" class="px-2 sm:px-2.5 py-1 bg-[#DFBA73] text-black transition-all flex items-center gap-1 cursor-pointer" title="Mode Comparateur Glissant">
                            <span class="material-symbols-outlined text-xs">compare</span>
                            <span class="hidden sm:inline">Glisser</span>
                        </button>
                        <button id="lbTabSide" onclick="setBaLightboxMode('side')" class="px-2 sm:px-2.5 py-1 text-neutral-400 hover:text-white transition-all flex items-center gap-1 cursor-pointer" title="Mode Côte à côte">
                            <span class="material-symbols-outlined text-xs">view_column</span>
                            <span class="hidden sm:inline">Côte à côte</span>
                        </button>
                    </div>

                    <button onclick="closeBaLightbox()" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-900 hover:bg-white text-neutral-300 hover:text-black flex items-center justify-center transition-colors cursor-pointer border border-neutral-700" title="Fermer (Échap)">
                        <span class="material-symbols-outlined text-base">close</span>
                    </button>
                </div>
            </div>

            <!-- Big Visual Stage: Proportionate Sizing -->
            <div id="lbDisplayArea" class="relative bg-black w-full overflow-hidden flex items-center justify-center transition-opacity duration-150" style="height: 55vh; max-height: 560px; min-height: 280px;">
                
                <!-- Mode 1: Interactive Slider -->
                <div id="lbSliderView" class="w-full h-full relative overflow-hidden bg-black flex items-center justify-center">
                    <div id="lbBaContainer" class="ba-container w-full h-full relative overflow-hidden select-none bg-black">
                        <img id="lbBeforeImg" src="" alt="Avant" class="w-full h-full object-cover absolute inset-0 select-none pointer-events-none" />
                        <div class="absolute bottom-3 right-3 bg-black/85 border border-white/20 px-3 py-1 text-white font-label-caps text-xs uppercase tracking-wider font-bold z-10 pointer-events-none shadow-md">
                            Avant
                        </div>

                        <div id="lbAfterImgWrap" class="ba-after-img" style="position: absolute; top: 0; left: 0; height: 100%; width: 50%; overflow: hidden;">
                            <img id="lbAfterImg" src="" alt="Après" class="w-full h-full object-cover max-w-none select-none pointer-events-none" style="position: absolute; top: 0; left: 0; height: 100%;" />
                            <div class="absolute bottom-3 left-3 bg-white/95 border border-black px-3 py-1 text-black font-label-caps text-xs uppercase tracking-wider font-bold z-10 pointer-events-none shadow-md">
                                Après
                            </div>
                        </div>

                        <div id="lbSliderHandle" class="ba-slider-handle" style="left: 50%;">
                            <div class="ba-handle-button shadow-2xl">
                                <span class="material-symbols-outlined text-xs">code</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mode 2: Côte à Côte Side-by-Side -->
                <div id="lbSideView" class="w-full h-full hidden grid-cols-2 gap-2 p-2 bg-black">
                    <div class="relative w-full h-full bg-neutral-900 overflow-hidden flex items-center justify-center border border-neutral-800">
                        <img id="lbSideBeforeImg" src="" alt="Avant" class="w-full h-full object-cover" />
                        <div class="absolute bottom-2.5 left-2.5 bg-black/85 text-[#DFBA73] border border-white/20 px-2.5 py-0.5 font-label-caps text-[10px] uppercase font-bold tracking-wider">
                            Avant
                        </div>
                    </div>
                    <div class="relative w-full h-full bg-neutral-900 overflow-hidden flex items-center justify-center border border-neutral-800">
                        <img id="lbSideAfterImg" src="" alt="Après" class="w-full h-full object-cover" />
                        <div class="absolute bottom-2.5 right-2.5 bg-white text-black border border-black px-2.5 py-0.5 font-label-caps text-[10px] uppercase font-bold tracking-wider">
                            Après
                        </div>
                    </div>
                </div>

                <!-- Prev / Next Floating Arrows -->
                <button onclick="prevBaCase()" class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 hover:bg-[#DFBA73] text-white hover:text-black border border-white/30 flex items-center justify-center transition-all z-20 shadow-xl cursor-pointer" title="Cas précédent (Flèche gauche)">
                    <span class="material-symbols-outlined text-2xl">chevron_left</span>
                </button>
                <button onclick="nextBaCase()" class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 hover:bg-[#DFBA73] text-white hover:text-black border border-white/30 flex items-center justify-center transition-all z-20 shadow-xl cursor-pointer" title="Cas suivant (Flèche droite)">
                    <span class="material-symbols-outlined text-2xl">chevron_right</span>
                </button>
            </div>

            <!-- Minimal Bottom Bar: Just subtle navigation hint -->
            <div class="px-4 py-2 bg-neutral-950 border-t border-neutral-900 flex items-center justify-between text-neutral-400 font-label-caps text-[11px] tracking-wider uppercase">
                <button onclick="prevBaCase()" class="hover:text-[#DFBA73] transition-colors flex items-center gap-1 cursor-pointer">
                    <span class="material-symbols-outlined text-xs">arrow_back</span>
                    <span>Précédent</span>
                </button>
                <span class="text-neutral-500 text-[10px]">Glissez au centre pour comparer</span>
                <button onclick="nextBaCase()" class="hover:text-[#DFBA73] transition-colors flex items-center gap-1 cursor-pointer">
                    <span>Suivant</span>
                    <span class="material-symbols-outlined text-xs">arrow_forward</span>
                </button>
            </div>

        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    initLightboxSliderEvents();
}

function initLightboxSliderEvents() {
    const container = document.getElementById('lbBaContainer');
    const handle = document.getElementById('lbSliderHandle');
    const afterWrap = document.getElementById('lbAfterImgWrap');
    if (!container || !handle || !afterWrap) return;

    let isDragging = false;

    function updateSlider(x) {
        const rect = container.getBoundingClientRect();
        let position = ((x - rect.left) / rect.width) * 100;
        if (position < 2) position = 2;
        if (position > 98) position = 98;

        handle.style.left = `${position}%`;
        afterWrap.style.width = `${position}%`;
    }

    handle.addEventListener('mousedown', (e) => {
        isDragging = true;
        baDraggingActive = true;
        e.preventDefault();
        e.stopPropagation();
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
        setTimeout(() => { baDraggingActive = false; }, 50);
    });

    window.addEventListener('mousemove', (e) => {
        if (isDragging) updateSlider(e.clientX);
    });

    handle.addEventListener('touchstart', (e) => {
        isDragging = true;
        baDraggingActive = true;
    }, { passive: true });

    window.addEventListener('touchend', () => {
        isDragging = false;
        setTimeout(() => { baDraggingActive = false; }, 50);
    });

    window.addEventListener('touchmove', (e) => {
        if (isDragging && e.touches[0]) updateSlider(e.touches[0].clientX);
    }, { passive: true });

    container.addEventListener('click', (e) => {
        if (e.target !== handle && !handle.contains(e.target)) {
            updateSlider(e.clientX);
        }
    });
}

function syncLbImages() {
    const container = document.getElementById('lbBaContainer');
    const afterImg = document.getElementById('lbAfterImg');
    if (!container || !afterImg) return;
    const w = container.clientWidth || container.offsetWidth;
    const h = container.clientHeight || container.offsetHeight;
    if (w > 0 && h > 0) {
        afterImg.style.width = w + 'px';
        afterImg.style.height = h + 'px';
    }
}

function openBaLightbox(index = 0, mode = 'slider') {
    ensureBaLightboxExists();
    currentBaIndex = ((index % baCases.length) + baCases.length) % baCases.length;
    
    const modal = document.getElementById('baLightboxModal');
    if (!modal) return;

    renderBaCase();
    setBaLightboxMode(mode);

    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        modal.classList.remove('opacity-0');
        syncLbImages();
    });

    document.body.style.overflow = 'hidden';
}

function closeBaLightbox() {
    const modal = document.getElementById('baLightboxModal');
    if (!modal) return;

    modal.classList.add('opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 200);
}

// Butter-smooth case switching without tearing down DOM or re-animating modal
function switchBaCase(newIndex) {
    currentBaIndex = ((newIndex % baCases.length) + baCases.length) % baCases.length;
    const displayArea = document.getElementById('lbDisplayArea');
    if (displayArea) {
        displayArea.style.opacity = '0.3';
    }
    setTimeout(() => {
        renderBaCase();
        if (displayArea) {
            displayArea.style.opacity = '1';
        }
    }, 120);
}

function prevBaCase() {
    switchBaCase(currentBaIndex - 1);
}

function nextBaCase() {
    switchBaCase(currentBaIndex + 1);
}

function renderBaCase() {
    const c = baCases[currentBaIndex];
    if (!c) return;

    const counter = document.getElementById('lbCounter');
    const title = document.getElementById('lbTitle');

    if (counter) counter.innerText = `Cas ${c.id + 1} / ${baCases.length}`;
    if (title) title.innerText = c.title;

    // Image URLs
    const beforeImg = document.getElementById('lbBeforeImg');
    const afterImg = document.getElementById('lbAfterImg');
    const sideBeforeImg = document.getElementById('lbSideBeforeImg');
    const sideAfterImg = document.getElementById('lbSideAfterImg');

    if (beforeImg) {
        beforeImg.onload = syncLbImages;
        beforeImg.src = c.beforeImg;
    }
    if (afterImg) {
        afterImg.onload = syncLbImages;
        afterImg.src = c.afterImg;
    }
    if (sideBeforeImg) sideBeforeImg.src = c.beforeImg;
    if (sideAfterImg) sideAfterImg.src = c.afterImg;

    // Reset slider handle to 50%
    const handle = document.getElementById('lbSliderHandle');
    const afterWrap = document.getElementById('lbAfterImgWrap');
    if (handle && afterWrap) {
        handle.style.left = '50%';
        afterWrap.style.width = '50%';
    }
    syncLbImages();
    setTimeout(syncLbImages, 50);
    setTimeout(syncLbImages, 150);
}

function setBaLightboxMode(mode) {
    currentBaMode = mode;
    const views = {
        slider: document.getElementById('lbSliderView'),
        side: document.getElementById('lbSideView')
    };

    const tabs = {
        slider: document.getElementById('lbTabSlider'),
        side: document.getElementById('lbTabSide')
    };

    // Hide all views
    Object.values(views).forEach(v => {
        if (v) {
            v.classList.add('hidden');
            v.classList.remove('flex', 'grid');
        }
    });

    // Reset tabs
    Object.values(tabs).forEach(t => {
        if (t) {
            t.classList.remove('bg-[#DFBA73]', 'text-black');
            t.classList.add('text-neutral-400');
        }
    });

    // Activate selected tab
    if (tabs[mode]) {
        tabs[mode].classList.remove('text-neutral-400');
        tabs[mode].classList.add('bg-[#DFBA73]', 'text-black');
    }

    // Show selected view
    if (views[mode]) {
        views[mode].classList.remove('hidden');
        if (mode === 'side') {
            views[mode].classList.add('grid');
        } else {
            views[mode].classList.add('flex');
        }
    }

    if (mode === 'slider') {
        setTimeout(syncLbImages, 50);
    }
}

function openReservationFromLightbox() {
    const c = baCases[currentBaIndex];
    closeBaLightbox();
    if (typeof openReservationModal === 'function') {
        openReservationModal(c ? c.title : 'Consultation');
    }
}

// Global Keyboard Navigation for Lightbox
window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('baLightboxModal');
    if (!modal || modal.classList.contains('hidden')) return;

    if (e.key === 'Escape') {
        closeBaLightbox();
    } else if (e.key === 'ArrowLeft') {
        prevBaCase();
    } else if (e.key === 'ArrowRight') {
        nextBaCase();
    }
});

window.addEventListener('resize', () => {
    const modal = document.getElementById('baLightboxModal');
    if (modal && !modal.classList.contains('hidden')) {
        syncLbImages();
    }
});

// Before/After Gallery Filter
function filterBeforeAfter(category, btnElement) {
    const filterBtns = document.querySelectorAll('.ba-filter-btn');
    filterBtns.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-soft-cream', 'text-deep-charcoal');
    });

    if (btnElement) {
        btnElement.classList.remove('bg-soft-cream', 'text-deep-charcoal');
        btnElement.classList.add('bg-primary', 'text-white');
    }

    const cards = document.querySelectorAll('.ba-card-item');
    cards.forEach(card => {
        const cardCat = (card.getAttribute('data-category') || '').toLowerCase();
        if (category === 'all' || cardCat.includes(category.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// FAQ Accordion Handler
function toggleFaq(faqId) {
    const answer = document.getElementById(`faq-ans-${faqId}`);
    const icon = document.getElementById(`faq-icon-${faqId}`);
    if (!answer) return;

    const isOpen = answer.classList.contains('open');
    document.querySelectorAll('.faq-answer').forEach(el => el.classList.remove('open'));
    document.querySelectorAll('.faq-icon').forEach(ic => ic.style.transform = 'rotate(0deg)');

    if (!isOpen) {
        answer.classList.add('open');
        if (icon) icon.style.transform = 'rotate(180deg)';
    }
}

// Interactive Skin Diagnostic Configurator Engine
const diagnosticDatabase = {
    "epilation": {
        title: "Épilation Laser Médicale Définitive",
        platform: "Laser Diode Triple-Longueur d'Onde & Nd:YAG Long Pulse",
        wavelength: "755nm Alexandrite / 808nm Diode / 1064nm Nd:YAG",
        cooling: "Sub-Zero Zimmer Cryo 6 continu (-5°C)",
        sessions: "4 à 6 séances espacées de 6 à 8 semaines",
        downtime: "Zéro éviction sociale. Reprise immédiate des activités.",
        clearance: "95%+ Réduction permanente des follicules",
        desc: "Balayage thermique médical sélectif détruisant le bulbe pileux sans altérer l'épiderme. Compatible avec tous les phototypes cutanés I à VI grâce à la double technologie Diode / Nd:YAG.",
        badge: "Protocole Épilation Médicale"
    },
    "melasma": {
        title: "Protocole Mélasma & Taches Pigmentaires",
        platform: "Laser Picoseconde Médical & Laser Q-Switched",
        wavelength: "532nm / 1064nm Photo-Acoustique",
        cooling: "Refroidissement doux dermo-protecteur",
        sessions: "3 à 5 séances personnalisées",
        downtime: "Légère rougeur transitoire (2 à 4 heures)",
        clearance: "Éclaircissement homogène sans effet rebond",
        desc: "Onde acoustique fractionnée fragmentant l'excès de mélanine en micro-particules éliminées naturellement par voie lymphatique, tout en respectant la barrière cutanée.",
        badge: "Dermatologie Pigmentaire"
    },
    "antirides": {
        title: "Protocole Rajeunissement & Relâchement Cutané",
        platform: "Laser Resurfacing & Tightening Thermique",
        wavelength: "1064nm / 1540nm Fractionné Non-Ablatif",
        cooling: "Cryo-Protection épidermique intégrée",
        sessions: "3 à 4 séances espacées de 4 semaines",
        downtime: "Éclat immédiat, zéro desquamation visible",
        clearance: "+40% de néocollagenèse prouvée cliniquement",
        desc: "Stimulation thermique des fibroblastes du derme réticulaire pour induire une remise en tension immédiate de l'ovale du visage et combler les ridules.",
        badge: "Anti-Âge & Restructuration"
    },
    "cicatrices": {
        title: "Correction Cicatrices d'Acné & Vergetures",
        platform: "Laser Fractionné & Microneedling Thermocontrolé",
        wavelength: "Fractional 1540nm / Micro-Pulsé",
        cooling: "Jet d'air cryogénique pulsé",
        sessions: "4 à 5 séances",
        downtime: "24h de rougeur modérée facilement maquillage",
        clearance: "Lissage en profondeur du relief cicatriciel",
        desc: "Micro-colonnes de coagulation dermique déclenchant un remodelage tissulaire intensif, régénérant la trame collagénique des dépressions et des vergetures.",
        badge: "Remodelage Tissulaire"
    },
    "detatouage": {
        title: "Détatouage Laser Picoseconde Haute Précision",
        platform: "Laser Picoseconde Multi-Couleurs",
        wavelength: "1064nm (encres noires/sombres) & 532nm (couleurs)",
        cooling: "Cryothérapie Zimmer Cryo 6 continue",
        sessions: "4 à 7 séances selon densité et type d'encre",
        downtime: "Pansement protecteur pendant 48h",
        clearance: "Effacement net sans cicatrice",
        desc: "Impulsions ultra-brèves en picosecondes provoquant une onde de choc photo-acoustique qui pulvérise les pigments d'encre sans brûler la peau avoisinante.",
        badge: "Détatouage Médical"
    },
    "rosacee": {
        title: "Apaisement Vasculaire & Rosacée",
        platform: "Laser Vasculaire Nd:YAG Long Pulse / KTP",
        wavelength: "532nm / 1064nm Haute Précision",
        cooling: "Refroidissement contact saphir continu",
        sessions: "2 à 3 séances",
        downtime: "Légère rougeur estompée le jour même",
        clearance: "Disparition des télangiectasies et rougeurs permanentes",
        desc: "Photocoagulation sélective de l'hémoglobine des micro-vaisseaux dilatés pour restaurer un teint uniforme et apaiser durablement la réactivité cutanée.",
        badge: "Dermatologie Vasculaire"
    }
};

let currentDiagnostic = {
    concern: 'epilation',
    zone: 'visage',
    phototype: 'type3'
};

function initDiagnosticEngine() {
    selectDiagnosticConcern('epilation');
}

function selectDiagnosticConcern(concernKey) {
    currentDiagnostic.concern = concernKey;
    
    // Update button states
    document.querySelectorAll('.diag-concern-btn').forEach(btn => {
        btn.classList.remove('selected', 'bg-primary', 'text-white');
        btn.classList.add('bg-white', 'text-deep-charcoal');
    });

    const activeBtn = document.getElementById(`diag-btn-${concernKey}`);
    if (activeBtn) {
        activeBtn.classList.add('selected', 'bg-primary', 'text-white');
        activeBtn.classList.remove('bg-white', 'text-deep-charcoal');
    }

    renderDiagnosticResult();
}

function selectDiagnosticPhototype(phototypeKey) {
    currentDiagnostic.phototype = phototypeKey;
    
    document.querySelectorAll('.diag-phototype-btn').forEach(btn => {
        btn.classList.remove('selected', 'border-muted-bronze', 'bg-deep-charcoal', 'text-white');
    });

    const activeBtn = document.getElementById(`diag-photo-${phototypeKey}`);
    if (activeBtn) {
        activeBtn.classList.add('selected', 'border-muted-bronze', 'bg-deep-charcoal', 'text-white');
    }

    renderDiagnosticResult();
}

function renderDiagnosticResult() {
    const data = diagnosticDatabase[currentDiagnostic.concern] || diagnosticDatabase['epilation'];
    
    const titleEl = document.getElementById('diagResultTitle');
    const badgeEl = document.getElementById('diagResultBadge');
    const platformEl = document.getElementById('diagResultPlatform');
    const wavelengthEl = document.getElementById('diagResultWavelength');
    const coolingEl = document.getElementById('diagResultCooling');
    const sessionsEl = document.getElementById('diagResultSessions');
    const downtimeEl = document.getElementById('diagResultDowntime');
    const descEl = document.getElementById('diagResultDesc');
    const reserveBtn = document.getElementById('diagReserveBtn');

    if (titleEl) titleEl.textContent = data.title;
    if (badgeEl) badgeEl.textContent = data.badge;
    if (platformEl) platformEl.textContent = data.platform;
    if (wavelengthEl) wavelengthEl.textContent = data.wavelength;
    if (coolingEl) coolingEl.textContent = data.cooling;
    if (sessionsEl) sessionsEl.textContent = data.sessions;
    if (downtimeEl) downtimeEl.textContent = data.downtime;
    if (descEl) descEl.textContent = data.desc;
    
    if (reserveBtn) {
        reserveBtn.onclick = () => openReservationModal(data.title);
    }
}

// Global Reservation Modal
function openReservationModal(treatmentName) {
    const modal = document.getElementById('reservationModal');
    const container = document.getElementById('modalContainer');
    const select = document.getElementById('modalTreatmentSelect');
    const input = document.getElementById('modalTreatmentInput');

    if (treatmentName) {
        if (input) {
            input.value = treatmentName;
        }
        if (select) {
            for (let i = 0; i < select.options.length; i++) {
                if (select.options[i].value.toLowerCase().includes(treatmentName.toLowerCase()) || 
                    treatmentName.toLowerCase().includes(select.options[i].value.toLowerCase())) {
                    select.selectedIndex = i;
                    break;
                }
            }
        }
    }

    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.remove('opacity-0', 'pointer-events-none');
    }
    if (container) {
        container.classList.remove('scale-95');
        container.classList.add('scale-100');
    }
    document.body.style.overflow = 'hidden';
}

function closeReservationModal() {
    const modal = document.getElementById('reservationModal');
    const container = document.getElementById('modalContainer');

    if (container) {
        container.classList.remove('scale-100');
        container.classList.add('scale-95');
    }
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.add('opacity-0', 'pointer-events-none');
    }
    document.body.style.overflow = '';
}

// Toast Notifications
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    const isSuccess = type === 'success';
    const bgColor = isSuccess ? 'bg-black text-white border-[#C5A059]' : 'bg-red-900 text-white border-red-500';
    
    toast.className = `${bgColor} border px-6 py-4 rounded-none shadow-2xl font-label-caps text-xs tracking-wider uppercase flex items-center gap-3 toast-enter`;
    toast.innerHTML = `
        <span class="material-symbols-outlined text-[#DFBA73] text-xl">${isSuccess ? 'verified' : 'error'}</span>
        <div class="flex-1 leading-snug">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.4s ease-out';
        setTimeout(() => toast.remove(), 400);
    }, 5000);
}

// 6. Zero-Cache & bfcache Invalidation Handler
window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
        window.location.reload();
    }
});

// Automatically ensure internal links bypass stale browser cache
document.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (!link || !link.href) return;

    try {
        const url = new URL(link.href, window.location.origin);
        if (url.origin === window.location.origin && url.pathname.endsWith('.html')) {
            // For le-centre.html and all internal pages, ensure cache bust query param
            if (!url.searchParams.has('v') && !url.searchParams.has('id')) {
                e.preventDefault();
                url.searchParams.set('v', '2');
                window.location.href = url.toString();
            }
        }
    } catch (err) {
        // Fallback for relative or unsupported URLs
    }
});
