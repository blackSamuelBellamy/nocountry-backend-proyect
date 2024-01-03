const welcome = (name, token, url) => ({
  title: `Te Damos la bienvenida a Green trace ${name}`,
  body:
    `<!DOCTYPE html>
    <html>
    
    <head>
    
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Email Confirmation</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style type="text/css">
        /**
         * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
         */
        @media screen {
          @font-face {
            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 400;
            src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
          }
    
          @font-face {
            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 700;
            src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
          }
        }
    
        /**
         * Avoid browser level font resizing.
         * 1. Windows Mobile
         * 2. iOS / OSX
         */
        body,
        table,
        td,
        a {
          -ms-text-size-adjust: 100%;
          /* 1 */
          -webkit-text-size-adjust: 100%;
          /* 2 */
        }
    
        /**
         * Remove extra space added to tables and cells in Outlook.
         */
        table,
        td {
          mso-table-rspace: 0pt;
          mso-table-lspace: 0pt;
        }
    
        /**
         * Better fluid images in Internet Explorer.
         */
        img {
          -ms-interpolation-mode: bicubic;
        }
    
        /**
         * Remove blue links for iOS devices.
         */
        a[x-apple-data-detectors] {
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          color: inherit !important;
          text-decoration: none !important;
        }
    
        /**
         * Fix centering issues in Android 4.4.
         */
        div[style*="margin: 16px 0;"] {
          margin: 0 !important;
        }
    
        body {
          width: 100% !important;
          height: 100% !important;
          padding: 0 !important;
          margin: 0 !important;
        }
    
        /**
         * Collapse table borders to avoid space between cells.
         */
        table {
          border-collapse: collapse !important;
        }
    
        a {
          color: #1a82e2;
        }
    
        img {
          max-width: 100%;
          height: auto;
          display: block;
          margin: 0 auto;
          border-radius: 50%;
        }
      </style>
    
    </head>
    
    <body style="background-color: #e9ecef;">
    
      <!-- start preheader -->
      <div class="preheader"
        style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
        Estás a un paso de ser parte de Green trace.
      </div>
      <!-- end preheader -->
      <!-- start body -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
    
        <!-- start logo -->
        <tr>
          <td align="center" bgcolor="#e9ecef">
            <!--[if (gte mso 9)|(IE)]>
              <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
              <tr>
              <td align="center" valign="top" width="600">
              <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 200px;">
              <tr>
              <td align="center" valign="top" style="padding: 36px 24px; max-width: 200px;">
                <img src="https://res.cloudinary.com/druohmyna/image/upload/v1702513561/grenn_trace_dx21qd.png" alt="Logo"
                border="0" width="200" style="display: block; max-width: 200px; min-width: 200px; border-radius: 50%;">
              </td>
            
              </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
              </td>
              </tr>
              </table>
              <![endif]-->
          </td>
        </tr>
        <!-- end logo -->
    
        <!-- start hero -->
        <tr>
          <td align="center" bgcolor="#e9ecef">
            <!--[if (gte mso 9)|(IE)]>
              <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
              <tr>
              <td align="center" valign="top" width="600">
              <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
              <tr>
                <td align="left" bgcolor="#ffffff"
                  style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
                  <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">
                    Hola 👋 ${name}, confirma
                    tu email por favor</h1>
                </td>
              </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
              </td>
              </tr>
              </table>
              <![endif]-->
          </td>
        </tr>
        <!-- end hero -->
    
        <!-- start copy block -->
        <tr>
          <td align="center" bgcolor="#e9ecef">
            <!--[if (gte mso 9)|(IE)]>
              <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
              <tr>
              <td align="center" valign="top" width="600">
              <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
    
              <!-- start copy -->
              <tr>
                <td align="left" bgcolor="#ffffff"
                  style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                  <p style="margin: 0;">Como último paso necesitamos que hagas click en el boton para ser parte de
                    nuestro proyecto sin fines de lucros. Si no fuiste tú quien creó la cuenta en <a href="https://c15-04-m-node-react.vercel.app/">Green
                      Trace</a>, puedes borrar este correo sin problemas.</p>
                </td>
              </tr>
              <!-- end copy -->
    
              <!-- start button -->
              <tr>
                <td align="left" bgcolor="#ffffff">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td align="center" bgcolor="#ffffff" style="padding: 12px;">
                        <table border="0" cellpadding="0" cellspacing="0">
                          <tr>
                            <td align="center" bgcolor="#1a82e2" style="border-radius: 6px;">
                              <a href="${url}/${token}" target="_blank"
                                style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">
                                Green Trace</a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- end button -->
    
              <!-- start copy -->
              <tr>
                <td align="left" bgcolor="#ffffff"
                  style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                </td>
              </tr>
              <!-- end copy -->
    
              <!-- start copy -->
              <tr>
                <td align="left" bgcolor="#ffffff"
                  style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
                  <p style="margin: 0;">Saludos,<br> El equipo técnico de Green Trace project</p>
                </td>
              </tr>
              <!-- end copy -->
    
            </table>
            <!--[if (gte mso 9)|(IE)]>
              </td>
              </tr>
              </table>
              <![endif]-->
          </td>
        </tr>
        <!-- end copy block -->
    
        <!-- start footer -->
        <tr>
          <td align="center" bgcolor="#e9ecef" style="padding: 24px;">
            <!--[if (gte mso 9)|(IE)]>
              <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
              <tr>
              <td align="center" valign="top" width="600">
              <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
    
              <!-- start permission -->
              <tr>
                <td align="center" bgcolor="#e9ecef"
                  style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                  <p style="margin: 0;">Green Trace Project es el esfuerzo independiente y sin fines de lucro de un grupo de
                    programadores de America latina, Queremos poner a disposición nuestros conocimientos y trabajo en post
                    del cuidado del medio ambiente</p>
                </td>
              </tr>
              <!-- end permission -->
    
              <!-- start unsubscribe -->
              <tr>
                <td align="center" bgcolor="#e9ecef"
                  style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                  <p style="margin: 0;">Siempre cuando quieras, puedes darte de baja de nuestra aplicación, solo deseamos
                    que te hayamos podido ayudar a mejorar tu huella de carbono.</p>
                  <p style="margin: 0;">Muchas gracias por tomarte el tiempo de visitarnos.</p>
                </td>
              </tr>
              <!-- end unsubscribe -->
    
            </table>
            <!--[if (gte mso 9)|(IE)]>
              </td>
              </tr>
              </table>
              <![endif]-->
          </td>
        </tr>
        <!-- end footer -->
    
      </table>
      <!-- end body -->
    
    </body>
    
    </html>`
})

module.exports = welcome