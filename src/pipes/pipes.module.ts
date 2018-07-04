import { NgModule } from '@angular/core';
import { CapFirstLetterPipe } from './cap-first-letter/cap-first-letter';
@NgModule({
	declarations: [CapFirstLetterPipe],
	imports: [],
	exports: [CapFirstLetterPipe]
})
export class PipesModule {}
