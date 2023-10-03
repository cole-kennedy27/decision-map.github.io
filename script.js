document.getElementById('background-video').playbackRate = 1.5; // nx faster video playback

// fade out black overlay when video is playing
document.getElementById('background-video').addEventListener('playing', function () {
    document.querySelector('.black-overlay').style.opacity = '0';
}, { once: true });


function toggleDrawer() {
    const drawer = document.querySelector('.drawer');
    const drawerStyle = getComputedStyle(drawer);
    drawer.style.left = (drawerStyle.left === '0px') ? '-250px' : '0px';
}

function closeDrawer() {
    const drawer = document.querySelector('.drawer');
    drawer.style.left = '-250px';
}

document.addEventListener('mousemove', function(event) {
    const drawer = document.querySelector('.drawer');
    const drawerStyle = getComputedStyle(drawer);

    // if the mouse is within 20 pixels from the left edge of the viewport and the drawer is not already open, then open
    if (event.clientX < 20 && drawerStyle.left === '-250px') {
        openDrawer();
    }
});


function openDrawer() {
    const drawer = document.querySelector('.drawer');
    drawer.style.left = '0px';
}

document.addEventListener('keydown', function(event) {
    // if the pressed key is 'Escape' (esc), close the drawer
    if (event.key === 'Escape') {
        closeDrawer();
    }
});

document.addEventListener('click', function(event) {
    const drawer = document.querySelector('.drawer');
    const isClickInside = drawer.contains(event.target);
    const menuIcon = document.querySelector('.menu-icon');
    const isClickOnMenu = menuIcon.contains(event.target);

    // close the drawer if a click is outside the drawer and not on the menu icon & the drawer is open
    if (!isClickInside && !isClickOnMenu && getComputedStyle(drawer).left === '0px') {
        closeDrawer();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.drawer a');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            toggleDrawer();
        });
    });
});

function setVideoDimensions() {
    const video = document.getElementById('background-video');
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const videoAspect = video.videoWidth / video.videoHeight;

    if (viewportWidth / viewportHeight < videoAspect) {
        video.style.width = 'auto';
        video.style.height = '100vh';
    } else {
        video.style.width = '100vw';
        video.style.height = 'auto';
    }
}

window.addEventListener('scroll', function() {
    const appbar = document.getElementById('appbar');
    const videoOverlay = document.getElementById('black_overlay');
    const meetTheTeam = document.getElementById('meet_the_team');
    
    // Ensure elements exist to avoid errors
    if(!appbar || !videoOverlay || !meetTheTeam) return;

    if (window.scrollY > 50) {
        appbar.style.backgroundColor = '#161616';
    } else {
        appbar.style.backgroundColor = 'transparent';
    }

    if (window.scrollY > meetTheTeam.offsetTop ) {
        videoOverlay.style.opacity = '0.8';
    } else  {
        videoOverlay.style.opacity = '0';
    }
});



window.addEventListener('resize', setVideoDimensions);
window.addEventListener('load', setVideoDimensions);
