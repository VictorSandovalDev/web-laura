/**
 * Psiforensic — mini backend de leads (Google Apps Script)
 * --------------------------------------------------------
 * Recibe el formulario de la web y envía un correo por CADA lead.
 * No requiere servidor ni base de datos. Ver backend/README.md para instalarlo.
 */

// A dónde llegan los leads (puedes poner varios separados por coma).
var DESTINO = "lauraquintero@psiforensic.com";

// Zona horaria para la fecha del correo.
var ZONA = "America/Bogota";

function doPost(e) {
  try {
    var p = (e && e.parameter) ? e.parameter : {};

    var nombre   = (p.nombre   || "").trim()   || "(sin nombre)";
    var correo   = (p.correo   || "").trim()   || "(sin correo)";
    var telefono = (p.telefono || "").trim()   || "(sin teléfono)";
    var servicio = (p.servicio || "").trim()   || "(no especificado)";
    var mensaje  = (p.mensaje  || "").trim()   || "(sin mensaje)";

    var fecha = Utilities.formatDate(new Date(), ZONA, "yyyy-MM-dd HH:mm");

    var cuerpo =
      "Nuevo lead desde psiforensic.com\n\n" +
      "Fecha:    " + fecha    + "\n" +
      "Nombre:   " + nombre   + "\n" +
      "Correo:   " + correo   + "\n" +
      "Teléfono: " + telefono + "\n" +
      "Servicio: " + servicio + "\n\n" +
      "Mensaje:\n" + mensaje  + "\n";

    var tieneCorreo = correo.indexOf("@") > -1;

    MailApp.sendEmail({
      to: DESTINO,
      subject: "Nuevo lead: " + nombre + " — " + servicio,
      body: cuerpo,
      name: "Web Psiforensic",
      replyTo: tieneCorreo ? correo : DESTINO
    });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    // Si algo falla, te avisa por correo para que no se pierda nada.
    try {
      MailApp.sendEmail(DESTINO, "Error en formulario Psiforensic", String(err));
    } catch (e2) {}
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput("Psiforensic — endpoint de leads activo.");
}
