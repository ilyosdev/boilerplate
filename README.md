# boilerplate
Expressjs, Knexjs, objection for api. 


![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ovaem45ea3lmxe4josic.png)
 
What do you know about solid, kiss and bunch of other things?
Fug them.
When you are writing any kind of code. Just write and see the result. You do not like it? Go change it. 

*Do not forget one thing, Rome is not built in one day or night :wink:*

Let`s assume we all have nodejs installed. Create folder named like boilerplate and open that folder in your code editor.

> initiate - `npm init -y`

I like MVC, like a lot. So create bunch of folders such as controllers, models, services, middlewares, database(migrations, seeds), utils

![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xrw1jcl75r2m5mexeza2.png)

##### Install necessary packages
* `npm install knex -g`
* `npm install objection knex mysql --save`
* `npm install express dotenv --save`

Go grab the code from [here](https://github.com/ilyosdev/boilerplate)
and continue.

First of all check the codebase, if you like it you are more than welcome to use it. If no, what the hell are you doing here then? Go leave my blog. Kidding 😁.

Let me show you some things here:
* `npx knex migrate:make posts` - this will create migration file
* `npx knex migrate:latest` - this will create tables in your db
* `npx knex migrate:rollback` - if you forgot something to add in your latest migration and you change it, try this then you are good to migrate again, without this your terminal spits right in your face.
* `npx knex seed:make posts` - this creates file which you can populate with good old friend faker then you can insert it with `npx knex seed:run`.
