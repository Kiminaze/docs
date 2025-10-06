
document.addEventListener("DOMContentLoaded", function () {
    var consent = __md_get("__consent");

    if (consent) {
        if (consent.youtube) {
            var placeholder = document.getElementById("youtube-placeholder");

            if (placeholder) {
                placeholder.innerHTML = (`
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube-nocookie.com/embed/VIDEO_ID" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>
                `).replace("VIDEO_ID", placeholder.dataset.videoid);
            }
        }
        else {
            var placeholder = document.getElementById("youtube-placeholder");

            if (placeholder) {
                placeholder.innerHTML = (`
                    <a href="https://www.youtube.com/watch?v=VIDEO_ID" target="_blank">
                        <img src="https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg">
                    </a>
                `).replaceAll("VIDEO_ID", placeholder.dataset.videoid);
            }
        }
    }
})
