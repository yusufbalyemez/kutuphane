const User = require("../models/userModel");

const initializeSuperAdmin = async () => {
    try {
        const existingAdmin = await User.findOne({role:"superadmin"});
        if(!existingAdmin){
            const superAdmin = new User({
                username: process.env.SUPERADMIN_USERNAME || "admin",
                email: process.env.SUPERADMIN_EMAIL || "admin@example.com",
                password: process.env.SUPERADMIN_PASSWORD || "12345678",
                role: "superadmin",
                isVerified: true
            });
            await superAdmin.save();
            console.log("Super admin başarıyla oluşturuldu.");
        }
    } catch (error) {
        console.error("Super admin oluşturma hatası",error);
    }
}

module.exports = initializeSuperAdmin;