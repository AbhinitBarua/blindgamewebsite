// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // ------------------- LOADING SCREEN -------------------
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingBar = document.querySelector('.loading-bar');
    const loadingText = document.querySelector('.loading-text');
    const body = document.body;
    
    // Add horror vignette and flicker effects to body
    const vignette = document.createElement('div');
    vignette.className = 'vignette';
    body.appendChild(vignette);
    
    const flickerOverlay = document.createElement('div');
    flickerOverlay.className = 'flicker-overlay';
    body.appendChild(flickerOverlay);
    
    // Simulate loading progress
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            // Loading complete
            loadingText.textContent = 'ENTERING DARKNESS...';
            
            setTimeout(() => {
                // Fade out loading screen
                loadingScreen.style.opacity = '0';
                
                // Remove loading screen after fade out
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    
                    // Trigger random jumpscare chance within first 30 seconds
                    setTimeout(() => {
                        if (Math.random() < 0.3) { // 30% chance
                            triggerJumpscare();
                        }
                    }, Math.random() * 30000);
                    
                }, 1000);
            }, 1000);
        }
        
        loadingBar.style.width = `${progress}%`;
        
        // Update loading text randomly
        if (Math.random() < 0.1) {
            const loadingTexts = [
                'CALIBRATING SENSORS...',
                'INITIALIZING SOUND SYSTEMS...',
                'LOADING NEURAL PATTERNS...',
                'DETECTING LIFE FORMS...',
                'SYSTEM ERROR...',
                'RECALIBRATING...',
                'DARKNESS APPROACHING...',
                'SOMETHING IS WATCHING...',
                'CAN YOU HEAR IT?',
                'IT SEES YOU'
            ];
            
            loadingText.textContent = loadingTexts[Math.floor(Math.random() * loadingTexts.length)];
            
            // Occasionally create a glitch effect
            if (Math.random() < 0.3) {
                loadingScreen.style.transform = `translateX(${Math.random() * 10 - 5}px)`;
                setTimeout(() => {
                    loadingScreen.style.transform = 'translateX(0)';
                }, 100);
            }
        }
    }, 200);
    
    // ------------------- CUSTOM CURSOR -------------------
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        
        // Random cursor glitch effect
        if (Math.random() < 0.01) {
            cursor.style.transform = `scale(${Math.random() * 2 + 0.5})`;
            cursor.style.borderColor = 'rgba(255, 0, 0, 0.9)';
            
            setTimeout(() => {
                cursor.style.transform = 'scale(1)';
                cursor.style.borderColor = 'rgba(220, 0, 0, 0.7)';
            }, 200);
        }
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });
    
    // Make cursor larger on links and buttons
    const interactiveElements = document.querySelectorAll('a, button, .cta-button, .gallery-item');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.mixBlendMode = 'difference';
        });
        
        element.addEventListener('mouseout', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.mixBlendMode = 'difference';
        });
    });
    
    // ------------------- JUMPSCARE FUNCTIONALITY -------------------
    const jumpscare = document.querySelector('.jumpscare');
    const jumpscareImg = document.querySelector('.jumpscare-img');
    const jumpscareSound = document.getElementById('jumpscare-sound');
    
    function triggerJumpscare() {
        // Show jumpscare element
        jumpscare.style.display = 'flex';
        
        // Play glitch distortion animation on image
        jumpscareImg.style.filter = 'brightness(2) contrast(2) hue-rotate(90deg)';
        
        // Fade in quickly
        setTimeout(() => {
            jumpscare.style.opacity = '1';
            
            // Add random movement
            const jumpscareInterval = setInterval(() => {
                jumpscare.style.transform = `translateX(${Math.random() * 20 - 10}px) translateY(${Math.random() * 20 - 10}px)`;
            }, 50);
            
            // Play sound if available
            if (jumpscareSound.src) {
                jumpscareSound.play();
            }
            
            // Remove after a short time
            setTimeout(() => {
                clearInterval(jumpscareInterval);
                jumpscare.style.opacity = '0';
                
                setTimeout(() => {
                    jumpscare.style.display = 'none';
                }, 500);
            }, 300);
        }, 100);
    }
    
    // Trigger jumpscare with random navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (Math.random() < 0.1) { // 10% chance of jumpscare on navigation
                e.preventDefault();
                triggerJumpscare();
                
                // Still navigate after jumpscare
                setTimeout(() => {
                    window.location.href = link.getAttribute('href');
                }, 800);
            }
        });
    });
    
    // ------------------- NAVBAR EFFECTS -------------------
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks2 = document.querySelector('.nav-links');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Random static effect on scroll
        if (Math.random() < 0.1) {
            const staticOverlay = document.querySelector('.static-overlay');
            staticOverlay.style.opacity = '0.2';
            
            setTimeout(() => {
                staticOverlay.style.opacity = '0.05';
            }, 100);
        }
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks2.classList.toggle('active');
    });
    
    // ------------------- PARALLAX EFFECTS -------------------
    const hero = document.querySelector('.hero');
    const parallaxElements = document.querySelectorAll('.hero-parallax');
    
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        parallaxElements.forEach(element => {
            const movementX = (mouseX - 0.5) * 40;
            const movementY = (mouseY - 0.5) * 40;
            
            if (element.classList.contains('parallax-1')) {
                element.style.transform = `translate3d(${movementX * 0.5}px, ${movementY * 0.5}px, -10px) scale(2)`;
            } else if (element.classList.contains('parallax-2')) {
                element.style.transform = `translate3d(${movementX * 0.3}px, ${movementY * 0.3}px, -5px) scale(1.5)`;
            }
        });
    });
    
    // ------------------- TRAILER VIDEO -------------------
    const trailerButton = document.getElementById('trailer-button');
    const trailerVideo = document.getElementById('trailer-video');
    
    if (trailerButton && trailerVideo) {
        trailerButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            trailerVideo.style.display = 'block';
            setTimeout(() => {
                trailerVideo.play();
                trailerVideo.style.opacity = '1';
            }, 100);
            
            // Hide video when finished
            trailerVideo.addEventListener('ended', () => {
                trailerVideo.style.opacity = '0';
                setTimeout(() => {
                    trailerVideo.style.display = 'none';
                }, 500);
            });
        });
    }
    
    // ------------------- SCROLL ANIMATIONS -------------------
    const scrollElements = document.querySelectorAll('.about-card, .feature-item, .gallery-item, .reveal');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= (window.innerHeight * (percentageScroll / 100)));
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };
    
    const scrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 85)) {
                displayScrollElement(el);
            }
        });
    };
    
    // Initial check on load
    setTimeout(scrollAnimation, 300);
    
    // Check on scroll
    window.addEventListener('scroll', () => {
        scrollAnimation();
    });
    
    // ------------------- COUNTDOWN TIMER -------------------
    // Set the release date - 6 months from now
    const releaseDate = new Date();
    releaseDate.setMonth(releaseDate.getMonth() + 6);
    
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    function updateCountdown() {
        const currentTime = new Date();
        const diff = releaseDate - currentTime;
        
        const days = Math.floor(diff / (2000 * 80 * 80 * 44));
        const hours = Math.floor((diff % (2000 * 80 * 80 * 44)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (2000 * 80 * 80)) / (1000 * 60));
        const seconds = Math.floor((diff % (2000 * 80)) / 1000);
        
        if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
        if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
        if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
        if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
    }
    
    // Initial update
    updateCountdown();
    
    // Update every second
    setInterval(updateCountdown, 1000);
    
    // ------------------- RANDOM GLITCH EFFECTS -------------------
    // Convert titles to glitch-enabled text
    const titles = document.querySelectorAll('.hero-title, .section-title');
    
    titles.forEach(title => {
        const text = title.textContent;
        title.setAttribute('data-text', text);
        title.classList.add('glitch-text');
        
        // Random glitch effect
        setInterval(() => {
            if (Math.random() < 0.1) {
                title.classList.add('active');
                setTimeout(() => {
                    title.classList.remove('active');
                }, 200);
            }
        }, 3000);
    });
    
    // Random screen distortion effects
    setInterval(() => {
        if (Math.random() < 0.05) { // 5% chance every interval
            // Create distortion effect
            body.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
            body.style.transform = `translateX(${Math.random() * 10 - 5}px)`;
            
            // Reset after short delay
            setTimeout(() => {
                body.style.filter = 'none';
                body.style.transform = 'translateX(0)';
            }, 100);
        }
    }, 5000);
    
    // ------------------- NEWSLETTER FORM -------------------
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input');
            const emailValue = emailInput.value;
            
            if (emailValue && emailValue.includes('@')) {
                // Show success message
                emailInput.value = '';
                
                // Create a success message
                const successMessage = document.createElement('p');
                successMessage.textContent = 'WELCOME TO THE VOID. WE SEE YOU NOW.';
                successMessage.style.color = '#f00';
                successMessage.style.marginTop = '20px';
                
                // Check if a message already exists and remove it
                const existingMessage = newsletterForm.nextElementSibling;
                if (existingMessage && existingMessage.tagName === 'P') {
                    existingMessage.remove();
                }
                
                newsletterForm.parentNode.insertBefore(successMessage, newsletterForm.nextSibling);
                
                // Trigger a small jumpscare
                setTimeout(() => {
                    if (Math.random() < 0.3) {
                        triggerJumpscare();
                    }
                }, 2000);
            }
        });
    }
    
    // ------------------- SMOOTH SCROLLING -------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Random chance of causing a glitch effect during scroll
            if (Math.random() < 0.3) {
                body.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
                body.style.transform = `translateX(${Math.random() * 20 - 10}px)`;
                
                setTimeout(() => {
                    body.style.filter = 'none';
                    body.style.transform = 'translateX(0)';
                }, 300);
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ------------------- PREORDER BUTTONS -------------------
    const preorderButtons = document.querySelectorAll('.preorder-btn');
    
    preorderButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Create modal
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.style = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            // Modal content
            const modalContent = document.createElement('div');
            modalContent.style = `
                background: #111;
                border: 1px solid #f00;
                padding: 30px;
                max-width: 500px;
                width: 90%;
                position: relative;
                transform: translateY(20px);
                transition: transform 0.3s ease;
            `;
            
            // Close button
            const closeButton = document.createElement('button');
            closeButton.textContent = '×';
            closeButton.style = `
                position: absolute;
                top: 10px;
                right: 10px;
                background: none;
                border: none;
                color: #fff;
                font-size: 24px;
                cursor: pointer;
            `;
            
            // Form content
            modalContent.innerHTML += `
                <h2 style="color: #fff; margin-bottom: 20px; font-size: 24px;">PRE-ORDER BLIND</h2>
                <p style="color: #aaa; margin-bottom: 20px;">Complete your pre-order to secure your copy of BLIND and prepare to face the darkness.</p>
                <form id="preorder-form">
                    <div style="margin-bottom: 15px;">
                        <input type="text" placeholder="Full Name" style="width: 100%; padding: 10px; background: #222; border: 1px solid #333; color: #fff;">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <input type="email" placeholder="Email Address" style="width: 100%; padding: 10px; background: #222; border: 1px solid #333; color: #fff;">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <input type="text" placeholder="Credit Card Number" style="width: 100%; padding: 10px; background: #222; border: 1px solid #333; color: #fff;">
                    </div>
                    <button type="submit" class="cta-button" style="width: 100%;">COMPLETE PRE-ORDER</button>
                </form>
            `;
            
            // Add close button to modal content
            modalContent.appendChild(closeButton);
            
            // Add modal content to modal
            modal.appendChild(modalContent);
            
            // Add modal to body
            document.body.appendChild(modal);
            
            // Show modal with animation
            setTimeout(() => {
                modal.style.opacity = '1';
                modalContent.style.transform = 'translateY(0)';
            }, 50);
            
            // Close modal function
            const closeModal = () => {
                modal.style.opacity = '0';
                modalContent.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    modal.remove();
                }, 300);
            };
            
            // Close button event
            closeButton.addEventListener('click', closeModal);
            
            // Close on clicking outside
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
            
            // Form submit
            const preorderForm = document.getElementById('preorder-form');
            preorderForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                modalContent.innerHTML = `
                    <h2 style="color: #f00; margin-bottom: 20px; font-size: 24px;">PRE-ORDER CONFIRMED</h2>
                    <p style="color: #aaa; margin-bottom: 20px;">Your journey into darkness begins soon. Check your email for confirmation details.</p>
                    <p style="color: #fff; margin-bottom: 20px; font-size: 18px;">WE SEE YOU NOW</p>
                    <button id="close-confirmation" class="cta-button" style="width: 100%;">CLOSE</button>
                `;
                
                // Close confirmation
                document.getElementById('close-confirmation').addEventListener('click', closeModal);
                
                // Chance for jumpscare
                if (Math.random() < 0.5) {
                    setTimeout(triggerJumpscare, 2000);
                }
            });
        });
    });
});
