class Tecnologia {
    constructor(nome, imagem, tipo) {
        this.imagem=imagem;
        this.nome=nome;
        this.tipo=tipo;
    }

    render() {
        return `
            <div>
                <img src="${this.imagem}" alt="${this.nome}">
            </div>
        `;
    }

    renderList() {
        return `
            <div class="tech">
                <img src="${this.imagem}" alt="${this.nome}">
                <p>${this.nome}</p>
            </div>
        `
    }
}

class Projeto {
    constructor(nome, imagem, tecnologiaUsada, descricao) {
        this.imagem=imagem;
        this.nome=nome;
        this.tecnologiaUsada=tecnologiaUsada;
        this.descricao=descricao;
    }

    render() {
        return `
            <div class="projeto-card">
                <img src="${this.imagem}" alt="imagem">
                <div>
                    <h2>${this.nome}</h2>
                    <span>
                        <div id=${this.nome} class="list-tech">
                            
                        </div>
                    </span>
                    <p>${this.descricao}</p>
                    <a href="${this.nome}.html">
                    <button>Read more</button>
                    </a>
                </div>
            </div>
        `;
    }
}

class TechManager {
    constructor() {
        this.tecnologias = [];
        this.projetos = [];
        this.init();
    }

    init() {
        this.carregarTecnologias();
        this.renderizarTecnologias();
        this.carregarProjetos();
        this.renderizarProjetos();
        this.renderizarTecnologiasDosProjetos();
    }

    carregarTecnologias() {
        this.tecnologias = [
            new Tecnologia("Python", "https://img.icons8.com/?size=100&id=13441&format=png&color=000000", "L"),
            new Tecnologia("Java", "https://img.icons8.com/?size=100&id=13679&format=png&color=000000", "L"),
            new Tecnologia("JavaScript", "https://img.icons8.com/?size=100&id=108784&format=png&color=000000", "L"),
            new Tecnologia("HTML", "https://img.icons8.com/?size=100&id=20909&format=png&color=000000", "L"),
            new Tecnologia("CSS", "https://img.icons8.com/?size=100&id=21278&format=png&color=000000", "L"),
            new Tecnologia("MySQL", "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000", "BD"),
            new Tecnologia("Figma", "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000", "F"),
            new Tecnologia("JavaFX", "https://img.icons8.com/?size=100&id=13679&format=png&color=000000", "BF"),
            new Tecnologia("Flask", "https://skillicons.dev/icons?i=flask", "BF"),
            new Tecnologia("Git", "https://icon.icepanel.io/Technology/svg/Git.svg", "F"),
            new Tecnologia("GitHub", "https://img.icons8.com/?size=100&id=62856&format=png&color=000000", "F"),
            new Tecnologia("Maven", "https://icon.icepanel.io/Technology/svg/Apache-Maven.svg", "F"),
            new Tecnologia("Jira", "https://icon.icepanel.io/Technology/svg/Jira.svg", "F"),
            new Tecnologia("Canva", "https://icon.icepanel.io/Technology/svg/Canva.svg", "F"),
            new Tecnologia("Vercel", "https://skillicons.dev/icons?i=vercel", "F")
        ]
    }

    renderizarTecnologias() {
        const container = document.getElementById('tecnologiaContainer');
        if (!container) {
            return;
        }
        container.innerHTML = '';

        this.tecnologias.forEach(tecnologia => {
            container.innerHTML += tecnologia.render();
        })
    }

    carregarProjetos() {
        const [python, java, js, html, css, mysql, figma, javafx, flask, git, github, maven, jira, canva] = this.tecnologias;

        this.projetos = [
            new Projeto("SIRAAS", "/img/siraas.jpg", [python, flask, html, css, figma, canva], "SIRAAS é um site de envio e gerenciamento de atestados médicos e times scrum. Seu sistema inclui gráficos estatísticos e exportação de arquivos.")
        ]
    }

    renderizarProjetos() {
        const container = document.getElementById('projetoContainer');
        container.innerHTML = '';

        this.projetos.forEach(projeto => {
            container.innerHTML += projeto.render();
        })
    }

    renderizarTecnologiasDosProjetos() {
        this.projetos.forEach(projeto => {
            this.renderTechUsada(projeto.tecnologiaUsada, projeto.nome);
        });
    }

    renderTechUsada(lista, projeto) {
        const container = document.getElementById(projeto);
        container.innerHTML = '';

        lista.forEach(t => {
            container.innerHTML += t.renderList();
        })
    }
}