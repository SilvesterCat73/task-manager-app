// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
    connectionURL,
    { useNewUrlParser: true },
    (error, client) => {
        if (error) {
            return console.log('Unable to connect to database!');
        }

        const db = client.db(databaseName);

        db.collection('tasks').findOne({
            _id: ObjectID('5d2363e00a8ab333d48400cf'),
        }, (error,result) => {
            if (error) {
                return console.log('Unable to fetch results!');
                
            }

            console.log(result);
            
        });

        db.collection('tasks').find({completed: true}).toArray((error,result) => {
            if (error) {
                return console.log('Unable to fetch results!');
                
            }

            console.log(result);
            
        })
    }
);
