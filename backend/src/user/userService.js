var userModel = require('./userModel');

module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject) {
        userModel.find({}).then(result => {
            resolve(result);
        }).catch(error => {
            reject(false);
        });
    });

}

module.exports.createUserDBService = (userDetails) => {


    return new Promise(function myFn(resolve, reject) {

        var userModelData = new userModel();

        userModelData.name = userDetails.name;
        userModelData.age = userDetails.age;
        userModelData.gender = userDetails.gender;
        userModelData.phone = userDetails.phone;

        userModelData.save()
            .then(result => {
               
                console.log("Save successful", result);
                resolve(true); 
            })
            .catch(error => {
                // Handle error
                console.error("Save failed", error);
                reject(false); 
            });

    });

}


module.exports.updateUserDBService = (id, userDetails) => {
    console.log(userDetails);
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndUpdate(id, userDetails, function returnData(error, result) {
            if (error) {
                reject(false);
            }
            else {
                resolve(result);
            }
        });

    });
}


module.exports.updateUserDBService = (id, userDetails) => {
    console.log(userDetails);  
    return userModel.findByIdAndUpdate(id, userDetails)
        .then(result => {
            if (!result) {  
                throw new Error("No document found with this ID");
            }
            return result;  
        })
        .catch(error => {
            console.error("Update failed:", error);
            return false;  
        });
}