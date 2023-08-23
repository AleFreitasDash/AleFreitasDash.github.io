function MontarTexto() {
  var ticket = document.getElementById("TICKET").value;
  var valorNF = document.getElementById("VALORNF").value;
  var km = document.getElementById("KM").value;

document.getElementById("ETICKET").innerHTML = ticket.replace("TICKET-", "");
document.getElementById("titleE").innerHTML = "TICKET-" + ticket.replace("TICKET-", "");
document.getElementById("NF1TICKET").innerHTML = ticket.replace("TICKET-", "");
document.getElementById("NF2TICKET").innerHTML = ticket.replace("TICKET-", "");
document.getElementById("NF3TICKET").innerHTML = ticket.replace("TICKET-", "");
document.getElementById("EVALORNF").innerHTML = valorNF;
document.getElementById("EKM").innerHTML = km;
document.getElementById("BIPTICKET").innerHTML = "TICKET-" + ticket.replace("TICKET-", "");

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
	document.getElementById("ESGS").innerHTML = "SGS Nº: " + sgs + "<br>";
	document.getElementById("NF1SGS").innerHTML = "SGS " + sgs;
	document.getElementById("NF2SGS").innerHTML = "SGS " + sgs;
	document.getElementById("NF3SGS").innerHTML = "SGS " + sgs;
	document.getElementById("BIPSGS").innerHTML = " SGS " + sgs;
  } else {
	  document.getElementById("ESGS").innerHTML = "";
	  document.getElementById("NF1SGS").innerHTML = "";
	document.getElementById("NF2SGS").innerHTML = "";
	document.getElementById("NF3SGS").innerHTML = "";
	document.getElementById("BIPSGS").innerHTML = "";
  };
  
document.getElementById("ENFP").innerHTML = nfP;
document.getElementById("TNFP").innerHTML = nfP;
document.getElementById("NF2NFP").innerHTML = nfP;

var modal1 = document.getElementById("MODAL").value;
  if (modal1 == "RODO FRACIONADO") {
	  document.getElementById("TMODAL").innerHTML = modal1;
	  document.getElementById("EMODAL").innerHTML = modal1;
	  document.getElementById("EMODAL2").innerHTML = modal1;
	  document.getElementById("AEREOATUALIZAR").innerHTML = "";
  } else {
	  document.getElementById("TMODAL").innerHTML = modal1;
	  document.getElementById("EMODAL").innerHTML = modal1;
	  document.getElementById("EMODAL2").innerHTML = modal1;
	  document.getElementById("AEREOATUALIZAR").innerHTML = "<b>**Por favor, esteja ciente que após a chegada, a liberação do seu pedido dependerá da autorização da Secretaria da Fazenda (SEFAZ).**</b>";
  };
  
  var task = document.getElementById("TASK").value;
  var ntask = document.getElementById("NTASK").value;
  if (ntask) {
document.getElementById("ETASK").innerHTML = task;
document.getElementById("ENTASK").innerHTML = " Nº: " + ntask + "<br>";
document.getElementById("NF1NTASK").innerHTML = ntask;
document.getElementById("NF2NTASK").innerHTML = ntask;
document.getElementById("NF3NTASK").innerHTML = ntask;
document.getElementById("BIPNTASK").innerHTML = " " + task + " " + ntask;
  } else {
	  document.getElementById("ETASK").innerHTML = "";
document.getElementById("ENTASK").innerHTML = "";
document.getElementById("NF1NTASK").innerHTML = "";
document.getElementById("NF2NTASK").innerHTML = "";
document.getElementById("NF3NTASK").innerHTML = "";
document.getElementById("BIPNTASK").innerHTML = "";
  };

  var coleta = document.getElementById("COLETA").value;
  var contatoC = document.getElementById("CONTATOC").value;
  var entrega = document.getElementById("ENTREGA").value;
  var contatoE = document.getElementById("CONTATOE").value;

document.getElementById("ECOLETA").innerHTML = coleta.toUpperCase();
document.getElementById("NF1COLETA").innerHTML = coleta.toUpperCase();
document.getElementById("NF2COLETA").innerHTML = coleta.toUpperCase();
document.getElementById("NF3COLETA").innerHTML = coleta.toUpperCase();
document.getElementById("BIPCOLETA").innerHTML = coleta.toUpperCase();
document.getElementById("ECONTATOC").innerHTML = contatoC.toUpperCase();
document.getElementById("NF1CONTATOC").innerHTML = contatoC.toUpperCase();
document.getElementById("NF2CONTATOC").innerHTML = contatoC.toUpperCase();
document.getElementById("NF3CONTATOC").innerHTML = contatoC.toUpperCase();
document.getElementById("EENTREGA").innerHTML = entrega.toUpperCase();
document.getElementById("NF1ENTREGA").innerHTML = entrega.toUpperCase();
document.getElementById("NF2ENTREGA").innerHTML = entrega.toUpperCase();
document.getElementById("NF3ENTREGA").innerHTML = entrega.toUpperCase();
document.getElementById("BIPENTREGA").innerHTML = entrega.toUpperCase();
document.getElementById("ECONTATOE").innerHTML = contatoE.toUpperCase();
document.getElementById("NF1CONTATOE").innerHTML = contatoE.toUpperCase();
document.getElementById("NF2CONTATOE").innerHTML = contatoE.toUpperCase();
document.getElementById("NF3CONTATOE").innerHTML = contatoE.toUpperCase();

  var Dcoleta = document.getElementById("DCOLETA").value;
  var SDcoleta = Dcoleta[8]+Dcoleta[9]+"/"+Dcoleta[5]+Dcoleta[6]+"/"+Dcoleta[0]+Dcoleta[1]+Dcoleta[2]+Dcoleta[3];
  if (Dcoleta < 1) {
  document.getElementById("EDCOLETA").innerHTML = "";
  document.getElementById("TDCOLETA").innerHTML = "";
  } else {
  document.getElementById("EDCOLETA").innerHTML = " " + SDcoleta + "";
  document.getElementById("TDCOLETA").innerHTML = " **" + SDcoleta + "**";
  };
  var Dentrega = document.getElementById("DENTREGA").value;
  var SDentrega = Dentrega[8]+Dentrega[9]+"/"+Dentrega[5]+Dentrega[6]+"/"+Dentrega[0]+Dentrega[1]+Dentrega[2]+Dentrega[3];
  if (Dentrega < 1) {
  document.getElementById("EDENTREGA").innerHTML = "";
  document.getElementById("TDENTREGA").innerHTML = "";
  } else {
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
document.getElementById("ELARGURA").innerHTML = largura;
document.getElementById("ECOMPRIMENTO").innerHTML = comprimento;
document.getElementById("EPESO").innerHTML = peso;
document.getElementById("BIPPESO").innerHTML = peso;
document.getElementById("EVOLUME").innerHTML = volume;
document.getElementById("ECX").innerHTML = cx;
document.getElementById("BIPVOL").innerHTML = volume + " " + cx;

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

function copiar(idEspelhoBIP) {
  var texto = document.createRange();
  texto.selectNode(idEspelhoBIP);
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

var infoArray = {
  "C057": "AC - Acre<br>TCO QNDB<br>RD - NWOP-TCO<br>CNPJ: 02421421004532<br>FILIAL: C057<br>CENTRO: CB21 - Back Office - AC<br>CENTRO: CO45 - Regional Rio Branco - AC<br>R. MAJOR LADISLAU FERREIRA, 30<br><br>",
  "I045": "AC - Acre<br>TCO QNDB<br>RD - NWOP-TCO<br>CNPJ: 02421421004532<br>FILIAL: I045<br>CENTRO: IO45 - Regional Rio Branco 2 - AC<br>R. MAJOR LADISLAU FERREIRA, 30<br><br>",
  "C638": "AL - Alagoas<br>TNE QNDN<br>RD - NWOP-TNE<br>CNPJ: 02421421023677<br>FILIAL: C638<br>CENTRO: CB48 - Back Office - AL<br>AV. COMENDADOR GUSTAVO PAIVA, 2990, 109<br><br>",
  "I015": "AL - Alagoas<br>TNE QNDN<br>RD - NWOP-TNE<br>CNPJ: 02421421001517<br>FILIAL: I015<br>CENTRO: CB33 - Back Office - AL<br>CENTRO: CO54 - Regional Maceió - AL<br>CENTRO: IO15 - Regional Maceió 2 - AL<br>PROFESSOR JOSÉ DA SILVEIRA CAMERINO 340<br><br>",
  "C132": "AM - Amazonas<br>TCO QNDP<br>RD - NWOP-TCO<br>CNPJ: 02421421019726<br>FILIAL: C132<br>CENTRO: CB43 - Back Office - AM<br>AV. DJALMA BATISTA, 482<br><br>",
  "I031": "AM - Amazonas<br>TCO QNDP<br>RD - NWOP-TCO<br>CNPJ: 02421421003137<br>FILIAL: I031<br>CENTRO: CB05 - Back Office - AM<br>CENTRO: CO37 - Regional Manaus - AM<br>CENTRO> IO31 - Regional Manaus - AM<br>AV. GUILHERME PARAENSE, 93<br><br>",
  "C027": "AP - Amapá<br>TCO QNDP<br>RD - NWOP-TCO<br>CNPJ: 02421421012128<br>FILIAL: C027<br>CENTRO: CB10 - Back Office - AP<br>CENTRO: CO40 - Regional Macapá - AP<br>RUA SAO JOSE, 2067<br><br>",
  "I022": "AP - Amapá<br>TCO QNDP<br>RD - NWOP-TCO<br>CNPJ: 02421421002246<br>FILIAL: I022<br>CENTRO: IO22 - Regional Macapá - AP<br>RUA PROFESSOR TOSTES, S/N<br><br>",
  "C362": "BA - Bahia<br>TNE QNDN<br>RD - NWOP-TNE<br>CNPJ: 02421421018754<br>FILIAL: C362<br>CENTRO: CO36 - Regional Salvador - BA<br>CENTRO: CO49 - Regional Salvador - BA<br>AL SALVADOR, 1057, 2206 2214<br><br>",
  "C571": "BA - Bahia<br>TNE QNDN<br>RD - NWOP-TNE<br>CNPJ: 02421421000979<br>FILIAL: C571<br>CENTRO: CB17 - Back Office - BA<br>CENTRO: CO26 - Regional Salvador - BA<br>CENTRO: CD39 - CDL - BA<br>AV. ESTADOS UNIDOS, 737, TERREO<br><br>",
  "I009": "BA - Bahia<br>TNE QNDN<br>RD - NWOP-TNE<br>CNPJ: 02421421000979<br>FILIAL: I009<br>CENTRO: CO22 - Regional Salvador - BA<br>CENTRO: IO09 - Regional Salvador - BA<br>AV. ESTADOS UNIDOS, 737<br><br>",
  "C559": "CE - Ceará<br>TNE QNDN<br>RD - NWOP-TNE<br>CNPJ: 02421421008015<br>FILIAL: C559<br>CENTRO: CB37 - Back Office - CE<br>CENTRO: CD32 - CDL - CE<br>CENTRO: CO58 - Regional Fortaleza - CE<br>AV. BARÃO STUDART, 2575, SL 1, 2, 3, 4<br><br>",
  "I008": "CE - Ceará<br>TNE QNDN<br>RD - NWOP-TNE<br>CNPJ: 02421421000898<br>FILIAL: I008<br>CENTRO: IO08 - IO08 - Regional Fortaleza - CE<br>AV. TRISTÃO GONÇALVES, 1461, 1477<br><br>",
  "C038": "DF - Distrito Federal<br>TCO QNDB<br>RD - NWOP-TCO<br>CNPJ: 02421421013957<br>FILIAL: C038<br>CENTRO: CB09 - Back Office - DF<br>CENTRO: CO52 - Regional Brasília - DF<br>R. SIG SUL QUADRA 04, 217<br><br>",
  "C108": "DF - Distrito Federal<br>TCO QNDB<br>RD - NWOP-TCO<br>CNPJ: 02421421013795<br>FILIAL: C108<br>CENTRO: CD03 - CDL - DF<br>AE ESPECIAL INDUSTRIA - LOTES 2, 3, 4 11<br><br>",
  "I029": "DF - Distrito Federal<br>TCO QNDB<br>RD - NWOP-TCO<br>CNPJ: 02421421002912<br>FILIAL: I029<br>CENTRO: IO29 - Regional Brasília - DF<br>SGO. NORTE, QUADRA 05, 405<br><br>",
  "C031": "ES - Espirito Santo<br>TRJ QNDR<br>RD - NWOP-TRJ<br>UTILIZAR: RD - NWOP-TCO<br>CNPJ: 02421421002670<br>FILIAL: C031<br>CENTRO: CB18 - Back Office - ES<br>CENTRO: CO41 - Regional Vitória ES<br>AV. ANTONIO DE ALMEIDA FILHO, 881, LT 6E7, QD 61, PVTO 01, SL 01<br><br>",
  "I026": "ES - Espirito Santo<br>TRJ QNDR<br>RD - NWOP-TRJ<br>UTILIZAR: RD - NWOP-TCO<br>CNPJ: 02421421002670<br>FILIAL: I026<br>CENTRO: IO26 - Regional Vitória - ES<br>AV. ANTONIO DE ALMEIDA FILHO, 881, LT 6E7, QD 61, PVTO 01, SL 01<br><br>",
  "C047": "GO - Goiás<br>TCO QNDB<br>RD - NWOP-TCO<br>CNPJ: 02421421023910<br>FILIAL: C047<br>CENTRO: CB25 - Back Office - GO<br>CENTRO: CO16 - Regional Goiânia - GO<br>AV. PRIMEIRA AVENIDA, S/N, QD 01B, LT 7, 8, 9<br><br>",
  "I027": "GO - Goiás<br>TCO QNDB<br>RD - NWOP-TCO<br>CNPJ: 02421421002750<br>FILIAL: I027<br>CENTRO: IO27 - Regional Goiânia - GO<br>AV. OESTE, 319<br><br>",
  "C025": "MA - Maranhão<br>TCO QNDP<br>RD - NWOP-TCO<br>CNPJ: 02421421022271<br>FILIAL: C025<br>CENTRO: CO38 - Regional São Luiz - MA<br>AV. SÃO LUIS REI DE FRANCA, 9<br><br>",
  "C204": "MA - Maranhão<br>TCO QNDP<br>RD - NWOP-TCO<br>CNPJ: 02421421018916<br>FILIAL: C204<br>CENTRO: CB47 - Back Office - MA<br>AV. PROFESSOR CARLOS CUNHA, 1000<br><br>",
  "I010": "MA - Maranhão<br>TCO QNDP<br>RD - NWOP-TCO<br>CNPJ: 02421421001002<br>FILIAL: I010<br>CENTRO: IO10 - Regional São Luiz - MA<br>AV. CEL. COLARES MOREIRA, 1000<br><br>",
  "C257": "MG - Minas Gerais<br>TLE QNDM<br>RD - NWOP-TLE<br>UTILIZAR: RD - NWOP-TCO<br>CNPJ: 02421421011407<br>FILIAL: C257<br>CENTRO: CB40 - Back Office Juiz de Fora<br>RUA HALFELD, 698<br><br>",
  "C509": "MG - Minas Gerais<br>TLE QNDM<br>RD - NWOP-TLE<br>UTILIZAR: RD - NWOP-TCO<br>CNPJ: 02421421019564<br>FILIAL: C509<br>CENTRO: CB31 - Back Office Raja - MG<br>CENTRO: CO25 - Regional Belo Horizonte - MG<br>AV. RAJA GABAGLIA, 1781<br><br>",
  "C521": "MG - Minas Gerais<br>TLE QNDM<br>RD - NWOP-TLE<br>UTILIZAR: RD - NWOP-TCO<br>CNPJ: 02421421024215<br>FILIAL: C521<br>CENTRO: CB39 - Back Office Uberlândia - MG<br>AV. AFONSO PENA, 822<br><br>",
  "C529": "MG - Minas Gerais<br>TLE QNDM<br>RD - NWOP-TLE<br>UTILIZAR: RD - NWOP-TCO<br>CNPJ: 02421421000030<br>FILIAL: C529<br>CENTRO: CO46 - Regional Varginha - MG<br>PRAÇA CHAMPAGNAT, 29<br><br>",
  "C545": "MG - Minas Gerais<br>TLE QNDM<br>RD - NWOP-TLE<br>UTILIZAR: RD - NWOP-TCO<br>CNPJ: 02421421010184<br>FILIAL: C545<br>CENTRO: CB41 - Back Office Poços de Caldas - MG<br>RUA ASSIS FIGUEIREDO, 991, 991, 993<br><br>",
  "I020": "MG - Minas Gerais<br>TLE QNDM<br>RD - NWOP-TLE<br>UTILIZAR: RD - NWOP-TCO<br>CNPJ: 02421421002084<br>FILIAL: I020<br>CENTRO: CB53 - Back Office Floresta - MG<br>CENTRO: IO20 - Regional Belo Horizonte - MG<br>RUA AQUILES LOBO, 478<br><br>",
  "C112": "MS - Mato Grosso do Sul<br>TCO QNDB<br>RD - NWOP-TCO<br>CNPJ: 02421421012985<br>FILIAL: C112<br>CENTRO: CB27 - Back Office - MS<br>CENTRO: CO18 - Regional Campo Grande - MS<br>RUA ANTONIO RAHE, 320<br><br>",
  "I018": "MS - Mato Grosso do Sul<br>TCO QNDB<br>RD - NWOP-TCO<br>CNPJ: 02421421001860<br>FILIAL: I018<br>CENTRO: IO18 - Regional Campo Grande - MS<br>AV. MATO GROSSO, 4808<br><br>",
  "C187": "MT - Mato Grosso<br>TCO QNDB<br>RD - NWOP-TCO<br>CNPJ: 02421421019300<br>FILIAL: C187<br>CENTRO: CB30 - Back Office - MT<br>CENTRO: CO21 - Regional Cuiabá - MT<br>R. BARÃO DE MELGAÇO, 3093<br><br>",
  "I025": "MT - Mato Grosso<br>TCO QNDB<br>RD - NWOP-TCO<br>CNPJ: 02421421002599<br>FILIAL: I025<br>CENTRO: IO25 - Regional Cuiabá - MT<br>R. QUATRO, 10<br><br>",
  "C023": "PA - Pará<br>TCO QNDP<br>RD - NWOP-TCO<br>CNPJ: 02421421022603<br>FILIAL: C023<br>CENTRO: CB23 - Back Office - PA<br>CENTRO: CO02 - Regional Belém - PA<br>AV. GOV. JOSÉ MALCHER, 2803<br><br>",
  "C269": "PA - Pará<br>TCO QNDP<br>RD - NWOP-TCO<br>CNPJ: 02421421021380<br>FILIAL: C269<br>CENTRO: CD54 - CDL - PA<br>ROD. BR 316, KM 23/24<br><br>",
  "I011": "PA - Pará<br>TCO QNDP<br>RD - NWOP-TCO<br>CNPJ: 02421421001193<br>FILIAL: I011<br>CENTRO: IO11 - Regional Belém - PA<br>AV. SENADOR LEMOS, 4079<br><br>",
  "C557": "PB - Paraíba<br>TNE QNDN<br>RD - NWOP-TNE<br>CNPJ: 02421421021623<br>FILIAL: C557<br>CENTRO: CB34 - Back Office - PB<br>CENTRO: CO55 - Regional João Pessoa - PB<br>R. PORFIRIO COSTA, 1553, SL 02<br><br>",
  "I016": "PB - Paraíba<br>TNE QNDN<br>RD - NWOP-TNE<br>CNPJ: 02421421001606<br>FILIAL: I016<br>CENTRO: IO16 - Regional João Pessoa - PB<br>RUA PORFIRIO COSTA, 1553, SL 01<br><br>",
  "C546": "PE - Pernambuco<br>TNE QNDN<br>RD - NWOP-TNE<br>CNPJ: 02421421022000<br>FILIAL: C546<br>CENTRO: CB38 - Back Office - PE<br>CENTRO: CD23 - CDL - PE<br>CENTRO: CO30 - Regional Recife - PE<br>CENTRO: CO59 - Regional J. Guararapes - PE<br>AV. AYRTON SENNA DA SILVA, 1633, SL 41<br><br>",
  "C584": "PE - Pernambuco<br>TNE QNDN<br>RD - NWOP-TNE<br>CNPJ: 02421421019998<br>FILIAL: C584<br>CENTRO: CD66 - CDL - PE<br>R. REPÚBLICA ESLOVACA, 1271, BLOCO A<br><br>",
  "I013": "PE - Pernambuco<br>TNE QNDN<br>RD - NWOP-TNE<br>CNPJ: 02421421001355<br>FILIAL: I013<br>CENTRO: IO13 - Regional Recife - PE<br>AV. MAL. MASCARENHAS DE MORAES, 4270<br><br>",
  "C561": "PI - Piauí<br>TNE QNDN<br>RD - NWOP-TNE<br>CNPJ: 02421421023405<br>FILIAL: C561<br>CENTRO: CB49 - Back Office - PI<br>AV. FREI SERAFIM, 2420<br><br>",
  "I024": "PI - Piauí<br>TNE QNDN<br>RD - NWOP-TNE<br>CNPJ: 02421421002408<br>FILIAL: I024<br>CENTRO: CB36 - Back Office - PI<br>CENTRO: CO57 - Regional Teresina - PI<br>CENTRO: IO24 - Regional Teresina - PI<br>RUA LISANDRO NOGUEIRA, 1914, SL 01<br><br>",
  "C165": "PR - Paraná<br>TSL QNDU<br>RD - NWOP-TSL<br>CNPJ: 02421421020732<br>FILIAL: C165<br>CENTRO: CB28 - Back Office - PR<br>CENTRO: CO19 - Regional Curitiba - PR<br>R. COMENDADOR ARAÚJO, 299<br><br>",
  "C173": "PR - Paraná<br>TSL QNDU<br>RD - NWOP-TSL<br>CNPJ: 02421421014333<br>FILIAL: C173<br>CENTRO: CD06 - CDL - PR<br>RUA JOÃO BETTEGA, 5133<br><br>",
  "I017": "PR - Paraná<br>TSL QNDU<br>RD - NWOP-TSL<br>CNPJ: 02421421001789<br>FILIAL: I017<br>CENTRO: IO17 - Regional Curitiba - PR<br>RUA LOURENÇO MOURÃO, 26<br><br>",
  "C058": "RJ - Rio de Janeiro<br>TRJ QNDR<br>RD - NWOP-TRJ<br>UTILIZAR: RD - NWOP-TCO<br>CNPJ: 02421421000111<br>FILIAL: C058<br>CENTRO: CB03 - Back Office - RJ<br>CENTRO: CO50 Regional Rio de Janeiro - RJ<br>AV. JOÃO CABRAL DE MELLO NETO, 850, BLC 001 1212<br><br>",
  "C095": "RJ - Rio de Janeiro<br>TRJ QNDR<br>RD - NWOP-TRJ<br>UTILIZAR: RD - NWOP-TCO<br>CNPJ: 02421421007639<br>FILIAL: C095<br>CENTRO: CO03 - Regional HQ - RJ<br>AV. JOÃO CABRAL DE MELLO NETO, 850, BLOCO 01, SALAS 213, 214, 215, 216<br><br>",
  "C285": "RJ - Rio de Janeiro<br>TRJ QNDR<br>RD - NWOP-TRJ<br>UTILIZAR: RD - NWOP-TCO<br>CNPJ: 02421421005938<br>FILIAL: C285<br>CENTRO: CD56 - Back Office - RJ<br>RUA FONSECA TELES 18 A 30, BLOCO B, PAVMTO 3<br><br>",
  "C613": "RJ - Rio de Janeiro<br>TRJ QNDR<br>RD - NWOP-TRJ<br>UTILIZAR: RD - NWOP-TCO<br>CNPJ: 02421421000030<br>FILIAL: C613<br>CENTRO: CO31 Regional Rio - RJ<br>AV. MARECHAL FLORIANO, 19, 6<br><br>",
  "C678": "RJ - Rio de Janeiro<br>TRJ QNDR<br>RD - NWOP-TRJ<br>UTILIZAR: RD - NWOP-TCO<br>CNPJ: 02421421009844<br>FILIAL: C678<br>CENTRO: CB32 - Back Office CEO HQ - RJ<br>CENTRO: CO60 - TIM HQ - CEO<br>AV. JOAO CABRAL DE MELLO NETO 850, SALAS 1209, 1210, 1211<br><br>",
  "C680": "RJ - Rio de Janeiro<br>TRJ QNDR<br>RD - NWOP-TRJ<br>UTILIZAR: RD - NWOP-TCO<br>CNPJ: 02421421007477<br>FILIAL: C680<br>CENTRO: CO44 - ISOC - Gamboa - RJ<br>R PEDRO ERNESTO, 15<br><br>",
  "I001": "RJ - Rio de Janeiro<br>TRJ QNDR<br>RD - NWOP-TRJ<br>UTILIZAR: RD - NWOP-TCO<br>CNPJ: 02421421000111<br>FILIAL: I001<br>CENTRO: IO01 - Regional Rio - RJ<br>AV. JOAO CABRAL DE MELLO NETO 850, BLC 001 1212<br><br>",
  "I005": "RJ - Rio de Janeiro<br>TRJ QNDR<br>RD - NWOP-TRJ<br>UTILIZAR: RD - NWOP-TCO<br>CNPJ: 02421421000545<br>FILIAL: I005<br>CENTRO: IO05 - Regional Rio - RJ<br>RUA DR. GARNIER, 655<br><br>",
  "I052": "RJ - Rio de Janeiro<br>TRJ QNDR<br>RD - NWOP-TRJ<br>UTILIZAR: RD - NWOP-TCO<br>CNPJ: 02421421000030<br>FILIAL: I052<br>CENTRO: IO47 - Regional Rio - RJ<br>RUA FONSECA TELES 18, 1<br><br>",
  "C558": "RN - Rio Grande do Norte<br>TNE QNDN<br>RD - NWOP-TNE<br>CNPJ: 02421421002831<br>FILIAL: C558<br>CENTRO: CB35 - Back Office - RN<br>CENTRO: CO56 - Regional Natal - RN<br>RUA DAS PRÍMULAS, 661, SL01 L 379<br><br>",
  "I028": "RN - Rio Grande do Norte<br>TNE QNDN<br>RD - NWOP-TNE<br>CNPJ: 02421421002831<br>FILIAL: I028<br>CENTRO: IO28 - Regional Natal - RN<br>RUA DAS PRÍMULAS, 661, SL01<br><br>",
  "C104": "RO - Rondônia<br>TCO QNDB<br>RD - NWOP-TCO<br>CNPJ: 02421421002327<br>FILIAL: C104<br>CENTRO: CB19 - Back Office - RO<br>CENTRO: CO42 - Regional Porto Velho - RO<br>AV. DOS IMIGRANTES, 4105<br><br>",
  "I023": "RO - Rondônia<br>TCO QNDB<br>RD - NWOP-TCO<br>CNPJ: 02421421002327<br>FILIAL: I023<br>CENTRO: IO23 - Regional Porto Velho - RO<br>AV. DOS IMIGRANTES, 4105<br><br>",
  "C026": "RR - Roraima<br>TCO QNDP<br>RD - NWOP-TCO<br>CNPJ: 02421421019211<br>FILIAL: C026<br>CENTRO: CB11 - Back Office - RR<br>CENTRO: CO39 - Regional Boa Vista - RR<br>RUA CORONEL PINTO, 802, LT 399, QD 73<br><br>",
  "I042": "RR - Roraima<br>TCO QNDP<br>RD - NWOP-TCO<br>CNPJ: 02421421004290<br>FILIAL: I042<br>CENTRO: IO42 - Regional Boa Vista - RR<br>RUA NILO COLARES, 602<br><br>",
  "C039": "RS - Rio Grande do Sul<br>TSL QNDU<br>RD - NWOP-TSL<br>CNPJ: 02421421015496<br>FILIAL: C039<br>CENTRO: CB04 - Back Office Passo D'areia- RS<br>CENTRO: CO51 - Regional Porto Alegre - RS<br>AV. ANDARAÍ, 549<br><br>",
  "I007": "RS - Rio Grande do Sul<br>TSL QNDU<br>RD - NWOP-TSL<br>CNPJ: 02421421000707<br>FILIAL: I007<br>CENTRO: CB51 - Back Office Floresta - RS<br>CENTRO: IO07 - Regional Porto Alegre - RS<br>RUA VOLUNTÁRIOS DA PÁTRIA, 1555<br><br>",
  "C176": "SC - Santa Catarina<br>TSL QNDU<br>RD - NWOP-TSL<br>CNPJ: 02421421001274<br>FILIAL: C176<br>CENTRO: CB29 - Back Office Regional - SC<br>CENTRO: CO20 - Regional Florianópolis - SC<br>RUA SANTOS SARAIVA, 1520, 2 ANDAR<br><br>",
  "C178": "SC - Santa Catarina<br>TSL QNDU<br>RD - NWOP-TSL<br>CNPJ: 02421421005695<br>FILIAL: C178<br>CENTRO: CB44 - Back Office - SC<br>RUA BOCAIUVA, 2468, LJ 239<br><br>",
  "I012": "SC - Santa Catarina<br>TSL QNDU<br>RD - NWOP-TSL<br>CNPJ: 02421421001274<br>FILIAL: I012<br>CENTRO: IO12 - Regional Florianópolis - SC<br>RUA SANTOS SARAIVA, 1520, 2 ANDAR<br><br>",
  "C503": "SE - Sergipe<br>TNE QNDN<br>RD - NWOP-TNE<br>CNPJ: 02421421022352<br>FILIAL: C503<br>CENTRO: CB42 - Back Office - SE<br>AV. MINISTRO GERALDO BARRETO SOBRAL 215 LJ 51/53, SL 01<br><br>",
  "I019": "SE - Sergipe<br>TNE QNDN<br>RD - NWOP-TNE<br>CNPJ: 02421421001940<br>FILIAL: I019<br>CENTRO: CB15 - Back Office - SE<br>CENTRO: CB45 - Back Office - SE<br>CENTRO: CO24 - Regional Aracaju - SE<br>CENTRO: IO19 - Regional Aracaju - SE<br>TV. JOSE DE FARO, 69<br><br>",
  "C001": "SP - São Paulo<br>TSP QNDS<br>RD - NWOP-TSP<br>CNPJ: 02421421011741<br>FILIAL: C001<br>CENTRO: CB22 - Back Office - SP<br>CENTRO: CO01 - Regional São Paulo - SP<br>R. DOUTOR RUBENS GOMES BUENO, 691, ANDAR 7, 14 E 15<br><br>",
  "C109": "SP - São Paulo<br>TSP QNDS<br>RD - NWOP-TSP<br>CNPJ: 02421421023162<br>FILIAL: C109<br>CENTRO: CO06 - Regional Santo André - SP<br>AV. ALEXANDRE DE GUSMÃO, 29, BLOCO B<br><br>",
  "C213": "SP - São Paulo<br>TSP QNDS<br>RD - NWOP-TSP<br>CNPJ: 02421421012713<br>FILIAL: C213<br>CENTRO: CD17 - CDL JDI - SP<br>ESTRADA MUNICIPAL JOSÉ SEDANO, 854, GL 68, QT 30.012 MODULO 3 DO G<br><br>",
  "C214": "SP - São Paulo<br>TSP QNDS<br>RD - NWOP-TSP<br>CNPJ: 02421421018320<br>FILIAL: C214<br>CENTRO: CD40 - CDL GRU - SP<br>AV. DOUTOR SEBASTIAO HENRIQUE DA CUNHA PONTES, 8500, 6 GALPAO 1<br><br>",
  "C272": "SP - São Paulo<br>TSP QNDS<br>RD - NWOP-TSP<br>CNPJ: 02421421021704<br>FILIAL: C272<br>CENTRO: CO29 - Regional Ribeirão Preto - SP<br>AV. PROFESSOR JOÃO FIUSA 1901, SALAS 406 E 407 AREA 1C<br><br>",
  "C644": "SP - São Paulo<br>TSP QNDS<br>RD - NWOP-TSP<br>CNPJ: 02421421024568<br>FILIAL: C644<br>CENTRO: C300 - Regional Campinas - SP<br>CENTRO: CO35 - Regional Campinas - SP<br>CENTRO: CO48 - Regional Campinas - SP<br>RUA ODILA MAIA ROCHA BRITO, 527<br><br>",
  "C656": "SP - São Paulo<br>TSP QNDS<br>RD - NWOP-TSP<br>CNPJ: 02421421024053<br>FILIAL: C656<br>CENTRO: CO32 - Regional Bauru - SP<br>R. JULIO DE MESQUITA FILHO, 10-31, CJ 205, C2, 2<br><br>",
  "C657": "SP - São Paulo<br>TSP QNDS<br>RD - NWOP-TSP<br>CNPJ: 02421421000030<br>FILIAL: C657<br>CENTRO: CO33 - Regional Pres. Prudente - SP<br>AV. JOSE SOARES MARCONDES, 1078, 5<br><br>",
  "C673": "SP - São Paulo<br>TSP QNDS<br>RD - NWOP-TSP<br>CNPJ: 02421421012209<br>FILIAL: C673<br>CENTRO: CB50 - Back Office Vila Mariana - SP<br>CENTRO: CO61 - Regional Vila Mariana - SP<br>RUA PADRE MACHADO, 69<br><br>",
  "C674": "SP - São Paulo<br>TSP QNDS<br>RD - NWOP-TSP<br>CNPJ: 02421421016115<br>FILIAL: C674<br>CENTRO: CO34 - Regional Fiber - SP<br>AV. ALFREDO EGIDIO DE SOUZA ARANHA, 100, BL B, 1 ANDAR<br><br>",
  "C677": "SP - São Paulo<br>TSP QNDS<br>RD - NWOP-TSP<br>CNPJ: 02421421023243<br>FILIAL: C677<br>CENTRO: CO43 - Regional S. J. Rio Preto - SP<br>RUA CORONEL SPINDOLA DE CASTRO, 3635, SL 22 A 24, 2 ANDAR<br><br>",
  "I006": "SP - São Paulo<br>TSP QNDS<br>RD - NWOP-TSP<br>CNPJ: 02421421000626<br>FILIAL: I006<br>CENTRO: IO06 - Regional São Paulo - SP<br>AV. ERMANO MARCHETTI, 172, PARTE B<br><br>",
  "I046": "SP - São Paulo<br>TSP QNDS<br>RD - NWOP-TSP<br>CNPJ: 02421421001436<br>FILIAL: I046<br>CENTRO: CB52 - Back Office Lapa - SP<br>CENTRO: IO46 - Regional São Paulo - SP<br>AV. ERMANO MARCHETTI, 172<br><br>",
  "I238": "SP - São Paulo<br>TSP QNDS<br>RD - NWOP-TSP<br>CNPJ: 02421421023839<br>FILIAL: I238<br>CENTRO: IO48 - Regional São Paulo - SP<br>AV. GIOVANNI GRONCH, 7143<br><br>",
  "C629": "TO - Tocantins<br>TCO QNDB<br>RD - NWOP-TCO<br>CNPJ: 02421421019645<br>FILIAL: C629<br>CENTRO: CB46 - Back Office - TO<br>104 NORTE AVENIDA JUSCELINO KUBITSCHEK 99 LOJA 104, LOTE 39 01 TERREO<br><br>",
  "I021": "TO - Tocantins<br>TCO QNDB<br>RD - NWOP-TCO<br>CNPJ: 02421421002165<br>FILIAL: I021<br>CENTRO: CB20 - Back Office - TO<br>CENTRO: CO53 - Regional Palmas - TO<br>CENTRO: IO21 - Regional Palmas - TO<br>104 NORTE AVENIDA JUSCELINO KUBITSCHEK, 99, LOTE 39 02 TERREO<br><br>",
  // adicione as outras informações para as outras opções aqui
};

function displayInfo() {
  var select1 = document.getElementById("mySelect1");
  var select2 = document.getElementById("mySelect2");
  var optionValue1 = select1.value;
  var optionValue2 = select2.value;
  var BIPFILIALC = infoArray[optionValue1];
  var BIPFILIALE = infoArray[optionValue2];
  if (optionValue1 === optionValue2) {
	  document.getElementById("BIPFILIALC").innerHTML = BIPFILIALC || "";
	  document.getElementById("BIPFILIALE").innerHTML = BIPFILIALE || "";
	  document.getElementById("BIPRI").innerHTML = "<b><code>Filiais iguais?</code><br>Fico feliz em poder ajudar e garantir que tudo corra bem.<br><br>Tenha um excelente dia e vamos seguir em frente juntos!</b>";
} else {
  document.getElementById("BIPFILIALC").innerHTML = BIPFILIALC || "";
  document.getElementById("BIPFILIALE").innerHTML = BIPFILIALE || "";
  document.getElementById("BIPRI").innerHTML = "";
}
};