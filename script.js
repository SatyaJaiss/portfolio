document.addEventListener('DOMContentLoaded', () => {
    const roles = ["Software Developer", "MERN Stack Developer", "Open-Source Contributor"];
    let index = 0;
    const dynamicRole = document.getElementById('dynamic-role');
    const cursor = document.querySelector('.cursor');

    function typeRole() {
        let role = roles[index]; 
        let i = 0;

        function typeChar() {
            if (i < role.length) {
                dynamicRole.textContent += role.charAt(i);
                i++;
                setTimeout(typeChar, 120);
            } else {
                setTimeout(deleteRole, 2000);
            }
        }

        function deleteRole() {
            if (i > 0) {
                dynamicRole.textContent = role.substring(0, i - 1);
                i--;
                setTimeout(deleteRole, 80);
            } else {
                index = (index + 1) % roles.length;
                setTimeout(typeRole, 500);
            }
        }

        typeChar();
    }

    setTimeout(typeRole, 500);

    // Blink Cursor
    setInterval(() => {
        cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }, 500);
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    document.body.appendChild(customCursor);

    const customCursorGlow = document.createElement('div');
    customCursorGlow.classList.add('custom-cursor-glow');
    document.body.appendChild(customCursorGlow);

    document.addEventListener('mousemove', (e) => {
        const { clientX: x, clientY: y } = e;
        customCursor.style.transform = `translate(${x - 7.5}px, ${y - 7.5}px)`;
        customCursorGlow.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
    });

    document.addEventListener('mousedown', () => {
        customCursor.style.transform = `scale(0.8)`;
        customCursorGlow.style.transform = `scale(1.2)`;
    });

    document.addEventListener('mouseup', () => {
        customCursor.style.transform = `scale(1)`;
        customCursorGlow.style.transform = `scale(1)`;
    });
    document.addEventListener('mouseleave', () => {
        customCursor.style.opacity = '1';
        customCursorGlow.style.opacity = '1';
    });

    document.addEventListener('mouseenter', () => {
        customCursor.style.opacity = '1';
        customCursorGlow.style.opacity = '1';
    });
    //navbar responsiveness
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Toggle class to slide in/out
        menuToggle.classList.toggle('active'); // Toggle the cross/cut button effect
    });
});

