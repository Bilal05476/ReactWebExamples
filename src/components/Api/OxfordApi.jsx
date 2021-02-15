import React, {useEffect, useState} from 'react';
import axios from 'axios';
import img from './img/city.jpg';

const BASE_URL = 'https://openlibrary.org/works/OL45883W.json';

const OxfordApi = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchBooks(){
        
        const response = await axios.get(`${BASE_URL}`)
            const data = await response.data
            console.log(data);
            setBooks(data)
        }
        fetchBooks();
    }, [])

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                    <div className="card">
                        <img src={img} className="card-img-top" alt="book cover" />
                        <div className="card-body">
                            <h5 className="card-title">{books.title}</h5>
                            <p className="card-text">The main character of Fantastic Mr. Fox is an extremely clever anthropomorphized fox named Mr. Fox. He lives with his wife and four little foxes. 
                            In order to feed his family, he steals food from the cruel, brutish farmers named Boggis, Bunce, and Bean every night. Finally tired of being constantly outwitted by Mr. Fox, the farmers attempt to capture and kill him. The foxes escape in time by burrowing deep into the ground.</p>
                            <p className="card-text">Revision: {books.revision}</p>
                            <p className="card-text">Book Place: {books.subject_places}</p>
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                    </div>  
                </div>
            </div>
        );
};

export default OxfordApi;