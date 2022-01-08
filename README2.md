# Database
psql
\l
:q
drop database example;
create database example;
\q

# Backend
pipenv run reset_db;

pipenv run init;
pipenv run migrate;
pipenv run upgrade;
pipenv run start

# Frontend
npm run start

# Git
git branch -a                   -> ver todos los branches
git branch <branch_name>        -> crear nuevo branch
git checkout <branch_name>      -> cambiar de branch
git merge <branch_name>         -> cambiar cambios en repositorio
git pull origin main            -> actualizar los cambios del branch principal

git add .
git commit -m 'mensaje'
git push origin <branch_name>   -> subir los cambios al branch de uno


# Node version error, webpack error:
 rm -rf node_modules
 nvm install 14
 npm install