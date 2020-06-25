---
path: "/layout-provider"

order: 9
title: "Layout Provider"
---

# Localização

O LayoutProvider se localiza no módulo do `dynamic-data-mapping-form-builder` mas é aplicado em todas as aplicações que estão usando o Forms.

# O que resolve?

Basicamente é o componente pai comum a todos, como exemplos de filhos temos o FormBuilder, RuleBuilder, FormRenderer, que tem responsabilidade de armazenar a fonte única da verdade da aplicação e também de ter implementado como que uma determinada ação disparada em qualquer parte da aplicação irá persistir os dados nessa store.

Para isso, se faz o uso de visitors(iremos falar mais sobre isso na parte de [Visitors](#visitors)) como função de apoio para obter dados da estrutura do Forms e persistir-los.

# Como funciona a integração do Form Builder com a User View?

Como já foi abordado anteriormente, o Form Builder é responsável para criar estruturas para serem renderizadas usando o User View, mas como isso acontece?

No Forms, é seguido o padrão de Redux em que existem ações como `fieldAdded` que partindo da Sidebar(Builder) fala para a store do Forms(LayoutProvider) que um field novo foi adicionado em determinada região e o valor é atualizado no User View.

Como por exemplo:

```javascript
dispatch(
  ‘fieldAdded’’,
  {
    pageIndex: 0,
    rowIndex: 0,
    columnIndex: 0,
    fieldType: ‘text’
  }
);
```

Enquanto no Layout Provider, ele recebe dados vindo dessa ação da seguinte forma:

```javascript
this.on(‘fieldAdded’, payload => {
    const {pages} = this.state;
    const {pageIndex, rowIndex, columnIndex, fieldType} = payload;

    // Realiza a operação de adicionar um field no local especificado pelo evento
    pages[pageIndex].rows[rowIndex].columns[columnIndex].fields.push(createField(fieldType));

    // Atualiza estado da aplicação. Isso faz com que haja uma renderização da aplicação e o novo field deverá aparecer no Form Builder
    this.setState({pages});
})
```

Isso fará com que o a função de handling do evento para a ação desejada seja acionado dentro do LayoutProvider provocando assim uma alteração de estado da store.

No Forms, existem várias ações disponíveis, esses são alguns exemplos de ações disponíveis no LayoutProvider:

```text
activePageUpdated
columnResized
elementSetAdded
fieldAdded
fieldBlurred
fieldChangesCanceled
fieldClicked
fieldDeleted
fieldDuplicated
fieldEdited
fieldHovered
fieldMoved
fieldSetAdded
focusedFieldEvaluationEnded
languageIdDeleted
pageAdded
pageDeleted
pageReset
pagesSwapped
pagesUpdated
paginationItemClicked
paginationModeUpdated
paginationNextClicked
paginationPreviousClicked
ruleAdded
ruleDeleted
ruleEdited
ruleSaved
ruleValidatorChanged
sectionAdded
sidebarFieldBlurred
successPageChanged
```

Veja https://github.com/liferay/liferay-portal/blob/master/modules/apps/dynamic-data-mapping/dynamic-data-mapping-form-builder/src/main/resources/META-INF/resources/js/components/LayoutProvider/LayoutProvider.es.js#L84 para mais exemplos.
