import mongoose from 'mongoose';

/**
 * Creates a connection with MongoDB database.
 */
export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/mongodbgraphql', {
            useNewUrlParser: true
        });
        console.log('>>> DB connected!!');
    } catch (err) {
        console.log('error trying to connect to DB: ', err)
    }
}