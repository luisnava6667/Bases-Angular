import { NgModule } from '@angular/core'
import { HeroeComponent } from './heroe/heroe.component'
import { ListadoComponent } from './listado/listado.component'
import { CommonModule } from '@angular/common'
@NgModule({
  declarations: [HeroeComponent, ListadoComponent],
  exports: [ListadoComponent],
  imports: [
    CommonModule // Se importa el CommonModule para poder usar las directivas de Angular
  ]
})
export class HeroesModule {}
