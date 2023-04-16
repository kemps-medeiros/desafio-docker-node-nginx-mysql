# desafio-docker-node-nginx-mysql

- O desafio consistia em gerar uma imagem Docker, que contenha uma aplicação node que faça uso do mysql, e que seja acessada através do NGINX (proxy-reverso)
- Ao acessar a rota disponibilizado pelo Nginx, deve mostrar uma mensagem com o nome de uma pessoa cadastrada na base de dados.

Após clonar o repositório:

## Buildar imagem

`docker compose up --build`

## Acessar rota do NGINX

`http://localhost:8080/`