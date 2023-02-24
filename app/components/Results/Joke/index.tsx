import { react2angular } from '@martinweb/react2angular';
import { Joke, JokeProps } from './Joke';

const JokeComponent = react2angular((props: JokeProps) => <Joke {...props} />, ['joke']);

export { JokeComponent, Joke };
