require('dotenv').config();
const port = process.env.PORT || 3000
require("./app").listen(port, () => {
    console.info(`Server running on port: ${port}`)
});