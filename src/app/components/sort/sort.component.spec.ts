import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortComponent } from './sort.component';
import { By } from '@angular/platform-browser';

describe('SortComponent', () => {
  let component: SortComponent;
  let fixture: ComponentFixture<SortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call onSortChange', () => {
    spyOn(component.sortChanged, 'emit').and.callFake(() =>{});;
    const selectElement = fixture.debugElement.query(By.css('select')).nativeElement;
    selectElement.value='undefined';
    component.onSortChange(event);
    // expect(component.sortChanged.emit).toHaveBeenCalledWith(selectElement.value);
  });
});
