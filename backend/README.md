# Mini backend de leads — Psiforensic

Recibe el formulario de contacto de la web y te envía **un correo por cada lead**
a `lauraquintero@psiforensic.com`. No necesita servidor, base de datos ni costo:
funciona con **Google Apps Script**.

> El correo te llega con el nombre, correo, teléfono, servicio y mensaje del
> visitante. Puedes responder directamente (el "Responder a" queda con el correo
> del visitante).

---

## 1. Crear el backend (una sola vez, ~5 minutos)

1. Entra a **https://script.google.com** con la cuenta de Google donde quieras
   gestionar los leads (idealmente la de `psiforensic.com` si es Google Workspace).
2. Clic en **Nuevo proyecto**.
3. Borra el contenido de `Código.gs` y pega **todo** el contenido del archivo
   [`Code.gs`](./Code.gs) de esta carpeta.
4. (Opcional) En la línea `var DESTINO = ...` puedes cambiar o añadir correos
   separados por coma.
5. Clic en **Guardar** (ícono de disquete).

## 2. Publicarlo como aplicación web

1. Arriba a la derecha: **Implementar → Nueva implementación**.
2. En "Tipo", elige **Aplicación web**.
3. Configura:
   - **Ejecutar como:** Yo (tu cuenta).
   - **Quién tiene acceso:** **Cualquier persona**.
4. Clic en **Implementar**.
5. La primera vez Google pedirá **autorizar permisos** (para poder enviar
   correos). Acepta: "Permitir".
6. Copia la **URL de la aplicación web** que termina en `/exec`.
   Se ve así: `https://script.google.com/macros/s/AKfyc.../exec`

## 3. Conectar la web con el backend

1. Abre el archivo `src/app/page.tsx` del proyecto.
2. Busca esta línea (cerca del inicio):

   ```ts
   const LEADS_ENDPOINT = "";
   ```

3. Pega tu URL entre las comillas:

   ```ts
   const LEADS_ENDPOINT = "https://script.google.com/macros/s/AKfyc.../exec";
   ```

4. Guarda, haz `git commit` y `git push`. GitHub Pages se actualiza solo.

¡Listo! Desde ese momento, cada vez que alguien envíe el formulario te llegará
un correo.

---

## Notas

- **Mientras `LEADS_ENDPOINT` esté vacío**, el formulario abre el programa de
  correo del visitante con los datos ya escritos (respaldo). Al pegar la URL,
  pasa a enviarse automático sin que el visitante haga nada.
- **Cuota de correos:** cuentas Gmail normales envían hasta 100 correos/día;
  Google Workspace, hasta 1500/día. Más que suficiente para leads.
- **¿Quieres también un historial consultable?** Se puede ampliar el script para
  guardar cada lead en una Hoja de Google además del correo. Avísame y lo agrego.
- **Cambiar el script luego:** si editas `Code.gs`, vuelve a
  **Implementar → Gestionar implementaciones → editar (lápiz) → Nueva versión**
  para que los cambios tomen efecto (la URL no cambia).
