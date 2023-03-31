# API-DrivenCare
## Escopo do projeto
Este projeto tem como objetivo fornecer uma API para uma plataforma de agendamento de consultas médicas, permitindo que pacientes agendem consultas com médicos de diferentes especialidades, podendo escolher a data e o horário que estiver disponível para cada médico. Além disso, cada médico poderá visualizar as consultas marcadas e confirmar/cancelar cada uma delas. Por fim, tanto os pacientes quanto os médicos poderão visualizar um histórico de consultas agendadas e realizadas.

Para que um novo cadastro tenha sucesso, é preciso que o email utilizado, tanto dos pacientes quanto dos médicos, seja único. Para que um agendamento tenha sucesso, é preciso que o horário esteja disponível, ou seja, que não tenha sido marcado previamente por outra pessoa. Somente os médicos poderão confirmar as consultas que forem marcados. Se o paciente resolver cancelar a consulta, o horário desta ficará vago novamente.

Para a criação dessa API, foi necessário utilizar Express, JavaScript, bibliotecas de autenticação e um banco de dados PostgreSQL.
