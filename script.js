document.getElementById('background-video').playbackRate = 1.5; // nx faster video playback

// fade out black overlay when video is playing
document.getElementById('background-video').addEventListener('playing', function () {
    console.log("video is playing!!");
    document.querySelector('.black-overlay').style.opacity = '0';
});

function toggleDrawer() {
    const drawer = document.querySelector('.drawer');
    const drawerStyle = getComputedStyle(drawer);
    drawer.style.left = (drawerStyle.left === '0px') ? '-250px' : '0px';
}

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

window.addEventListener('resize', setVideoDimensions);
window.addEventListener('load', setVideoDimensions);
