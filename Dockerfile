# Usa uma imagem base do Node
FROM node:18-alpine

# Cria o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências primeiro
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta
EXPOSE 8080

# Comando para rodar o app
CMD ["npm", "start"]
