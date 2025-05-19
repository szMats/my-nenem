function validatePassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "2325"; // Senha correta

    if (password === correctPassword) {
        sessionStorage.setItem("authenticated", "true"); // Marca o usuário como autenticado na sessão
        window.location.href = "index.html"; // Redireciona para a página index.html
        return false; // Impede o envio do formulário
    } else {
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "Senha incorreta. Tente novamente.";
        return false; // Impede o envio do formulário
    }
}

// Verifica se o usuário está autenticado antes de acessar index.html
function checkAuthentication() {
    const isAuthenticated = sessionStorage.getItem("authenticated");
    if (isAuthenticated !== "true") {
        window.location.href = "home.html"; // Redireciona para a tela de login
    }
}

// Limpa a autenticação ao carregar a página de login
function clearAuthentication() {
    sessionStorage.removeItem("authenticated"); // Remove o estado de autenticação da sessão
}