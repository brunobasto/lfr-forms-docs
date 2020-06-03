---
path: "/single-source-of-truth"

order: 5
title: "Single Source of Truth (SSOT)"
---

# Single Source of Truth (SSOT)

### Apresentação do problema

Quando você começa a ter uma ideia de ter um estado dentro de cada componente parece tudo muito mais organizado né?! Isso faz com que todas as funcionalidades e dados sejam mantidas e possam ser usadas dentro de um único objeto.

O conceito de se ter um estado é ótimo porque assim conseguimos isolar coisas e fazer com que possamos quebrar aplicações grandes em pequenos pedacinhos reutilizáveis. Entretanto em algum ponto isso se torna um pouco complicado e irão surgir dúvidas como: “Onde os dados estão guardados?”; Se esses dados são duplicados, como teremos certeza que ao alterar um dado, todos os lugares onde estarão usando esse dado serão atualizados? Dentro do contexto do Forms, onde há dezenas(centenas?) de componentes isso pode se tornar o caos.

### Solução do problema

A solução foi pegar uma ideia bastante difundida na comunidade de React chamada “Single Source of Truth”, em que existe um estado “pai de todos” para que todos os seus valores sejam refletidos em seus componentes filhos por meio de props ou contexto.

Ao utilizar essa técnica, qualquer alteração no “estado pai de todos“ irá atualizar as props de todos os componentes filhos e sempre flui de forma de cima pra baixo, sempre sincronizado e nunca duplicado.

> No contexto do Forms, a nossa única fonte da verdade é o LayoutProvider.

**Nota do autor**: Ao desenvolver, não se pressione tanto para evitar o uso de estados locais. Em contra partida, foque em sempre fazer componentes stateless sempre que possível mas o estado de um componente existe para ser usado se você realmente precisar.

Para entender mais sobre Single Source of Truth: https://redux.js.org/introduction/three-principles#single-source-of-truth