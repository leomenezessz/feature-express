#language: pt
Funcionalidade: Reemissão de Cartões

@rodar
Cenário: Alteração do nome gravado no cartão
  Dado que estou logado com um usuário gestor
  E que estou na tela de emissão de segunda via
  E consulto um portador já existente via autocomplete
  Quando confirmo a alteração do nome que será impresso no cartão
  Então devo visualizar a tela de confirmação de emissão de segunda via

@notImplemented
Cenário: Visualização de Informação de Alteração de Embossing
  Dado que estou logado com um usuário gestor
  E que estou na tela de emissão de segunda via
  E consulto um portador já existente via autocomplete
  Quando seleciono o motivo "O nome gravado não é o correto"
  Então visualizo a mensagem que os dados serão alterados
  E o endereço de entrega

@notImplemented
Cenário: Alteração do nome gravado no cartão
  Dado que estou logado com um usuário gestor
  E que estou na tela de emissão de segunda via
  E consulto um portador já existente via autocomplete
  Quando confirmo a alteração do nome que será impresso no cartão
  Mas desisto da alteração
  Então devo retonar a tela de edição com os dados já preenchidos

@bug
Cenário: Só deve exibir os portadores após informar a quantidade mínima de caracteres
Dado que estou logado com um usuário gestor
  E que estou na tela de emissão de segunda via
  Quando consulto por portador inserindo dois caracteres
  Então não é exibido nenhum portador