// VARIABLES GLOBALES
let value = null;
let isInternacional = null;

const objEstadios = {
	'180': 'Departamental Libertad',
	'1655': 'Jaraguay de Montería',
	'3208': 'Metropolitano Roberto Meléndez',
	'111': 'Palmaseca',
	'266': 'General Santander',
	'67': 'Atanasio Girardot',
	'88': 'Palogrande',
	'184': 'Nemesio Camacho El Campín',
	'933': 'La Independencia',
	'183': 'Nemesio Camacho El Campín',
	'927': 'Pascual Guerrero',
	'922': 'Alberto Grisales',
	'921': 'Daniel Villa Zapata',
	'177': 'La Independencia',
	'81': 'Metropolitano Roberto Meléndez',
	'182': 'Polideportivo Sur',
	'179': 'Manuel Murillo Toro',
	'105': 'Atanasio Girardot',
	'597': 'Metropolitano de Techo',
	'176': 'Guillermo Plazas Alcid'
}

var _SelectorTorneo = function(value) {
	isInternacional = value == 1 ? true : false;
	valor = isInternacional ? 0 : 1;
	console.log(isInternacional)
	console.log(value)
	$('.contenedorBtnProximoResultado').show(100, function() {
		$('button[value=' + value + ']').prop("disabled", true);
		$('button[value=' + valor + ']').hide('fast');
	});
};

var _equipoLocal = function(value, prefijo) {

	if (_isEqual(value, $('#slcEquipoVisitante' + prefijo).val())) {
		alert("Debe seleccionar un equipo diferente")
	} else {
		console.log('#imgEquipoLocal' + prefijo);

		$('#imgEquipoLocal' + prefijo).removeAttr('src');
		var url = "http://ligaaguila.com.co/sites/all/themes/ligaaguila/img/equiposg/" + value + ".png?c=5"
		console.log(url);
		var opc = value;

		$('#imgEquipoLocal' + prefijo).attr('src', url);
		$('#txtEstadio' + prefijo).val('');
		$('#txtEstadio' + prefijo).val(objEstadios[opc]);
	}
};

var _equipoVisitante = function(value, prefijo) {

	if (_isEqual(value, $('#slcEquipoLocal' + prefijo).val())) {
		alert("Debe seleccionar un equipo diferente")
	} else {

		$('#imgEquipoVisitante' + prefijo).removeAttr('src');
		var url = "http://ligaaguila.com.co/sites/all/themes/ligaaguila/img/equiposg/" + value + ".png?c=5"
		$('#imgEquipoVisitante' + prefijo).attr('src', url);
	}
}

// FUNCION QUE ME DA UN VALOR VERDADERO/TRUE SI LOS EQUIPOS SELECCIONADOS SON IGUALES, Y FALSO/FALSE SI SON DIFERENTES
var _isEqual = function(value1, value2) {
	return (value1 == value2) ? true : false;
};



// INICIO PRÓXIMOS PARTIDOS
var _SelectorProximoLocal = function() {

	$('#proximoLocal').toggle(100);

	$('#slcEquipoLocalProximo').change(function() {
		_equipoLocal(this.value, "Proximo");
	});

	$('#slcEquipoVisitanteProximo').change(function() {
		_equipoVisitante(this.value, "Proximo");
	});

};

var _SelectorProximoInternacional = function() {

	$('#proximoInternacional').toggle(100);

	$('#readyUrlEquipoInternacional').click(function() {
		var opc = $('input:radio[name=optradio]:checked').val();
		var url = $('#urlEquipoInternacional').val();

		if (opc == 0) {
			$('#imgEquipoLocalProximoInternacional').attr('src', url);	
			$('#imgEquipoVisitanteProximoInternacional').attr('src', 'http://ligaaguila.com.co/sites/all/themes/ligaaguila/img/equiposg/105.png?c=5');
		} else {
			$('#imgEquipoLocalProximoInternacional').attr('src', 'http://ligaaguila.com.co/sites/all/themes/ligaaguila/img/equiposg/105.png?c=5');
			$('#imgEquipoVisitanteProximoInternacional').attr('src', url);

		}
		
		
	});


};
// FIN PRÓXIMOS PARTIDOS



// INICIA RESULTADOS
var _SelectorResultadoLocal = function() {

	$('#resultadoLocal').toggle(100);

	$('#slcEquipoLocalResultado').change(function() {
		_equipoLocal(this.value, "Resultado");
	});

	$('#slcEquipoVisitanteResultado').change(function() {
		_equipoVisitante(this.value, "Resultado");
	});

};

var _SelectorResultadoInternacional = function() {
	$('#resultadoInternacional').toggle(100);

	$('#readyUrlEquipoInternacionalResultado').click(function() {
		var opc = $('input:radio[name=localVisitanteResultado]:checked').val();
		var url = $('#urlEquipoInternacionalResultado').val();

		if (opc == 0) {
			$('#imgEquipoLocalResultadoInternacional').attr('src', url);	
			$('#imgEquipoVisitanteResultadoInternacional').attr('src', 'http://ligaaguila.com.co/sites/all/themes/ligaaguila/img/equiposg/105.png?c=5');
		} else {
			$('#imgEquipoLocalResultadoInternacional').attr('src', 'http://ligaaguila.com.co/sites/all/themes/ligaaguila/img/equiposg/105.png?c=5');
			$('#imgEquipoVisitanteResultadoInternacional').attr('src', url);

		}
		
		
	});
};
// FIN RESULTADOS



$(document).ready(function() {

	$('button[name="torneo"]').click(function() {
		_SelectorTorneo(this.value);
	});

	$('#btnProximo').click(function() {
		if (isInternacional) _SelectorProximoInternacional();
		else _SelectorProximoLocal();
	});

	$('#btnResultado').click(function() {
		if (isInternacional) _SelectorResultadoInternacional();
		else _SelectorResultadoLocal();
	});

	$('#btnGenerarProximoLocal').click(function() {
	alert("Vamos a generar el Próximo Local")	
	});

	$('#btnGenerarResultadoLocal').click(function() {
	alert("Vamos a generar el Resultado Local")	
	});

	$('#btnGenerarProximoInternacional').click(function() {
	alert("Vamos a generar el Próximo Internacional")	
	});

	$('#btnGenerarResultadoInternacional').click(function() {
	alert("Vamos a generar el Resultado Internacional")	
	});







});