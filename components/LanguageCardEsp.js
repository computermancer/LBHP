import LangNavBar from './LangNavBar';
import DropdownCardEsp from './DropdownCardEsp';

export default function LanguageCardEsp() {
  const languages = [
    { code: '/home', name: 'English' },
    { code: '/espanol/inicio', name: 'Español' }
  ];
  const currentLanguage = 'Español';

  return (
    <DropdownCardEsp
      title="Selección de Idioma"
      items={[
        { href: languages[0].code, text: languages[0].name },
        { href: languages[1].code, text: languages[1].name }
      ]}
    />
  );
}
