import {NgModule} from '@angular/core';
//import {A11yModule} from '@angular/cdk/a11y';
//import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
//import {PortalModule} from '@angular/cdk/portal';
//import {ScrollingModule} from '@angular/cdk/scrolling';
//import {CdkStepperModule} from '@angular/cdk/stepper';
//import {CdkTableModule} from '@angular/cdk/table';
//import {CdkTreeModule} from '@angular/cdk/tree';
//import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  exports: [
    //A11yModule,
    //ClipboardModule,
    //CdkStepperModule,
    //CdkTableModule,
    //CdkTreeModule,
    DragDropModule,
    //OverlayModule,
    //PortalModule,
    //ScrollingModule,
  ]
})
export class DemoMaterialModule {}


/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */