import {
  Page,
  Meta,
  Toggle,
  Header,
  Intro,
  Availability,
  GlitchEffect,
} from '../components';

const nightMode = on => {
  const body = document.querySelector('body');
  on ? body.classList.add('night') : body.classList.remove('night');
};

export const Index = () => (
  <Page>
    <Meta />
    <Toggle onToggle={on => nightMode(on)} />
    <Header />
    <Intro />
    <Availability />
    <GlitchEffect />
  </Page>
);

export default Index;
