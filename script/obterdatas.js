
const currentYear = new Date().getFullYear();


document.getElementById("anoatual").textContent = currentYear;


document.getElementById("ultimaModificacao").textContent =
    "Última modificação: " + document.lastModified;