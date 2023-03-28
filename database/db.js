// import models start
var Contacts = require('../models/contacts.js');



// import models end


class Db
{
    constructor()
    {
        this.data = {contacts: [] };
      
        
    }
   
  
 // create contact  start

 createcontact(name, email, mobile, subject ,message)
    {
        
        const id = this.data.contacts.map(i => i.id).reduce((acc, v) => acc > v ? acc : v, 0);
        const newContact = new Contacts(id + 1, name, email, mobile, subject, message);
        this.data.contacts.push(newContact);
        return newContact;
    }

      // create cars  end


}

const db = new Db();

// export database start

module.exports = db;

// export database end
