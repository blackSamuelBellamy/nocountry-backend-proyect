const { countryEmission } = require('./electricity')
const gasEmission = require('./gas')
const { carbonOffset } = require('./offset')

const carbonFP = {
  
   getElectricity: function (electricity) {
   	const { kwh, energia_renovable, pais } = electricity;

	return energia_renovable ? 0 : kwh * countryEmission[pais];
   },

   getGas: function (gas) {
   	const { tipo_gas, unidad, cantidad_consumida } = gas;
   	const emission_factor = gasEmission.getEmissionFactor(tipo_gas, unidad);

   	return cantidad_consumida * emission_factor;
   },

   getCarbonOffset: function (carbon_footprint) {
   	let offsets = [];
   	const minTrees = Math.round(carbon_footprint / carbonOffset.treePerYear);

   	if(minTrees > 0){
   		offsets.push('Necesitarías plantar un mínimo de ' + minTrees + (minTrees > 1 ? ' arboles ' : ' arbol ') + 'para compensar tu huella.');
   	}

   	return offsets;
   }
  
}

module.exports = carbonFP