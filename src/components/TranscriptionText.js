const TranscriptionText = () => {
    return (
        <>
            <h5>Concepto agilidad</h5>
            <p>
                “El mundo está cambiando muy rápido, ya no será el grande quien golpee
                al pequeño, será el rápido quien golpeará al lento”. Estas son palabras
                de Rupert Murdoch. para reflexionar En este slab hablaremos de:{" "}
            </p>
            <p>
                ¿Qué es la agilidad y cómo permite atender las necesidades de un mundo
                cambiante?La agilidad es un enfoque utilizado en la administración de
                proyectos en entornos cambiantes, que permite al equipo de trabajo
                enfocarse en valores como la colaboración, flexibilidad y mejora
                continua. Todo ello se logra mediante una dinámica de trabajo en
                iteraciones y entregas incrementales. Es decir, con cada nueva entrega,
                se pueden agregar nuevas funcionalidades o mejoras al producto.
            </p>
            <p>
                El Manifiesto Ágil fue declarado en el año 2001, cuando expertos en
                gestión de proyectos, ingeniería y desarrollo de software, se reunieron
                para proponer una mejor manera de colaborar en sus proyectos. Los cuatro
                pilares de este manifiesto son:
            </p>
            <ol>
                <li>Los individuos e interacciones sobre procesos y herramientas</li>
                <li>Software funcional sobre documentación exhaustiva</li>
                <li>Colaboración con el cliente sobre negociación de contratos</li>
                <li>Responder al cambio sobre seguimiento a un plan</li>
            </ol>
            <p>
                Entre las metodologías ágiles, existen diversas filosofías o marcos de
                trabajo, cada una con sus propias prácticas o recomendaciones.Por
                ejemplo, Lean, XP, Kanban, RUP. Principios ágilesLos 12 principios
                Ágiles enuncian los valores fundamentales de la metodología ágil:
            </p>
            <ol>
                <li>Satisfacción al cliente, puesto que los intereses y atención a sus necesidades es primordial para todo el equipo, con el fin de ofrecerle una solución o cumplimiento de los objetivos del proyecto.</li>
                <li>Apertura a los cambios en los requerimientos. En este punto, se trata de comprender los entornos cambiantes y riesgos que pueda enfrentar el proyecto.</li>
                <li>Entregas frecuentes del producto. Con esto se busca comprender si el proyecto está alcanzando la meta propuesta o si es necesario realizar cambios en la planeación o tareas.</li>
                <li>Colaboración diaria.</li>
                <li>Colaboradores motivados.</li>
                <li>Comunicación cara a cara. En estos últimos 3 puntos, se refiere a las dinámicas del equipo, quienes deben estar en constante comunicación y debe existir un entendimiento de las tareas correspondientes a cada miembro.</li>
                <li>Medición del avance, de acuerdo a las entregas y tiempos estimados.</li>
                <li>Promover un ritmo sostenido de trabajo.</li>
                <li>Atención a la excelencia.</li>
                <li>La simplicidad es esencial, lo cual permite encontrar soluciones enfocadas a cada problema.</li>
                <li>Equipos auto-organizados. </li>
                <li>Reflexionar en la mejora continua.</li>
            </ol>
            <p>Estos principios no indican que las metodologías ágiles no sean útiles, sino que dependiendo de la naturaleza del proyecto, una metodología ágil puede proporcionar mayor flexibilidad, transparencia y participación del cliente con los equipos de trabajo.</p>
            <h5>Principios Lean</h5>
            <p>En la metodología ágil con enfoque Lean, se centra en el cliente y busca la eliminación de actividades que no agreguen valor al producto o servicio. Por ello, su objetivo es la calidad y reducción de tiempos y costos.Sus principios son:</p>
            <ul>
                <li>La definición de valor desde el punto de vista del cliente.</li>
                <li>Identificar la cadena de valor de cada producto e identificar los pasos involucrados en cada proceso.</li>
                <li>Creación de un flujo de valor para eliminar contraflujos, retrabajo o interrupciones.</li>
                <li>Dejar que el cliente participe en el flujo. Cuando este solicite algo, se realiza y si no lo necesita no es necesario atenderlo. Aquí la importancia de la participación del cliente en la definición de valor.</li>
                <li>Mejora continua, no en busca de la perfección, sino en implementar un proceso que pueda mejorarse continuamente.</li>
            </ul>
            <h5>Kanban</h5>
            <p>Uno de los enfoques de la metodología Ágil es el Kanban, palabra japonesa para hacer referencia a tarjetas o señales visuales. En esta metodología se utiliza un tablero compuesto por tres columnas:</p>
            <ul>
                <li>Por hacer</li>
                <li>En proceso</li>
                <li>Hecho</li>
            </ul>
            <p>Este tablero funciona como una fuente de información para identificar impedimentos, evitar embotellamiento de tareas y promover un flujo de trabajo continuo.Dentro del enfoque Kanban, existen conceptos importantes a considerar en los flujos de trabajo:</p>
            <ul>
                <li><strong>Lead time.</strong> Es el tiempo transcurrido desde que una tarea ingresa al flujo de trabajo hasta su finalización. Es decir, desde que se coloca en la columna izquierda (de las tareas por hacer) hasta alcanzar la columna de la derecha (tareas finalizadas).</li>
                <li><strong>Cycle time</strong> Se refiere al tiempo que le toma al equipo trabajar sobre una tarea en específico.</li>
            </ul>
            <p>Por ejemplo,  en una pizzería, el lead time comienza desde que se realiza la orden de una pizza. Este pedido pasa a la columna de “Por hacer”, y cuando el equipo toma la tarea de comenzar a preparar la pizza, comienza el cycle time.</p>
            <ul>
                <li>Throughput. Se refiere al rendimiento del equipo para tomar las tareas del tablero, esta métrica contabiliza la cantidad de trabajo entregado en cierto periodo de tiempo.</li>
                <li>Work in Progress (WIP). Se refiere al tiempo en que una tarea se encuentra en la columna de “En proceso” </li>
                <li>Ley de Little. Es la fórmula para comprender el rendimiento de una tarea a partir de esos datos, poder encontrar el equilibrio entre el tiempo de entrega y el trabajo en curso. Se toman en cuenta las siguientes las variables: Tiempo de ciclo = Trabajo en el proceso (WIP) / Tiempo promedio que tarda una tarea.</li>
            </ul>
        </>
    );
};

export default TranscriptionText;
