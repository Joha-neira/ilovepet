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
    $("#rut").on({
      "focus": function(event) {
        $(event.target).select();
      },
      "keyup": function(event) {
        $(event.target).val(function(index, value) {
          return value.replace(/[^k|K|\d]/g, "")
            .replace(/([0-9])(k|K|[0-9]{1})$/, '$1-$2')
            .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".");
        });
      }
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
    
    ///
    ///REVISAR ESTA WEA 
    ///
    
    $(function() {
          $('#rut').blur(function() {
            if($("#rut").val().length>=11){
                if (Fn.validaRut( $("#rut").val() )){
                    //$("#msgerror").html("El rut ingresado es válido :D");
                    $('#rutlabel').show();
                    $("#rutlabel").text("");
                } else {
                    //$("#msgerror").html("El Rut no es válido :'( ");
                  $('#rutlabel').show();
                  $("#rutlabel").text("");
                }
            } else {
              $('#rutlabel').show();
              $("#rutlabel").text("");
            }
          });
        });
     
    /*
    <label id="rutlabel" hidden="true" class="label" for="rut">Taweno</label
    */
    
    var Fn = {
        // Valida el rut con su cadena completa "XXXXXXXX-X"
        validaRut : function (rutCompleto) {
            rutCompleto = rutCompleto.replace("‐","-");
            rutCompleto = rutCompleto.replace(".", "");
            rutCompleto = rutCompleto.replace(".", "");
            //if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
             //   return false;
            var tmp     = rutCompleto.split('-');
            var digv    = tmp[1]; 
            var rut     = tmp[0];
            if ( digv == 'K' ) digv = 'k' ;
            return (Fn.dv(rut) == digv );
        },
        dv : function(T){
            var M=0,S=1;
            for(;T;T=Math.floor(T/10))
                S=(S+T%10*(9-M++%6))%11;
            return S?S-1:'k';
        }
    }