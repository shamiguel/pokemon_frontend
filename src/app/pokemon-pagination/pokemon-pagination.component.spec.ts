import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPaginationComponent } from './pokemon-pagination.component';

describe('PokemonPaginationComponent', () => {
  let component: PokemonPaginationComponent;
  let fixture: ComponentFixture<PokemonPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonPaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
