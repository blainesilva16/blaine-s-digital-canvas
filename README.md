# Meu Portfólio Profissional 💼🌐

Este portfólio tem como objetivo reunir meus principais projetos desenvolvidos em forma de apresentação profissional. 

## Conteúdo do Portfólio

Este portfólio traz projetos relacionados à dados e ao desenvolvimento de aplicações, com processo de deploy feito na AWS.

Alguns projetos listados são:

- Pipeline de dados de previsão do tempo. Link do repositório: [Weather Data Pipeline](https://github.com/blainesilva16/weather_data_pipeline)
- Dashboard de dados do MovieLens. Link do repositório: [Dashboard MovieLens](https://github.com/blainesilva16/projeto_analytics_filmes_metabase)
- Deploy Portfólio de Python. Link do repositório: [Python Portfólio](https://github.com/blainesilva16/Python-Portfolio)

## Arquitetura do Portfólio

O Portfólio utiliza React com TypeScript para proporcionar um design moderno e responsivo. Foi hospedado na AWS segundo a arquitetura:

```bash
Cloudfront → Site (S3) → API Gateway → Lambda → IA → resposta → site (S3)
```

Todo o conteúdo do Portfólio foi gerado para o bucket S3 em modo de produção pelo comando:

```bash
npm run build
```

E assim apenas o conteúdo da pasta /dist foi para o S3.

Criei uma Lambda Function para armazenar o código do meu agente de IA que responde às perguntas sobre mim. Lá está a API KEY da OpenAI como variável de ambiente, sendo que as dependências necessárias para a OpenAI foram instaladas no próprio CloudShell da AWS, para que fossem compatíveis com o runtime da Lambda Function.

Após a criação da Lambda Function, criei um endpoint HTTP do tipo POST no API Gateway integrado a essa Lambda Function permitindo o CORS, para que este endpoint fosse utilizado no frontend para fazer a requisição quando algum prompt é enviado ao agente.

Por fim, configurei uma distribuição no Cloudfront para redirecionar o HTTP para HTTPS e gerar uma URL com protocolo HTTPS.

## Design do Portfólio

A escolha das cores ciano e rosa juntamente com o fundo em tons claros foi pensada para proporcionar sofisticação e suavidade, trazendo a ideia de profissionalismo e organização. 

Código HEX das cores:

```bash
#F28CBF
```

```bash
#00D0F0
```

Utilizei o Loveable para gerar o design principal, com outras alterações feitas localmente por mim.
