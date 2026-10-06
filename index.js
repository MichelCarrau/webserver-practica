const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  const currentDate = new Date();
  const utcDate = currentDate.toUTCString();
  const url = req.url;

  console.log('[' + utcDate + '] ' + req.method + ' ' + url);

  if (url === '/health') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Healthy\n');
    return;
  }

  if (url === '/greeting') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
    return;
  }

  if (url === '/' || url === '/index.html') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(`
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Belleza Total - Bissu, Saniye y Prosa</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #fff5f8; color: #333; }
    header { background: linear-gradient(135deg, #ff6b9d, #c44569); color: white; padding: 40px 20px; text-align: center; }
    header h1 { font-size: 2.5em; margin-bottom: 10px; }
    header p { font-size: 1.1em; opacity: 0.95; }
    nav { background: #6a1b3d; padding: 15px; text-align: center; position: sticky; top: 0; z-index: 100; }
    nav a { color: white; margin: 0 20px; text-decoration: none; font-weight: 600; }
    nav a:hover { color: #ffd700; }
    main { max-width: 1100px; margin: 0 auto; padding: 40px 20px; }
    .intro { text-align: center; margin-bottom: 50px; }
    .intro h2 { color: #c44569; font-size: 2em; margin-bottom: 15px; }
    .intro p { font-size: 1.1em; line-height: 1.7; max-width: 800px; margin: 0 auto; }
    .marcas { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 50px; }
    .marca { background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 15px rgba(196, 69, 105, 0.15); }
    .marca h3 { font-size: 1.8em; margin-bottom: 15px; color: #c44569; text-align: center; }
    .marca .icono { font-size: 3em; text-align: center; margin-bottom: 15px; }
    .marca p { line-height: 1.6; margin-bottom: 15px; }
    .marca ul { list-style: none; padding: 0; }
    .marca ul li { padding: 8px 0; border-bottom: 1px dashed #ffd1dc; }
    .productos { background: white; border-radius: 12px; padding: 40px; box-shadow: 0 4px 15px rgba(196, 69, 105, 0.15); margin-bottom: 50px; }
    .productos h2 { color: #c44569; text-align: center; margin-bottom: 30px; font-size: 2em; }
    .grid-productos { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
    .producto { background: #fff5f8; padding: 20px; border-radius: 10px; text-align: center; border: 2px solid #ffd1dc; }
    .producto .emoji { font-size: 2.5em; }
    .producto h4 { color: #6a1b3d; margin: 10px 0; }
    .producto p { font-size: 0.9em; color: #666; }
    .precio { color: #c44569; font-weight: bold; font-size: 1.2em; margin-top: 10px; }
    footer { background: #6a1b3d; color: white; text-align: center; padding: 30px; margin-top: 50px; }
    footer p { margin: 5px 0; }
    .server-info { font-size: 0.85em; opacity: 0.7; margin-top: 15px; }
  </style>
</head>
<body>
  <header>
    <h1>Belleza Total</h1>
    <p>Bissu · Saniye · Prosa</p>
  </header>
  <nav>
    <a href="/">Inicio</a>
    <a href="#marcas">Marcas</a>
    <a href="#productos">Productos</a>
    <a href="/health">Estado</a>
  </nav>
  <main>
    <section class="intro">
      <h2>Bienvenida a tu tienda de belleza</h2>
      <p>Descubre lo mejor en maquillaje y cuidado personal con las marcas lideres en Mexico. Bissu, Saniye y Prosa te ofrecen productos de calidad para realzar tu belleza natural.</p>
    </section>
    <section class="marcas" id="marcas">
      <div class="marca">
        <div class="icono">B</div>
        <h3>Bissu</h3>
        <p>Marca mexicana de maquillaje con mas de 80 anos de tradicion. Productos de alta calidad a precios accesibles.</p>
        <ul>
          <li>Labiales de larga duracion</li>
          <li>Mascaras de pestanas</li>
          <li>Bases y polvos compactos</li>
          <li>Sombras para ojos</li>
        </ul>
      </div>
      <div class="marca">
        <div class="icono">S</div>
        <h3>Saniye</h3>
        <p>Especialista en esmaltes y cuidado de unas. Innovacion y color para tus manos y pies.</p>
        <ul>
          <li>Esmaltes de secado rapido</li>
          <li>Tratamientos para unas</li>
          <li>Barnices efecto gel</li>
          <li>Decoracion y accesorios</li>
        </ul>
      </div>
      <div class="marca">
        <div class="icono">P</div>
        <h3>Prosa</h3>
        <p>Cuidado personal con ingredientes de calidad. Perfumeria, cremas y tratamientos para la piel.</p>
        <ul>
          <li>Cremas hidratantes</li>
          <li>Perfumes y fragancias</li>
          <li>Tratamientos faciales</li>
          <li>Productos para el cabello</li>
        </ul>
      </div>
    </section>
    <section class="productos" id="productos">
      <h2>Productos Destacados</h2>
      <div class="grid-productos">
        <div class="producto">
          <div class="emoji">L</div>
          <h4>Labial Bissu</h4>
          <p>Rojo intenso, larga duracion</p>
          <p class="precio">$89 MXN</p>
        </div>
        <div class="producto">
          <div class="emoji">E</div>
          <h4>Esmalte Saniye</h4>
          <p>Efecto gel, 12 tonos</p>
          <p class="precio">$65 MXN</p>
        </div>
        <div class="producto">
          <div class="emoji">C</div>
          <h4>Crema Prosa</h4>
          <p>Hidratacion profunda 24h</p>
          <p class="precio">$120 MXN</p>
        </div>
        <div class="producto">
          <div class="emoji">P</div>
          <h4>Paleta Bissu</h4>
          <p>Sombras profesionales</p>
          <p class="precio">$199 MXN</p>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <p><strong>Belleza Total</strong> - Tu tienda de confianza</p>
    <p>Bissu · Saniye · Prosa</p>
    <p class="server-info">Servidor Node.js corriendo en Azure · ${utcDate}</p>
  </footer>
</body>
</html>
    `);
    return;
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('<h1>404 - Pagina no encontrada</h1><p><a href="/">Volver al inicio</a></p>');
});

server.listen(port, hostname, function() {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});