// database add start 

const db = require('../database/db.js');




const home = (req, res) =>
{
    res.render(`./shop/index`);
};


const all = (req, res) =>
{
    res.render(`./shop/all`);
};

const about = (req, res) =>
{
    res.render(`./shop/about`);
};

const contact = (req, res) =>
{
    res.render(`./shop/contact`);
};

const contactSuccess = (req, res) =>
{
    res.render(`./shop/contactSuccess`);
};

const addContact = (req, res) =>
{

    // get request data 
    const { name, email, mobile, subject ,message } = req.body;
    
 
    if (!name || !email || !mobile || !subject || !message)
    {
        // check any field is empty 

       res.render('./shop/contact', { error: "Please provide valid data." });
    } else
    {
        // store data into car

        const contact = db.createcontact(name, email, mobile, subject ,message);
       res.redirect(`./contact/success`);
    }
};




// export all data start

module.exports = { home , all , about ,contact ,addContact,contactSuccess};


