        // Base de datos de los niveles
        const datosJarra = {
            1: {
                titulo: "Nivel 1: Agua Potable Natural",
                cantidad: "6 a 8 vasos al día",
                texto: "Es la bebida más adecuada para cubrir las necesidades diarias de líquidos. Se debe consumir un mínimo de 8 vasos de agua natural al día para mantener tu cuerpo hidratado, favorecer la digestión y el funcionamiento de los riñones.",
                claseBorde: "borde-nivel-1"
            },
            2: {
                titulo: "Nivel 2: Leche semi y descremada, bebidas de soya sin azúcar adicionada",
                cantidad: "0 a 2 vasos máximo",
                texto: "Estas bebidas aportan calcio, vitamina D y proteína de alta calidad. Se recomienda consumir un máximo de dos vasos al día. Es preferible elegir opciones bajas en grasa (descremadas) y sin azúcar adicionada.",
                claseBorde: "borde-nivel-2"
            },
            3: {
                titulo: "Nivel 3: Café y té sin azúcar",
                cantidad: "0 a 4 tazas máximo",
                texto: "El té y el café negro sin azúcar proporcionan antioxidantes y micronutrientes. Se pueden tomar hasta 4 tazas (de 240 ml cada una) al día. ¡Cuidado con agregarles crema o azúcar!",
                claseBorde: "borde-nivel-3"
            },
            4: {
                titulo: "Nivel 4: Bebidas no calóricas con edulcorantes artificiales",
                cantidad: "0 a 2 vasos máximo",
                texto: "Aquí entran los refrescos de dieta, aguas con vitaminas, bebidas energizantes y otras con edulcorantes no calóricos. No aportan calorías pero tampoco nutrientes. Se recomienda un máximo de 500 ml (2 vasos) por día.",
                claseBorde: "borde-nivel-4"
            },
            5: {
                titulo: "Nivel 5: Jugos de fruta, leche entera, bebidas alcohólicas o deportivas",
                cantidad: "0 a ½ vaso máximo",
                texto: "Estas bebidas contienen altas cantidades de grasa (como la leche entera) o azúcares (como los jugos). Las bebidas deportivas solo son recomendables para atletas de alto rendimiento. Se aconseja no tomar más de medio vaso al día.",
                claseBorde: "borde-nivel-5"
            },
            6: {
                titulo: "Nivel 6: Refrescos y aguas de sabor",
                cantidad: "0 vasos (Evitar)",
                texto: "Son bebidas que proveen excesivas calorías y ningún beneficio nutricional. Su consumo se asocia con caries, sobrepeso y obesidad. La recomendación oficial es no consumirlas en absoluto (cero vasos).",
                claseBorde: "borde-nivel-6"
            }
        };

        function mostrarDetalle(nivel) {
            const data = datosJarra[nivel];
            const infoContainer = document.getElementById('info-container');
            const infoCard = document.getElementById('info-card');
            
            // Mostrar el contenedor quitando la clase de Bootstrap 'd-none'
            infoContainer.classList.remove('d-none');
            
            // Reiniciar la animación
            infoCard.classList.remove('fade-in-up');
            // Reflow para reiniciar la animación CSS
            void infoCard.offsetWidth;
            infoCard.classList.add('fade-in-up');

            // Actualizar contenido
            document.getElementById('detalle-titulo').innerText = data.titulo;
            document.getElementById('detalle-cantidad').innerText = data.cantidad;
            document.getElementById('detalle-texto').innerText = data.texto;

            // Limpiar colores de borde anteriores
            infoCard.classList.remove('borde-nivel-1', 'borde-nivel-2', 'borde-nivel-3', 'borde-nivel-4', 'borde-nivel-5', 'borde-nivel-6');
            // Aplicar el nuevo color correspondiente al nivel
            infoCard.classList.add(data.claseBorde);
        }