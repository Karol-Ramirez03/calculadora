const pantalla = document.querySelector('.contenedor_pantalla');
const botones = document.querySelectorAll('.items');

botones.forEach(boton =>{
    boton.addEventListener('click',() =>{
        const botonApretado = boton.textContent;
        if (boton.id === 'dec'){
            pantalla.textContent = parseInt(pantalla.textContent)
            return;
        }
        if (boton.id === 'bin'){
            let numberDecimal = parseInt(pantalla.textContent)
            let numberBin = numberDecimal.toString(2)
            pantalla.textContent = numberBin;
            return;
        }
        if (boton.id === 'hex'){
            let numberDecimal = parseInt(pantalla.textContent)
            let numberHex = numberDecimal.toString(16)
            pantalla.textContent = numberHex
            return;
        }
        if (boton.id === 'oct'){
            let numberDecimal = parseInt(pantalla.textContent)
            let numberoct = numberDecimal.toString(8)
            pantalla.textContent = numberoct
            return;
        }
        if (boton.id === 'c'){
            pantalla.textContent = '0';
            return;
        }
        if (boton.id === 'igual'){
            try {
                pantalla.textContent = math.evaluate(pantalla.textContent);
                return;
            } catch {
                pantalla.textContent= 'Error!'
                return
            }
        }
        if (boton.id === 'sin'){
            let radianes = (pantalla.textContent*math.PI) / 180
            pantalla.textContent = math.sin(radianes);
            return;
        }
        if (boton.id === 'cos'){
            let radianes = (pantalla.textContent*math.PI) / 180
            pantalla.textContent = math.cos(radianes);
            return;
        }
        if (boton.id === 'tan'){
            let radianes = (pantalla.textContent*math.PI) / 180
            pantalla.textContent = math.tan(radianes);
            return;
        }
        if (boton.id === 'raiz'){
            pantalla.textContent = math.sqrt(pantalla.textContent );
            return;
        }
        if (boton.id === 'exp'){
            pantalla.textContent += '^';
            pantalla.textContent = math.evaluate(pantalla.textContent );
            return;
        }
        if (pantalla.textContent === '0' || pantalla.textContent=== 'Error!' || pantalla.textContent=== 'Infinity') {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }

        // if (boton.id === 'binstatus'){
        //     boton.style.backgroundColor = 'blue'
        //     if (boton.id === 'dec'){
        //         pantalla.textContent = parseInt(pantalla.textContent,2)
        //         return;
        //     }
        //     if (boton.id === 'bin'){
        //         let numberDecimal = pantalla.textContent = parseInt(pantalla.textContent,2)
        //         let numberBin = numberDecimal.toString(2)
        //         pantalla.textContent = numberBin;
        //         return;
        //     }
        //     if (boton.id === 'hex'){
        //         let numberDecimal = pantalla.textContent = parseInt(pantalla.textContent,2)
        //         let numberHex = numberDecimal.toString(16)
        //         pantalla.textContent = numberHex
        //         return;
        //     }
        //     if (boton.id === 'oct'){
        //         let numberDecimal = pantalla.textContent = parseInt(pantalla.textContent,2)
        //         let numberoct = numberDecimal.toString(8)
        //         pantalla.textContent = numberoct
        //         return;
        //     }
        // }
        // if (boton.id === 'octstatus'){
        //     if (boton.id === 'dec'){
        //         pantalla.textContent = parseInt(pantalla.textContent,8)
        //         return;
        //     }
        //     if (boton.id === 'bin'){
        //         let numberDecimal = pantalla.textContent = parseInt(pantalla.textContent,8)
        //         let numberBin = numberDecimal.toString(2)
        //         pantalla.textContent = numberBin;
        //         return;
        //     }
        //     if (boton.id === 'hex'){
        //         let numberDecimal = pantalla.textContent = parseInt(pantalla.textContent,8)
        //         let numberHex = numberDecimal.toString(16)
        //         pantalla.textContent = numberHex
        //         return;
        //     }
        //     if (boton.id === 'oct'){
        //         let numberDecimal = pantalla.textContent = parseInt(pantalla.textContent,8)
        //         let numberoct = numberDecimal.toString(8)
        //         pantalla.textContent = numberoct
        //         return;
        //     }
        // }
        // if (boton.id === 'hexstatus'){
        //     if (boton.id === 'dec'){
        //         pantalla.textContent = parseInt(pantalla.textContent,16)
        //         return;
        //     }
        //     if (boton.id === 'bin'){
        //         let numberDecimal = pantalla.textContent = parseInt(pantalla.textContent,16)
        //         let numberBin = numberDecimal.toString(2)
        //         pantalla.textContent = numberBin;
        //         return;
        //     }
        //     if (boton.id === 'hex'){
        //         let numberDecimal = pantalla.textContent = parseInt(pantalla.textContent,16)
        //         let numberHex = numberDecimal.toString(16)
        //         pantalla.textContent = numberHex
        //         return;
        //     }
        //     if (boton.id === 'oct'){
        //         let numberDecimal = pantalla.textContent = parseInt(pantalla.textContent,16)
        //         let numberoct = numberDecimal.toString(8)
        //         pantalla.textContent = numberoct
        //         return;
        //     }
        // }
    })
} )
