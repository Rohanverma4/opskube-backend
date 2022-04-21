const app = require("./index.js")

const connect = require("./configs/db-conn.js")

app.listen(2632, async () => {
    try {
        await connect();
        console.log("listening on port 2632")
    } catch(err) {
        console.log(err)
    }
})