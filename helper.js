import { client } from './index';

export async function getAllmovies(req) {
    return await client.db("firstmongo").collection("movies").find(req.query).toArray();
}
export async function deletemovie(id) {
    return await client.db("firstmongo").collection("movies").deleteOne({ id: id });
}
export async function addmovie(newMovie) {
    return await client.db("firstmongo").collection("movies").insertMany(newMovie);
}
export async function getmoviebyid(id) {
    return await client.db("firstmongo").collection("movies").findOne({ id: id });
}
export async function updatedMovie(updatedMovie,id) {
    return await client.db("firstmongo").collection("movies").updateOne({id:id},{$set : updatedMovie});
}
