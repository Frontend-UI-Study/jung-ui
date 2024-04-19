import ExampleClientComponent from '@/components/ExampleClientComponent';
import LanguageChanger from '@/components/LanguageChanger';
import TranslationProvider from '@/components/TranslationsProvider';
import { Button } from '@jung/design-system';
import Link from 'next/link';
import initTranslations from '../i18n';

type Params = {
	params: {
		locale: string;
	};
};

const i18nNamespaces = ['home'];

export default async function Home({ params: { locale } }: Params) {
	const { t, resources } = await initTranslations(locale, i18nNamespaces);
	return (
		<div>
			<h1>Home</h1>
			<Link href='/about'>About</Link>

			<h1>{t('header')}</h1>
			<TranslationProvider
				locale={locale}
				resources={resources}
				namespaces={i18nNamespaces}
			>
				<ExampleClientComponent />
				<LanguageChanger />
			</TranslationProvider>
			<Button variant='primary'>Primary Button</Button>
			<Button variant='secondary'>Secondary Button</Button>
			<Button variant='outline' prefix={'🎨'}>
				Outline Button
			</Button>
			<Button rounded>Rounded Button</Button>
			<Button variant='ghost'>Ghost Button</Button>
		</div>
	);
}
