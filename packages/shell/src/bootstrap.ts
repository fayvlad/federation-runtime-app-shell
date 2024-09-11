// Federation Runtime
import { init, loadRemote } from '@module-federation/enhanced/runtime'

// Use the Types of the Remote MFEs in @mf-types
import type { MFE } from '../@mf-types/reactApp/compiled-types/MFE'

// Declare Remote MFEs
const REMOTE_MFES = [
  { name: 'reactApp', entry: 'http://localhost:8001/mf-manifest.json' },
  { name: 'litApp', entry: 'http://localhost:8002/mf-manifest.json' },
  { name: 'angularApp', entry: 'http://localhost:4201/mf-manifest.json' },
]

// Create a new Federation Runtime Instance (Singleton)
init({
  name: 'shell',
  remotes: REMOTE_MFES
});

(async () => {
  // Load Remote MFEs over HTTPS
  const reactMFE = await loadRemote<{ MFE: MFE }>('reactApp/MFE');
  const litMFE = await loadRemote<{ MFE: MFE }>('litApp/MFE');
  const angularMFE = await loadRemote('angularApp/Component');

  if (!reactMFE || !litMFE || !angularMFE) return;

  const mfes: { MFE: MFE }[] = [reactMFE, litMFE];

  // Mount Remote MFEs
  mfes.forEach(({ MFE }) => {
    const rootElement = prepareRoot(MFE.name);
    MFE.bootstrap(rootElement, { message: 'Hello from Shell!' });
  });

  // Run Angular
  // const angularMFE = await loadRemote('angularApp/Component');
  const rootElement = document.createElement('app-root');
  document.body.appendChild(rootElement);
  angularMFE.bootstrap();
})();

// Create a Root Element for the Remote MFE
function prepareRoot(id: string) {
  const root = document.getElementById(id);
  if (!root) {
    const rootElement = document.createElement('div');
    rootElement.id = id;
    document.body.appendChild(rootElement);
  }
  return document.getElementById(id)!;
}

document.querySelector('#root')!.innerHTML = `
<div class="content">
  <h1>App Shell 🐚</h1>
</div>
`;
