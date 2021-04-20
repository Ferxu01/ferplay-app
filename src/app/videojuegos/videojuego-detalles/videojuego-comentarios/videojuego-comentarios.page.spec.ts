import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideojuegoComentariosPage } from './videojuego-comentarios.page';

describe('VideojuegoComentariosPage', () => {
  let component: VideojuegoComentariosPage;
  let fixture: ComponentFixture<VideojuegoComentariosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VideojuegoComentariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideojuegoComentariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
