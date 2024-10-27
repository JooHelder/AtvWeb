// Função para scroll suave ao clicar nos links do menu
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Ajuste para compensar o header fixo
            behavior: 'smooth'
        });

        // Exibir apenas a seção correspondente
        mostrarApenasSecao(targetID);
    });
});

// Função para mostrar apenas a seção selecionada e ocultar as outras
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

// Mostrar todas as seções inicialmente
document.addEventListener('DOMContentLoaded', () => {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => secao.style.display = 'none');
    document.querySelector('section').style.display = 'block'; // Mostrar a primeira seção
});

// Função para criar um botão de voltar ao topo
const botaoVoltarTopo = document.createElement('button');
botaoVoltarTopo.innerText = 'Voltar ao Topo';
botaoVoltarTopo.id = 'voltarTopo';
botaoVoltarTopo.style.position = 'fixed';
botaoVoltarTopo.style.bottom = '20px';
botaoVoltarTopo.style.right = '20px';
botaoVoltarTopo.style.display = 'none'; // Inicialmente oculto
document.body.appendChild(botaoVoltarTopo);

// Mostrar o botão de voltar ao topo ao descer na página
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        botaoVoltarTopo.style.display = 'block';
    } else {
        botaoVoltarTopo.style.display = 'none';
    }
});

// Função para voltar ao topo ao clicar no botão
botaoVoltarTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
