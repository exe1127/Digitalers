class CustomHeader extends HTMLElement {
    constructor() {
        super();
        // Attach a shadow DOM tree to this instance
        this.attachShadow({ mode: 'open' });

        // Create elements in the shadow DOM
        const template = document.createElement('template');
        template.innerHTML = `

            <style>
                header{
                        background-color: var(--primary-color);
                        color: var(--white);
                        padding: 15px 20px;
                        text-align: center;
                    }

                nav ul{
                    list-style:none;
                    padding: 0;
                    text-align: right;
                }

                nav ul li{
                    display: inline;
                    margin-right: 10px;
                }

                nav ul li a{
                    text-decoration: solid;
                    color: #000;
                    font-size: x-large;
                }

                img {
                        display: flex;
                        justify-content: flex-start; 
                }        
                
            </style>
           
        <header class="flex items-center justify-between rounded-lg shadow-lg p-6 mt-1">  
                <a class="nav-link" href="index.html"><img src="img/NFS.png"  alt="Logo de la Empresa" class="logo" id="logo"> </a>
            <nav>
                <ul class="flex space-x-4">
                    <li><a class="nav-link" href="index.html">Inicio</a></li>
                    <li><a class="nav-link" href="servicios.html">Servicios</a></li>
                    <li><a class="nav-link" href="nosotros.html">Nosotros</a></li>
                    <li><a class="nav-link" href="noticias.html">Noticias</a></li>
                    <li><a class="nav-link" href="contacto.html">Contacto</a></li>
                    <li><a class="nav-link" href="turno.html">Turno</a></li>
                </ul>
            </nav>
        </header>

        `;

        // Append the template content to the shadow root
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

// Define the new element
customElements.define('custom-header', CustomHeader);
