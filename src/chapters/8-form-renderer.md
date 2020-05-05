---
path: “/form-renderer”

order: 8
title: “Form Renderer”
---

# Responsabilidades

### FormRenderer

O componente FormRenderer é um dos principais componentes do Forms, esse componente é responsável por controlar os modos de paginação do Forms e chama o PageRenderer.

### PageRenderer

PageRenderer por sua vez é o componente que renderiza cada item de uma página assim como sua estrutura de markup em relação as configurações de cada página(título e descrição por exemplo), espaçamentos, regras de estilo para cada caso de uso em relação a estrutura que envolve todos os fields como se é editável ou não e se vai adicionar markups específicos de resizing/Builder View ou não.

Vale ressaltar que esse componente renderiza as páginas tanto no User View quanto no Builder View.

![Estrutura do Form Renderer](../images/formrenderer_2x.png)
