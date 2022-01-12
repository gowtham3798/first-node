import express from 'express';
const router = express.router();
import { getmoviebyid, deletemovie, addmovie, getAllmovies } from './helper.js';

router.get("/movies/:id" , async (req, res) => {
    const {id} = req.params;
        // console.log(req.params.id)
        // const movie = movies.find((mvs) => mvs.id === req.params.id)
        const movie = await getmoviebyid(id);
        movie ? res.send(movie) : res.status(400).send({message: "no movies found"});
    })

        router.delete("/movies/:id" , async (req, res) => {
        const {id} = req.params;
            // console.log(req.params.id)
            // const movie = movies.find((mvs) => mvs.id === req.params.id)
            const movie = await deletemovie(id);
            res.send(movie);
        })


        router.post("/movies" , async (req, res) => {
            const newMovie = req.body;
                console.log(newMovie)
                // const movie = movies.find((mvs) => mvs.id === req.params.id)
                const movie = await addmovie(newMovie);
                res.send(movie) 
            })

            router.put("/movies" , async (req, res) => {
                const {id} = req.params;
                const updatedMovie = req.body;
                    console.log(updatedMovie)
                    // const movie = movies.updateOne({id:'102'},{$set : updatedMovie})
                    const movie = await updatedMovie(updatedMovie , id);
                    res.send(movie) 
                })
        


router.get("/movies" , async (req, res) => {
if(req.query.rating){req.query.rating = +req.query.rating}
   const filteredMovies = await getAllmovies(req)
     res.send(filteredMovies)
})

export const movieRouter = router;