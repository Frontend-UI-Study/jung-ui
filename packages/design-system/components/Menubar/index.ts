import { Menubar } from './Menubar';
import { MenubarContent } from './MenubarContent';
import { MenubarItem } from './MenubarItem';
import { MenubarMenu } from './MenubarMenu';
import { MenubarSeparator } from './MenubarSeparator';
import { MenubarTrigger } from './MenubarTrigger';

const CompoundMenubar = Object.assign(Menubar, {
	Menu: MenubarMenu,
	Trigger: MenubarTrigger,
	Content: MenubarContent,
	Item: MenubarItem,
	Separator: MenubarSeparator,
});

export { CompoundMenubar as Menubar };
