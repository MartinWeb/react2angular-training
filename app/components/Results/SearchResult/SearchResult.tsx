import { Joke } from '../Joke';
import './search-result.scss';

export type SearchResultProps = {
    jokes: ChuckNorris.Joke[];
}

export const SearchResult = ({ jokes }: SearchResultProps) => (
    <div className="search-result">
        <>
            {jokes.map(joke => {
                return <Joke joke={joke} key={joke.id} />
            })}
        </>
    </div>
);
