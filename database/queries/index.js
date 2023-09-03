const db = require("../index");

class Queries {

    static async insertContactInquiry(contact_name, contact_email, contact_role, contact_message){

        await db('contact_inquiries').insert({
            contact_name, 
            contact_email, 
            contact_role, 
            message: contact_message
        });

    }

}


module.exports = Queries;