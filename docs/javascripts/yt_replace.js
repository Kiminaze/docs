
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
                            <span class="twemoji youtube"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.498 6.186a3.02 3.02 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.02 3.02 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.02 3.02 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.02 3.02 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z"></path></svg></span>
                            <strong>VIDEO_TITLE</strong>
                        </a>
                        <span style="font-size: 0.35em;">This is where a YouTube video would be displayed if you <a href="#__consent">accept cookies.</a></span>
                    </div>
                `).replace("VIDEO_ID", ph.dataset.videoid).replace("VIDEO_TITLE", ph.dataset.videotitle);
            }
        }
    }


})

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const contentId = tab.getAttribute('data-tab');
        document.getElementById(contentId).classList.add('active');
    });
});
