import express from 'express';
const router = express.Router();
import { getmoviebyid, deletemovie, addmovie, getAllmovies} from '../helper.js';
import {auth} from "../middleware/auth.js"

router.get("/" ,auth, async (req, res) => {
if(req.query.id){req.query.id = req.query.id}
   const filteredMovies = await getAllmovies(req)
     res.send(filteredMovies)
})

router.get("/:id",auth , async (req, res) => {
    const {id} = req.params;
        // console.log(req.params.id)
        // const movie = movies.find((mvs) => mvs.id === req.params.id)
        const movie = await getmoviebyid(id);
        movie ? res.send(movie) : res.status(400).send({message: "no movies found"});
    })

router.delete("/:id",auth , async (req, res) => {
        const {id} = req.params;
            // console.log(req.params.id)
            // const movie = movies.find((mvs) => mvs.id === req.params.id)
            const movie = await deletemovie(id);
            res.send(movie);
        })


router.post("/" ,auth, async (req, res) => {
            const newMovie = req.body;
                console.log(newMovie)
                // const movie = movies.find((mvs) => mvs.id === req.params.id)
                const movie = await addmovie(newMovie);
                res.send(movie) 
            })

router.put("/",auth , async (req, res) => {
                const {id} = req.params;
                const updatedMovie = req.body;
                    console.log(updatedMovie)
                    // const movie = movies.updateOne({id:'102'},{$set : updatedMovie})
                    const movie = await updatedMovie(updatedMovie , id);
                    res.send(movie) 
                })

          
            //     router.get("/timestamp" ,async (req, res) => {
            // //   responseObject = new Date().getTime()
            // // let minute = new Date().toUTCString()
            //     const movie = await minute();
            //     console.log(movie)
            //      res.send(movie)
            //     })
        



export const moviesRouter = router;