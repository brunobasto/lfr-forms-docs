---
path: "/visitors"

order: 12
title: "Visitors"
---

# Visitors

## O que resolvem?

De acordo com a nossa amada [Wikipédia](https://en.wikipedia.org/wiki/Visitor_pattern), esse padrão foi criado para fazer operacões em cima de elementos dentro de uma estrutura de um objeto.

No Forms eles são utilizados para percorrer partes da estrutura de dados do Forms como iterar em cima de Páginas(`mapPages`), sobre linhas(`mapRows`), verificar se existe um determinado field, filtrar fields para se aplicar uma determinada regra entre outras operações.

Para ver mais sobre o que conseguimos fazer com visitors, acesse https://github.com/liferay/liferay-portal/blob/master/modules/apps/dynamic-data-mapping/dynamic-data-mapping-form-renderer/src/main/resources/META-INF/resources/js/util/visitors.es.js#L17.
