var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://gibwanjau0:<db_password>@cluster0.dxryi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    development: 'mongodb+srv://gibwanjau0:<db_password>@cluster0.dxryi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    test: 'mongodb+srv://gibwanjau0:<db_password>@cluster0.dxryi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
}
module.exports = config;
