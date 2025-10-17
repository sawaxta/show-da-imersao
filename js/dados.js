let dados = [
  {
    pergunta:
      "Ao configurar o CPJ-3C, entender a lógica de interconexão entre módulos é crucial. Qual a principal razão para isso?",
    valor: 1000,
    alternativas: [
      "Para poder desenvolver novos módulos personalizados.",
      "Para garantir que as parametrizações feitas em um módulo (ex: Tabelas) reflitam corretamente em outros (ex: Relatórios, Processos).",
      "Para otimizar a velocidade de acesso ao banco de dados.",
      "Para escolher a melhor versão do software (G ou H) para o escritório.",
    ],
    resposta: 1,
  },
  {
    pergunta:
      "Descreva sucintamente qual a importância de um técnico conhecer as diferenças de funcionalidades ou configuração entre as versões do CPJ-3C (como a G e a H) ao dar suporte ou realizar uma implantação.",
    valor: 2000,
    tipo: "dissertativa",
  },
  {
    pergunta:
      "Onde, geralmente, um técnico encontraria as opções para definir preferências globais do sistema, como formatos de data ou configurações padrão de usuário?",
    valor: 3000,
    alternativas: [
      "Diretamente no cadastro de cada processo.",
      'Em um menu específico de "Configurações", "Preferências" ou "Administração" do sistema.',
      "Dentro das opções de parametrização de cada Tabela.",
      "Exclusivamente através de scripts no banco de dados.",
    ],
    resposta: 1,
  },
  {
    pergunta:
      "Um escritório precisa que todos os novos usuários criados no CPJ-3C tenham, por padrão, um nível específico de acesso a relatórios financeiros. Descreva os passos gerais que um técnico seguiria para tentar configurar essa preferência padrão no sistema.",
    valor: 4000,
    tipo: "cenário",
  },
  {
    pergunta:
      "Qual a principal finalidade dos 'Campos Alteráveis' (ou Campos Extras) no CPJ-3C?",
    valor: 5000,
    alternativas: [
      "Alterar o nome dos campos padrão do sistema.",
      "Criar campos adicionais para armazenar informações específicas do escritório que não existem nos campos padrão.",
      "Definir o formato visual (cores, fontes) dos campos nas telas.",
      "Permitir que usuários finais alterem a estrutura do banco de dados.",
    ],
    resposta: 1,
  },
  {
    pergunta:
      'Explique a diferença técnica fundamental entre um "Campo Alterável" e um "Formato" no contexto de personalização de campos do CPJ-3C. Quando você optaria por usar um em vez do outro?',
    valor: 10000,
    tipo: "dissertativa",
  },
  {
    pergunta:
      'O escritório precisa registrar um "Código Interno de Cliente" em todos os cadastros de Pessoas/Empresas. Qual recurso de personalização (Campo Alterável ou Formato) seria mais indicado e por quê? Descreva brevemente como você o configuraria na tela de Pessoas.',
    valor: 20000,
    tipo: "cenário",
  },
  {
    pergunta:
      'A parametrização incorreta de uma tabela essencial, como "Tipos de Ação", pode causar qual tipo de problema?',
    valor: 30000,
    alternativas: [
      "Lentidão geral no sistema.",
      "Impossibilidade de fazer login no CPJ-3C.",
      "Inconsistência nos dados, dificuldade na filtragem de processos e erros em relatórios.",
      "Perda de conexão com o banco de dados.",
    ],
    resposta: 2,
  },
  {
    pergunta:
      "Cite três exemplos de tabelas que são comumente parametrizadas durante a implantação do CPJ-3C e explique por que a correta parametrização delas é importante.",
    valor: 40000,
    tipo: "dissertativa",
  },
  {
    pergunta:
      "Um novo tipo de recurso judicial começou a ser utilizado frequentemente pelo escritório. Descreva os passos técnicos gerais para adicionar essa nova opção na tabela correspondente (ex: Tabela de Fases ou Andamentos) dentro do CPJ-3C.",
    valor: 50000,
    tipo: "cenário",
  },
  {
    pergunta:
      "Por que é fundamental que um técnico oriente os usuários sobre os padrões de alimentação de dados no CPJ-3C?",
    valor: 100000,
    alternativas: [
      "Para aumentar o espaço de armazenamento necessário no servidor.",
      "Para garantir que os dados sejam consistentes, facilitando buscas, filtros e a geração de relatórios confiáveis.",
      "Para permitir que o software funcione offline.",
      "Para personalizar a interface gráfica para cada usuário.",
    ],
    resposta: 1,
  },
  {
    pergunta:
      'Qual o impacto direto da má qualidade na alimentação do campo "Valor da Causa" nos processos para funcionalidades como relatórios gerenciais ou BI?',
    valor: 200000,
    tipo: "dissertativa",
  },
  {
    pergunta:
      "Ao configurar permissões de acesso para um novo grupo de usuários (ex: Estagiários), qual o princípio mais importante a ser seguido?",
    valor: 300000,
    alternativas: [
      "Conceder acesso total e remover permissões conforme necessário.",
      "Conceder o mínimo de permissões necessárias para a função (princípio do menor privilégio).",
      "Copiar as permissões do grupo de Sócios.",
      "Permitir que os próprios estagiários definam suas permissões.",
    ],
    resposta: 1,
  },
  {
    pergunta:
      "O escritório deseja que a captura automática de andamentos funcione para um tribunal específico que acabou de ser disponibilizado para integração. Quais seriam os passos gerais ou verificações que um técnico realizaria no CPJ-3C para configurar ou habilitar essa integração?",
    valor: 400000,
    tipo: "cenário",
  },
];
