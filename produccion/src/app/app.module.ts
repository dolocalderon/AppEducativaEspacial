import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaInicioComponent } from './componentes/Home/Inicio/vista-inicio/vista-inicio.component';
import { VistaSobreElProyectoComponent } from './componentes/Home/sobreElProyecto/vista-sobre-el-proyecto/vista-sobre-el-proyecto.component';
import { VistaSistemaSolarComponent } from './componentes/Home/sistemaSolar/vista-sistema-solar/vista-sistema-solar.component';
import { VistaCalendarioComponent } from './componentes/Home/calendario/vista-calendario/vista-calendario.component';
import { VistaChatComponent } from './componentes/Home/chat/vista-chat/vista-chat.component';
import { VistaNoEncontradoComponent } from './componentes/NoEncontrado/vista-no-encontrado/vista-no-encontrado.component';
import { VistaEncontradoComponent } from './componentes/encontrado/vista-encontrado/vista-encontrado.component';
import { VistaFooterComponent } from './componentes/shared/vista-footer/vista-footer.component';
import { AlertaComponent } from './componentes/NoEncontrado/alerta/alerta.component';
import { BotonesAuxComponent } from './componentes/encontrado/botones-aux/botones-aux.component';
import { InformacionComponent } from './componentes/encontrado/informacion/informacion.component';
import { TarjetaDeElementoComponent } from './componentes/shared/tarjeta-de-elemento/tarjeta-de-elemento.component';
import { BuscadorComponent } from './componentes/shared/buscador/buscador.component';
import { VolverComponent } from './componentes/shared/volver/volver.component';
import { HomeComponent } from './paginas/home/home.component';
import { NoEncontradoComponent } from './paginas/no-encontrado/no-encontrado.component';
import { EncontradoComponent } from './paginas/encontrado/encontrado.component';
import { ErrorComponent } from './paginas/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaInicioComponent,
    VistaSobreElProyectoComponent,
    VistaSistemaSolarComponent,
    VistaCalendarioComponent,
    VistaChatComponent,
    VistaNoEncontradoComponent,
    VistaEncontradoComponent,
    VistaFooterComponent,
    AlertaComponent,
    BotonesAuxComponent,
    InformacionComponent,
    TarjetaDeElementoComponent,
    BuscadorComponent,
    VolverComponent,
    HomeComponent,
    NoEncontradoComponent,
    EncontradoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
