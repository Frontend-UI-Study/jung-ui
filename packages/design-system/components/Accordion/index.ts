import { Accordion } from './Accordion';
import { AccordionContent } from './AccordionContent';
import { AccordionItem } from './AccordionItem';
import { AccordionPanel } from './AccordionPanel';
import { AccordionTrigger } from './AccordionTrigger';

const CompoundAccordion = Object.assign(Accordion, {
	Item: AccordionItem,
	Trigger: AccordionTrigger,
	Content: AccordionContent,
	Panel: AccordionPanel,
});

export { CompoundAccordion as Accordion };
