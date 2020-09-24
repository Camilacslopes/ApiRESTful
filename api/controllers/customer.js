const uuidv4 = require('uuid/v4');

module.exports = app => {
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
   
    controller.removeCustomer = (req,res) => {
        const {
            customerId,
        } = req.params;

        const foundCustomerIndex = customerMock.data.findIndex(customer => customer.id === customerId);
        
        if (foundCustomerIndex === -1) {
            res.status(404).json({
                message:'Cliente não encontrado na base de dados.',
                success: false,
                customer: customerMock,
            });
            
        } else {
            customerMock.data.splice(foundCustomerIndex, 1);
            res.status(200).json({
                message: 'Cliente deletado com sucesso!',
                success: true,
                customer: customerMock,
            });
        }
    };

    controller.updateCustomer = (req, res) => {
        const {
            customerId,
        } = req.params;
        
        const foundCustomerIndex = customerMock.data.findIndex(customer => customer.id === customerId);
        
        if (foundCustomerIndex === -1) {
            res.status(404).json({
                message:'Cliente não encontrado na base de dados.',
                success: false,
                customer: customerMock,
            });
        } else {
            const newCustomer = {
                id: customerId,
                parentId: req.body.parentId,
                name: req.body.name,
                birthDate: req.body.birthDate,
                cellphone: req.body.cellphone,
                phone: req.body.phone,
                email: req.body.email,
                occupation: req.body.occupation,
                state: req.body.state,
                createdAt: new Date()
            };
           
           customerMock.data.splice(foundCustomerIndex, 1, newCustomer);
           
           res.status(200).json({
               message: 'Dados Atualizados com sucesso!',
               success: true,
               customer: customerMock,
           });
        }
    }

    return controller;
}