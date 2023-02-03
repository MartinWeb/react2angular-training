import './joke.scss';

export type JokeProps = {
    joke: ChuckNorris.Joke;
}

export const Joke = ({ joke }: JokeProps) => (
    <pre><h3>{joke?.value}</h3></pre>
);
