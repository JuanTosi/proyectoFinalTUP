import "../../styles/tips.css";
const MainTips = () => {
  return (
    // <div>
    //   <h4>¿Cómo regar correctamente las plantas?</h4>
    //   Uno de los problemas más frecuentes a la hora de cuidar nuestras plantas,
    //   es el <strong>Descontrol de Riego.</strong>
    //   <br />
    //   Por lo general, regamos las plantas de interior en exceso produciendo
    //   severos daños a sus raices y hojas. Aprender a regar correctamente
    //   nuestras plantas es una de las tareas más díciles. Son muy variados los
    //   factores que inciden al momento de determinar cuál es el momento justo
    //   para regar, te vamos a contar cuales son los más importantes y cómo
    //   debemos regar nuestras plantas. Si bien estas recomendaciones sirven para
    //   todas las plantas, están indicadas para las plantas que tenemos en
    //   macetas, esten en interior o en el exterior de nuestro hogar.
    //   <br />
    //   <br />
    //   <h4>¿Qué señales nos da la planta cuando hay un descontrol de riego?</h4>
    //   Son varias, pueden presentarse en forma aislada o en distintas
    //   combinaciones. La más común es ver la punta de sus hojas amarillentas,
    //   como si se estuvieran secando. También notaremos que las hojas tienden a
    //   estar "caídas" y/o "blandas". Otra veces, son las hojas nuevas las que se
    //   secan por completo, incluso antes de poder desarrollarse. Si nos fijamos
    //   en el sustrato que hay en la maceta, podremos notar que se encuentra muy
    //   "duro" y "compactado" o bien muy húmedo, incluso con pequeñas mosquitas
    //   negras. Las hojas se ponen amarillas cuando hay falta de agua o exceso de
    //   riego, por eso hablamos de un "descontrol de riego", las señales antes
    //   descriptas nos indican que no estamos regando correctamente. Con nuestras
    //   plantas de interior, solemos cometer el error de regarlas con demasiada
    //   frecuencia, generando un exceso de riego en el sustrato, lo que daña las
    //   raices y unos días despues vemos que las hojas comienzan a ponerse
    //   amarillas. Con nuestras plantas de exterior, sobre todo en verano, el
    //   riego suele ser insuficiente, por lo que las raices se "secan", la planta
    //   pierde las estructuras que le permiten nutrise y comienzan a verse daños
    //   en las hojas.
    //   <br />
    //   <br />
    //   <h4>¿Cómo regar correctamente las plantas?</h4>
    //   Para decidir si regar o no, siempre hay que tocar la tierra de la maceta
    //   para determinar si está húmeda o seca. Recomendamos regar recién cuando la
    //   tierra esté seca, utilizando abundante agua, tratando de mojar la
    //   superficie de la maceta en su totalidad, así el agua llega bien a todas
    //   las raíces y logran humedecerse correctamente. A veces vemos la superficie
    //   de la tierra seca, pero si revisamos en profundidad y está húmeda, no
    //   debemos regar, ya que estaremos generando un exceso de agua en la planta y
    //   dañándole las raices.
    //   <br />
    //   <br />
    //   <h4>¿Cúando Regar?</h4>
    //   Depende de muchos factores: de la humedad ambiental, del viento y de las
    //   corrientes de aire, de la temperatura, del material de la maceta y la
    //   cobertura del sustrato. La mejor forma de verificar la humedad en el
    //   sustrato es enterrando la punta del dedo unos centímetros. Si notamos que
    //   la tierra está seca, regamos con abundante agua. Sí tenemos dudas, es
    //   mejor esperar unos días y volver a verificar el estado de humedad de la
    //   tierra. Otra opción es enterrar un palito de madera lo más profundo que
    //   podamos, al retirarlo podremos evaluar si el sustrato que esta en el fondo
    //   de la maceta se encuentra húmedo o seco.
    // </div>
    <div className="card-consejo">
      <div className="overlay"></div>

      <div className="contenido">
        <h2>🌱 ¿Cómo regar correctamente las plantas?</h2>

        <p>
          Uno de los problemas más frecuentes al cuidar nuestras plantas es el{" "}
          <strong>descontrol de riego</strong>. Por lo general, regamos en
          exceso las plantas de interior, lo que daña sus raíces y hojas.
        </p>

        <p>
          Aprender a regar correctamente es una de las tareas más difíciles.
          Aquí te contamos los factores más importantes y cómo hacerlo bien.
        </p>

        <div className="bloque">
          <h3>🌼 Señales de descontrol de riego</h3>
          <ul>
            <li>Puntas de hojas amarillentas o secas.</li>
            <li>Hojas caídas o blandas.</li>
            <li>Hojas nuevas que se secan antes de crecer.</li>
            <li>Sustrato duro o con exceso de humedad.</li>
          </ul>
        </div>

        <div className="bloque">
          <h3>💧 ¿Cómo regar correctamente?</h3>
          <p>
            Antes de regar, toca la tierra. Si está seca, riega abundantemente
            cubriendo toda la superficie. Si está húmeda, espera un poco más
            para evitar exceso de agua.
          </p>
        </div>

        <div className="bloque">
          <h3>⏰ ¿Cuándo regar?</h3>
          <p>
            Depende de la humedad ambiental, el viento y la temperatura. La
            mejor forma de comprobarlo es enterrar un dedo o un palito: si sale
            seco, ¡es hora de regar!
          </p>
        </div>

        <div className="nota">
          🌸 Consejo: Mejor esperar un día más que regar de más.
        </div>
      </div>
    </div>
    // <section className="consejo-riego">
    //   <div className="overlay"></div>

    //   <div className="contenido">
    //     <h1>🌿 ¿Cómo regar correctamente las plantas?</h1>

    //     <p className="intro">
    //       Uno de los problemas más frecuentes al cuidar nuestras plantas es el{" "}
    //       <strong>descontrol de riego</strong>. Aprender a regar correctamente
    //       es una de las tareas más importantes para mantenerlas sanas y fuertes.
    //     </p>

    //     <div className="bloque">
    //       <h3>🌼 Señales de descontrol de riego</h3>
    //       <ul>
    //         <li>Puntas de hojas amarillentas o secas.</li>
    //         <li>Hojas caídas o blandas.</li>
    //         <li>Hojas nuevas que se secan antes de crecer.</li>
    //         <li>Sustrato muy húmedo o con pequeñas mosquitas negras.</li>
    //       </ul>
    //     </div>

    //     <div className="bloque">
    //       <h3>💧 ¿Cómo regar correctamente?</h3>
    //       <p>
    //         Toca la tierra de la maceta: si está seca, riega abundantemente
    //         cubriendo toda la superficie. Si aún está húmeda, esperá un poco más
    //         para evitar exceso de agua.
    //       </p>
    //     </div>

    //     <div className="bloque">
    //       <h3>⏰ ¿Cuándo regar?</h3>
    //       <p>
    //         Depende de la humedad ambiental, el viento y la temperatura. Enterrá
    //         un dedo o un palito unos centímetros: si sale seco, ¡es momento de
    //         regar!
    //       </p>
    //     </div>

    //     <div className="nota">
    //       🌸 Consejo: Es mejor esperar un día más que regar de más.
    //     </div>
    //   </div>
    // </section>
  );
};

export default MainTips;
