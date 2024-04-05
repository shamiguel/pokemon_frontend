import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardComponent } from './pokemon-card.component';
import { Pokemon } from '../../shared/pokemon_interface';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardComponent]
    })
    .compileComponents();
    const testData:any = {}
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a pokemon card', ()=>{
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.getElementsByClassName('pokecard').length).toBe(1)
  })

  it('should render a pokemon\'s name', async () => {
    const testData: Pokemon = { name: 'bigachew', url: 'poke.com', dex_entry: 'biga bee' };
    component.monster = testData;
  
    // Trigger change detection
    fixture.detectChanges();
  
    // Wait for asynchronous operations to complete
    await fixture.whenStable();
  
    const compiled = fixture.nativeElement as HTMLElement;
    const dexEntryElement = compiled.querySelector('#dex_entry');
    expect(dexEntryElement).toBeTruthy();
    expect(dexEntryElement?.textContent).toContain('biga bee');
  });
  
});
