import * as Koa from 'koa';
import * as Router from 'koa-router';
import bodyParser = require("koa-bodyparser");

const app = new Koa();
app.use(bodyParser());
const router = new Router();

router.get('/*', async (ctx) => {
    ctx.body = `Hello World!... ${JSON.stringify(process.env, null, 2)}`;
});

app.use(router.routes());

app.listen(process.env.PORT);

console.log(`Server running on port ${process.env.PORT}`);