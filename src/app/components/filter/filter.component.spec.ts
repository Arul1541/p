import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Filter, FilterComponent } from './filter.component';
import { FormsModule } from '@angular/forms';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should callwith searchTerm and category value as ""', () => {
    component.applyFilter();
    expect(component.searchTerm).toBe('');
    expect(component.category).toBe('');
  });

  it('should emit filterChange event with value', () => {
    spyOn(component.filterChange, 'emit');
    const filter: Filter = { searchTerm: 'test', category: 'category1' };
    component.searchTerm = filter.searchTerm;
    component.category = filter.category;
    component.applyFilter();
    expect(component.filterChange.emit).toHaveBeenCalledWith(filter);
  });


});