document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
        mostrarApenasSecao(targetID);
    });
});
function mostrarApenasSecao(secaoID) {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => {
        if (secao.id === secaoID) {
            secao.style.display = 'block';
        } else {
            secao.style.display = 'none';
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => secao.style.display = 'none');
    document.querySelector('section').style.display = 'block';
});
const botaoVoltarTopo = document.createElement('button');
botaoVoltarTopo.innerText = 'Voltar ao Topo';
botaoVoltarTopo.id = 'voltarTopo';
botaoVoltarTopo.style.position = 'fixed';
botaoVoltarTopo.style.bottom = '20px';
botaoVoltarTopo.style.right = '20px';
botaoVoltarTopo.style.display = 'none';
document.body.appendChild(botaoVoltarTopo);
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        botaoVoltarTopo.style.display = 'block';
    } else {
        botaoVoltarTopo.style.display = 'none';
    }
});
botaoVoltarTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
