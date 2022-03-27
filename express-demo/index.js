const express = require('express');
const app = express();
app.use(express.json());

const volunteer = [
    { id: 1, name: 'Ali'},
    { id: 2, name: 'Shahroz'},
    { id: 3, name: 'Asad'}
]

const da = [
    { id: 1, name: 'Akbar'},
    { id: 2, name: 'Ahmed'},
    { id: 3, name: 'Ijaz'}
]

//Differently-abled
app.get('/api/da', (req, res) => {
    res.send(da);
});

//Post-da
app.post('/api/da', (req, res) => {
    //Validation
    if (!req.body.name || req.body.name.length<3){
        res.status(400).send("Name is required and should be equal to or greater than 3");
        return;
    }
    const dabl = {
        id: da.length + 1,
        name: req.body.name
    }; 
    da.push(dabl);
    res.send(dabl);
});


//Get-with-id-da
app.get('/api/da/:id', (req, res) => {
    const dabl =  da.find(d => d.id === parseInt(req.params.id));
    if (!dabl) return res.status(404).send('Given ID was not found');
    res.send(dabl);
});

//PUT

app.put('/api/da/:id', (req, res) => {
    const dabl =  da.find(c => c.id === parseInt(req.params.id));
    if (!dabl) return res.status(404).send('Given ID was not found');
    res.send(dabl);

    if (!req.body.name || req.body.name.length<3){
        res.status(400).send("Name is required and should be equal to or greater than 3");
        return;
    }
    vol.name = req.body.name;
    res.send(dabl);

});

app.delete('/api/da/:id', (req, res) => {
    const dabl =  da.find(c => c.id === parseInt(req.params.id));
    if (!dabl) return res.status(404).send('Given ID was not found');
    const index = da.indexOf(dabl);
    da.splice(index,1);
    res.send(dabl);
});

//Volunteer
app.get('/api/volunteer', (req, res) => {                    
    res.send(volunteer);
});

//post
app.post('/api/volunteer', (req, res) => {
    //Validation
    if (!req.body.name || req.body.name.length<3){
        res.status(400).send("Name is required and should be equal to or greater than 3");
        return;
    }
    const vol = {
        id: volunteer.length + 1,
        name: req.body.name
    }; 
    volunteer.push(vol);
    res.send(vol);
});

//get-with-id
app.get('/api/volunteer/:id', (req, res) => {
    const vol =  volunteer.find(c => c.id === parseInt(req.params.id));
    if (!vol) return res.status(404).send('The volunteer with given ID was not found');
    res.send(vol);
});

//PUT
app.put('/api/volunteer/:id', (req, res) => {
    const vol =  volunteer.find(c => c.id === parseInt(req.params.id));
    if (!vol) return res.status(404).send('The volunteer with given ID was not found');
    res.send(vol);

    if (!req.body.name || req.body.name.length<3){
        res.status(400).send("Name is required and should be equal to or greater than 3");
        return;
    }
    vol.name = req.body.name;
    res.send(vol);

});

//Delete-vol
app.delete('/api/volunteer/:id', (req, res) => {
    const vol =  volunteer.find(c => c.id === parseInt(req.params.id));
    if (!vol) return res.status(404).send('The volunteer with given ID was not found');

    const index = volunteer.indexOf(vol);
    volunteer.splice(index,1);
    
    res.send(vol);
});


//app.get('/api/volunteer/:name/:cnic', (req, res) => {
   // res.send(req.params);
//});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));