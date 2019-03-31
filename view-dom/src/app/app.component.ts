import { AfterViewChecked, AfterViewInit, Component, ElementRef, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ng-container #vc></ng-container>
    <ng-template #tpl>
      <embedded-view #c></embedded-view>
    </ng-template>
  `
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
  @ViewChildren('c', {read: ElementRef}) childComps: QueryList<ElementRef>;

  @ViewChild('vc', {read: ViewContainerRef}) viewContainer: ViewContainerRef;

  @ViewChild('tpl', {read: TemplateRef}) template: TemplateRef<null>;

  ngAfterViewInit() {
    this.viewContainer.createEmbeddedView(this.template);
  }

  ngAfterViewChecked() {
    console.log('number of child components: ' + this.childComps.length);
  }

}
