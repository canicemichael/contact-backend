// so what the controllers basically does is to get the route
// logic and store it in a varaible and export it for any
// file that wants to use it

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
}

//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    res.status(201).json({ message: "Created a new contact" });
}

module.exports = { getContact, createContact }