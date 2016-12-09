/**
 * Created by Carlos Schuenck on 07/12/2016.
 */
function Agendamento(){

    var clazz = {
        agendar : function (consulta) {
            var umDiaEmMillisegundos = 1000 * 60 * 60 * 24;
            var vinteDiasEmMilliSegundos = umDiaEmMillisegundos * 20;

            var novaData = new Date(consulta.getData().getTime() + vinteDiasEmMilliSegundos);

            while (novaData.getDay() == 0 || novaData.getDay() == 6){
                novaData = new Date(novaData.getTime() + umDiaEmMillisegundos);
            }
            var novaConsulta = new Consulta(consulta.getNome(),
                                            consulta.getProcedimentos(),
                                            consulta.isParticular(),
                                            consulta.isRetorno(),
                                            novaData);
            return novaConsulta;
        }
    }

    return clazz;
}