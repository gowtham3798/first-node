import { client } from './index.js';
import bcrypt from 'bcrypt';

export async function getAllmovies(req) {
    return await client.db("firstmongo").collection("pizza").find(req.query).toArray();
}
export async function deletemovie(id) {
    return await client.db("firstmongo").collection("pizza").deleteOne({ id: id });
}
export async function addmovie(newMovie) {
    return await client.db("firstmongo").collection("pizza").insertMany(newMovie);
}
export async function getmoviebyid(id) {
    return await client.db("firstmongo").collection("pizza").findOne({ id: id });
}
export async function updatedMovie(updatedMovie,id) {
    return await client.db("firstmongo").collection("pizza").updateOne({id:id},{$set : updatedMovie});
}

export async function minute() {
    return 
}

export async function genPassword(password) {
    const salt =await bcrypt.genSalt(10)
    console.log(salt)
    const hashedPassword = await bcrypt.hash(password,salt)
    return hashedPassword;
    console.log(hashedPassword)
}

console.log(genPassword("generating"))

export async function createUser(username, hashedPassword) {
    return await client.db("firstmongo").collection("users").insertOne({username:username,Password:hashedPassword});
}


export async function getUserByName(username) {
    return await client.db("firstmongo").collection("users").findOne({ username:username });
}