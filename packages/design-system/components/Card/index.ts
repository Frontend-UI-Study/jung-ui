import { Card } from './Card';
import { CardContent } from './CardBody';
import { CardDescription } from './CardDescription';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';
import { CardMedia } from './CardMedia';
import { CardSubTitle } from './CardSubTitle';
import { CardTitle } from './CardTitle';

const CompoundCard = Object.assign(Card, {
	Header: CardHeader,
	Content: CardContent,
	Footer: CardFooter,
	Media: CardMedia,
	Title: CardTitle,
	SubTitle: CardSubTitle,
	Description: CardDescription,
});
export { CompoundCard as Card };
