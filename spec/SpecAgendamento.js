/**
 * Created by Carlos Schuenck on 07/12/2016.
 */
describe('#Agendamento', function () {

    var paciente;
    var agendamento;

    beforeEach(function () {
        agendamento = new Agendamento();
        paciente = new PacienteBuilder().construir();
    });
    it('#Deve realizar um agendamento para daqui a 20 dias',function () {
        var consulta = new Consulta(paciente, [],false,false, new Date(2016,10,1))
        var novaConsulta = agendamento.agendar(consulta);

        expect(novaConsulta.getData().toString()).toEqual(new Date(2016,10,21).toString());
    });
    it('#Deve pular finais de semana.',function () {
        var consulta = new Consulta(paciente, [],false,false, new Date(2016,10,6))
        var novaConsulta = agendamento.agendar(consulta);

        expect(novaConsulta.getData().toString()).toEqual(new Date(2016,10,28).toString());
    });
});