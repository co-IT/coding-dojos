import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { VocabsComponent } from './vocabs.component';
import { VocabsContainerComponent } from './vocabs-container/vocabs-container.component';
import { AddVocabComponent } from './add-vocab/add-vocab.component';
import { VocabsListComponent } from './vocabs-list/vocabs-list.component';
import { VocabCardComponent } from './vocab-card/vocab-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot()
  ],
  declarations: [VocabsComponent, VocabsContainerComponent, AddVocabComponent, VocabsListComponent, VocabCardComponent],
  exports: [VocabsContainerComponent]
})
export class VocabsModule { }
