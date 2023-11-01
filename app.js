let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');
let logoSpan = document.querySelectorAll('.logo-parts');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        logoSpan.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1) * 100);
        });

        setTimeout(() => {
            logoSpan.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (span + 1) * 50);
            });
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300);

    });

});

document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate");
    const dataTable = document.getElementById("data-table");
    const downloadLink = document.getElementById("download-link");
    const dataTypeSelect = document.getElementById("data-type");

    generateButton.addEventListener("click", function () {
        const dataType = dataTypeSelect.value;
        generateData(dataType);
        changeHeadTable(dataType);
    });

    function generateData(dataType) {
        dataTable.innerHTML = "";

        const dataGenerator = getDataGenerator(dataType);

        if (dataType !== "Selecciona") {
        for (let i = 1; i <= 30; i++) {
            const data = dataGenerator();

            const row = document.createElement("tr");
            for (const key in data) {
                const cell = document.createElement("td");
                cell.textContent = data[key];
                row.appendChild(cell);
            }
            dataTable.appendChild(row);
        }
            const jsonData = Array.from(dataTable.querySelectorAll("tr")).map((row) => {
                const cells = Array.from(row.querySelectorAll("td"));
                const data = {};
                data.ID = cells[0].textContent;
                data.Nombre = cells[1].textContent;
                data.Edad = cells[2].textContent;
                data.Ciudad = cells[3].textContent;
                return data;
            });

            const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: "application/json" });
            const url = URL.createObjectURL(blob);

            downloadLink.href = url;
            downloadLink.style.display = "block";
            downloadLink.download = "datos.json";
        }else{
            dataTable.innerHTML = "";
            downloadLink.style.display = "none";
        }
    }

    function changeHeadTable(dataType) {
        var tabla = document.getElementById("principal-table");
        let encabezado = [];
        // Cambia el encabezado de la tabla
        if (dataType === "Selecciona") {
            for (let i = 0; i < 4; i++) {
                tabla.rows[0].cells[i].innerHTML = "Columna " + [i+1];
            }
        } else if (dataType === "productos") {
            encabezado = ["ID", "Producto", "Precio", "Categoría"];
            for (let i = 0; i < 4; i++) {
                tabla.rows[0].cells[i].innerHTML = encabezado[i];
            }
        } else if (dataType === "paises") {
            encabezado = ["ID", "Ciudad", "Código Postal", "Coordenadas"];
            for (let i = 0; i < 4; i++) {
                tabla.rows[0].cells[i].innerHTML = encabezado[i];
            }
        } else if (dataType === "personas") {
            encabezado = ["ID", "Nombre", "Edad", "Ciudad"];
            for (let i = 0; i < 4; i++) {
                tabla.rows[0].cells[i].innerHTML = encabezado[i];
            }
        }

    }

    // Funciones generadoras aleatorias genéricas
    function getDataGenerator(dataType) {
        if (dataType === "Selecciona") {
            return null;
        } else if (dataType === "productos") {
            return generateRandomProduct;
        } else if (dataType === "paises") {
            return generateRandomCountry;
        } else if (dataType === "personas") {
            return generateRandomPerson;
        }
    }

    // Funciones generadoras aleatorias específicas
    /*function getDataFields() {
        if (dataType === "Selecciona") {
            return null;
        } else if (dataType === "productos") {
            return ["ID", "Producto", "Precio", "Categoría"];
        } else if (dataType === "paises") {
            return ["ID", "Ciudad", "Código Postal", "Coordenadas"];
        } else if (dataType === "personas") {
            return ["ID", "Nombre", "Edad", "Ciudad"];
        }
    }
    */

    function generateRandomPerson() {
        return {
            ID: generateRandomID(),
            Nombre: generateRandomName(),
            Edad: generateRandomAge(),
            Ciudad: generateRandomCity(),
        };
    }

    function generateRandomProduct() {
        return {
            ID: generateRandomID(),
            Producto: generateRandomProductName(),
            Precio: generateRandomPrice(),
            Categoria: generateRandomCategory(),
        };
    }

    function generateRandomCountry() {
        return {
            ID: generateRandomID(),
            Ciudad: generateRandomCity(),
            CodigoPostal: generateRandomPostalCode(),
            Coordenadas: generateRandomCoordinates(),
        };
    }

    // Funciones generadoras aleatorias específicas
    function generateRandomID() {
        return Math.floor(Math.random() * 1000);
    }

    function generateRandomName() {
        const names = ["Alice", "Bob", "Alinson", "Judith", "Esteban", "Charlie", "David", "Eve", "Frank", "Grace", "Helen", "Isaac", "Jack", "Sophia", "Oliver", "Liam", "Emma", "Ava", "Lucas", "Mia", "Zoe", "Ethan", "Luna", "Chloe", "Noah", "Harper", "Aiden", "Lily", "Grace", "Sophie", "Benjamin", "Ella", "Emily", "Michael", "William", "James", "Daniel", "Olivia", "Alexander", "Sebastian", "Evelyn", "Nora"];
        return names[Math.floor(Math.random() * names.length)];
    }

    function generateRandomAge() {
        return Math.floor(Math.random() * 50) + 18;
    }

    function generateRandomCity() {
        const cities = ["New York", "Los Angeles", "Chicago", "San Francisco", "Miami", "Houston", "Seattle", "Boston", "Atlanta", "Denver", "Philadelphia", "Phoenix", "Dallas", "Minneapolis", "Portland", "Detroit", "Las Vegas", "Charlotte", "San Diego", "Nashville", "New Orleans", "Indianapolis", "Columbus", "Salt Lake City", "Austin", "San Antonio", "Kansas City", "Raleigh", "Tucson", "Tampa", "Orlando", "Hartford", "St. Louis", "Pittsburgh", "Cincinnati", "Milwaukee", "Cleveland", "Buffalo", "Providence"





        ];
        return cities[Math.floor(Math.random() * cities.length)];
    }

    function generateRandomProductName() {
        const products = ["Portátil", "Teléfono inteligente", "Tableta", "Auriculares", "Cámara", "Monitor", "Teclado", "Ratón", "Impresora", "Enrutador", "Silla", "Sofá", "Bicicleta", "Cafetera", "Mochila", "Gafas de sol", "Paraguas", "Guitarra", "Zapatos", "Reloj de pulsera", "Sweater", "Cepillo de dientes", "Cortacésped", "Patinete", "Caña de pescar", "Manguera de jardín", "Mesa de comedor", "Aspiradora", "Botas de senderismo", "Telescopio", "Rompecabezas", "Maceta para plantas", "Taladro eléctrico", "Equipo de esquí", "Equipaje", "Juego de utensilios de cocina", "Casco de bicicleta", "Hervidor de agua", "Toallas de baño"];
        return products[Math.floor(Math.random() * products.length)];
    }

    function generateRandomPrice() {
        return (Math.random() * 1000).toFixed(2);
    }

    function generateRandomCategory() {
        const categories = ["Electrónica", "Ropa", "Hogar y Jardín", "Libros", "Deportes y Aire Libre", "Juguetes", "Salud y Belleza"];
        return categories[Math.floor(Math.random() * categories.length)];
    }

    function generateRandomPostalCode() {
        return Math.floor(Math.random() * 90000) + 10000;
    }

    function generateRandomCoordinates() {
        return `${(Math.random() * 180 - 90).toFixed(6)}, ${(Math.random() * 360 - 180).toFixed(6)}`;
    }
});