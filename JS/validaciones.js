$(function() {
      $("#formulario_registro").validate({
        rules: {
          email: {
            required: true,
            email: true
          },
          pass: "required",
          pass2: {
            required: true,
            equalTo: "#pass"
          },
          bday: {
              required: true
          }
        },
        messages: {
          email: {
            required: 'Ingresa tu correo electrónico',
            email: 'Formato de correo no válido'
          },
          pass: {
            required: 'Ingresa una contraseña',
          },
          pass2: {
            required: 'Reingresa la contraseña',
            equalTo: 'Las contraseñas ingresadas no coinciden'
          },
          bday: {
            required: 'Ingresa una fecha',
            max: 'La fecha no puede ser superior a la fecha actual'
          },
          rut: {
            required: "Ingresa tu rut"
          },
          nombre: {
            required: "Ingresa tu nombre"
          },
          nro: {
            required: "Ingresa tu número de contacto"
          },
          cel: {
            required: "Ingresa tu celular"
          },
          terminos: {
            required: "Debes aceptar los terminos"
          }
        }
      });
    });

    //seteo fecha maxima como hoy
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
     if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 
    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("bday").setAttribute("max", today);
    