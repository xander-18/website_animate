export default function PoliticaPrivacidad() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>Política de Privacidad</h1>
      <p>
        En FlashBlackHouse valoramos tu privacidad. Toda la información
        que nos proporciones será tratada con estricta confidencialidad.
        Solo usaremos tus datos para ponernos en contacto contigo y ofrecer
        nuestros servicios inmobiliarios.
      </p>
      <p>
        No compartiremos tus datos con terceros sin tu consentimiento. Puedes
        solicitar la modificación o eliminación de tus datos escribiéndonos a:
        <strong> groupblackhouse@gmail.com</strong>.
      </p>
      <p>
        Fecha de actualización: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
