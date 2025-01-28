import '@/public/styles/main.css';
export default function Market() {
  return (
    <div className="market main__container">
      <div className='market-container'>
        <div className='market-img' style={{backgroundImage: 'url("aside/market_01.jpg")'}}></div>
        <div className='market-object'>
          <h3>Buscamos</h3>
          <p>
            Ofrecer precisión, eficiencia y transparencia en la administración del tiempo trabajado, horas extras, días de ausencia y pagos de nómina. La solución está enfocada en mejorar la experiencia de los empleados, garantizar la puntualidad en los pagos y optimizar procesos administrativos a través de herramientas digitales de fácil acceso.
          </p>
        </div>
      </div>
      <div className='market-container'>
        <div className='market-object'>
          <h3>Objetivos</h3>
          <ul>
            <li>Registro digital de asistencia con integración biométrica y por geolocalización.</li>
            <li>Visibilidad y control en tiempo real de horas extras y días libres.</li>
            <li>Acceso a las descarga de boletas de pago, resumen de ingresos, deducciones y más nóminas.</li>
            <li>Análisis automatizado de ausentismo, cumplimiento y productividad.</li>
            <li>Accesible desde dispositivos móviles y escritorio.</li>
          </ul>
        </div>
        <div className='market-img' style={{backgroundImage: 'url("aside/market_02.jpg")'}}></div>
      </div>
    </div>
  );
}
