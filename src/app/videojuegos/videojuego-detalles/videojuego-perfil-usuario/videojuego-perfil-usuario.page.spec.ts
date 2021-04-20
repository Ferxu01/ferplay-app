import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideojuegoPerfilUsuarioPage } from './videojuego-perfil-usuario.page';

describe('VideojuegoPerfilUsuarioPage', () => {
  let component: VideojuegoPerfilUsuarioPage;
  let fixture: ComponentFixture<VideojuegoPerfilUsuarioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VideojuegoPerfilUsuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideojuegoPerfilUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
