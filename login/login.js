const usuariosValidos = [
    { usuario: "Eric", senha: "123", nome: "Eric Lucas da Silva Santos", imagem: "ericlucas.jpg" },
    { usuario: "Marcio", senha: "123", nome: "Márcio Ricardo Oliveira Sousa", imagem: "marcio.jpg" },
    { usuario: "Andreia", senha: "123", nome: "Andréia Maria Menezes O. Sousa", imagem: "andreia.jpg" },
    { usuario: "Kelvin", senha: "123", nome: "Kelvin Rodrigues de Miranda", imagem: ""}
];

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const username = document.getElementById('Publicador').value;
            const password = document.getElementById('password').value;

            const user = usuariosValidos.find(u => u.usuario === username && u.senha === password);

            if (user) {
                const nextUrl = `/next-page.html?Publicador=${encodeURIComponent(user.nome)}&Imagem=${encodeURIComponent(user.imagem)}`;
                location.href = nextUrl;
            } else {
                alert('Login falhou. Verifique suas credenciais e tente novamente');
            }
        });
    }
});
