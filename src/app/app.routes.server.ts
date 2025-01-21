import { RenderMode, ServerRoute } from '@angular/ssr';
import{ routes } from './app.routes';
import { HeaderComponent } from './componentes/header/header.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }

];
