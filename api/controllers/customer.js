module.exports = () => {
    const customerDB = app.data.customer;
    const controller = {};

    const {
       customer: customerMock, 
    } = customerDB;

    controller.listCustomer = (req, res) => res.status(200).json(customerDB);
    
    controller.saveCustomer = (req, res) => {
        customerMock.data.push({
           id: uuidv4(),
           parentId: uuidv4(),
           name: req.body.name,
           birthDate: req.body.birthDate,
           cellphone: req.body.cellphone,
           phone: req.body.phone,
           email: req.body.email,
           occupation: req.body.occupation,
           state: req.body.state,
        });

        res.status(201).json(customerMock);
    }


    return controller;
}