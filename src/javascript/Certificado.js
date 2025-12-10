class Certificate {
    constructor(nome, instituicao, data, descricao, certificado) {
        this.nome=nome;
        this.instituicao=instituicao;
        this.data=data;
        this.descricao=descricao;
        this.certificado=certificado;
    }

    render() {
        return `
            <div class="certificado-card">
                <h3>${this.nome}</h3>
                <div>
                    <h4>${this.instituicao}</h4>
                    <h4>${this.data}</h4>
                </div>
                <p>${this.descricao}</p>
                <a href="${this.certificado}" target="_blank" rel="noopener noreferrer">View Certificate</a>
            </div>
        `
    }
}

class CertificateManager {
    constructor() {
        this.certificados = [];
        
        this.init();
    }

    init() {
        this.carregarCertificados();
        this.renderizarCertificados();
    }

    carregarCertificados() {
        this.certificados = [
            new Certificate("Intro to SQL", "Kaggle", "10/2025", "Introdução a linguagem SQL", "/arquivos/Intro to SQL.png")
        ]
    }
    renderizarCertificados() {
        const container = document.getElementById('certificadoContainer');
        container.innerHTML = '';

        this.certificados.forEach(certificado => {
            container.innerHTML += certificado.render();
        })
    }
}