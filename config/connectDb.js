const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const uri = "mongodb+srv://nimritasingh87:niffeeniffee0703@mycluster01.924ec.mongodb.net/RestAPIretryWrites=true&w=majority&appName=MyCluster01"
    await mongoose.connect(uri);

    console.log("Db Connected on Community Server ");
  } catch (error) {
    console.error("Error Connecting Db: " + error);
  }
};

module.exports = {connectDb};