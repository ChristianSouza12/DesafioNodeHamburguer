<h1>API de Gerenciamento de Pedidos</h1>
Esta é uma API desenvolvida para o gerenciamento de pedidos.
<br>
Ela permite que os usuários realizem diversas operações relacionadas aos pedidos, como criar um novo pedido, visualizar todos os pedidos, obter detalhes de um pedido específico, atualizar um pedido existente, excluir um pedido e marcar um pedido como pronto.
<br>

A aplicação utiliza a arquitetura RESTful e foi construída utilizando o framework Express.js, que é amplamente utilizado para desenvolver APIs em Node.js. Ela também faz uso do módulo uuid para a geração de identificadores únicos para cada pedido.
<br>

<h2>A API oferece endpoints para realizar as seguintes operações:</h2>
<br> 

Criar um Novo Pedido: Permite que os usuários criem um novo pedido fornecendo os detalhes do pedido e o nome do cliente.
<br>

Obter Todos os Pedidos: Retorna uma lista de todos os pedidos cadastrados na aplicação
<br>

Obter um Pedido Específico: Permite que os usuários obtenham os detalhes de um pedido específico com base no ID fornecido.
<br>

Atualizar um Pedido: Permite que os usuários atualizem os detalhes de um pedido existente, como os detalhes do pedido ou o nome do cliente.
<br>

Excluir um Pedido: Permite que os usuários excluam um pedido existente com base no ID fornecido.
<br>

Marcar um Pedido como Pronto: Permite que os usuários atualizem o status de um pedido para "Pronto". Isso pode ser útil em cenários onde os pedidos precisam ser rastreados em diferentes estágios de conclusão.
<br>

A aplicação também faz uso de middlewares para registrar informações sobre as requisições e para verificar se um ID de pedido fornecido é válido antes de realizar determinadas operações. Além disso, foi configurado suporte a CORS (Cross-Origin Resource Sharing) para permitir requisições de diferentes origens.
