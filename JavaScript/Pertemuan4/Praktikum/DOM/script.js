let container = document.getElementById('container');
let gambar = document.getElementById('gambar');
let clickCount = 0;

function tambahGambar() {
    clickCount++;
    if (clickCount === 1) {
        container.classList.add("background-color");
        gambar.style.display = "block";
    } else {
        let imageContainer = document.createElement("image-container");

        if(!imageContainer){
            imageContainer = document.createElement("div");
            imageContainer.classList.add("image-container");
            document.body.appendChild(imageContainer);
        }

        let gambarBaru = document.createElement("img");
        gambarBaru.src = "mantap.jpg";
        gambarBaru.alt = "Gambar Baru";
        imageContainer.appendChild(gambarBaru);
    }
}