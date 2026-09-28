const DATASETS = {
    personas: { headers: ['ID', 'Nombre', 'Edad', 'Ciudad'], generate: () => ({ ID: generateRandomID(), Nombre: generateRandomName(), Edad: generateRandomAge(), Ciudad: generateRandomCity() }) },
    productos: { headers: ['ID', 'Producto', 'Precio', 'Categoría'], generate: () => ({ ID: generateRandomID(), Producto: generateRandomProductName(), Precio: `${generateRandomPrice()} €`, Categoría: generateRandomCategory() }) },
    paises: { headers: ['ID', 'Ciudad', 'Código postal', 'Coordenadas'], generate: () => ({ ID: generateRandomID(), Ciudad: generateRandomCity(), 'Código postal': generateRandomPostalCode(), Coordenadas: generateRandomCoordinates() }) }
};

const dataTypeSelect = document.getElementById('data-type');
const recordCountInput = document.getElementById('record-count');
const generateButton = document.getElementById('generate');
const table = document.getElementById('principal-table');
const dataTable = document.getElementById('data-table');
const emptyState = document.getElementById('empty-state');
const tableWrapper = document.getElementById('table-wrapper');
const downloadLink = document.getElementById('download-link');
const recordSummary = document.getElementById('record-summary');
const formMessage = document.getElementById('form-message');
let downloadUrl;

generateButton.addEventListener('click', generateDataset);

function generateDataset() {
    const dataset = DATASETS[dataTypeSelect.value];
    const count = Number(recordCountInput.value);
    formMessage.textContent = '';

    if (!dataset) {
        formMessage.textContent = 'Selecciona una colección para continuar.';
        dataTypeSelect.focus();
        return;
    }
    if (!Number.isInteger(count) || count < 1 || count > 100) {
        formMessage.textContent = 'Elige una cantidad entre 1 y 100 registros.';
        recordCountInput.focus();
        return;
    }

    const records = Array.from({ length: count }, dataset.generate);
    table.querySelector('thead').innerHTML = `<tr>${dataset.headers.map((header) => `<th scope="col">${header}</th>`).join('')}</tr>`;
    dataTable.innerHTML = records.map((record) => `<tr>${Object.values(record).map((value) => `<td>${value}</td>`).join('')}</tr>`).join('');
    emptyState.classList.add('is-hidden');
    tableWrapper.classList.remove('is-hidden');
    recordSummary.textContent = `${count} registros · ${dataTypeSelect.options[dataTypeSelect.selectedIndex].text}`;

    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    downloadUrl = URL.createObjectURL(new Blob([JSON.stringify(records, null, 2)], { type: 'application/json' }));
    downloadLink.href = downloadUrl;
    downloadLink.classList.remove('is-hidden');
}

function pick(items) { return items[Math.floor(Math.random() * items.length)]; }
function generateRandomID() { return Math.floor(Math.random() * 9000) + 1000; }
function generateRandomName() { return pick(['Alicia', 'Judith', 'Esteban', 'Charlie', 'David', 'Grace', 'Isaac', 'Sofía', 'Oliver', 'Emma', 'Lucas', 'Mía', 'Noah', 'Luna', 'Daniel']); }
function generateRandomAge() { return Math.floor(Math.random() * 50) + 18; }
function generateRandomCity() { return pick(['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Bilbao', 'Alicante', 'Málaga', 'Vigo', 'Zaragoza', 'Salamanca', 'Lisboa', 'Bogotá']); }
function generateRandomProductName() { return pick(['Portátil', 'Teléfono inteligente', 'Tableta', 'Auriculares', 'Cámara', 'Monitor', 'Teclado', 'Mochila', 'Cafetera', 'Bicicleta']); }
function generateRandomPrice() { return (Math.random() * 1000).toFixed(2); }
function generateRandomCategory() { return pick(['Electrónica', 'Hogar', 'Deportes', 'Oficina', 'Accesorios']); }
function generateRandomPostalCode() { return Math.floor(Math.random() * 90000) + 10000; }
function generateRandomCoordinates() { return `${(Math.random() * 180 - 90).toFixed(4)}, ${(Math.random() * 360 - 180).toFixed(4)}`; }