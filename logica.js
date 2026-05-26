const questionElement = document.getElementById('question-text');

const answerButtonsElement =
document.getElementById('answer-buttons');

const mediaContainer =
document.getElementById('media-container');

const nextButton =
document.getElementById('next-btn');

const texto =
document.getElementById('texto');

let currentQuestions = [];
let currentQuestionIndex = 0;

// BASE DE DATOS
const database = {

   celular: [

    {

        tema: "Célula y Moléculas",

        informacion: {

            titulo: "Células, Moléculas y Organelos Celulares",

            texto: `

# 🔬 ¿Qué son las células?

Las células son la unidad básica de todos los seres vivos. Todo organismo vivo está formado por células, desde bacterias microscópicas hasta animales, plantas y seres humanos. Las células son estructuras capaces de realizar funciones vitales como alimentarse, producir energía, crecer, responder a estímulos y reproducirse.

Cada célula trabaja constantemente para mantener vivo al organismo. Aunque muchas son microscópicas, cumplen tareas extremadamente importantes dentro del cuerpo.

Las células contienen organelos especializados que permiten realizar distintas funciones biológicas necesarias para la vida.
<br><br><br>
---

# 🧬 Características de las células

Las células poseen características fundamentales que las diferencian de la materia no viva.

## Características principales:

* Tienen membrana celular.
* Contienen material genético.
* Obtienen energía.
* Eliminan desechos.
* Se reproducen.
* Responden a estímulos.
* Mantienen equilibrio interno.

---
<br><br><br>


# 🔍 Tipos de células

Existen dos tipos principales de células:

# 🦠 Células Procariotas

Las células procariotas son simples y pequeñas. No tienen núcleo definido y su ADN se encuentra libre dentro del citoplasma.

Las bacterias son organismos procariotas.

## Características:

* No poseen núcleo.
* Son muy pequeñas.
* Carecen de organelos membranosos.
* Son las células más antiguas.

---
<br><br><br>


# 🧫 Células Eucariotas

Las células eucariotas son más complejas y poseen un núcleo donde se almacena el ADN.

Los animales, plantas, hongos y protistas están formados por células eucariotas.

## Características:

* Poseen núcleo definido.
* Tienen organelos especializados.
* Son más grandes.
* Realizan procesos complejos.

---
<br><br><br>


# 🌱 Diferencia entre célula animal y vegetal

Aunque ambas son eucariotas, presentan diferencias importantes.

## Célula animal:

* No tiene pared celular.
* Tiene más lisosomas.
* Puede tener distintas formas.

## Célula vegetal:

* Tiene pared celular.
* Posee cloroplastos.
* Realiza fotosíntesis.
* Tiene gran vacuola central.

---
<br><br><br>


# ⚛️ ¿Qué son las moléculas?

Las moléculas son conjuntos de átomos unidos químicamente. Todas las sustancias del universo están formadas por moléculas.

Dentro de las células existen millones de moléculas participando en procesos biológicos y químicos esenciales para la vida.

Las moléculas permiten producir energía, almacenar información genética y construir estructuras celulares.

---
<br><br><br>



# 🧪 Tipos de moléculas importantes

# 💧 Agua

El agua es la molécula más abundante en la célula. Ayuda a transportar nutrientes y permite reacciones químicas.

## Funciones:

* Transportar sustancias.
* Regular temperatura.
* Participar en reacciones químicas.

---
<br><br><br>


# 🍞 Carbohidratos

Los carbohidratos proporcionan energía rápida a las células.

## Ejemplos:

* Glucosa
* Almidón
* Azúcares

## Funciones:

* Dar energía.
* Almacenar energía.

---
<br><br><br>


# 🥩 Proteínas

Las proteínas ayudan al crecimiento, reparación y funcionamiento del organismo.

## Funciones:

* Formar tejidos.
* Reparar células.
* Formar enzimas.

---
<br><br><br>


# 🧈 Lípidos

Los lípidos forman membranas celulares y almacenan energía.

## Funciones:

* Reserva energética.
* Protección celular.
* Formación de membranas.

---
<br><br><br>


# 🧬 ADN

El ADN contiene la información genética de todos los seres vivos.

Gracias al ADN, las células saben cómo funcionar y reproducirse.

## Funciones:

* Almacenar información genética.
* Controlar funciones celulares.
* Transmitir características hereditarias.

---
<br><br><br>


# 🔋 Mitocondria

La mitocondria es conocida como la central energética de la célula.

Su función principal es producir energía mediante la respiración celular.

La energía producida se almacena en forma de ATP, una molécula energética utilizada por la célula.

Las células musculares contienen muchas mitocondrias porque necesitan gran cantidad de energía.

---
<br><br><br>


# ⚡ Funciones de la mitocondria

* Produce ATP.
* Genera energía.
* Realiza respiración celular.
* Participa en metabolismo celular.
* Ayuda al funcionamiento celular.

---
<br><br><br>


# 🔍 Características de la mitocondria

* Tiene doble membrana.
* Posee ADN propio.
* Se encuentra en células animales y vegetales.
* Tiene forma ovalada.

---
<br><br><br>


# 🧬 Ribosoma

El ribosoma es un organelo encargado de fabricar proteínas.

Las proteínas son necesarias para formar músculos, órganos y tejidos.

Los ribosomas leen información genética enviada por el ARN mensajero y construyen proteínas usando aminoácidos.

---
<br><br><br>


# ⚙️ Funciones del ribosoma

* Sintetizar proteínas.
* Interpretar información genética.
* Ayudar al crecimiento celular.
* Reparar tejidos.

---
<br><br><br>


# 🔍 Características del ribosoma

* Son muy pequeños.
* Están formados por ARN y proteínas.
* Se encuentran en todas las células.
* Pueden estar libres o unidos al retículo endoplasmático.

---
<br><br><br>


# 🧪 Lisosoma

El lisosoma es el organelo encargado de limpiar la célula.

Contiene enzimas digestivas capaces de destruir bacterias, virus y restos celulares.

También recicla materiales viejos para reutilizarlos dentro de la célula.

---
<br><br><br>


# ⚙️ Funciones del lisosoma

* Eliminar desechos.
* Destruir microorganismos.
* Reciclar materiales celulares.
* Mantener limpia la célula.

---
<br><br><br>


# 🔍 Características del lisosoma

* Contiene enzimas digestivas.
* Se encuentra principalmente en células animales.
* Ayuda a la defensa celular.

---
<br><br><br>


# 🌎 Importancia de los organelos celulares

Los organelos celulares trabajan juntos para mantener viva la célula.

Cada organelo cumple una función específica y necesaria.

## Ejemplos:

* Mitocondria → produce energía.
* Ribosoma → fabrica proteínas.
* Lisosoma → elimina desechos.

Gracias a todos ellos, los seres vivos pueden crecer, desarrollarse y sobrevivir.

            `,

            imagen: 'Img/celula.png'
        },

        question:
        "¿Qué organelo produce energía en la célula?",

         media: {
            type: 'image',
            url: 'Img/mito.png'
        },
        answers: [
            { text: 'Mitocondria', correct: true, explanation: 'La mitocondria genera energía en forma de ATP mediante la respiración celular.' },
            { text: 'Ribosoma', correct: false, explanation: 'El ribosoma sintetiza proteínas, no es el principal componente de la membrana.' },
            { text: 'Lisosoma', correct: false, explanation: 'El lisosoma digiere desechos celulares mediante enzimas, no forma la membrana.' }
        ]
    },
    {
        // ---------- PREGUNTA 1 ----------
        tema: "Célula y Moléculas",
        hint: 'Piensa en un tipo de lípido anfipático, es decir, que tiene una parte afín al agua y otra que la repele.',
        question: "¿Cuál de las siguientes biomoléculas es el principal componente de las membranas celulares, formando una bicapa?",
        media: {
            type: 'image',
            url: 'Img/fosfolipido.png'
        },
        answers: [
            { text: 'Proteínas globulares', correct: false, explanation: 'Las proteínas están incrustadas en la membrana, pero el armazón o matriz principal de la bicapa está constituido por lípidos anfipáticos.' },
            { text: 'Fosfolípidos', correct: true, explanation: 'Poseen una cabeza hidrofílica y dos colas hidrofóbicas, lo que les permite autoensamblarse en una bicapa lipídica que forma la base de las membranas celulares.' },
            { text: 'Glucógeno', correct: false, explanation: 'El glucógeno es un polisacárido que funciona como reserva de carbohidratos en animales, no forma parte estructural de las membranas.' },
            { text: 'Triglicéridos', correct: false, explanation: 'Aunque son lípidos, los triglicéridos sirven principalmente como reserva de energía a largo plazo en el tejido adiposo, no como componentes estructurales de la membrana.' }
        ]
    },

    {
        // ---------- PREGUNTA 2 ----------
        tema: "Célula y Moléculas",
        hint: 'Este organelo tiene su propio ADN y una doble membrana, a menudo descrita con pliegues llamados crestas.',
        question: "¿En qué organelo celular ocurre la mayor parte de la síntesis de ATP mediante la respiración celular aeróbica?",
        media: {
            type: 'image',
            url: 'Img/celuoo.jpg'
        },
        answers: [
            { text: 'Cloroplasto', correct: false, explanation: 'Los cloroplastos producen ATP durante la etapa luminosa de la fotosíntesis, pero esto ocurre solo en células vegetales y algas, y se usa para fijar carbono, no es la fuente general de la respiración celular.' },
            { text: 'Mitocondria', correct: true, explanation: 'La mitocondria es conocida como la central energética de la célula porque allí se lleva a cabo el ciclo de Krebs y la fosforilación oxidativa para producir ATP.' },
            { text: 'Aparato de Golgi', correct: false, explanation: 'El aparato de Golgi interviene en la modificación, empaquetamiento y transporte de proteínas, no en la síntesis de ATP.' },
            { text: 'Lisosoma', correct: false, explanation: 'Los lisosomas se encargan de la digestión celular y la degradación de desechos, no de la producción de energía.' }
        ]
    },

{
    // ---------- PREGUNTA 3 ----------
        tema: "Célula y Moléculas",
        hint: 'Es un enlace covalente específico formado por una reacción de condensación entre un grupo amino y un grupo carboxilo.',
        question: "¿Qué tipo de enlace químico une a los aminoácidos en la estructura primaria de una proteína?",
        media: {
            type: 'image',
            url: 'Img/ami.png'
        },
        answers: [
            { text: 'Enlace de hidrógeno', correct: false, explanation: 'Los enlaces de hidrógeno son cruciales para mantener las estructuras secundaria y terciaria de las proteínas, pero no unen los aminoácidos de forma lineal.' },
            { text: 'Enlace peptídico', correct: true, explanation: 'El enlace peptídico es un enlace covalente de tipo amida que se forma entre el grupo carboxilo de un aminoácido y el grupo amino del siguiente.' },
            { text: 'Enlace glucosídico', correct: false, explanation: 'El enlace glucosídico es el que une a los monosacáridos para formar disacáridos o polisacáridos.' },
            { text: 'Enlace éster', correct: false, explanation: 'Los enlaces éster se forman típicamente entre los ácidos grasos y el glicerol en los lípidos.' }
        ]
    },    
 {
        // ---------- PREGUNTA 4 ----------
        tema: "Célula y Moléculas",
        hint: 'Trabajan estrechamente con el ARN mensajero (ARNm) y el ARN de transferencia (ARNt) durante el proceso de traducción.',
        question: "¿Cuál es la función principal de los ribosomas en la célula?",
        media: {
            type: 'image',
            url: 'Img/celuoo.jpg'
        },
        answers: [
            { text: 'Síntesis de proteínas', correct: true, explanation: 'Los ribosomas son los complejos macromoleculares encargados de traducir el ARN mensajero en cadenas de aminoácidos.' },
            { text: 'Duplicación del ADN', correct: false, explanation: 'La replicación o duplicación del ADN es llevada a cabo por enzimas como la ADN polimerasa dentro del núcleo o nucleoide.' },
            { text: 'Degradación de toxinas', correct: false, explanation: 'La detoxificación celular es una función principal del retículo endoplásmico liso y de los peroxisomas.' },
            { text: 'Almacenamiento de agua', correct: false, explanation: 'El almacenamiento de agua y fluidos es característico de las vacuolas, especialmente en células vegetales.' }
        ]
    },
{
        // ---------- PREGUNTA 5 ----------
        tema: "Célula y Moléculas",
        hint: 'En el ARN, esta base se empareja con la Adenina mediante dos puentes de hidrógeno.',
        question: "¿Cuál de las siguientes bases nitrogenadas es exclusiva del ARN y no se encuentra en el ADN?",
        media: {
            type: 'image',
            url: 'Img/adn.png'
        },
        answers: [
            { text: 'Adenina', correct: false, explanation: 'La adenina está presente tanto en el ADN como en el ARN, apareándose con la timina o el uracilo respectivamente.' },
            { text: 'Citosina', correct: false, explanation: 'La citosina se encuentra en ambos ácidos nucleicos y siempre se aparea con la guanina.' },
            { text: 'Uracilo', correct: false, explanation: 'El uracilo es la base pirimidínica que reemplaza a la timina en el ARN y se aparea con la adenina.' },
            { text: 'Timina', correct: true, explanation: 'La timina es exclusiva del ADN; en el ARN su lugar es ocupado por el uracilo.' }
        ]
    },
{
        // ---------- PREGUNTA 6 ----------
        tema: "Célula y Moléculas",
        hint: 'La palabra eucariota proviene del griego y significa núcleo verdadero.',
        question: "¿Qué característica diferencia principalmente a las células procariotas de las eucariotas?",
        media: {
            type: 'image',
            url: 'Img/euca.jpg'
        },
        answers: [
            { text: 'La presencia de membrana plasmática', correct: false, explanation: 'Tanto las células procariotas como las eucariotas poseen una membrana plasmática que delimita su entorno.' },
            { text: 'La presencia de ribosomas', correct: false, explanation: 'Ambos tipos celulares necesitan sintetizar proteínas, por lo que ambos cuentan con ribosomas (aunque de tamaños diferentes).' },
            { text: 'La ausencia de un núcleo definido por membrana', correct: false, explanation: 'Las procariotas carecen de envoltura nuclear, teniendo su material genético libre en el nucleoide, mientras que las eucariotas protegen su ADN dentro de un núcleo.' },
            { text: 'La capacidad de realizar metabolismo', correct: true, explanation: 'Toda célula viva, sea procariota o eucariota, realiza funciones metabólicas para sobrevivir.' }
        ]
    },
    
   {
        // ---------- PREGUNTA 7 ----------
        tema: "Célula y Moléculas",
        hint: 'Su interior mantiene un pH ácido óptimo (alrededor de 4.5-5.0) para que sus enzimas funcionen correctamente.',
        question: "¿Qué organelo contiene enzimas hidrolíticas encargadas de la digestión intracelular de macromoléculas y organelos viejos?",
        media: {
            type: 'image',
            url: 'Img/celuoo.jpg'
        },
        answers: [
            { 
                text: 'Peroxisoma', 
                correct: false, 
                explanation: 'Los peroxisomas contienen enzimas oxidativas que producen y degradan peróxido de hidrógeno, enfocándose en la oxidación de ácidos grasos.' 
            },
            { 
                text: 'Lisosoma', 
                correct: true, 
                explanation: 'Los lisosomas contienen hidrolasas ácidas capaces de romper proteínas, ácidos nucleicos, carbohidratos y lípidos mediante digestión celular.' 
            },
            { 
                text: 'Centrosoma', 
                correct: false, 
                explanation: 'El centrosoma es el principal centro organizador de microtúbulos y participa en la división celular, no en la digestión.' 
            },
            { 
                text: 'Retículo endoplásmico rugoso', 
                correct: false, 
                explanation: 'El RER está involucrado en la síntesis y plegamiento de proteínas, no en la degradación hidrolítica de materiales.' 
            }
        ]
    },
    
    {
        // ---------- PREGUNTA 8 ----------
        tema: "Célula y Moléculas",
        hint: 'Esta molécula transporta el código genético desde el núcleo hacia el citoplasma para que los ribosomas lo lean.',
        question: "¿Durante el proceso de transcripción genética, ¿qué molécula se sintetiza utilizando el ADN como molde?",
        media: {
            type: 'image',
            url: 'Img/euca.jpg'
        },
        answers: [
            { 
                text: 'Proteína', 
                correct: false, 
                explanation: 'Las proteínas se sintetizan en la traducción, utilizando el ARN mensajero como guía, no directamente desde el ADN.' 
            },
            { 
                text: 'ARN mensajero (ARNm)', 
                correct: true, 
                explanation: 'La transcripción consiste en copiar un fragmento de la cadena de ADN para formar una molécula complementaria de ARN.' 
            },
            { 
                text: 'Lípidos de membrana', 
                correct: false, 
                explanation: 'Los lípidos no se codifican directamente por transcripción; se sintetizan mediante vías enzimáticas en el retículo endoplásmico liso.' 
            },
            { 
                text: 'ADN polimerasa', 
                correct: false, 
                explanation: 'La ADN polimerasa es la enzima que replica el ADN, no el producto de la transcripción.' 
            }
        ]
    },
    {
        // ---------- PREGUNTA 9 ----------
        tema: "Célula y Moléculas",
        hint: 'Esta región no está delimitada por una membrana y desaparece temporalmente durante la mitosis.',
        question: "¿Cuál es la función del nucléolo dentro del núcleo celular?",
        media: {
            type: 'image',
            url: 'Img/celuoo.jpg'
        },
        answers: [
            { 
                text: 'Ensamblar los componentes y subunidades de los ribosomas', 
                correct: true, 
                explanation: 'El nucléolo es una estructura densa donde se transcribe el ARNr y se acoplan las proteínas para formar las subunidades ribosomales.' 
            },
            { 
                text: 'Sintetizar los lípidos de la envoltura nuclear', 
                correct: false, 
                explanation: 'La síntesis de lípidos se lleva a cabo en el retículo endoplásmico, no en el nucléolo.' 
            },
            { 
                text: 'Almacenar el ATP de reserva de la célula', 
                correct: false, 
                explanation: 'El ATP no se almacena en grandes cantidades en el nucléolo; se utiliza continuamente por toda la célula tras producirse en las mitocondrias.' 
            },
            { 
                text: 'Llevar a cabo la división del citoplasma', 
                correct: false, 
                explanation: 'La división del citoplasma se conoce como citocinesis y ocurre al final de la división celular mediada por el citoesqueleto.' 
            }
        ]
    },
     
    
    
],
    
























// ✅ SECCIÓN: MITOSIS
mitosis: [

{
    tema: "Mitosis y Meiosis",

    informacion: {
        titulo: "🧬 Mitosis y Meiosis: División Celular",

        texto: `

# 🔬 ¿Qué es la división celular?

La división celular es el proceso mediante el cual una célula origina nuevas células. Este mecanismo es fundamental para el crecimiento, la reparación de tejidos y la reproducción de los seres vivos.

Existen dos tipos principales de división celular:

* 🧬 Mitosis
* 🔄 Meiosis

Ambas permiten transmitir la información genética, pero tienen funciones y resultados diferentes.

<br><br><br>

---

# 🧬 MITOSIS

La mitosis es un proceso de división celular donde una célula madre produce dos células hijas idénticas.

Este proceso ocurre en las células somáticas del cuerpo y permite:

* Crecimiento.
* Reparación de tejidos.
* Reemplazo celular.
* Regeneración.

Las células hijas conservan exactamente el mismo número de cromosomas.

<br><br><br>

---

# ⚙️ Fases de la Mitosis

# 🌌 Profase

La cromatina comienza a condensarse formando cromosomas visibles.

## Características:

* Desaparece la membrana nuclear.
* Se forma el huso mitótico.
* Los cromosomas se hacen visibles.

<br><br><br>

---

# 📍 Metafase

Los cromosomas se alinean en el centro de la célula formando la placa metafásica.

## Características:

* Los cromosomas se ordenan perfectamente.
* El huso se une a los cinetocoros.
* Es una fase clave para la correcta división.

<br><br><br>

---

# ⚡ Anafase

Las cromátides hermanas se separan y viajan hacia polos opuestos.

## Características:

* Se rompen los centrómeros.
* Los cromosomas migran.
* La célula se alarga.

<br><br><br>

---

# 🌟 Telofase

Los cromosomas llegan a los extremos y se forman nuevamente los núcleos.

## Características:

* Reaparece la membrana nuclear.
* Los cromosomas se descondensan.
* Finaliza la división nuclear.

<br><br><br>

---

# ✂️ Citocinesis

Es la separación física del citoplasma.

## Funciones:

* Divide completamente la célula.
* Forma células hijas independientes.

<br><br><br>

---

# 🔄 MEIOSIS

La meiosis es una división celular especializada que produce gametos.

Ocurre en órganos reproductores y genera:

* Óvulos.
* Espermatozoides.

La meiosis produce 4 células haploides con la mitad de cromosomas y gran variabilidad genética.

<br><br><br>

---

# 🧬 Importancia de la Meiosis

## Funciones:

* Mantener estable el número cromosómico.
* Generar diversidad genética.
* Permitir la reproducción sexual.

<br><br><br>

---

# ⚡ Diferencias entre Mitosis y Meiosis

## Mitosis

* Produce 2 células.
* Las células son idénticas.
* Conserva el número cromosómico.
* Ocurre en células somáticas.

## Meiosis

* Produce 4 células.
* Las células son diferentes.
* Reduce el número cromosómico.
* Ocurre en células sexuales.

<br><br><br>

---

# 🧪 Crossing Over

Durante la Profase I ocurre el intercambio de fragmentos de ADN entre cromosomas homólogos.

Este proceso aumenta la variabilidad genética.

## Beneficios:

* Mayor diversidad.
* Nuevas combinaciones genéticas.
* Evolución biológica.

<br><br><br>

---

# 🌎 Importancia biológica

Gracias a la mitosis y meiosis los organismos pueden:

* Crecer.
* Reparar tejidos.
* Reproducirse.
* Evolucionar.

Sin estos procesos la vida multicelular sería imposible.

        `,
        imagen: 'Img/MitosisMeiosis.png'
    },

    question: "¿En qué fase específica de la mitosis los cromosomas se alinean perfectamente en el plano ecuatorial de la célula?",

    hint: "El nombre de esta fase proviene del griego 'meta', asociado con 'en medio'.",

    media: {
        type: 'video',
        url: 'metafase.mp4'
    },

    answers: [
        {
            text: 'Profase',
            correct: false,
            explanation: 'Durante la profase la cromatina se condensa y la envoltura nuclear comienza a desaparecer.'
        },

        {
            text: 'Metafase',
            correct: true,
            explanation: 'En la metafase los cromosomas se alinean en la placa ecuatorial gracias al huso mitótico.'
        },

        {
            text: 'Anafase',
            correct: false,
            explanation: 'En la anafase las cromátides hermanas se separan hacia polos opuestos.'
        },

        {
            text: 'Telofase',
            correct: false,
            explanation: 'En la telofase se forman nuevamente los núcleos celulares.'
        }
    ]
},

// ✅ PREGUNTA 2
{
    tema: "Mitosis y Meiosis",

    hint: "La meiosis produce células sexuales con la mitad de cromosomas.",

    question: "¿Cuál es el resultado final de la meiosis?",

    media: {
        type: 'image',
        url: 'Img/meiosis.png'
    },

    answers: [
        {
            text: 'Dos células diploides idénticas',
            correct: false,
            explanation: 'Ese es el resultado típico de la mitosis.'
        },

        {
            text: 'Cuatro células haploides diferentes',
            correct: true,
            explanation: 'La meiosis genera cuatro células haploides con variabilidad genética.'
        },

        {
            text: 'Dos células haploides idénticas',
            correct: false,
            explanation: 'La meiosis completa produce cuatro células.'
        },

        {
            text: 'Cuatro células diploides',
            correct: false,
            explanation: 'La meiosis reduce el número cromosómico.'
        }
    ]
},

// ✅ PREGUNTA 3
{
    tema: "Mitosis y Meiosis",

    hint: "Es la tercera subfase de la Profase I.",

    question: "¿En qué etapa ocurre el crossing-over?",

    media: {
        type: 'image',
        url: 'Img/crossing.png'
    },

    answers: [
        {
            text: 'Leptoteno',
            correct: false,
            explanation: 'Aquí los cromosomas apenas comienzan a condensarse.'
        },

        {
            text: 'Zigoteno',
            correct: false,
            explanation: 'En esta fase inicia la sinapsis.'
        },

        {
            text: 'Paquiteno',
            correct: true,
            explanation: 'Durante el paquiteno ocurre el intercambio de ADN.'
        },

        {
            text: 'Diploteno',
            correct: false,
            explanation: 'Aquí los cromosomas comienzan a separarse.'
        }
    ]
},

// ✅ PREGUNTA 4
{
    tema: "Mitosis y Meiosis",

    hint: "Está formado por microtúbulos.",

    question: "¿Qué estructura mueve los cromosomas durante la división celular?",

    media: {
        type: 'image',
        url: 'Img/huso.png'
    },

    answers: [
        {
            text: 'Huso mitótico',
            correct: true,
            explanation: 'El huso mitótico mueve los cromosomas hacia los polos.'
        },

        {
            text: 'Complejo sinaptonémico',
            correct: false,
            explanation: 'Participa en la sinapsis durante meiosis.'
        },

        {
            text: 'Anillo contráctil',
            correct: false,
            explanation: 'Participa en la citocinesis.'
        },

        {
            text: 'Placa celular',
            correct: false,
            explanation: 'Forma la pared celular vegetal.'
        }
    ]
},

// ✅ PREGUNTA 5
{
    tema: "Mitosis y Meiosis",

    hint: "Piensa en qué estructura se separa en cada proceso.",

    question: "¿Cuál es la principal diferencia entre Anafase y Anafase I?",

    media: {
        type: 'image',
        url: 'Img/anafase.png'
    },

    answers: [
        {
            text: 'En mitosis se separan cromátides y en meiosis I cromosomas homólogos',
            correct: true,
            explanation: 'La mitosis separa cromátides hermanas y la meiosis I cromosomas homólogos.'
        },

        {
            text: 'Ambas separan lo mismo',
            correct: false,
            explanation: 'Los procesos son distintos.'
        },

        {
            text: 'La meiosis separa cromátides primero',
            correct: false,
            explanation: 'Eso ocurre en Meiosis II.'
        },

        {
            text: 'La mitosis no usa microtúbulos',
            correct: false,
            explanation: 'Ambos procesos utilizan huso mitótico.'
        }
    ]
},
{
        // ---------- PREGUNTA 6 ----------
        tema: "Célula y Moléculas",
        hint: 'Esta fase de la interfase lleva el nombre del proceso fundamental de construir o fabricar una copia nueva de las cadenas nucleotídicas.',
        question: "¿En qué momento crucial del ciclo celular previo a la mitosis o meiosis ocurre la replicación exacta de todo el ADN de la célula?",
        media: {
            type: 'image',
            url: 'Img/mip.jpg'
        },
        answers: [
            { 
                text: 'Fase G1 de la Interfase', 
                correct: false, 
                explanation: 'La fase G1 es un período de crecimiento celular general y síntesis intensa de proteínas y ARN, pero no incluye la replicación del genoma.' 
            },
            { 
                text: 'Fase S de la Interfase', 
                correct: true, 
                explanation: 'La fase S (Síntesis) está dedicada de manera exclusiva a duplicar de forma fiel cada una de las moléculas de ADN antes de la condensación cromosómica.' 
            },
            { 
                text: 'Fase G2 de la Interfase', 
                correct: false, 
                explanation: 'La fase G2 es una etapa de verificación y ensamblaje de estructuras necesarias para la división, ocurriendo de forma posterior a la replicación del ADN.' 
            },
            { 
                text: 'Profase temprana', 
                correct: false, 
                explanation: 'Cuando la célula entra en profase, el ADN ya debe estar completamente duplicado; de lo contrario, la división provocaría mutaciones letales.' 
            }
        ]
    },
{
        // ---------- PREGUNTA 7 ----------
        tema: "Célula y Moléculas",
        hint: "El término proviene del griego 'soma', que significa 'cuerpo'. Son todas las células que forman el cuerpo excepto la línea germinal.",
        question: "¿Qué tipo de células del organismo pluricelular llevan a cabo el proceso de la mitosis para su proliferación?",
        media: {
            type: 'image',
            url: 'Img/tipc.jpg'
        },
        answers: [
            { 
                text: 'Células somáticas', 
                correct: true, 
                explanation: 'Las células somáticas constituyen la totalidad de los tejidos corporales (piel, músculos, órganos) y se dividen por mitosis para el mantenimiento del organismo.' 
            },
            { 
                text: 'Gametos maduros', 
                correct: false, 
                explanation: 'Los gametos maduros (espermatozoides y óvulos) son células terminales haploides que no vuelven a dividirse hasta que ocurre la fecundación.' 
            },
            { 
                text: 'Células germinales primordiales durante la producción de esporas meióticas', 
                correct: false, 
                explanation: 'Las células germinales utilizan la meiosis (gametogénesis) para originar células haploides con variabilidad genética.' 
            },
            { 
                text: 'Células procariotas', 
                correct: false, 
                explanation: 'Las bacterias y arqueas carecen de núcleo y citoesqueleto complejo, por lo que se reproducen mediante fisión binaria o bipartición, no por mitosis.' 
            }
        ]
    },
    {
        // ---------- PREGUNTA 8 ----------
        tema: "Célula y Moléculas",
        hint: 'La mitosis busca generar clones perfectos de la célula original para preservar las funciones genéticas exactas del tejido.',
        question: "¿Si una célula animal posee un número diploide de 2n = 24 cromosomas, ¿cuántos cromosomas tendrá cada una de sus células hijas tras completar la mitosis?",
        media: {
            type: 'image',
            url: 'Img/MitosisMeiosis.png'
        },
        answers: [
            { 
                text: '12 cromosomas', 
                correct: false, 
                explanation: 'Esta cantidad equivaldría a un estado haploide (n = 12), el cual es el producto típico de la reducción meiótica, no de la mitosis corporativa.' 
            },
           { 
                text: '24 cromosomas', 
                correct: true, 
                explanation: 'La mitosis es una división ecuacional conservadora, lo que significa que mantiene idéntico el número cromosómico original (2n = 24) en ambas células hijas.' 
            },
            { 
                text: '48 cromosomas', 
                correct: false, 
                explanation: 'Este valor implicaría una duplicación descontrolada de la ploidía celular (tetraploidía), lo cual representaría una anomalía grave en el ciclo celular.' 
            },
            { 
                text: '6 cromosomas', 
                correct: false, 
                explanation: 'Una reducción tan drástica no corresponde a ningún mecanismo normal de reparto cromosómico dentro de los seres vivos eucariotas.' 
            }
        ]
    },
    {
        // ---------- PREGUNTA 9 ----------
        tema: "Célula y Moléculas",
        hint: 'Una de ellas requiere depositar vesículas llenas de carbohidratos complejos en el centro celular debido a la presencia de una estructura externa rígida.',
        question: "¿Cómo difiere el mecanismo de citocinesis entre una célula animal y una célula vegetal?",
        media: {
            type: 'image',
            url: 'Img/av.jpg'
        },
        answers: [
            { 
                text: 'Las animales usan una pared rígida y las vegetales un anillo de proteínas externas', 
                correct: false, 
                explanation: 'Esta descripción está invertida, puesto que las células vegetales son las únicas que poseen una pared celular de celulosa rígida que impide el estrangulamiento.' 
            },
            { 
                text: 'Las animales se dividen por estrangulamiento gracias a un anillo contráctil; las vegetales construyen un fragmoplasto interno', 
                correct: true, 
                explanation: 'La flexibilidad de la membrana animal permite el surco de división por actina y miosina, mientras que la rigidez vegetal exige fusionar vesículas del aparato de Golgi desde el centro hacia afuera.' 
            },
            { 
                text: 'Las células vegetales no realizan citocinesis, quedando siempre multinucleadas', 
                correct: false, 
                explanation: 'Las plantas sí realizan citocinesis de forma regular para separar sus células basándose en la formación de tabiques intracelulares.' 
            },
            { 
                text: 'Ambas células se dividen exactamente igual mediante invaginación de la membrana plasmática', 
                correct: false, 
                explanation: 'La presencia de la pared celular celulósica en vegetales hace mecánicamente imposible la invaginación periférica de la membrana hacia el centro.' 
            }
        ]
    },
    {
        // ---------- PREGUNTA 10 ----------
        tema: "Célula y Moléculas",
        hint: 'Este error estructural se denomina \'no disyunción cromosómica\' y es el origen de síndromes genéticos como el Síndrome de Down.',
        question: "¿Qué consecuencias patológicas o celulares puede traer consigo un fallo severo en los puntos de control del huso mitótico durante la anafase?",
        media: {
            type: 'image',
            url: 'Img/pu.png'
        },
        answers: [
            { 
                text: 'Aneuploidías (ganancia o pérdida de cromosomas individuales en las células hijas)', 
                correct: true, 
                explanation: 'Si los microtúbulos no se anclan de forma correcta a ambos lados y la célula se divide, un polo recibirá cromosomas de más y el otro de menos.' 
            },
            { 
                text: 'Una duplicación inmediata de la tasa de mutación en las bases nitrogenadas del ADN', 
                correct: false, 
                explanation: 'Los errores del huso affectan la distribución física de cromosomas enteros, no la secuencia molecular química interna de los nucleótidos individuales.' 
            },
            { 
                text: 'La transformación instantánea de células eucariotas en procariotas funcionales', 
                correct: false, 
                explanation: 'Un error de división celular no puede cambiar de manera radical la organización estructural evolutiva ni los organelos internos de una célula.' 
            },
            { 
                text: 'La inclusión de todas las enzimas mitocondriales productoras de energía', 
                correct: false, 
                explanation: 'La no disyunción cromosómica afecta el núcleo y el cariotipo, pero no destruye los complejos enzimáticos metabólicos de las mitocondrias de forma directa.' 
            }
        ]
    }
],

// 🌍 SECCIÓN: DOMINIOS DE LA VIDA
dominios: [
    {
        tema: "Dominios de la Vida",
        informacion: {
            titulo: "🌎 Los Tres Dominios de la Vida",
            texto: `\n# 🧬 ¿Qué son los dominios de la vida?\nLos dominios son la categoría más grande utilizada para clasificar a todos los seres vivos del planeta.\nActualmente existen tres dominios principales:\n* 🦠 Bacteria\n* 🔥 Archaea\n* 🌱 Eukarya\nEsta clasificación se basa en características celulares y genéticas.\n<br><br><br>\n---\n# 🦠 Dominio Bacteria\nLas bacterias son organismos procariotas muy pequeños y abundantes.\n## Características:\n* No poseen núcleo.\n* Tienen pared celular con peptidoglicano.\n* Viven en agua, suelo y organismos vivos.\n* Algunas son beneficiosas y otras causan enfermedades.\n<br><br><br>\n---\n# 🔥 Dominio Archaea\nLas arqueas son microorganismos procariotas capaces de sobrevivir en ambientes extremos.\n## Tipos:\n* 🌋 Termófilos → viven en altas temperaturas.\n* 🧂 Halófilos → viven en ambientes muy salados.\n* 💨 Metanógenos → producen metano sin oxígeno.\n## Características:\n* No poseen peptidoglicano.\n* Tienen membranas especiales.\n* Resisten condiciones extremas.\n<br><br><br>\n---\n# 🌱 Dominio Eukarya\nEste dominio incluye organismos con células complejas.\n## Características:\n* Poseen núcleo verdadero.\n* Tienen organelos especializados.\n* Son más grandes y complejos.\n## Organismos:\n* 🐾 Animales\n* 🌿 Plantas\n* 🍄 Hongos\n* 🦠 Protistas\n<br><br><br>\n---\n# 🔬 Diferencia principal entre procariotas y eucariotas\n## Procariotas\n* ADN libre en el citoplasma.\n* No tienen núcleo.\n* Son más simples.\n## Eucariotas\n* ADN protegido dentro de un núcleo.\n* Tienen organelos membranosos.\n* Son más complejas.\n<br><br><br>\n---\n# 🧪 Peptidoglicano\nEl peptidoglicano es una sustancia presente en la pared celular bacteriana.\n## Importancia:\n* Protege a la bacteria.\n* Mantiene la forma celular.\n* Ayuda a evitar daños.\nMuchos antibióticos atacan esta estructura.\n<br><br><br>\n---\n# 🧬 Carl Woese y los Tres Dominios\nEn 1977 el microbiólogo Carl Woese revolucionó la biología usando ARN ribosomal 16S para clasificar organismos.\nGracias a sus investigaciones descubrió que las Archaea eran muy diferentes de las bacterias comunes.\n## Importancia:\n* Creó el sistema de los tres dominios.\n* Modernizó la clasificación biológica.\n* Fundó la taxonomía molecular.\n<br><br><br>\n---\n# 🌎 Importancia de los dominios\nLa clasificación ayuda a comprender:\n* El origen de la vida.\n* La evolución biológica.\n* Las relaciones genéticas.\n* La biodiversidad del planeta.\n`,
            imagen: 'Img/dominios.png'
        },
        question: "¿Qué dominio incluye organismos extremófilos que viven en fuentes termales o lagos salados?",
        hint: "Este dominio incluye halófilos y termófilos.",
        media: {
            type: 'image',
            url: 'Img/archea.png'
        },
        answers: [
            { text: 'Eukarya', correct: false, explanation: 'Los organismos eucariotas son sensibles a condiciones extremas.' },
            { text: 'Archaea', correct: true, explanation: 'Las arqueas pueden vivir en ambientes extremos gracias a sus membranas especiales.' },
            { text: 'Bacteria', correct: false, explanation: 'Las bacterias comunes no suelen dominar ambientes extremos.' }
        ]
    },
    {
        tema: "Dominios de la Vida",
        hint: "Este científico utilizó ARN ribosomal 16S.",
        question: "¿Quién propuso el sistema de los tres dominios basado en ARN ribosomal 16S?",
        media: {
            type: 'image',
            url: 'Img/carl.jpg'
        },
        answers: [
            { text: 'Charles Darwin', correct: false, explanation: 'Darwin propuso la teoría de la evolución por selección natural.' },
            { text: 'Carl Woese', correct: true, explanation: 'Carl Woese descubrió el dominio Archaea y propuso los tres dominios.' },
            { text: 'Robert Whittaker', correct: false, explanation: 'Whittaker propuso el sistema de los cinco reinos.' },
            { text: 'Lynn Margulis', correct: false, explanation: 'Margulis desarrolló la teoría endosimbiótica.' }
        ]
    },
    {
        tema: "Dominios de la Vida: Eukarya",
        hint: "Sus células poseen núcleo verdadero.",
        question: "¿Cuál de los siguientes reinos pertenece exclusivamente al dominio Eukarya?",
        media: {
            type: 'image',
            url: 'Img/eukarya.png'
        },
        answers: [
            { text: 'Cyanobacteria', correct: false, explanation: 'Las cyanobacterias pertenecen al dominio Bacteria.' },
            { text: 'Methanogens', correct: false, explanation: 'Los metanógenos pertenecen al dominio Archaea.' },
            { text: 'Fungi (Hongos)', correct: true, explanation: 'Los hongos forman parte del dominio Eukarya.' }
        ]
    },
    {
        tema: "Dominios de la Vida",
        hint: "La diferencia está en dónde se encuentra el ADN.",
        question: "¿Qué característica diferencia al dominio Eukarya de Bacteria y Archaea?",
        media: {
            type: 'image',
            url: 'Img/nucleo.png'
        },
        answers: [
            { text: 'Presencia de una membrana nuclear', correct: true, explanation: 'Los eucariotas poseen núcleo verdadero protegido por membrana.' },
            { text: 'Presencia de ADN', correct: false, explanation: 'Todos los seres vivos poseen ADN.' },
            { text: 'Capacidad de reproducción', correct: false, explanation: 'Todos los organismos vivos pueden reproducirse.' }
        ]
    },
    {
        tema: "Dominios de la Vida: Bacteria",
        hint: "Es un componente exclusivo de la pared bacteriana.",
        question: "¿Qué dominio posee peptidoglicano en su pared celular?",
        media: {
            type: 'image',
            url: 'Img/bacteria.jpg'
        },
        answers: [
            { text: 'Bacteria', correct: true, explanation: 'Las bacterias poseen paredes celulares con peptidoglicano.' },
            { text: 'Archaea', correct: false, explanation: 'Las arqueas no poseen peptidoglicano.' },
            { text: 'Eukarya', correct: false, explanation: 'Los eucariotas usan otros materiales como celulosa o quitina.' }
        ]
    },
    {
        // ---------- PREGUNTA 6 ----------
        tema: "Célula y Moléculas",
        hint: 'Los virus son considerados agentes infecciosos acelulares parásitos obligatorios; requieren de las células de los tres dominios para poder replicarse.',
        question: "¿Por qué los virus no están incluidos en ninguno de los tres dominios de la vida propuestos por Carl Woese?",
        media: {
            type: 'image',
            url: 'Img/vir.jpg'
        },
        answers: [
            { text: 'Porque son demasiado grandes para ser clasificados junto a organismos procariotas pequeños', correct: false, explanation: 'Los virus son en realidad muchísimo más pequeños que cualquier bacteria o célula eucariota promedio.' },
            { text: 'Porque carecen de estructura celular, metabolismo propio y no poseen el ARN ribosomal utilizado para trazar el árbol filogenético', correct: true, explanation: 'El sistema de Woese clasifica la vida celular basándose en los componentes de los ribosomas. Al no tener células, ribosomas ni metabolismo autónomo, los virus quedan fuera del árbol de la vida celular.' },
            { text: 'Porque todos los virus se extinguieron antes de que se diseñara la clasificación moderna', correct: false, explanation: 'Los virus están plenamente activos y presentes en la actualidad, infectando a animales, plantas, bacterias y arqueas constantemente.' },
            { text: 'Porque pertenecen a un dominio secreto llamado Reino Fungi alternativo', correct: false, explanation: 'Fungi es el reino de los hongos verdaderos dentro de Eukarya, con el cual los virus no tienen ninguna relación estructural.' }
        ]
    },
    {
        // ---------- PREGUNTA 7 ----------
        tema: "Célula y Moléculas",
        hint: 'El sufijo \'-filo\' proviene del griego y significa \'amante de\' o \'afinidad por\'. Son literalmente amantes de las condiciones ambientales extremas.',
        question: "¿A qué se refiere el término 'Extremófilo', condición muy común en los integrantes del dominio Archaea?",
        media: {
            type: 'image',
            url: 'Img/ext.jpg'
        },
        answers: [
            { text: 'A organismos que solo pueden sobrevivir si consumen nutrientes extremadamente caros en laboratorios', correct: false, explanation: 'Muchos extremófilos son quimioautótrofos simples que viven de minerales básicos, gases inertes o sales elementales abundantes en la naturaleza.' },
            { text: 'A seres capaces de desarrollarse óptimamente en condiciones físicas o químicas extremas (temperatura, presión, acidez, salinidad) intolerables para la mayoría de los seres vivos', correct: true, explanation: 'Viven en lugares como géiseres hirvientes, fondos oceánicos con presiones aplastantes o lagos alcalinos donde las células normales se desnaturalizarían o romperían al instante.' },
            { text: 'A células que tienen una forma física geométrica de estrella extremadamente rara bajo el microscopio', correct: false, explanation: 'Aunque hay algunas arqueas cuadradas o irregulares, el término define su adaptación ambiental y ecológica, no una morfología visual fija.' },
            { text: 'A organismos del dominio Bacteria que causan mutaciones instantáneas extremas en humanos', correct: false, explanation: 'No alteran el ADN de las personas de forma directa ni están asociados con brotes epidémicos mutogénicos masivos en la población.' }
        ]
    }
],

//  Ecosistemas
ecosistemas: [
    {
        tema: "Biodiversidad",
        informacion: {
            titulo: "¿Qué es la biodiversidad?",
            texto: `\nLa biodiversidad es la gran variedad de seres vivos que existen en el planeta Tierra. Incluye animales, plantas, hongos, bacterias y microorganismos que habitan en diferentes ecosistemas como bosques, selvas, mares, desiertos, ríos y montañas. Cada especie cumple una función importante dentro de la naturaleza y ayuda a mantener el equilibrio ecológico del planeta.\n\nLa biodiversidad se divide en tres niveles principales:\n\n* Diversidad genética\n* Diversidad de especies\n* Diversidad de ecosistemas\n\nLa biodiversidad es fundamental para la vida humana porque proporciona alimentos, medicinas, agua limpia y oxígeno.\n\nActualmente se encuentra amenazada por actividades humanas como la deforestación, la contaminación y el cambio climático.\n`,
            imagen: 'Img/Biodiversidad.png'
        },
        hint: 'Este concepto incluye genes, especies y ecosistemas completos.',
        question: "¿Cómo se define formalmente el concepto de biodiversidad?",
        media: {
            type: 'image',
            url: 'Img/tipos.png'
        },
        answers: [
            { text: 'A la cantidad total de agua y minerales de un ecosistema', correct: false, explanation: 'Eso corresponde a factores abióticos del ambiente, no a la diversidad biológica.' },
            { text: 'A la amplia variedad de seres vivos, sus genes y ecosistemas', correct: true, explanation: 'La biodiversidad incluye la variedad de especies, la diversidad genética y los ecosistemas donde habitan.' },
            { text: 'Al número de árboles sembrados en ciudades', correct: false, explanation: 'La reforestación urbana no representa toda la biodiversidad natural.' },
            { text: 'A la contaminación producida por las industrias', correct: false, explanation: 'La contaminación afecta negativamente a la biodiversidad, pero no la define.' }
        ]
    },
    {
        tema: "Biodiversidad genética",
        informacion: {
            titulo: "Ecosistemas acuáticos",
            texto: `\nLos ecosistemas acuáticos son ambientes donde los seres vivos dependen principalmente del agua para sobrevivir.\n\nExisten ecosistemas de agua salada como mares y océanos, y ecosistemas de agua dulce como ríos, lagos y lagunas.\n\nEstos ecosistemas albergan miles de especies y ayudan a regular el clima del planeta.\n\nTambién proporcionan alimentos, agua y recursos importantes para la humanidad.\n`,
            imagen: 'Img/EcosistemaA.png'
        },
        hint: 'Permite que las especies puedan adaptarse y resistir enfermedades.',
        question: "¿Qué término describe la variabilidad hereditaria entre individuos de una misma especie?",
        media: {
            type: 'image',
            url: 'Img/tipos.png'
        },
        answers: [
            { text: 'Diversidad ecosistémica', correct: false, explanation: 'La diversidad ecosistémica se refiere a distintos hábitats y ecosistemas.' },
            { text: 'Diversidad genética', correct: true, explanation: 'La diversidad genética corresponde a las diferencias en genes y alelos dentro de una especie.' },
            { text: 'Diversidad de filums', correct: false, explanation: 'Los filums son categorías taxonómicas amplias, no variaciones genéticas.' },
            { text: 'Diversidad alfa nominal', correct: false, explanation: 'La diversidad alfa mide especies presentes en un área específica.' }
        ]
    },
    {
        tema: "Cadena alimenticia",
        informacion: {
            titulo: "¿Cómo funciona la cadena alimenticia?",
            texto: `\nLa cadena alimenticia representa cómo los seres vivos obtienen energía dentro de un ecosistema.\n\nLas plantas son productores porque fabrican su alimento mediante la fotosíntesis.\n\nLos herbívoros consumen plantas y los carnívoros se alimentan de otros animales.\n\nFinalmente, los descomponedores reciclan nutrientes y permiten reiniciar el ciclo de la vida.\n`,
            imagen: 'Img/CadenaA.png'
        },
        hint: 'Estas especies solo existen naturalmente en una región específica del planeta.',
        question: "¿Cómo se denomina a una especie exclusiva de una región geográfica determinada?",
        media: {
            type: 'image',
            url: 'Img/plantas.png'
        },
        answers: [
            { text: 'Especie exótica', correct: false, explanation: 'Las especies exóticas son introducidas fuera de su hábitat natural.' },
            { text: 'Especie cosmopolita', correct: false, explanation: 'Las especies cosmopolitas habitan en muchas regiones del mundo.' },
            { text: 'Especie endémica', correct: true, explanation: 'Las especies endémicas solo existen de forma natural en una región específica.' },
            { text: 'Especie invasora', correct: false, explanation: 'Las especies invasoras dañan ecosistemas al expandirse fuera de su lugar original.' }
        ]
    },
    {
        // ---------- PREGUNTA 4 ----------
        tema: "Célula y Moléculas",
        hint: 'Son aquellos beneficios invisibles pero vitales que los ecosistemas sanos realizan al modular y equilibrar las condiciones ambientales necesarias para la vida.',
        question: "¿A qué categoría de los 'Servicios Ecosistémicos' corresponden la polinización de los cultivos por las abejas y la purificación del aire por los árboles de los bosques?",
        media: {
            type: 'image',
            url: 'Img/ab.jpg'
        },
        answers: [
            { text: 'Servicios de soporte cultural and recreativo', correct: false, explanation: 'Involucra beneficios estéticos, espirituales o actividades de ecoturismo en la naturaleza.' },
            { text: 'Servicios de regulación', correct: true, explanation: 'La biodiversidad regula el clima, previene la erosión del suelo, controla las plagas de forma natural y limpia los fluidos como el agua y el aire.' },
            { text: 'Servicios de extracción de combustibles fósiles', correct: false, explanation: 'Esto es una actividad de minería energética destructiva, no un beneficio ecológico regulador de un ecosistema vivo.' },
            { text: 'Servicios de abastecimiento mineral directo', correct: false, explanation: 'El abastecimiento biótico provee madera o alimentos, pero los minerales (como el hierro o el cobre) pertenecen a la geología, no a la biodiversidad viva.' }
        ]
    },
    {
        // ---------- PREGUNTA 5 ----------
        tema: "Célula y Moléculas",
        hint: 'Hay alrededor de 17 países en esta categoría (incluyendo a México, Colombia, Brasil, Australia y Madagascar) que juntos albergan más del 70% de las especies del mundo.',
        question: "¿Cómo se le denomina a un país que, debido a su ubicación geográfica y su historia evolutiva, concentra un porcentaje excepcionalmente alto de la biodiversidad total del planeta Tierra?",
        media: {
            type: 'image',
            url: 'Img/pl.jpg'
        },
        answers: [
            { text: 'País macroeconómico', correct: false, explanation: 'Es un término estrictamente financiero y comercial que mide el producto interno bruto (PIB), no su riqueza ecológica.' },
            { text: 'País cosmopolita industrial', correct: false, explanation: 'Define naciones altamente urbanizadas y tecnológicas, las cuales suelen tener hábitats naturales fragmentados.' },
            { text: 'País megadiverso', correct: true, explanation: 'Es el estatus oficial asignado a naciones con condiciones topográficas y climáticas privilegiadas que estimulan una riqueza biológica desbordante.' },
            { text: 'País monocultural', correct: false, explanation: 'Hace referencia a territorios que siembran un solo tipo de cultivo vegetal a gran escala, destruyendo la biodiversidad natural.' }
        ]
    }
]
}; // ¡AQUÍ SE CIERRA CORRECTAMENTE EL OBJETO DATABASE!

// ==========================================
// 🕹️ FUNCIONES DE CONTROL DEL JUEGO
// ==========================================

// INICIAR MÓDULO
function startModule(moduleName) {
    currentQuestions = database[moduleName];
    currentQuestionIndex = 0;

    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');

    showQuestion();
}

// MOSTRAR PREGUNTA
function showQuestion() {
    const infoContainer = document.getElementById('info-container');
    infoContainer.innerHTML = '';

    const question = currentQuestions[currentQuestionIndex];

    // Tema
    document.getElementById('tema-titulo').innerText = question.tema;

    // Pregunta
    questionElement.innerText = question.question;

    // Pista
    texto.innerHTML = question.hint ? `
        <div class="hint-box">
            <strong>Pista:</strong> ${question.hint}
        </div>
    ` : '';

    // Limpiar contenedores
    mediaContainer.innerHTML = '';
    answerButtonsElement.innerHTML = '';

    // INFORMACIÓN
    if (question.informacion) {
        infoContainer.innerHTML = `
            <div class="info-card">
                <h2>${question.informacion.titulo}</h2>
                <img src="${question.informacion.imagen}" class="info-image">
                <p>${question.informacion.texto}</p>
            </div>
        `;
    }

    // MULTIMEDIA
    if (question.media && question.media.type) {
        if (question.media.type === 'image') {
            const img = document.createElement('img');
            img.src = question.media.url;
            img.classList.add('media-content');
            mediaContainer.appendChild(img);
        } else if (question.media.type === 'video') {
            const video = document.createElement('video');
            video.src = question.media.url;
            video.controls = true;
            video.classList.add('media-content');
            mediaContainer.appendChild(video);
        }
    }

    // RESPUESTAS
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn-answer'); 

        button.addEventListener('click', () =>
            selectAnswer(answer, button)
        );

        answerButtonsElement.appendChild(button);
    });

    nextButton.classList.add('hidden');
}

// RESPUESTA
function selectAnswer(answer, button) {
    const buttons = answerButtonsElement.children;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    let feedbackHtml = '';

    if (answer.correct) {
        button.classList.add('correct');

        if (answer.explanation) {
            feedbackHtml = `
                <div class="feedback correct-feedback">
                    <strong>Explicación:</strong>
                    <p>${answer.explanation}</p>
                </div>
            `;
        }
    } else {
        button.classList.add('wrong');

        currentQuestions[currentQuestionIndex].answers.forEach((ans, index) => {
            if (ans.correct) {
                buttons[index].classList.add('correct');
            }
        });

        const correctAnswer = currentQuestions[currentQuestionIndex].answers.find(ans => ans.correct);

        const chosenExplanation = answer.explanation ? `
            <div class="feedback wrong-feedback">
                <strong>Tu elección:</strong>
                <p>${answer.explanation}</p>
            </div>
        ` : '';

        const correctExplanation = correctAnswer && correctAnswer.explanation ? `
            <div class="feedback correct-feedback">
                <strong>Respuesta correcta:</strong>
                <p>${correctAnswer.explanation}</p>
            </div>
        ` : '';

        feedbackHtml = `${chosenExplanation}${correctExplanation}`;
    }

    texto.innerHTML = feedbackHtml;
    nextButton.classList.remove('hidden');
}

// SIGUIENTE
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        alert("Terminaste este módulo");
        goHome();
    }
});

// VOLVER
function goHome() {
    document.getElementById('home-screen').classList.remove('hidden');
    document.getElementById('quiz-screen').classList.add('hidden');
}
