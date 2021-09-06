
export const db = require('mongoose');
db.connect('mongodb+srv://jess:<Marta22916248>@dbappmusic.2bxuc.mongodb.net/dbappMusic?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    
})
    .then((db:string) => console.log('conectado la App Music'))
    .catch((err:string) => console.error(err));

    
