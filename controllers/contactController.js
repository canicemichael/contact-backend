// so what the controllers basically does is to get the route
// logic and store it in a varaible and export it for any
// file that wants to use it

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    console.log("The request body is :", req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
  res.status(201).json({ message: "Created a new contact" });
};

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
}

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
}

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` });
}

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};