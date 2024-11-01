function updateClocks() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const binaryHours = parseInt(hours, 10).toString(2).padStart(6, '0');
    const binaryMinutes = parseInt(minutes, 10).toString(2).padStart(6, '0');
    const binarySeconds = parseInt(seconds, 10).toString(2).padStart(6, '0');
    document.getElementById('digital-clock').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('binary-clock').textContent = `Binário: ${binaryHours} ${binaryMinutes} ${binarySeconds}`;
}

setInterval(updateClocks, 1000);
updateClocks();

function generateBinaryCode() {
    const container = document.querySelector('.binary-container');
    const binaryCode = document.createElement('div');
    binaryCode.classList.add('binary-code');
    
    // Geração de código binário aleatório
    let binaryText = '';
    for (let i = 0; i < 100; i++) {
        binaryText += Math.floor(Math.random() * 2);
    }
    binaryCode.textContent = binaryText;

    // Posicionamento aleatório abaixo do menu
    binaryCode.style.top = Math.random() * container.clientHeight + 'px';
    binaryCode.style.left = Math.random() * 100 + '%';
    
    container.appendChild(binaryCode);

    // Remover o código binário após a animação
    setTimeout(() => {
        container.removeChild(binaryCode);
    }, 5000); // Mesma duração da animação
}

// Gerar novos códigos binários a cada segundo
setInterval(generateBinaryCode, 1000);
generateBinaryCode();


