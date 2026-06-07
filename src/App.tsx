import { useRef, useState } from 'react';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';
import { Landing } from './pages/Landing';
import { CommandPalette, type CommandPaletteHandle } from './components/CommandPalette';
import type { PageId } from './types/page';
import { Experience } from './pages/Experience';
import { CommandButton } from './components/CommandButton ';

function App() {
  const [activePage, setActivePage] = useState<PageId | null>(null);
  const commandPaletteRef = useRef<CommandPaletteHandle>(null);

  const handleOpenCommandPalette = () => {
    commandPaletteRef.current?.open();
  };

  const showCommandButton = true;

  if (activePage === null) {
    return (
      <>
        <CommandPalette ref={commandPaletteRef} setActivePage={setActivePage} />
        <Landing onOpenCommandPalette={handleOpenCommandPalette} />
        {showCommandButton && <CommandButton onClick={handleOpenCommandPalette} />}
      </>
    );
  }

  const pages = {
    about: <About setActivePage={setActivePage}/>,
    projects: <Projects setActivePage={setActivePage}/>,
    skills: <Skills setActivePage={setActivePage}/>,
    contact: <Contact setActivePage={setActivePage}/>,
    experience: <Experience setActivePage={setActivePage}/>,
  };

  return (
    <>
      <CommandPalette ref={commandPaletteRef} setActivePage={setActivePage} />
      {pages[activePage]}
      {showCommandButton && <CommandButton onClick={handleOpenCommandPalette} />}
    </>
  );
}

export default App;