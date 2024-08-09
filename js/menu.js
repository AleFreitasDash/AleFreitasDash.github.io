"use strict";

function addMenuButton() {
    // Cria o menu
    var menu = `
    <ul class="metismenu" id="menu">
        <li><a href="index.html" aria-expanded="false">
            <div class="menu-icon">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.29077 9L12.2908 2L21.2908 9V20C21.2908 20.5304 21.0801 21.0391 20.705 21.4142C20.3299 21.7893 19.8212 22 19.2908 22H5.29077C4.76034 22 4.25163 21.7893 3.87656 21.4142C3.50149 21.0391 3.29077 20.5304 3.29077 20V9Z" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.29077 22V12H15.2908V22" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>    
                <span class="nav-text">Inicio</span>
            </a>
        </li>
        <li><a href="page-meusfretes.html" aria-expanded="false">
            <div class="menu-icon">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.148 20.417C20.021 20.417 21.54 18.899 21.541 17.026V17.024V14.324C20.304 14.324 19.302 13.322 19.301 12.085C19.301 10.849 20.303 9.846 21.54 9.846H21.541V7.146C21.543 5.272 20.026 3.752 18.153 3.75H18.147H6.43502C4.56102 3.75 3.04202 5.268 3.04102 7.142V7.143V9.933C4.23502 9.891 5.23602 10.825 5.27802 12.019C5.27902 12.041 5.28002 12.063 5.28002 12.085C5.28102 13.32 4.28202 14.322 3.04702 14.324H3.04102V17.024C3.04002 18.897 4.55902 20.417 6.43202 20.417H6.43302H18.148Z" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6621 9.06303L13.2781 10.31C13.3381 10.432 13.4541 10.517 13.5891 10.537L14.9661 10.738C15.3071 10.788 15.4421 11.206 15.1961 11.445L14.2001 12.415C14.1021 12.51 14.0581 12.647 14.0801 12.782L14.3151 14.152C14.3731 14.491 14.0181 14.749 13.7141 14.589L12.4831 13.942C12.3621 13.878 12.2181 13.878 12.0971 13.942L10.8671 14.589C10.5621 14.749 10.2071 14.491 10.2651 14.152L10.5001 12.782C10.5231 12.647 10.4781 12.51 10.3801 12.415L9.38511 11.445C9.13911 11.206 9.27411 10.788 9.61411 10.738L10.9911 10.537C11.1261 10.517 11.2431 10.432 11.3031 10.31L11.9181 9.06303C12.0701 8.75503 12.5101 8.75503 12.6621 9.06303Z" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>    
                <span class="nav-text">Meus Fretes</span>
            </a>
        </li>
        <li><a href="page-buscarfretes.html" aria-expanded="false">
            <div class="menu-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7379 2.76181H8.08493C6.00493 2.75381 4.29993 4.41181 4.25093 6.49081V17.2038C4.20493 19.3168 5.87993 21.0678 7.99293 21.1148C8.02393 21.1148 8.05393 21.1158 8.08493 21.1148H16.0739C18.1679 21.0298 19.8179 19.2998 19.8029 17.2038V8.03781L14.7379 2.76181Z" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.4751 2.75V5.659C14.4751 7.079 15.6231 8.23 17.0431 8.234H19.7981" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.2882 15.3585H8.88818" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.2432 11.606H8.88721" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <span class="nav-text">Buscar Fretes</span>
            </a>
        </li>
        <li class="menu-title">Outras Ferramentas</li>
        <li><a class="has-arrow" href="javascript:void(0);" aria-expanded="false">
            <div class="menu-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7379 2.76181H8.08493C6.00493 2.75381 4.29993 4.41181 4.25093 6.49081V17.2038C4.20493 19.3168 5.87993 21.0678 7.99293 21.1148C8.02393 21.1148 8.05393 21.1158 8.08493 21.1148H16.0739C18.1679 21.0298 19.8179 19.2998 19.8029 17.2038V8.03781L14.7379 2.76181Z" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.4751 2.75V5.659C14.4751 7.079 15.6231 8.23 17.0431 8.234H19.7981" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.2882 15.3585H8.88818" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.2432 11.606H8.88721" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <span class="nav-text">Cadastro</span>
            </a>
            <ul aria-expanded="false">
                <li class="mini-dashboard">...</li>
                <li><a href="./page-meusdados.html">Meus Dados</a></li>
                <li><a href="./page-motorista.html">Motoristas</a></li>
                <li><a href="./page-veiculo.html">Veiculos</a></li>
            </ul>
        </li>
        <li><a href="page-disponibilidade.html" aria-expanded="false">
            <div class="menu-icon">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.395 4.17701L15.2224 7.82776C15.4015 8.18616 15.7472 8.43467 16.1481 8.49218L20.2361 9.08062C21.2461 9.22644 21.6481 10.4505 20.9171 11.1519L17.961 13.9924C17.6704 14.2718 17.5382 14.6733 17.6069 15.0676L18.3046 19.0778C18.4764 20.0698 17.4205 20.8267 16.5178 20.3574L12.864 18.4627C12.5058 18.2768 12.0768 18.2768 11.7176 18.4627L8.06378 20.3574C7.161 20.8267 6.10517 20.0698 6.27801 19.0778L6.97462 15.0676C7.04334 14.6733 6.9111 14.2718 6.62059 13.9924L3.66445 11.1519C2.93349 10.4505 3.33541 9.22644 4.34544 9.08062L8.43342 8.49218C8.83431 8.43467 9.18105 8.18616 9.36014 7.82776L11.1865 4.17701C11.6384 3.27433 12.9431 3.27433 13.395 4.17701Z" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>    
                <span class="nav-text">Disponibilidade</span>
            </a>
        </li>
    </ul>
    `;

    if ($("#menu").length === 0) {
        $("body").append(menu);
    }
}
