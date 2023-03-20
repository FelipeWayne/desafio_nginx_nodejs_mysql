# Inicia a partir da imagem do NodeJS Alpine
FROM node:16.16.0

# Cria o diretório de trabalho
WORKDIR /usr/app

# Instala o wget
RUN apt-get update && apt-get install -y wget

# Define a versão do dockerize
ENV DOCKERIZE_VERSION v0.6.1

# Instala o dockerize
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Copia o arquivo package.json para o diretório de trabalho
COPY package.json .

# Instala as dependências do projeto (npm install)
RUN npm install --quiet

# Copia todos os arquivos do diretório atual para o diretório de trabalho
COPY . .

# Roda o comando npm start
CMD ["npm", "start"]