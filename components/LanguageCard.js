import LangNavBar from './LangNavBar';
import DropdownCard from './DropdownCard';

export default function LanguageCard() {
  const languages = [
    { code: 'home', name: 'English' },
    { code: 'espanol/inicio', name: 'Español' }
  ];
  const currentLanguage = 'English';

  return (
    <DropdownCard
      title="Language Selection"
      items={[
        { href: languages[0].code, text: languages[0].name },
        { href: languages[1].code, text: languages[1].name }
      ]}
    />
  );
}
