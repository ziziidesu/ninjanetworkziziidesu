document.addEventListener('DOMContentLoaded', function() {
    var particlesDiv = document.createElement('div');
    particlesDiv.id = 'particles-js';
    document.body.insertBefore(particlesDiv, document.body.firstChild);

    // Set the background image
    document.body.style.backgroundImage = "url('https://tse2.mm.bing.net/th?id=OIG4.1PyEdpKfqtfUM9Vhmsfx&pid=ImgGn')";
    document.body.style.backgroundSize = 'cover';

    var selectedTheme = localStorage.getItem('selectedOption');
    var particles = localStorage.getItem('particles');
    
    function getRandomShurikenShape() {
        const shapes = [
            { type: 'polygon', sides: 3 },  // 3-blade shuriken
            { type: 'polygon', sides: 4 },  // 4-blade shuriken
            { type: 'polygon', sides: 5 },  // 5-blade shuriken
            { type: 'polygon', sides: 6 }   // 6-blade shuriken
        ];
        return shapes[Math.floor(Math.random() * shapes.length)];
    }

    var shape = getRandomShurikenShape();

    // Select particles configuration based on theme or default background
    var particlesConfig = {
        "particles": {
            "number": {
                "value": 160,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": shape.type,
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": shape.sides
                },
                "image": {
                    "src": "img/github.svg",  // image can be used if needed, otherwise you can remove this
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 10,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 20,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "top",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    };

    // Check if particles are enabled
    if (particles === 'disabled' || particles === null || particles === '') {
        console.log('Particles are disabled.')
    } else {
        particlesJS("particles-js", particlesConfig);
    }

    // Fallback if no theme is selected
    if (selectedTheme === null) {
        // Deep sea theme as default
        particlesJS("particles-js", particlesConfig);
    }
});
