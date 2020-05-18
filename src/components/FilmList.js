import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component{
    render(){
        const filmArray = this.props.films.map(film => {
            return(
            <Film name={film.name} key={film.id} url={film.url}></Film>
            )
        })
        return(
            <>
            <ul>
            {filmArray}
            </ul>
            </>
        )
    }
}

export default FilmList;