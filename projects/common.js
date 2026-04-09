document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById('pdfModal')) {
        const modalHTML = `
            <div id="pdfModal" class="modal" onclick="closePDF()">
                <div class="modal-content" onclick="event.stopPropagation()">
                    <span class="close-modal" onclick="closePDF()">&times;</span>
                    <iframe id="pdfFrame" src=""></iframe>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
});

function openPDF(pdfPath) {
    const modal = document.getElementById("pdfModal");
    const iframe = document.getElementById("pdfFrame");

    iframe.src = pdfPath;
    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}

function closePDF() {
    const modal = document.getElementById("pdfModal");
    const iframe = document.getElementById("pdfFrame");

    modal.style.display = "none";
    iframe.src = "";

    document.body.style.overflow = "auto";
}
