
document.addEventListener("DOMContentLoaded", function () {
    var consent = __md_get("__consent");

    const placeholders = document.getElementsByClassName("youtube-placeholder");
    for (const ph of placeholders) {
        if (ph) {
            if (consent && consent.youtube) {
                ph.innerHTML = (`
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube-nocookie.com/embed/VIDEO_ID" 
                        title="VIDEO_TITLE" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>
                `).replace("VIDEO_ID", ph.dataset.videoid).replace("VIDEO_TITLE", ph.dataset.videotitle);
            }
            else {
                ph.innerHTML = (`
                    <div class="video-link">
                        <a href="https://www.youtube.com/watch?v=VIDEO_ID" target="_blank" rel="noopener">
                        ▶ Watch VIDEO_TITLE on YouTube
                        </a>
                    </div>
                `).replace("VIDEO_ID", ph.dataset.videoid).replace("VIDEO_TITLE", ph.dataset.videotitle);
            }
        }
    }
})
