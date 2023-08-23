function MontarTexto() {
  var ticket = document.getElementById("TICKET").value;
  var valorNF = document.getElementById("VALORNF").value;
  var km = document.getElementById("KM").value;

document.getElementById("WTICKET").innerHTML = ticket.replace("TICKET-", "");
document.getElementById("ETICKET").innerHTML = ticket.replace("TICKET-", "");
document.getElementById("titleE").innerHTML = "TICKET-" + ticket.replace("TICKET-", "");
document.getElementById("NF1TICKET").innerHTML = ticket.replace("TICKET-", "");
document.getElementById("NF2TICKET").innerHTML = ticket.replace("TICKET-", "");
document.getElementById("NF3TICKET").innerHTML = ticket.replace("TICKET-", "");
document.getElementById("WVALORNF").innerHTML = valorNF;
document.getElementById("EVALORNF").innerHTML = valorNF;
document.getElementById("EKM").innerHTML = km;
document.getElementById("WKM").innerHTML = km;

  var nfP = document.getElementById("NFP").value;
  var nfS = document.getElementById("NFS").value;
  if (nfS) {
  document.getElementById("ENFS").innerHTML = "<br>- Número da Nota Fiscal de Simples Remessa: " + nfS;
  document.getElementById("TNFS").innerHTML = "<br>- Número da **Nota Fiscal de Simples Remessa**: " + nfS;
  } else {
	  document.getElementById("ENFS").innerHTML = "";
	  document.getElementById("TNFS").innerHTML = "";
  };
  var sgs = document.getElementById("SGS").value;
  if (sgs) {
	document.getElementById("WSGS").innerHTML = "SGS Nº: " + sgs + "<br>";
	document.getElementById("ESGS").innerHTML = "SGS Nº: " + sgs + "<br>";
	document.getElementById("NF1SGS").innerHTML = "SGS " + sgs;
	document.getElementById("NF2SGS").innerHTML = "SGS " + sgs;
	document.getElementById("NF3SGS").innerHTML = "SGS " + sgs;
  } else {
	  document.getElementById("WSGS").innerHTML = "";
	  document.getElementById("ESGS").innerHTML = "";
	  document.getElementById("NF1SGS").innerHTML = "";
	document.getElementById("NF2SGS").innerHTML = "";
	document.getElementById("NF3SGS").innerHTML = "";
  };
  
document.getElementById("ENFP").innerHTML = nfP;
document.getElementById("TNFP").innerHTML = nfP;
document.getElementById("NF2NFP").innerHTML = nfP;

var modal = document.getElementById("MODAL").value;
  if (modal == "AÉREO PRÓXIMO VOO") {
	  document.getElementById("WMODAL").innerHTML = modal;
	  document.getElementById("TMODAL").innerHTML = modal;
	  document.getElementById("EMODAL").innerHTML = modal;
	  document.getElementById("EMODAL2").innerHTML = modal;
	  document.getElementById("AEREOATUALIZAR").innerHTML = "<b>**Por favor, esteja ciente que após a chegada, a liberação do seu pedido dependerá da autorização da Secretaria da Fazenda (SEFAZ).**</b>";
	  document.getElementById("EAEREO2").innerHTML = ", priorizando a coleta imediata para evitar a perda do voo.";
	  document.getElementById("EAEREO1").innerHTML = "<br>" + "Solicitamos, também, que seja providenciado o envio do conhecimento do embarque aéreo, AWB (Air Waybill) assim que possível." + "<br>";
	  document.getElementById("WATENDER").innerHTML = "*POR FAVOR, ENCAMINHAR A MALHA AÉREA*";
  } else if (modal == "AÉREO COLO COLO") {
	  document.getElementById("WMODAL").innerHTML = modal;
	  document.getElementById("TMODAL").innerHTML = modal;
	  document.getElementById("EMODAL").innerHTML = modal;
	  document.getElementById("EMODAL2").innerHTML = modal;
	  document.getElementById("EAEREO2").innerHTML = ", priorizando a coleta imediata para evitar a perda do voo.";
	  document.getElementById("EAEREO1").innerHTML = "<br>" + "Solicitamos, também, que seja providenciado o envio das passagens assim que possível." + "<br>";
	  document.getElementById("AEREOATUALIZAR").innerHTML = "";
	  document.getElementById("WATENDER").innerHTML = "*CONSEGUEM ATENDER*";
  } else {
	  document.getElementById("WMODAL").innerHTML = modal;
	  document.getElementById("TMODAL").innerHTML = modal;
	  document.getElementById("EMODAL").innerHTML = modal;
	  document.getElementById("EMODAL2").innerHTML = modal;
	  document.getElementById("EAEREO1").innerHTML = "";
	  document.getElementById("EAEREO2").innerHTML = "";
	  document.getElementById("AEREOATUALIZAR").innerHTML = "";
	  document.getElementById("WATENDER").innerHTML = "*CONSEGUEM ATENDER*";
  };
  var task = document.getElementById("TASK").value;
  var ntask = document.getElementById("NTASK").value;
  
document.getElementById("ETASK").innerHTML = task;
document.getElementById("WTASK").innerHTML = task;
document.getElementById("ENTASK").innerHTML = ntask;
document.getElementById("WNTASK").innerHTML = ntask;
document.getElementById("NF1NTASK").innerHTML = ntask;
document.getElementById("NF2NTASK").innerHTML = ntask;
document.getElementById("NF3NTASK").innerHTML = ntask;

  var coleta = document.getElementById("COLETA").value;
  var contatoC = document.getElementById("CONTATOC").value;
  var entrega = document.getElementById("ENTREGA").value;
  var contatoE = document.getElementById("CONTATOE").value;

document.getElementById("ECOLETA").innerHTML = coleta.toUpperCase();
document.getElementById("WCOLETA").innerHTML = coleta.toUpperCase();
document.getElementById("NF1COLETA").innerHTML = coleta.toUpperCase();
document.getElementById("NF2COLETA").innerHTML = coleta.toUpperCase();
document.getElementById("NF3COLETA").innerHTML = coleta.toUpperCase();
document.getElementById("ECONTATOC").innerHTML = contatoC.toUpperCase();
document.getElementById("WCONTATOC").innerHTML = contatoC.toUpperCase();
document.getElementById("NF1CONTATOC").innerHTML = contatoC.toUpperCase();
document.getElementById("NF2CONTATOC").innerHTML = contatoC.toUpperCase();
document.getElementById("NF3CONTATOC").innerHTML = contatoC.toUpperCase();
document.getElementById("EENTREGA").innerHTML = entrega.toUpperCase();
document.getElementById("WENTREGA").innerHTML = entrega.toUpperCase();
document.getElementById("NF1ENTREGA").innerHTML = entrega.toUpperCase();
document.getElementById("NF2ENTREGA").innerHTML = entrega.toUpperCase();
document.getElementById("NF3ENTREGA").innerHTML = entrega.toUpperCase();
document.getElementById("ECONTATOE").innerHTML = contatoE.toUpperCase();
document.getElementById("WCONTATOE").innerHTML = contatoE.toUpperCase();
document.getElementById("NF1CONTATOE").innerHTML = contatoE.toUpperCase();
document.getElementById("NF2CONTATOE").innerHTML = contatoE.toUpperCase();
document.getElementById("NF3CONTATOE").innerHTML = contatoE.toUpperCase();

  var Dcoleta = document.getElementById("DCOLETA").value;
  var SDcoleta = Dcoleta[8]+Dcoleta[9]+"/"+Dcoleta[5]+Dcoleta[6]+"/"+Dcoleta[0]+Dcoleta[1]+Dcoleta[2]+Dcoleta[3];
  if (Dcoleta < 1) {
  document.getElementById("WDCOLETA").innerHTML = "";
  document.getElementById("EDCOLETA").innerHTML = "";
  document.getElementById("TDCOLETA").innerHTML = "";
  } else {
  document.getElementById("WDCOLETA").innerHTML = " " + SDcoleta + "";
  document.getElementById("EDCOLETA").innerHTML = " " + SDcoleta + "";
  document.getElementById("TDCOLETA").innerHTML = " **" + SDcoleta + "**";
  };
  var Dentrega = document.getElementById("DENTREGA").value;
  var SDentrega = Dentrega[8]+Dentrega[9]+"/"+Dentrega[5]+Dentrega[6]+"/"+Dentrega[0]+Dentrega[1]+Dentrega[2]+Dentrega[3];
  if (Dentrega < 1) {
  document.getElementById("WDENTREGA").innerHTML = "";
  document.getElementById("EDENTREGA").innerHTML = "";
  document.getElementById("TDENTREGA").innerHTML = "";
  } else {
  document.getElementById("WDENTREGA").innerHTML = " " + SDentrega + "";
  document.getElementById("EDENTREGA").innerHTML = " " + SDentrega + "";
  document.getElementById("TDENTREGA").innerHTML = " **" + SDentrega + "**";
  };

  var altura = document.getElementById("ALTURA").value;
  var largura = document.getElementById("LARGURA").value;
  var comprimento = document.getElementById("COMPRIMENTO").value;
  var peso = document.getElementById("PESO").value;
  var volume = document.getElementById("VOLUME").value;
  var cx = document.getElementById("CX").value;

document.getElementById("EALTURA").innerHTML = altura;
document.getElementById("WALTURA").innerHTML = altura;
document.getElementById("ELARGURA").innerHTML = largura;
document.getElementById("WLARGURA").innerHTML = largura;
document.getElementById("ECOMPRIMENTO").innerHTML = comprimento;
document.getElementById("WCOMPRIMENTO").innerHTML = comprimento;
document.getElementById("EPESO").innerHTML = peso;
document.getElementById("WPESO").innerHTML = peso;
document.getElementById("EVOLUME").innerHTML = volume;
document.getElementById("WVOLUME").innerHTML = volume;
document.getElementById("ECX").innerHTML = cx;
document.getElementById("WCX").innerHTML = cx;

var XATRANSP = document.getElementById("TRANSPORTADORA").value;
  document.getElementById("ATRANSP").innerHTML = "**" + XATRANSP + "**";

  // Texto a ser adicionado antes de "https://www.google.com/maps/dir/"
  var inicioUrl = "https://www.google.com/maps/dir/";

  // Localização a ser pesquisada no Google Maps
  var coletaG = document.getElementById("COLETA").value;
  var entregaG = document.getElementById("ENTREGA").value;

  // Concatena os textos e a localização para formar o URL completo
  var url = inicioUrl + coletaG + "/" + entregaG;
document.getElementById("DGOOGLE").innerHTML = "<a class='btn btn-success' href='" + url + "' target='_black'>Abrir Google Maps</a>";

};

function salvarTexto() {
  
    var ticketA = document.getElementById("TICKET").value;
    var nome = document.getElementById("nomeA").value;
    var text = document.getElementById("textoA").value;
    text = text.replace(/\n/g, "\r\n");
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "Minhas anotações" + " - TICKET-" + ticketA.replace("TICKET-", "") + " - " + nome;
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
};

function copiar(idEspelhoWhatsapp) {
  var texto = document.createRange();
  texto.selectNode(idEspelhoWhatsapp);
  window.getSelection().removeAllRanges(); 
  window.getSelection().addRange(texto); 
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
};

function copiar(idEspelhoEmail) {
  var texto = document.createRange();
  texto.selectNode(idEspelhoEmail);
  window.getSelection().removeAllRanges(); 
  window.getSelection().addRange(texto); 
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
};

function copiar(idEspelhoTicket) {
  var texto = document.createRange();
  texto.selectNode(idEspelhoTicket);
  window.getSelection().removeAllRanges(); 
  window.getSelection().addRange(texto); 
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
};

function copiar(idEspelhoNF1) {
  var texto = document.createRange();
  texto.selectNode(idEspelhoNF1);
  window.getSelection().removeAllRanges(); 
  window.getSelection().addRange(texto); 
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
};

function copiar(idEspelhoNF2) {
  var texto = document.createRange();
  texto.selectNode(idEspelhoNF2);
  window.getSelection().removeAllRanges(); 
  window.getSelection().addRange(texto); 
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
};

function copiar(idEspelhoNF3) {
  var texto = document.createRange();
  texto.selectNode(idEspelhoNF3);
  window.getSelection().removeAllRanges(); 
  window.getSelection().addRange(texto); 
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
};

function copiar(idEspelhoBP) {
  var texto = document.createRange();
  texto.selectNode(idEspelhoBP);
  window.getSelection().removeAllRanges(); 
  window.getSelection().addRange(texto); 
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
};

function MontarTextoBP() {
	var ticketbp = document.getElementById("TICKET").value;
	var nfpbp = document.getElementById("NFP").value;
	var origembp = document.getElementById("COLETA").value;
	var destinobp = document.getElementById("ENTREGA").value;
	var docbp = document.getElementById("BPDOC").value;
	var nomebp = document.getElementById("BPNOME").value;
	var databp = document.getElementById("BPDATA").value;
	var databp1 = databp[8]+databp[9]+"."+databp[5]+databp[6]+"."+databp[0]+databp[1]+databp[2]+databp[3];
	var fcobp = document.getElementById("BPFCO").value;
	var fcdbp = document.getElementById("BPFCD").value;

document.getElementById("bpticket1").innerHTML = "TICKET-" + ticketbp.replace("TICKET-", "");
document.getElementById("bpticket2").innerHTML = "TICKET-" + ticketbp.replace("TICKET-", "");
document.getElementById("bpdocnum1").innerHTML = docbp;
document.getElementById("bpdocnum2").innerHTML = docbp;
document.getElementById("bpdocnum3").innerHTML = docbp;
document.getElementById("bpdata1").innerHTML = databp1;
document.getElementById("bpnfp1").innerHTML = nfpbp;
document.getElementById("bpnfp2").innerHTML = nfpbp;
document.getElementById("bpnomematricula1").innerHTML = nomebp;
document.getElementById("bporigem1").innerHTML = origembp;
document.getElementById("bpdestino1").innerHTML = destinobp;
document.getElementById("bpfcO1").innerHTML = " " + fcobp;
document.getElementById("bpfcD1").innerHTML = " " + fcdbp;
}

function tradutorIATA() {

var textAREA = document.getElementById("tradutor").value;

var ICAO1 = (textAREA.search(/ BSB /gi) >= 0) ? textAREA.replace(/BSB/gi, '<b> **BSB - Aeroporto Internacional de Brasília / Presidente Jucelino Kubitschek, Brasília - DF** </b>') : textAREA;
var ICAO2 = (textAREA.search(/ CGH /gi) >= 0) ? ICAO1.replace(/CGH/gi, '<b> **CGH - Aeroporto Internacional de São Paulo / Congonhas, Congonhas - SP** </b>') : ICAO1;
var ICAO3 = (textAREA.search(/ GIG /gi) >= 0) ? ICAO2.replace(/GIG/gi, '<b> **GIG - Aeroporto Internacional do Rio de Janeiro / Galeão-Antônio Carlos Jobim, Galeão - RJ** </b>') : ICAO2;
var ICAO4 = (textAREA.search(/ SSA /gi) >= 0) ? ICAO3.replace(/SSA/gi, '<b> **SSA - Aeroporto Internacional de Salvador / Deputado Luis Eduardo Magalhães, Salvador - BA** </b>') : ICAO3;
var ICAO5 = (textAREA.search(/ FLN /gi) >= 0) ? ICAO4.replace(/FLN/gi, '<b> **FLN - Aeroporto Internacional de Florianópolis / Hercílio Luz, Florianópolis - SC** </b>') : ICAO4;
var ICAO6 = (textAREA.search(/ POA /gi) >= 0) ? ICAO5.replace(/POA/gi, '<b> **POA - Aeroporto Internacional de Porto Alegre / Salgado Filho, PortoAlegre - RS** </b>') : ICAO5;
var ICAO7 = (textAREA.search(/ VCP /gi) >= 0) ? ICAO6.replace(/VCP/gi, '<b> **VCP - Aeroporto Internacional de Viracopos / Campinas, Campinas - SP** </b>') : ICAO6;
var ICAO8 = (textAREA.search(/ REC /gi) >= 0) ? ICAO7.replace(/REC/gi, '<b> **REC - Aeroporto Internacional do Recife/ Guararapes – Gilberto Freyre, Recife - PE** </b>') : ICAO7;
var ICAO9 = (textAREA.search(/ CWB /gi) >= 0) ? ICAO8.replace(/CWB/gi, '<b> **CWB - Aeroporto Internacional de Curitiba / Afonso Pena, Curitiba - PR** </b>') : ICAO8;
var ICAO10 = (textAREA.search(/ BEL /gi) >= 0) ? ICAO9.replace(/BEL/gi, '<b> **BEL - Aeroporto Internacional de Belém / Val de Cans, Belém - PA** </b>') : ICAO9;
var ICAO11 = (textAREA.search(/ VIX /gi) >= 0) ? ICAO10.replace(/VIX/gi, '<b> **VIX - Aeroportode Vitória – Eurico de Aguiar Salles, Vitória - ES** </b>') : ICAO10;
var ICAO12 = (textAREA.search(/ SDU /gi) >= 0) ? ICAO11.replace(/SDU/gi, '<b> **SDU - AerorportoSantos Dumont, SantosDumont - RJ** </b>') : ICAO11;
var ICAO13 = (textAREA.search(/ CGB /gi) >= 0) ? ICAO12.replace(/CGB/gi, '<b> **CGB - Aeroporto Internacional de Cuiabá / Marechal Rondon, Cuiabá - MT** </b>') : ICAO12;
var ICAO14 = (textAREA.search(/ CGR /gi) >= 0) ? ICAO13.replace(/CGR/gi, '<b> **CGR - Aeroporto Internacional de Campo Grande, CampoGrande - MS** </b>') : ICAO13;
var ICAO15 = (textAREA.search(/ FOR /gi) >= 0) ? ICAO14.replace(/FOR/gi, '<b> **FOR - Aeroporto Internacional de Fortaleza / Pinto Martins, Fortaleza - CE** </b>') : ICAO14;
var ICAO16 = (textAREA.search(/ MCP /gi) >= 0) ? ICAO15.replace(/MCP/gi, '<b> **MCP - Aeroporto Internacional de Macapá, Macapá - AP** </b>') : ICAO15;
var ICAO17 = (textAREA.search(/ MGF /gi) >= 0) ? ICAO16.replace(/MGF/gi, '<b> **MGF - AeroportoRegional de Maringá / Silvio Name Junior, Maringá - PR** </b>') : ICAO16;
var ICAO18 = (textAREA.search(/ GYN /gi) >= 0) ? ICAO17.replace(/GYN/gi, '<b> **GYN - Aeroportode Goiânia / Santa Genoveva, Goiânia - GO** </b>') : ICAO17;
var ICAO19 = (textAREA.search(/ NVT /gi) >= 0) ? ICAO18.replace(/NVT/gi, '<b> **NVT - Aeroporto Internacional de Navegantes / Ministro Victor Konder, Navegantes - SC** </b>') : ICAO18;
var ICAO20 = (textAREA.search(/ MAO /gi) >= 0) ? ICAO19.replace(/MAO/gi, '<b> **MAO - Aeroporto Internacional de Manaus / Eduardo Gomes, Manaus - AM** </b>') : ICAO19;
var ICAO21 = (textAREA.search(/ NAT /gi) >= 0) ? ICAO20.replace(/NAT/gi, '<b> **NAT - Aeroporto Internacional de Natal / Augusto Severo, Natal - RN** </b>') : ICAO20;
var ICAO22 = (textAREA.search(/ BPS /gi) >= 0) ? ICAO21.replace(/BPS/gi, '<b> **BPS - Aeroporto Internacional de Porto Seguro, PortoSeguro - BA** </b>') : ICAO21;
var ICAO23 = (textAREA.search(/ MCZ /gi) >= 0) ? ICAO22.replace(/MCZ/gi, '<b> **MCZ - Aeroportode Maceió / Zumbi dos Palmares, Maceió - AL** </b>') : ICAO22;
var ICAO24 = (textAREA.search(/ PMW /gi) >= 0) ? ICAO23.replace(/PMW/gi, '<b> **PMW - Aeroportode Palmas/Brigadeiro Lysias Rodrigues, Palmas - TO** </b>') : ICAO23;
var ICAO25 = (textAREA.search(/ SLZ /gi) >= 0) ? ICAO24.replace(/SLZ/gi, '<b> **SLZ - Aeroporto Internacional de São Luís / Marechal Cunha Machado, SãoLuis - MA** </b>') : ICAO24;
var ICAO26 = (textAREA.search(/ GRU /gi) >= 0) ? ICAO25.replace(/GRU/gi, '<b> **GRU - Aeroporto Internacional de São Paulo/Guarulhos-Governador André Franco Motoro, Guarulhos - SP** </b>') : ICAO25;
var ICAO27 = (textAREA.search(/ LDB /gi) >= 0) ? ICAO26.replace(/LDB/gi, '<b> **LDB - Aeroportode Londrina / Governador José Richa, Londrina - PR** </b>') : ICAO26;
var ICAO28 = (textAREA.search(/ PVH /gi) >= 0) ? ICAO27.replace(/PVH/gi, '<b> **PVH - Aeroporto Internacional de Porto Velho / Governador Jorge Teixeira de Oliveira, PortoVelho - RO** </b>') : ICAO27;
var ICAO29 = (textAREA.search(/ RBR /gi) >= 0) ? ICAO28.replace(/RBR/gi, '<b> **RBR - Aeroporto Internacional de Rio Branco / Plácido de Castro, RioBranco - AC** </b>') : ICAO28;
var ICAO30 = (textAREA.search(/ JOI /gi) >= 0) ? ICAO29.replace(/JOI/gi, '<b> **JOI - Aeroportode Joinville / Lauro Carneiro de Loyola, Joinville - SC** </b>') : ICAO29;
var ICAO31 = (textAREA.search(/ UDI /gi) >= 0) ? ICAO30.replace(/UDI/gi, '<b> **UDI - Aeroportode Uberlândia / Ten. Cel. Av. César Bombonato, Uberlândia - MG** </b>') : ICAO30;
var ICAO32 = (textAREA.search(/ CXJ /gi) >= 0) ? ICAO31.replace(/CXJ/gi, '<b> **CXJ - AeroportoRegional de Caxias do Sul / Hugo Cantergiani, Caxiasdo Sul - RS** </b>') : ICAO31;
var ICAO33 = (textAREA.search(/ IGU /gi) >= 0) ? ICAO32.replace(/IGU/gi, '<b> **IGU - Aeroporto Internacional de Foz do Iguaçu, Fozdo Iguaçu - PR** </b>') : ICAO32;
var ICAO34 = (textAREA.search(/ THE /gi) >= 0) ? ICAO33.replace(/THE/gi, '<b> **THE - Aeroportode Teresina – Senador Petrônio Portella, Teresina - PI** </b>') : ICAO33;
var ICAO35 = (textAREA.search(/ AJU /gi) >= 0) ? ICAO34.replace(/AJU/gi, '<b> **AJU - Aeroporto Internacional de Aracaju / Santa Maria, Aracaju - SE** </b>') : ICAO34;
var ICAO36 = (textAREA.search(/ JPA /gi) >= 0) ? ICAO35.replace(/JPA/gi, '<b> **JPA - Aeroporto Internacional de João Pessoa / Presidente Castro Pinto, JoãoPessoa - PB** </b>') : ICAO35;
var ICAO37 = (textAREA.search(/ PNZ /gi) >= 0) ? ICAO36.replace(/PNZ/gi, '<b> **PNZ - Aeroportode Petrolina / Senador Nilo Coelho, Petrolina - PE** </b>') : ICAO36;
var ICAO38 = (textAREA.search(/ CNF /gi) >= 0) ? ICAO37.replace(/CNF/gi, '<b> **CNF - Aeroporto Internacional de Minas Gerais / Confins – Tancredo Neves, Confins - MG** </b>') : ICAO37;
var ICAO39 = (textAREA.search(/ BVB /gi) >= 0) ? ICAO38.replace(/BVB/gi, '<b> **BVB - Aeroporto Internacional de Boa Vista / Atlas Brasil Cantanhede, BoaVista - RR** </b>') : ICAO38;
var ICAO40 = (textAREA.search(/ CPV /gi) >= 0) ? ICAO39.replace(/CPV/gi, '<b> **CPV - Aeroportode Campina Grande / Presidente João Suassuna, CampinaGrande - PB** </b>') : ICAO39;
var ICAO41 = (textAREA.search(/ STM /gi) >= 0) ? ICAO40.replace(/STM/gi, '<b> **STM - Aeroportode Santarém / Maestro Wilson Fonseca, Santarém - PA** </b>') : ICAO40;
var ICAO42 = (textAREA.search(/ IOS /gi) >= 0) ? ICAO41.replace(/IOS/gi, '<b> **IOS - Aeroportode Ilhéus/Bahia-Jorge Amado, Ilhéus - BA** </b>') : ICAO41;
var ICAO43 = (textAREA.search(/ JDO /gi) >= 0) ? ICAO42.replace(/JDO/gi, '<b> **JDO - Aeroportode Juazeiro do Norte – Orlando Bezerra, Juazeirodo Norte - CE** </b>') : ICAO42;
var ICAO44 = (textAREA.search(/ IMP /gi) >= 0) ? ICAO43.replace(/IMP/gi, '<b> **IMP - Aeroportode Imperatriz – Prefeito Renato Moreira, Imperatriz - MA** </b>') : ICAO43;
var ICAO45 = (textAREA.search(/ XAP /gi) >= 0) ? ICAO44.replace(/XAP/gi, '<b> **XAP - Aeroportode Chapecó – Serafin Enoss Bertaso, Chapecó - SC** </b>') : ICAO44;
var ICAO46 = (textAREA.search(/ MAB /gi) >= 0) ? ICAO45.replace(/MAB/gi, '<b> **MAB - Aeroportode Marabá, Marabá - PA** </b>') : ICAO45;
var ICAO47 = (textAREA.search(/ CZS /gi) >= 0) ? ICAO46.replace(/CZS/gi, '<b> **CZS - Aeroporto Internacional de Cruzeiro do Sul, Cruzeirodo Sul - AC** </b>') : ICAO46;
var ICAO48 = (textAREA.search(/ PPB /gi) >= 0) ? ICAO47.replace(/PPB/gi, '<b> **PPB - AeroportoEstadual de Presidente Prudente, PresidentePrudente - SP** </b>') : ICAO47;
var ICAO49 = (textAREA.search(/ CFB /gi) >= 0) ? ICAO48.replace(/CFB/gi, '<b> **CFB - Aeroporto Internacional de Cabo Frio, CaboFrio - RJ** </b>') : ICAO48;
var ICAO50 = (textAREA.search(/ FEN /gi) >= 0) ? ICAO49.replace(/FEN/gi, '<b> **FEN - Aeroportode Fernando de Noronha, Fernandode Noronha - PE** </b>') : ICAO49;
var ICAO51 = (textAREA.search(/ JTC /gi) >= 0) ? ICAO50.replace(/JTC/gi, '<b> **JTC - AeroportoEstadual de Bauru/Arealva, Bauru - SP** </b>') : ICAO50;
var ICAO52 = (textAREA.search(/ MOC /gi) >= 0) ? ICAO51.replace(/MOC/gi, '<b> **MOC - Aeroportode Montes Claros/Mário Ribeiro, Montes Claros - MG** </b>') : ICAO51;
var ICAO53 = (textAREA.search(/ JPO /gi) >= 0) ? ICAO52.replace(/JPO/gi, '<b> **JPO - Aeroporto Regional de Patos / Brigadeiro Firmino Ayres Patos, PB** </b>') : ICAO52;

var RESULT = ICAO53;

document.getElementById("resultIATA").innerHTML = RESULT

};
