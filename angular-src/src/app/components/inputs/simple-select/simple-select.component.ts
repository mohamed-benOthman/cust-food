import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  Output,
  EventEmitter,
  EmbeddedViewRef,
  ViewContainerRef,
  NgZone,
  ChangeDetectorRef,
} from '@angular/core';
import Popper from 'popper.js';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-simple-select',
  templateUrl: './simple-select.component.html',
  styleUrls: ['./simple-select.component.scss'],
})
export class SimpleSelectComponent implements OnInit {
  @Input() selected: any;
  @Input() labelKey = 'label';
  @Input() idKey = 'id';
  @Input() options: Array<any> = [];
  @Input() optionTpl: TemplateRef<any>;
  @Input() icon: string;
  @Output() selectedChange = new EventEmitter();
  @Output() closed = new EventEmitter();
  @Input() myLabel: string;
  private view: EmbeddedViewRef<any> | null;
  private popperRef: Popper | null;
  private originalOptions: Array<any> = [];

  constructor(
    private vcr: ViewContainerRef,
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  get isOpen() {
    return !!this.popperRef;
  }

  ngOnInit() {
    this.originalOptions = [...this.options];

    if (typeof this.selected === 'string') {
      this.selected = this.options.find(
        (currentOption) => currentOption[this.idKey] === this.selected
      );
    }
  }

  get label() {
    return this.selected ? this.selected[this.labelKey] : this.myLabel;
  }

  /**
   * Open the select dropdown
   * @param dropdownTpl template for the dropdown
   * @param origin anchor element
   */
  open(dropdownTpl: TemplateRef<any>, origin: HTMLElement) {
    if (this.view) {
      return;
    }

    this.view = this.vcr.createEmbeddedView(dropdownTpl);
    const dropdown = this.view.rootNodes[0];

    document.body.appendChild(dropdown);
    dropdown.style.width = `${origin.offsetWidth}px`;

    this.zone.runOutsideAngular(() => {
      this.popperRef = new Popper(origin, dropdown, {
        removeOnDestroy: true,
      });
    });

    this.handleClickOutside();
  }

  /**
   * Close the select dropdown
   */
  close() {
    this.closed.emit();
    this.popperRef?.destroy();
    this.view?.destroy();
    this.view = null;
    this.popperRef = null;
  }

  /**
   * Select an option
   * @param option Option to select
   */
  select(option: any) {
    this.selected = option;
    this.selectedChange.emit(option[this.idKey]);
  }

  /**
   * Check if option is active
   * @param option Option to check
   */
  isActive(option: any) {
    if (!this.selected) {
      return false;
    }
    return option[this.idKey] === this.selected[this.idKey];
  }

  /**
   * Hide dropdown when clicking outside
   */
  private handleClickOutside() {
    fromEvent(document, 'click')
      .pipe(
        filter(({ target }) => {
          const origin = this.popperRef?.reference as HTMLElement;
          return origin.contains(target as HTMLElement) === false;
        }),
        takeUntil(this.closed)
      )
      .subscribe(() => {
        this.close();
        this.cdr.detectChanges();
      });
  }
}
